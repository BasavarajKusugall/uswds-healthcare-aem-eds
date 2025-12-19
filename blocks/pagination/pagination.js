/**
 * Pagination block - page navigation
 * @param {Element} block The pagination block element
 */
export default async function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'pagination-nav';
  nav.setAttribute('aria-label', 'Pagination');

  const ul = document.createElement('ul');
  ul.className = 'pagination-list';

  // Create pagination items
  const currentPage = 1;
  const totalPages = 5;

  // Previous button
  const prevLi = document.createElement('li');
  const prevBtn = document.createElement('button');
  prevBtn.className = 'pagination-link pagination-prev';
  prevBtn.textContent = 'Previous';
  prevBtn.disabled = currentPage === 1;
  prevLi.appendChild(prevBtn);
  ul.appendChild(prevLi);

  // Page numbers
  for (let i = 1; i <= totalPages; i += 1) {
    const li = document.createElement('li');
    const link = document.createElement('button');
    link.className = 'pagination-link';
    if (i === currentPage) {
      link.className += ' current';
      link.setAttribute('aria-current', 'page');
    }
    link.textContent = i;
    li.appendChild(link);
    ul.appendChild(li);
  }

  // Next button
  const nextLi = document.createElement('li');
  const nextBtn = document.createElement('button');
  nextBtn.className = 'pagination-link pagination-next';
  nextBtn.textContent = 'Next';
  nextBtn.disabled = currentPage === totalPages;
  nextLi.appendChild(nextBtn);
  ul.appendChild(nextLi);

  nav.appendChild(ul);
  block.textContent = '';
  block.appendChild(nav);
}
