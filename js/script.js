const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuGrid = document.getElementById('menuGrid');

const Menu = [
    {
        title: 'Hambúrguer Clássico',
        description: 'Carne suculenta, queijo derretido e pão dourado para uma experiência tradicional.',
        image: 'Hamburgueres/21-burger-on-a-black-background-for-the-menu-black-and-white-burgers-with-meat-chicken-cutlet.webp'
    },
    {
        title: 'Hambúrguer com Batata',
        description: 'Combinação perfeita de hambúrguer e batatas crocantes em um prato saboroso.',
        image: 'Hamburgueres/burger-2612137_640.webp'
    },
    {
        title: 'Hambúrguer Caseiro',
        description: 'Sabor artesanal preparado com ingredientes frescos e uma porção generosa de queijo.',
        image: 'Hamburgueres/depositphotos_88670494-stock-photo-close-up-of-home-made.webp'
    },
    {
        title: 'Combo Americano',
        description: 'Pão macio, hambúrguer de carne bovina e molho cremoso, acompanhado de batatas fritas crocantes.',
        image: 'Hamburgueres/hamburgueres-de-carne-americana-e-rosquinhas-de-chocolate-no-dia-da-independencia_760618-4246.webp'
    },
    {
        title: 'Hambúrguer Explosão',
        description: 'Camadas generosas de queijo e vegetais frescos em um hambúrguer robusto com aroma defumado.',
        image: 'Hamburgueres/pngtree-3d-rendered-burger-with-explosive-presentation-image_3841356.webp'
    },
    {
        title: 'Hambúrguer Flamejante',
        description: 'Carne grelhada, queijo picante e cebola caramelizada com um toque de pimenta defumada.',
        image: 'Hamburgueres/pngtree-delicious-flame-burger-spree-background-image_196826.webp'
    }
];

function toggleHamburgerMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function buildMenuGrid() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    Menu.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'menu-card';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const content = document.createElement('div');
        content.className = 'menu-card-content';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        content.appendChild(title);
        content.appendChild(description);
        card.appendChild(img);
        card.appendChild(content);
        menuGrid.appendChild(card);
    });
}

function createInteractiveButton() {
    const button = document.createElement('button');
    button.id = 'interactiveScrollButton';
    button.type = 'button';
    button.textContent = 'Topo';
    button.style.position = 'fixed';
    button.style.right = '24px';
    button.style.bottom = '24px';
    button.style.padding = '0.9rem 1.2rem';
    button.style.border = 'none';
    button.style.borderRadius = '999px';
    button.style.background = 'rgba(0, 212, 255, 0.95)';
    button.style.color = '#09001b';
    button.style.fontWeight = '700';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.25)';
    button.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
    button.style.zIndex = '9999';
    button.style.backdropFilter = 'blur(8px)';

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);
}

function createThemeToggleButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle-button';
    button.textContent = 'Modo Escuro';

    button.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('theme-dark');
        button.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
    });

    document.body.appendChild(button);
}

function enableSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initSite() {
    if (hamburger) {
        hamburger.addEventListener('click', toggleHamburgerMenu);
    }

    buildMenuGrid();
    createInteractiveButton();
    createThemeToggleButton();
    enableSmoothScroll();
}

document.addEventListener('DOMContentLoaded', initSite);
