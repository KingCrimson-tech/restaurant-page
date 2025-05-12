import OdinLogo from "../assets/home.jpeg";

const container = document.querySelector('.container');

export function homePage(){
    const page = document.createElement('div');
    page.classList.add('homeIntro');
    page.innerHTML += 
    `<p>
        Welcome to Odin Restaurant made to practice Webpack.
        Webpack is Javascript bundler and is very helpful for maintaining multiple modules and scripts.
    </p>`;
    const logo = document.createElement('img');
    logo.setAttribute("id", "odin");
    logo.src = OdinLogo;
    page.appendChild(logo);
    container.appendChild(page);
}