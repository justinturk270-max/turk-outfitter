// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Trip filters (trips.html)
const filterBar = document.querySelector(".filters");
if (filterBar) {
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filterBar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    const type = btn.dataset.filter;
    document.querySelectorAll("[data-type]").forEach((card) => {
      card.hidden = type !== "all" && card.dataset.type !== type;
    });
  });
}

// Contact form (mock: swap in Formspree/Netlify/etc. by setting the form's action)
const form = document.querySelector("#inquiry-form");
if (form) {
  form.addEventListener("submit", (e) => {
    if (form.getAttribute("action")) return; // real endpoint configured
    e.preventDefault();
    form.querySelector(".form-msg").classList.add("show");
    form.reset();
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
