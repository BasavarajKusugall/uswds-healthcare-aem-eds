/**
 * Alert block - notification and alert messages
 * @param {Element} block The alert block element
 */
export default async function decorate(block) {
  const alertContainer = document.createElement('div');
  
  // Get alert type from first cell
  const rows = block.querySelectorAll(':scope > div');
  const firstRow = rows[0];
  const cells = firstRow?.querySelectorAll(':scope > div');
  
  const alertType = cells?.[0]?.textContent.toLowerCase().trim() || 'info';
  alertContainer.className = `alert alert-${alertType}`;
  alertContainer.setAttribute('role', 'alert');
  
  // Create icon and content layout
  const innerDiv = document.createElement('div');
  innerDiv.className = 'alert-inner';
  
  const icon = document.createElement('span');
  icon.className = `alert-icon icon-${alertType}`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'alert-content';
  
  // Add content from remaining cells
  rows.forEach((row, idx) => {
    if (idx === 0) return;
    const content = row.cloneNode(true);
    contentDiv.appendChild(content);
  });
  
  innerDiv.appendChild(icon);
  innerDiv.appendChild(contentDiv);
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'alert-close';
  closeBtn.setAttribute('aria-label', 'Close alert');
  closeBtn.innerHTML = '×';
  closeBtn.addEventListener('click', () => {
    alertContainer.style.display = 'none';
  });
  
  innerDiv.appendChild(closeBtn);
  alertContainer.appendChild(innerDiv);
  
  block.textContent = '';
  block.appendChild(alertContainer);
}
