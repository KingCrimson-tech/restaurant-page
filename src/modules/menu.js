import starter from "../assets/starter.jpg";
import mainCourse from "../assets/main-course.jpg";
import dessert from "../assets/dessert.jpg";

const container = document.querySelector('.container');

export function menuPage(){
    const page = document.createElement('div');
    page.classList.add('menu-div')
    const dishes = [
        {
            name: "Starter",
            pic: starter,
            description: "Read the name of the dish so you have the idea of what it is i dont't so this is it."
        },
        {
            name: "Main Course",
            pic: mainCourse,
            description: "This is main course so see what it is if it is mouth watering then so be it i dont't really care."
        },
        {
            name: "Dessert",
            pic: dessert,
            description: "So i wanted to put in an ice cream image but i didnt find any good ones so this is it."
        }
    ];

    container.innerHTML = "";
    dishes.forEach(({name, pic, description}) => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        card.innerHTML += 
        `<h3>${name}</h3>
        <p>Description: ${description}</p>`;
        const img = document.createElement('img');
        img.src = pic;  
        card.appendChild(img);
        container.appendChild(card);
    });
}
