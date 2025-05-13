import location from "../assets/map.png"

const container = document.querySelector('.container');

export function aboutPage(){
    const page = document.createElement('div');
    page.classList.add('about-info');
    page.innerHTML +=
    `<h3>Contact Us </h3>
    At rickroll@elonmush.com
    `;
    const mpp = document.createElement('img');
    mpp.classList.add('location');
    mpp.src = location;
    page.appendChild(mpp);
    container.appendChild(page);
}