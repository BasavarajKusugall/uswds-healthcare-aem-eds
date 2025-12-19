/**
 * loads and decorates the service-cards block
 * @param {Element} block The service-cards block element
 */
export default async function decorate(block) {
  const services = [
    {
      icon: 'stethoscope',
      title: 'Primary Care',
      description: 'Comprehensive primary care services for service members and their families.',
      link: '/primary-care',
    },
    {
      icon: 'heart',
      title: 'Mental Health',
      description: 'Confidential mental health support and counseling services.',
      link: '#',
    },
    {
      icon: 'brain',
      title: 'Specialty Care',
      description: 'Access specialized medical care from expert providers.',
      link: '/health-services',
    },
    {
      icon: 'pill',
      title: 'Pharmacy Services',
      description: 'Prescription refills, medication management, and home delivery.',
      link: '#',
    },
    {
      icon: 'users',
      title: 'Family Services',
      description: 'Healthcare coverage for dependents and family members.',
      link: '#',
    },
    {
      icon: 'shield',
      title: 'Veteran Care',
      description: 'Transition support and continued care for veterans.',
      link: '#',
    },
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'service-cards-wrapper';

  wrapper.innerHTML = `
    <div class="service-cards-header">
      <h2>Healthcare Services</h2>
      <p>Comprehensive medical care designed to support the unique needs of military service members and their families.</p>
    </div>
    <div class="service-cards-grid">
      ${services.map((service) => `
        <div class="service-card">
          <div class="service-icon">
            <span class="icon icon-${service.icon}"></span>
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href="${service.link}" class="service-link">Learn more →</a>
        </div>
      `).join('')}
    </div>
  `;

  block.textContent = '';
  block.appendChild(wrapper);
}
