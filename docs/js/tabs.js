const tabsData = [];

function renderTabs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Skip rendering if container already has content from Drupal
  if (container.children.length > 0) return;
  if (tabsData.length === 0) return;

  const tabsHTML = `
    <div class="tabs-wrapper">
      <div class="tabs-header">
        ${tabsData.map((tab, index) => `
          <button class="tab-button ${index === 0 ? 'active' : ''}" data-tab="${tab.id}">
            ${tab.title}
          </button>
        `).join('')}
      </div>
      <div class="tabs-content-wrapper">
        ${tabsData.map((tab, index) => `
          <div class="tab-content ${index === 0 ? 'active' : ''}" id="${tab.id}">
            ${tab.type === 'accordion' ? `
              <div class="accordion">
                ${tab.sections.map(section => {
                  const members = section.members
                    ? section.members.map(member => 
                        `<div class="accordion-content-item" data-name="${member.name}">${member.position}</div>`
                      ).join('')
                    : '';
                  return `
                    <div class="accordion-item">
                      <div class="accordion-header">
                        <h2 class="accordion-title">${section.title}</h2>
                        <div class="accordion-toggle-icon"></div>
                      </div>
                      <div class="accordion-content">
                        <div class="accordion-inner">
                          <div class="accordion-content-list">${members}</div>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : tab.type === 'sections' ? `
              <div class="sections-container">
                <div class="sections-header">
                  <div class="sections-header-column">Наименование секции</div>
                  <div class="sections-header-column">Председатель</div>
                </div>
                <div class="sections-list">
                  ${tab.sections.map(section => {
                    const chairmanParts = section.chairman.split(', ');
                    const name = chairmanParts[0];
                    const position = chairmanParts.slice(1).join(', ');
                    return `
                    <div class="card">
                      <div class="card-content sections-row">
                        <div class="card-text">${section.title}</div>
                        <div class="card-text"><strong>${name}</strong>, ${position}</div>
                      </div>
                    </div>
                  `}).join('')}
                </div>
              </div>
            ` : tab.sections.map(section => {
              if (section.date) {
                return `
                  <div class="date-card">
                    <div class="date-title">• ${section.date}</div>
                    <div class="date-description">${section.description}</div>
                  </div>
                `;
              } else {
                return `
                  <div class="content-card">
                    <h2 class="content-title">${section.title}</h2>
                    <p class="content-text">${section.content}</p>
                    ${section.tasksSubtitle ? `
                      <p class="content-text content-text-bold">${section.tasksSubtitle}</p>
                      <ul class="content-list">
                        ${section.tasksList.map(task => `<li class="content-list-item">${task}</li>`).join('')}
                      </ul>
                    ` : ''}
                  </div>
                `;
              }
            }).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = tabsHTML;
  initTabsInteractivity(container);
}

function initTabsInteractivity(container) {
  const tabButtons = container.querySelectorAll('.tab-button');
  const tabContents = container.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  const accordions = container.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const content = item.querySelector('.accordion-content');

      item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        if (isActive) {
          item.classList.remove('active');
          content.classList.remove('expanded');
        } else {
          item.classList.add('active');
          content.classList.add('expanded');
        }
      });
    });
  });
}

// Initialize tabs on page load (for Drupal content)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tabs-root');
  if (container && container.querySelector('.tabs-wrapper')) {
    container.querySelectorAll('.accordion-item.active').forEach(item => {
      item.classList.remove('active');
    });
    container.querySelectorAll('.accordion-content.expanded').forEach(content => {
      content.classList.remove('expanded');
    });

    initTabsInteractivity(container);
  }
});

if (typeof module !== 'undefined') module.exports = { renderTabs };
