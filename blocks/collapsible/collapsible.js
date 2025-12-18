/**
 * Collapsible block - expandable content sections
 * @param {Element} block The collapsible block element
 */
export default async function decorate(block) {
  const collapsibles = document.createElement('div');
  collapsibles.className = 'collapsibles';
  
  const rows = block.querySelectorAll(':scope > div');
  
  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    if (cells.length >= 2) {
      const title = cells[0].textContent.trim();
      const content = cells[1];
      
      const item = document.createElement('div');
      item.className = 'collapsible-item';
      
      const trigger = document.createElement('button');
      trigger.className = 'collapsible-trigger';
      trigger.setAttribute('aria-expanded', 'false');
      trigger.innerHTML = `
        <span class="collapsible-title">${title}</span>
        <span class="collapsible-icon">+</span>
      `;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'collapsible-content';
      contentDiv.hidden = true;
      contentDiv.innerHTML = content.innerHTML;
      
      trigger.addEventListener('click', () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !expanded);
        contentDiv.hidden = expanded;
      });
      
      item.appendChild(trigger);
      item.appendChild(contentDiv);
      collapsibles.appendChild(item);
    }
  });
  
  block.textContent = '';
  block.appendChild(collapsibles);
}
