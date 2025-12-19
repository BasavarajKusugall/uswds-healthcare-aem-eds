/**
 * Table block - data table with responsive design
 * @param {Element} block The table block element
 */
export default async function decorate(block) {
  const table = document.createElement('div');
  table.className = 'table-wrapper';

  // Use existing table or convert from divs
  let tableEl = block.querySelector('table');

  if (!tableEl) {
    // Create table from div structure
    tableEl = document.createElement('table');
    tableEl.className = 'data-table';

    const rows = block.querySelectorAll(':scope > div');
    let thead = null;
    let tbody = null;

    rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll(':scope > div');
      const tr = document.createElement('tr');

      cells.forEach((cell) => {
        const tagName = rowIndex === 0 ? 'th' : 'td';
        const element = document.createElement(tagName);
        element.innerHTML = cell.innerHTML;
        tr.appendChild(element);
      });

      if (rowIndex === 0) {
        thead = document.createElement('thead');
        thead.appendChild(tr);
        tableEl.appendChild(thead);
      } else {
        if (!tbody) {
          tbody = document.createElement('tbody');
          tableEl.appendChild(tbody);
        }
        tbody.appendChild(tr);
      }
    });
  }

  // Add responsive scrolling container
  table.appendChild(tableEl);

  block.textContent = '';
  block.appendChild(table);
}
