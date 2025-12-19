/**
 * Input Group block - grouped input with icon/addon
 * @param {Element} block The input group block element
 */
export default async function decorate(block) {
  const group = document.createElement('div');
  group.className = 'input-group';

  const rows = block.querySelectorAll(':scope > div');
  const cells = rows[0]?.querySelectorAll(':scope > div');

  if (cells?.length > 0) {
    const label = cells[0]?.textContent.trim();
    const type = cells[1]?.textContent.toLowerCase() || 'text';
    const addon = cells[2]?.textContent.trim();

    if (label) {
      const labelEl = document.createElement('label');
      labelEl.className = 'input-group-label';
      labelEl.textContent = label;
      group.appendChild(labelEl);
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'input-group-wrapper';

    if (addon && type !== 'checkbox' && type !== 'radio') {
      const prefix = document.createElement('span');
      prefix.className = 'input-group-addon prefix';
      prefix.textContent = addon;
      wrapper.appendChild(prefix);
    }

    const input = document.createElement('input');
    input.type = type || 'text';
    input.className = 'input-group-input';
    wrapper.appendChild(input);

    if (addon && (type === 'checkbox' || type === 'radio')) {
      const suffix = document.createElement('span');
      suffix.className = 'input-group-addon suffix';
      suffix.textContent = addon;
      wrapper.appendChild(suffix);
    }

    group.appendChild(wrapper);
  }

  block.textContent = '';
  block.appendChild(group);
}
