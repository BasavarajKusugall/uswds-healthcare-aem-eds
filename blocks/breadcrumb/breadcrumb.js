/**
 * Breadcrumb block - navigation breadcrumbs
 * @param {Element} block The breadcrumb block element
 */
export default async function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb-nav';
  nav.setAttribute('aria-label', 'Breadcrumb');

  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-list';

  // Extract breadcrumb items from table
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row, index) => {
    const cells = row.querySelectorAll(':scope > div');
    if (cells.length > 0) {
      const text = cells[0].textContent.trim();
      const link = cells[0].querySelector('a');

      const li = document.createElement('li');
      li.className = 'breadcrumb-item';

      if (link || index < rows.length - 1) {
        const a = document.createElement('a');
        a.href = link?.href || '#';
        a.textContent = text;
        li.appendChild(a);
      } else {
        li.setAttribute('aria-current', 'page');
        li.textContent = text;
      }

      ol.appendChild(li);
    }
  });

  nav.appendChild(ol);
  block.textContent = '';
  block.appendChild(nav);
}
