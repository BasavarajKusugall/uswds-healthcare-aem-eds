/**
 * loads and decorates the urgent-care block
 * @param {Element} block The urgent-care block element
 */
export default async function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'urgent-care-wrapper';

  wrapper.innerHTML = `
    <div class="urgent-care-header">
      <div class="urgent-care-icon">
        <span class="icon icon-clock"></span>
      </div>
      <h2>Urgent Care</h2>
    </div>
    <div class="urgent-care-content">
      <div class="urgent-care-info">
        <h3>Need Immediate Care?</h3>
        <p>For non-life-threatening conditions that require prompt attention, visit one of our urgent care facilities. No appointment needed.</p>
        <div class="urgent-care-actions">
          <a href="#" class="button primary">
            <span class="icon icon-map-pin"></span>
            Find Urgent Care
          </a>
          <a href="#" class="button secondary">
            <span class="icon icon-phone"></span>
            Call Nurse Line
          </a>
        </div>
        <div class="urgent-care-emergency">
          <strong>For emergencies:</strong> Call 911 or go to the nearest emergency room
        </div>
      </div>
    </div>
  `;

  block.textContent = '';
  block.appendChild(wrapper);
}
