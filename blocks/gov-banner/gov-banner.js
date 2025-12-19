/**
 * loads and decorates the gov-banner block
 * @param {Element} block The gov-banner block element
 */
export default async function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'gov-banner-wrapper';

  wrapper.innerHTML = `
    <div class="gov-banner-content">
      <div class="container">
        <div class="gov-banner-inner">
          <div class="gov-banner-icon">
            <span class="icon icon-flag"></span>
          </div>
          <div class="gov-banner-text">
            <span class="gov-banner-label">An official website of the United States government</span>
            <button class="gov-banner-toggle" aria-expanded="false" aria-controls="gov-banner-info">
              Here's how you know
            </button>
          </div>
        </div>
        <div class="gov-banner-info" id="gov-banner-info" hidden>
          <div class="gov-banner-info-content">
            <div class="gov-info-item">
              <div class="gov-info-icon">
                <span class="icon icon-building"></span>
              </div>
              <div class="gov-info-text">
                <strong>Official websites use .mil or .gov</strong>
                <p>A .mil or .gov website belongs to an official U.S. government organization.</p>
              </div>
            </div>
            <div class="gov-info-item">
              <div class="gov-info-icon">
                <span class="icon icon-lock"></span>
              </div>
              <div class="gov-info-text">
                <strong>Secure websites use HTTPS</strong>
                <p>A lock icon or https:// means you've safely connected to a website. Share sensitive information only on official, secure websites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  block.textContent = '';
  block.appendChild(wrapper);

  // Toggle functionality
  const toggle = block.querySelector('.gov-banner-toggle');
  const info = block.querySelector('.gov-banner-info');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    info.hidden = expanded;
  });
}
