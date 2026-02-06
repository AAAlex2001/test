const heroCards = [
  {
    title: 'Управление объектами недвижимости и комплексное развитие территорий',
    subtitle: 'IV Всероссийская научно-практическая конференция, посвященная ученому, заслуженному работнику геодезии и картографии, профессору В.И. Павлову',
    backgroundColor: '#B8DFF5'
  },
  {
    image: 'public/test1.png',
    backgroundColor: '#B8DFF5'
  },
  {
    icon: 'public/Icon calendar.svg',
    text: '6-7 февраля 2025',
    backgroundColor: '#FFFFFF'
  },
  {
    icon: 'public/Icon place.svg',
    text: 'Санкт-Петербург',
    backgroundColor: '#FFFFFF'
  }
];

const advertisementCards = [
  {
    title: 'Объявление',
    subtitle: 'Уважаемые участники Конференции! На сайте появилась актуальная программа программа мероприятия. В случае, если вам не пришло приглашение на конференцию (для очных участников), просьба сообщить орг. комитету. Для дистанционных участников ссылка на подключение указана в программе. Перед конференцией мы проведём с вами тестовое подключение.',
    text: 'Успехов и до встречи на мероприятии!',
    backgroundColor: '#FFF1DF'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const heroContainer = document.getElementById('hero');
  if (!heroContainer) return;
  if (heroContainer.children.length > 0) return;
  
  heroCards.forEach((props, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.id = `hero-card-${index}`;
    heroContainer.appendChild(wrapper);
    
    if (typeof renderCard === 'function') {
      renderCard(`#hero-card-${index}`, props);
    }
  });

  const advertisementContainer = document.getElementById('advertisement');
  if (!advertisementContainer) return;
    advertisementCards.forEach((props, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.id = `advertisement-card-${index}`;
    advertisementContainer.appendChild(wrapper);

    if (typeof renderCard === 'function') {
      renderCard(`#advertisement-card-${index}`, props);
    }
  });
});
