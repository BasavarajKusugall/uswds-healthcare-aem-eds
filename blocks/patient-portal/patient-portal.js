/**
 * loads and decorates the patient-portal block
 * @param {Element} block The patient-portal block element
 */
export default async function decorate(block) {
  const features = [
    {
      icon: 'calendar',
      title: 'Schedule Appointment',
      description: 'Book or manage upcoming appointments',
    },
    {
      icon: 'file-text',
      title: 'Medical Records',
      description: 'View and download your health records',
    },
    {
      icon: 'message-square',
      title: 'Secure Messaging',
      description: 'Contact your healthcare provider',
    },
    {
      icon: 'pill',
      title: 'Prescriptions',
      description: 'Refill and track medications',
    },
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'patient-portal-wrapper';

  wrapper.innerHTML = `
    <div class="patient-portal-header">
      <h2>Access Your Patient Portal</h2>
      <p>Manage your healthcare online with 24/7 access to your medical records, appointments, and secure messaging.</p>
    </div>
    <div class="patient-portal-features">
      ${features.map((feature) => `
        <div class="portal-feature">
          <div class="feature-icon">
            <span class="icon icon-${feature.icon}"></span>
          </div>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      `).join('')}
    </div>
    <div class="patient-portal-cta">
      <a href="/patient-portal" class="button primary">Access Patient Portal</a>
    </div>
  `;

  block.textContent = '';
  block.appendChild(wrapper);
}
