/**
 * Card block - reusable card component
 * @param {Element} block The card block element
 */
export default async function decorate(block) {
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'card';

  // Convert block content to card structure
  const rows = block.querySelectorAll(':scope > div');

  // First row: image
  let imageDiv = null;
  if (rows[0]?.querySelector('img')) {
    imageDiv = document.createElement('div');
    imageDiv.className = 'card-image';
    const img = rows[0].querySelector('img');
    if (img) {
      imageDiv.appendChild(img.cloneNode(true));
    }
    cardWrapper.appendChild(imageDiv);
  }

  // Content section
  const contentDiv = document.createElement('div');
  contentDiv.className = 'card-content';

  // Extract title, description, etc.
  const startIdx = imageDiv ? 1 : 0;
  for (let i = startIdx; i < rows.length; i += 1) {
    const row = rows[i];
    const content = row.cloneNode(true);
    contentDiv.appendChild(content);
  }

  cardWrapper.appendChild(contentDiv);

  block.textContent = '';
  block.appendChild(cardWrapper);
}
