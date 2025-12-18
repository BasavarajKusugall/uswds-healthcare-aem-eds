/**
 * Dialog block - modal dialog component
 * @param {Element} block The dialog block element
 */
export default async function decorate(block) {
  const dialogContainer = document.createElement('div');
  dialogContainer.className = 'dialog-container';
  
  // Create backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'dialog-backdrop';
  
  // Create dialog
  const dialog = document.createElement('div');
  dialog.className = 'dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  
  // Extract title and content from block
  const rows = block.querySelectorAll(':scope > div');
  
  // Header
  const header = document.createElement('div');
  header.className = 'dialog-header';
  
  if (rows[0]) {
    const title = document.createElement('h2');
    title.className = 'dialog-title';
    title.textContent = rows[0].textContent.trim();
    header.appendChild(title);
  }
  
  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'dialog-close';
  closeBtn.setAttribute('aria-label', 'Close dialog');
  closeBtn.innerHTML = '×';
  header.appendChild(closeBtn);
  
  dialog.appendChild(header);
  
  // Content
  const content = document.createElement('div');
  content.className = 'dialog-content';
  
  for (let i = 1; i < rows.length - 1; i++) {
    content.appendChild(rows[i].cloneNode(true));
  }
  
  dialog.appendChild(content);
  
  // Footer with actions
  if (rows.length > 1) {
    const footer = document.createElement('div');
    footer.className = 'dialog-footer';
    footer.appendChild(rows[rows.length - 1].cloneNode(true));
    dialog.appendChild(footer);
  }
  
  // Close functionality
  const closeDialog = () => {
    dialogContainer.style.display = 'none';
  };
  
  closeBtn.addEventListener('click', closeDialog);
  backdrop.addEventListener('click', closeDialog);
  
  dialogContainer.appendChild(backdrop);
  dialogContainer.appendChild(dialog);
  
  block.textContent = '';
  block.appendChild(dialogContainer);
}
