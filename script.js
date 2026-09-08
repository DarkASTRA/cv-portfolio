const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

const setMenu = (open) => {
	if (!menuButton || !mobileMenu) return;
	menuButton.setAttribute("aria-expanded", String(open));
	mobileMenu.hidden = !open;
};

menuButton?.addEventListener("click", () => {
	setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

const year = document.querySelector(".current-year");
if (year) year.textContent = new Date().getFullYear();
