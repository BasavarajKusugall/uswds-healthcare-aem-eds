/**
 * loads and decorates the header
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Create the header structure
  const header = document.createElement('div');
  header.className = 'header-wrapper';

  // Top branding section
  const brandSection = document.createElement('div');
  brandSection.className = 'header-brand';
  brandSection.innerHTML = `
    <div class="container">
      <div class="brand-logo">
        <a href="/" class="logo-link">
          <div class="logo-icon">MHS</div>
          <div class="logo-text">
            <div class="logo-title">Military Health Services</div>
            <div class="logo-subtitle">Department of Defense</div>
          </div>
        </a>
      </div>
      <div class="header-actions">
        <button class="action-btn search-btn" aria-label="Search">
          <span class="icon icon-search"></span>
          <span class="action-label">Search</span>
        </button>
        <button class="action-btn login-btn" aria-label="Login">
          <span class="icon icon-user"></span>
          <span class="action-label">Login</span>
        </button>
        <button class="mobile-menu-btn" aria-label="Menu" aria-expanded="false">
          <span class="hamburger-icon"></span>
        </button>
      </div>
    </div>
  `;

  // Navigation section
  const navSection = document.createElement('nav');
  navSection.className = 'header-nav';
  navSection.setAttribute('aria-label', 'Primary navigation');
  navSection.innerHTML = `
    <div class="container">
      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li class="has-dropdown">
          <button class="nav-dropdown-toggle" aria-expanded="false">
            Health Services
            <span class="icon icon-chevron-down"></span>
          </button>
          <div class="mega-menu">
            <div class="mega-menu-content">
              <div class="mega-menu-section">
                <h3>Primary Services</h3>
                <ul>
                  <li><a href="/primary-care">Primary Care</a></li>
                  <li><a href="/health-services">Specialty Care</a></li>
                  <li><a href="#">Mental Health</a></li>
                  <li><a href="#">Urgent Care</a></li>
                </ul>
              </div>
              <div class="mega-menu-section">
                <h3>Additional Services</h3>
                <ul>
                  <li><a href="#">Pharmacy</a></li>
                  <li><a href="/physical-therapy">Physical Therapy</a></li>
                  <li><a href="#">Dental Care</a></li>
                  <li><a href="#">Vision Care</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="/patient-portal">Patient Portal</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="/benefits">Benefits</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  `;

  header.appendChild(brandSection);
  header.appendChild(navSection);
  block.appendChild(header);

  // Mobile menu functionality
  const mobileMenuBtn = block.querySelector('.mobile-menu-btn');

  mobileMenuBtn.addEventListener('click', () => {
    const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !expanded);
    navSection.classList.toggle('open');
  });

  // Dropdown functionality
  const dropdownToggles = block.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      // Close all other dropdowns
      dropdownToggles.forEach((t) => {
        t.setAttribute('aria-expanded', 'false');
        t.parentElement.classList.remove('active');
      });
      // Toggle current dropdown
      toggle.setAttribute('aria-expanded', !expanded);
      toggle.parentElement.classList.toggle('active');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      dropdownToggles.forEach((t) => {
        t.setAttribute('aria-expanded', 'false');
        t.parentElement.classList.remove('active');
      });
    }
  });
}
