/**
 * loads and decorates the hero block
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  const heroWrapper = document.createElement('div');
  heroWrapper.className = 'hero-wrapper';

  // Extract content from block
  const picture = block.querySelector('picture');
  const h1 = block.querySelector('h1');

  // Create hero structure
  heroWrapper.innerHTML = `
    <div class="hero-background">
      ${picture ? picture.outerHTML : ''}
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          ${h1 ? h1.outerHTML : '<h1>Healthcare for Those Who Serve</h1>'}
          <p class="hero-description">
            Access comprehensive healthcare services, schedule appointments, and manage your health records — all in one place.
          </p>
          <div class="hero-actions">
            <a href="#" class="button primary">Find a Doctor</a>
            <a href="#" class="button secondary">Schedule Appointment</a>
          </div>
          <div class="quick-actions">
            <a href="#" class="quick-action-card">
              <span class="icon icon-calendar"></span>
              <span class="quick-action-title">Appointments</span>
            </a>
            <a href="#" class="quick-action-card">
              <span class="icon icon-file-text"></span>
              <span class="quick-action-title">Health Records</span>
            </a>
            <a href="#" class="quick-action-card">
              <span class="icon icon-map-pin"></span>
              <span class="quick-action-title">Find Locations</span>
            </a>
            <a href="#" class="quick-action-card">
              <span class="icon icon-pill"></span>
              <span class="quick-action-title">Prescriptions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  block.textContent = '';
  block.appendChild(heroWrapper);
}
