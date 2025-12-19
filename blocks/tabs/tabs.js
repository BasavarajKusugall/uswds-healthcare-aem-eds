/**
 * Tabs block - tabbed content interface
 * @param {Element} block The tabs block element
 */
export default async function decorate(block) {
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabs';

  // Extract tab triggers and content from table format
  const rows = block.querySelectorAll(':scope > div');
  const tabs = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    if (cells.length >= 2) {
      tabs.push({
        label: cells[0].textContent.trim(),
        content: cells[1].innerHTML,
      });
    }
  });

  // Create tab list
  const tabList = document.createElement('div');
  tabList.className = 'tabs-list';
  tabList.setAttribute('role', 'tablist');

  // Create tab content areas
  const contentContainer = document.createElement('div');
  contentContainer.className = 'tabs-content';

  // Tab selection function
  function selectTab(index) {
    const triggers = tabList.querySelectorAll('.tabs-trigger');
    const panels = contentContainer.querySelectorAll('.tabs-panel');

    triggers.forEach((t, i) => {
      t.setAttribute('aria-selected', i === index);
    });

    panels.forEach((p, i) => {
      p.hidden = i !== index;
    });
  }

  tabs.forEach((tab, index) => {
    const tabButton = document.createElement('button');
    tabButton.className = 'tabs-trigger';
    tabButton.setAttribute('role', 'tab');
    tabButton.setAttribute('aria-selected', index === 0);
    tabButton.setAttribute('aria-controls', `tab-content-${index}`);
    tabButton.setAttribute('id', `tab-trigger-${index}`);
    tabButton.textContent = tab.label;
    tabButton.addEventListener('click', () => selectTab(index));
    tabList.appendChild(tabButton);
  });

  tabs.forEach((tab, index) => {
    const content = document.createElement('div');
    content.className = 'tabs-panel';
    content.setAttribute('role', 'tabpanel');
    content.setAttribute('id', `tab-content-${index}`);
    content.setAttribute('aria-labelledby', `tab-trigger-${index}`);
    content.hidden = index !== 0;
    content.innerHTML = tab.content;
    contentContainer.appendChild(content);
  });

  // Keyboard navigation
  tabList.addEventListener('keydown', (e) => {
    const triggers = Array.from(tabList.querySelectorAll('.tabs-trigger'));
    const current = triggers.indexOf(document.activeElement);

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      selectTab((current + 1) % triggers.length);
      triggers[(current + 1) % triggers.length].focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      selectTab((current - 1 + triggers.length) % triggers.length);
      triggers[(current - 1 + triggers.length) % triggers.length].focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      selectTab(0);
      triggers[0].focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      selectTab(triggers.length - 1);
      triggers[triggers.length - 1].focus();
    }
  });

  tabsContainer.appendChild(tabList);
  tabsContainer.appendChild(contentContainer);

  block.textContent = '';
  block.appendChild(tabsContainer);
}
