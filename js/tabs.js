const tabsData = [
  {
    id: 'about',
    title: 'О конференции',
    sections: [
      {
        title: 'О конференции',
        content: 'Ежегодная научно-практическая конференция «Управление объектами недвижимости и комплексное развитие территорий» проводится в Санкт-Петербургском горном университете императрицы Екатерины II, начиная с 2021 года, и является научным мероприятием, направленным на раскрытие творческих способностей студентов и аспирантов; обеспечение преемственности в подготовке кадров; выявление достижений в научно-исследовательской работе молодых учёных; обсуждение ведущих тем и направлений развития в области землеустройства, кадастров, оценки недвижимости, геодезии и градостроительства.'
      },
      {
        title: 'Цель и задачи',
        content: 'Конференция проводится с целью обмена актуальной научно-технической информацией по вопросам землеустройства, кадастров, оценки и управления объектами недвижимости между отечественными и зарубежными специалистами, преподавателями, аспирантами и студентами.',
        tasksSubtitle: 'Задачи конференции:',
        tasksList: [
          'Обсуждение проблем и тенденций в области земельно-имущественных отношений, управления земельными ресурсами и объектами недвижимости, оценки недвижимости, а также геодезических работ при осуществлении кадастровой деятельности.',
          'Развитие интеллектуального творчества студентов, привлечение их к исследовательской, экспериментальной, инновационной деятельности.',
          'Выявление талантливых и одарённых студентов, проявляющих интерес и способности к самостоятельной научно-исследовательской работе.',
          'Совершенствование навыков студентов и аспирантов обобщать, оформлять и излагать результаты своих научных исследований.'
        ]
      }
    ]
  },
  {
    id: 'dates',
    title: 'Важные даты',
    sections: [
      {
        date: 'до 01.11.2024 г.',
        description: 'Прием материалов для опубликования'
      },
      {
        date: 'до 18.10.2024 г.',
        description: 'Подача заявок для участия в работе конференции'
      }
    ]
  },
  {
    id: 'committee',
    title: 'Оргкомитет',
    type: 'accordion',
    sections: [
      {
        title: 'Председатель',
        members: [
          {
            name: 'Иванов И.И.',
            position: 'доктор технических наук, профессор, ректор Санкт-Петербургского горного университета;'
          }
        ]
      },
      {
        title: 'Члены оргкомитета',
        members: [
          { name: 'Петраков Д.Г.', position: 'профессор, проректор по деятельности аспирантуры и докторантуры;' },
          { name: 'Борзенков В.Т.', position: 'генеральный директор Центра ЮНЕСКО;' },
          { name: 'Васильев В.В.', position: 'декан факультета аспирантуры и докторантуры;' },
          { name: 'Деменков П.А.', position: 'доцент, декан строительного факультета;' }
        ]
      }
    ]
  },
  {
    id: 'sections',
    title: 'Секции',
    type: 'sections',
    stats: [
      { number: '>2000', label: 'докладчиков' },
      { number: '>800', label: 'экспертов' },
      { number: '>200', label: 'университетов и компаний' },
      { number: '>50', label: 'стран мира' }
    ],
    sections: [
      {
        title: 'Проблемы и перспективы развития градостроительной и землеустроительной деятельности',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      },
      {
        title: 'Кадастровая и индивидуальная оценка объектов недвижимости',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      },
      {
        title: 'Современные тенденции ведения Единого государственного реестра недвижимости',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      },
      {
        title: 'Маркшейдерско-геодезический мониторинг объектов земной поверхности, попадающих в зону влияния подземных разработок',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      },
      {
        title: 'Геодезическое и фотограмметрическое обеспечение кадастровой деятельности',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      },
      {
        title: 'ГИС и BIM-технологии в системе управления земельными ресурсами и объектами недвижимости',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      },
      {
        title: 'Применение технологий искусственного интеллекта при решении задач землеустройства, кадастров, оценки недвижимости и мониторинга земель.',
        chairman: 'Быкова Е.Н., заведующий кафедрой землеустройства и кадастров Санкт-Петербургского горного университета императрицы Екатерины II'
      }
    ]
  }
];

function renderTabs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

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

  const tabButtons = container.querySelectorAll('.tab-button');
  const tabContents = container.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  const accordions = container.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
    accordion.addEventListener('click', (e) => {
      const item = e.target.closest('.accordion-item');
      if (!item || !accordion.contains(item)) return;

      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      if (isActive) {
        item.classList.remove('active');
        if (content) content.classList.remove('expanded');
      } else {
        item.classList.add('active');
        if (content) content.classList.add('expanded');
      }
    });
  });
}

if (typeof module !== 'undefined') module.exports = { renderTabs };
