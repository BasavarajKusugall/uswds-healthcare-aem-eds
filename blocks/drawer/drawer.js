/**
 * Drawer block - side drawer/off-canvas panel
 * @param {Element} block The drawer block element
 */
export default async function decorate(block) {
  const container = document.createElement('div');
  container.className = 'drawer-container';

  // Create backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';

  // Create drawer
  const drawer = document.createElement('div');
  drawer.className = 'drawer';
  drawer.setAttribute('role', 'navigation');
  drawer.setAttribute('aria-label', 'Drawer menu');

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'drawer-close';
  closeBtn.setAttribute('aria-label', 'Close drawer');
  closeBtn.innerHTML = '×';
  drawer.appendChild(closeBtn);

  // Content
  const content = document.createElement('div');
  content.className = 'drawer-content';

  const rows = block.querySelectorAll(':scope > div');
  rows.forEach((row) => {
    content.appendChild(row.cloneNode(true));
  });

  drawer.appendChild(content);

  // Close functionality
  const closeDrawer = () => {
    container.classList.remove('open');
  };

  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  container.appendChild(backdrop);
  container.appendChild(drawer);

  block.textContent = '';
  block.appendChild(container);
}
