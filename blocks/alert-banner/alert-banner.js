/**
 * loads and decorates the alert-banner block
 * @param {Element} block The alert-banner block element
 */
export default async function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'alert-banner-wrapper';
  
  wrapper.innerHTML = `
    <div class="alert-banner-content">
      <div class="container">
        <div class="alert-banner-inner">
          <div class="alert-banner-icon">
            <span class="icon icon-info"></span>
          </div>
          <div class="alert-banner-text">
            <strong>Important Update:</strong> New COVID-19 vaccination clinics now available. Schedule your appointment today.
          </div>
          <button class="alert-banner-close" aria-label="Close alert">
            <span class="icon icon-x"></span>
          </button>
        </div>
      </div>
    </div>
  `;
  
  block.textContent = '';
  block.appendChild(wrapper);
  
  // Close functionality
  const closeBtn = block.querySelector('.alert-banner-close');
  closeBtn.addEventListener('click', () => {
    block.style.display = 'none';
  });
}
