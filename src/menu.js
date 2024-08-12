import Data from './menu.csv'
import americanaImage from './icons/americana.jpg';
import margheritaImage from './icons/margherita.jpg';
import mushroomImage from './icons/mushroom.jpg';
import pepperoniImage from './icons/pepperoni.jpg';
import vegeterianImage from './icons/vegeterian.jpg';
import meatLoversImage from './icons/meatLovers.jpg';

const imageMap = {
    "Americana": americanaImage,
    "Margherita": margheritaImage,
    "Chicken Mushroom pizza": mushroomImage,
    "Pepperoni": pepperoniImage,
    "Vegeterian": vegeterianImage,
    "Meat Lovers": meatLoversImage,
};

export function loadMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    Data.forEach(item => {
        const container = document.createElement('div');
        const details = document.createElement('div')
        const name = document.createElement('div');
        const price = document.createElement('div');
        const ingredients = document.createElement('div');
        const image = document.createElement('img');

        container.classList.add('item-container');
        
        details.classList.add('details-container');
        name.classList.add('pizza-name');
        price.classList.add('pizza-price');
        ingredients.classList.add('pizza-ingredients');
        image.classList.add('item-image');

        name.innerHTML = item[0];
        price.innerHTML = item[1];
        ingredients.innerHTML = item[2];
        image.src = imageMap[item[0]];

        menu.appendChild(container);
        container.appendChild(details);
        details.appendChild(name);
        details.appendChild(price);
        details.appendChild(ingredients);
        container.appendChild(image);

        setTimeout(()=>{
            container.classList.add('loaded');
        },0)
           
    });

    document.getElementById('content').appendChild(menu);
}   