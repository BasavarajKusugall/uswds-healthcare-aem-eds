/**
 * Accordion block - collapsible content sections
 * @param {Element} block The accordion block element
 */
export default async function decorate(block) {
  const accordion = document.createElement('div');
  accordion.className = 'accordion';

  // Convert table format to accordion items
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    if (cells.length >= 2) {
      const title = cells[0].textContent.trim();
      const content = cells[1];

      const item = document.createElement('div');
      item.className = 'accordion-item';

      const trigger = document.createElement('button');
      trigger.className = 'accordion-trigger';
      trigger.setAttribute('aria-expanded', 'false');
      trigger.innerHTML = `
        <span>${title}</span>
        <span class="accordion-icon">+</span>
      `;

      const contentDiv = document.createElement('div');
      contentDiv.className = 'accordion-content';
      contentDiv.hidden = true;
      contentDiv.innerHTML = content.innerHTML;

      trigger.addEventListener('click', () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !expanded);
        contentDiv.hidden = expanded;
      });

      item.appendChild(trigger);
      item.appendChild(contentDiv);
      accordion.appendChild(item);
    }
  });

  block.textContent = '';
  block.appendChild(accordion);
}
