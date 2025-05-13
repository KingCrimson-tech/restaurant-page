import './styles.css';
import { homePage } from "./modules/home";
import { menuPage } from "./modules/menu";
import { aboutPage } from "./modules/about";

const container = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

function clearContainer() {
    container.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clearContainer();
    homePage();
});

menuBtn.addEventListener('click', () => {
    clearContainer();
    menuPage();
});

aboutBtn.addEventListener('click', () => {
    clearContainer();
    aboutPage();
});

// Load home page by default
homePage();