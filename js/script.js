const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

function toggleHamburgerMenu() {
  if (!hamburger || !navMenu) return;
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function createInteractiveButton() {
  const button = document.createElement("button");
  button.id = "interactiveScrollButton";
  button.type = "button";
  button.textContent = "Topo";
  button.style.position = "fixed";
  button.style.right = "24px";
  button.style.bottom = "24px";
  button.style.padding = "0.9rem 1.2rem";
  button.style.border = "none";
  button.style.borderRadius = "999px";
  button.style.background = "rgba(0, 212, 255, 0.95)";
  button.style.color = "#09001b";
  button.style.fontWeight = "700";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 15px 35px rgba(0, 212, 255, 0.25)";
  button.style.transition = "transform 0.2s ease, opacity 0.2s ease";
  button.style.zIndex = "9999";
  button.style.backdropFilter = "blur(8px)";

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(button);
}

function createThemeToggleButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "theme-toggle-button";
  if(localStorage.getItem('isDark') == 'true'){
    document.body.classList.add('theme-dark')
  }
  button.innerHTML = localStorage.getItem('isDark') == 'true'
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Moon"><path d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"/><path d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Sun"><path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"/><circle cx="12" cy="12" r="4"/></svg>';
  navMenu.appendChild(button);
  if (window.innerWidth < 600) {
    document.getElementById("navbar").appendChild(button);
  }
  
  button.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem("isDark", isDark)
    button.innerHTML = isDark
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Moon"><path d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"/><path d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Sun"><path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"/><circle cx="12" cy="12" r="4"/></svg>';
      
  });
}

function enableSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initSite() {
  if (hamburger) {
    hamburger.addEventListener("click", toggleHamburgerMenu);
  }

  createInteractiveButton();
  createThemeToggleButton();
  enableSmoothScroll();
}

document.addEventListener("DOMContentLoaded", initSite);
