const heroCards = [];

const advertisementCards = [];

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
