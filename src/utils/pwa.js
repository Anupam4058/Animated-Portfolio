// PWA utility functions for service worker registration and management

class PWA {
  constructor() {
    this.registration = null;
    this.isSupported = 'serviceWorker' in navigator;
    this.isOnline = navigator.onLine;
    
    this.init();
  }

  async init() {
    if (!this.isSupported) {
      console.log('PWA: Service Worker not supported');
      return;
    }

    // Register service worker
    await this.registerServiceWorker();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Check for updates
    this.checkForUpdates();
  }

  async registerServiceWorker() {
    try {
      this.registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('PWA: Service Worker registered successfully', this.registration);

      // Handle updates
      this.registration.addEventListener('updatefound', () => {
        console.log('PWA: New service worker found');
        this.handleUpdate();
      });

      return this.registration;
    } catch (error) {
      console.error('PWA: Service Worker registration failed', error);
      throw error;
    }
  }

  setupEventListeners() {
    // Online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.handleOnline();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.handleOffline();
    });

    // Service worker messages
    navigator.serviceWorker.addEventListener('message', (event) => {
      this.handleServiceWorkerMessage(event);
    });

    // Before unload - save any pending data
    window.addEventListener('beforeunload', () => {
      this.handleBeforeUnload();
    });
  }

  handleUpdate() {
    const newWorker = this.registration.installing;
    
    if (newWorker) {
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New content is available
          this.showUpdateNotification();
        }
      });
    }
  }

  showUpdateNotification() {
    // Create update notification
    const notification = document.createElement('div');
    notification.className = 'pwa-update-notification';
    notification.innerHTML = `
      <div class="update-content">
        <div class="update-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div class="update-text">
          <h4>New Update Available</h4>
          <p>Refresh to get the latest version</p>
        </div>
        <div class="update-actions">
          <button class="update-btn" onclick="window.location.reload()">Update</button>
          <button class="dismiss-btn" onclick="this.parentElement.parentElement.parentElement.remove()">Later</button>
        </div>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 16px;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    `;

    document.body.appendChild(notification);

    // Auto remove after 10 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 10000);
  }

  handleOnline() {
    console.log('PWA: Back online');
    
    // Sync any offline data
    this.syncOfflineData();
    
    // Show online notification
    this.showStatusNotification('Back online', 'success');
  }

  handleOffline() {
    console.log('PWA: Gone offline');
    
    // Show offline notification
    this.showStatusNotification('You are offline', 'warning');
  }

  showStatusNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `pwa-status-notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 3000);
  }

  handleServiceWorkerMessage(event) {
    console.log('PWA: Message from service worker', event.data);
    
    switch (event.data.type) {
      case 'CACHE_UPDATED':
        console.log('PWA: Cache updated');
        break;
      case 'OFFLINE_FORM_SUBMITTED':
        console.log('PWA: Offline form submitted');
        break;
      default:
        console.log('PWA: Unknown message type', event.data.type);
    }
  }

  handleBeforeUnload() {
    // Save any pending data before page unload
    this.savePendingData();
  }

  async checkForUpdates() {
    if (!this.registration) return;

    try {
      await this.registration.update();
    } catch (error) {
      console.error('PWA: Failed to check for updates', error);
    }
  }

  async syncOfflineData() {
    // Sync any offline form submissions
    if (this.registration && this.registration.sync) {
      try {
        await this.registration.sync.register('contact-form');
      } catch (error) {
        console.error('PWA: Failed to register background sync', error);
      }
    }
  }

  savePendingData() {
    // Save any pending form data to IndexedDB
    const pendingForms = document.querySelectorAll('form[data-pending]');
    pendingForms.forEach(form => {
      const formData = new FormData(form);
      this.saveOfflineForm(formData);
    });
  }

  async saveOfflineForm(formData) {
    try {
      const db = await this.openIndexedDB();
      const transaction = db.transaction(['offlineForms'], 'readwrite');
      const store = transaction.objectStore('offlineForms');
      
      const formObject = {
        data: Object.fromEntries(formData),
        timestamp: Date.now(),
        url: window.location.href
      };
      
      await store.add(formObject);
      console.log('PWA: Form data saved offline');
    } catch (error) {
      console.error('PWA: Failed to save offline form', error);
    }
  }

  openIndexedDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('PortfolioDB', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('offlineForms')) {
          db.createObjectStore('offlineForms', { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  // Public methods
  async unregister() {
    if (this.registration) {
      await this.registration.unregister();
      console.log('PWA: Service Worker unregistered');
    }
  }

  getRegistration() {
    return this.registration;
  }

  isServiceWorkerSupported() {
    return this.isSupported;
  }

  isOnlineStatus() {
    return this.isOnline;
  }
}

// Create global PWA instance
const pwa = new PWA();

// Export for use in components
export default pwa;

// Export individual methods for convenience
export const {
  unregister,
  getRegistration,
  isServiceWorkerSupported,
  isOnlineStatus
} = pwa;
