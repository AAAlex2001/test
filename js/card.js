function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCard(selector, props) {
  const root = document.querySelector(selector);
  if (!root) return;
  
  const { title, subtitle, backgroundColor = '#B8DFF5', image, icon, text } = props;
  
  const imageHtml = image ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(title || '')}" class="card-image">` : '';
  
  const iconHtml = icon ? `<img src="${escapeHtml(icon)}" alt="icon" class="card-icon">` : '';
  
  const contentHtml = (title || subtitle || text) ? `
    <div class="card-content">
      ${iconHtml}
      ${title ? `<h2 class="card-title">${escapeHtml(title)}</h2>` : ''}
      ${subtitle ? `<span class="card-subtitle">${escapeHtml(subtitle)}</span>` : ''}
      ${text ? `<span class="card-text">${escapeHtml(text)}</span>` : ''}
    </div>
  ` : '';
  
  root.innerHTML = `
    <div class="card" style="background-color: ${backgroundColor}">
      ${imageHtml}
      ${contentHtml}
    </div>
  `;
}

window.renderCard = renderCard;
if (typeof module !== 'undefined') module.exports = { renderCard };
