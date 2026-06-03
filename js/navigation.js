/* ==========================================================================
   VÉRTICE EHS - CAPACITACIÓN INTEGRAL
   ROUTING, VIEWS & KEYBOARD NAVIGATION (navigation.js)
   ========================================================================== */

const navigation = {
  activeView: 'dashboard',
  sidebarCollapsed: false,

  init() {
    // 1. Sidebar toggle
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        sidebar.classList.toggle('collapsed', this.sidebarCollapsed);
        localStorage.setItem('ehs_sidebar_collapsed', this.sidebarCollapsed);
      });

      // Restore preference
      const savedCollapsed = localStorage.getItem('ehs_sidebar_collapsed') === 'true';
      if (savedCollapsed) {
        this.sidebarCollapsed = true;
        sidebar.classList.add('collapsed');
      }
    }

    // 2. Hash Routing
    window.addEventListener('hashchange', () => this.handleRouting());
    
    // Initial route load
    this.handleRouting();

    // 3. Modals and Escape Listeners
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        // Open shortcuts help modal
        this.openHelpModal();
      }
    });

    // Close modal on clicking overlay background
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.closeModal(overlay.id);
        }
      });
    });
  },

  // Handles hiding/showing views based on window.location.hash
  handleRouting() {
    let hash = window.location.hash.substring(1) || 'dashboard';
    
    // Support nested sub-hashes if needed, split by slash
    const parts = hash.split('/');
    const viewName = parts[0];

    const validViews = ['dashboard', 'participants', 'exam', 'reports', 'docs'];
    if (!validViews.includes(viewName)) {
      hash = 'dashboard';
    }

    this.activeView = viewName;
    this.showView(this.activeView);

    // Update active state in sidebar links
    document.querySelectorAll('.menu-item').forEach(item => {
      const link = item.querySelector('a');
      if (link && link.getAttribute('href') === '#' + this.activeView) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update breadcrumbs indicator
    const bcActive = document.getElementById('breadcrumb-active');
    if (bcActive) {
      const labelMap = {
        'dashboard': 'Dashboard Principal',
        'participants': 'Gestión de Participantes',
        'exam': 'Panel Facilitador Examen',
        'reports': 'Reportes y Estadísticas',
        'docs': 'Documentación Técnica'
      };
      bcActive.textContent = labelMap[this.activeView] || 'Inicio';
    }

    // Sync state on navigation tab change
    if (window.participantManager) {
      window.participantManager.syncWithExamDatabase();
    }
    if (window.app && typeof window.app.render === 'function') {
      window.app.render();
    }
  },

  // Hide all view screens, show specified one
  showView(viewName) {
    document.querySelectorAll('.view-screen').forEach(screen => {
      if (screen.id === 'view-' + viewName) {
        screen.classList.remove('hidden');
        screen.classList.add('anim-fade-up');
      } else {
        screen.classList.add('hidden');
        screen.classList.remove('anim-fade-up');
      }
    });
  },

  // Generic modal controllers
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock body scroll
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scroll
    }
  },

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  },

  openHelpModal() {
    // If a help modal doesn't exist in DOM, we let app.js trigger it or build it dynamically
    this.openModal('modal-help');
  }
};
