const accordionData = [
    {
        title: "Председатель",
        subtitle: "Subtitle 1",
        content: "Content for section 1."
    },
    {
        title: "Члены оргкомитета",
        subtitle: [
            "Петраков Д.Г.",
            "Борзенков В.Т.",
            "Васильев В.В.",
            "Деменков П.А.",
        ],
        content: [
            "профессор, проректор по деятельности аспирантуры и докторантуры;",
            "генеральный директор Центра ЮНЕСКО;",
            "декан факультета аспирантуры и докторантуры;",
            "доцент, декан строительного факультета;",
        ]
    },
]

function renderAccordion(selector) {
    const root = document.querySelector(selector);
    if (!root) return;

    const accordionHTML = accordionData.map((item, index) => {
        
        let contentHTML = '';
        if (Array.isArray(item.content) && Array.isArray(item.subtitle)) {
            const members = item.subtitle.map((name, i) => 
                `<div class="accordion-content-item" data-name="${name}">${item.content[i]}</div>`
            ).join('');
            contentHTML = `<div class="accordion-content-list">${members}</div>`;
        } else {
            contentHTML = `<div class="accordion-content-text">${item.content}</div>`;
        }
        
        return `
            <div class="accordion-item">
                <div class="accordion-header">
                    <h2 class="accordion-title">${item.title}</h2>
                    <div class="accordion-toggle-icon"></div>
                </div>
                <div class="accordion-content">
                    ${contentHTML}
                </div>
            </div>
        `;
    }).join('');
    root.innerHTML = `<div class="accordion">${accordionHTML}</div>`;
    const items = root.querySelectorAll('.accordion-item');
    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            items.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').classList.remove('expanded');
            });
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.accordion-content').classList.add('expanded');
            }
        });
    });
}