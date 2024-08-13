import loadMenu from "./menu";
import americanaImage from './icons/americana.jpg';
import margheritaImage from './icons/margherita.jpg';
import mushroomImage from './icons/mushroom.jpg';
import pepperoniImage from './icons/pepperoni.jpg';
import vegeterianImage from './icons/vegeterian.jpg';
import meatLoversImage from './icons/meatLovers.jpg';

const content = document.querySelector('#content');

export default function loadOrder(){
    createForm();
    
}

const imageMap = {
    "Americana": americanaImage,
    "Margherita": margheritaImage,
    "Chicken Mushroom pizza": mushroomImage,
    "Pepperoni": pepperoniImage,
    "Vegeterian": vegeterianImage,
    "Meat Lovers": meatLoversImage,
};

function createForm(){
    const form = document.createElement('form');
    const userName = document.createElement('input');
    const userAddress = document.createElement('input');

    userName.type = 'text'
    userName.placeholder = 'NAME'
    userName.required = true;

    userAddress.type = 'text'
    userAddress.placeholder = 'DELIVERY ADDRESS'
    userAddress.required = true;

    content.appendChild(form);
    form.appendChild(userName);
    form.appendChild(userAddress);

    loadMenu();

    const cartBox = document.createElement('div');
    cartBox.classList.add('cartBox');
    content.appendChild(cartBox);

    const totalPrice = document.createElement('div')
    totalPrice.classList.add('totalPrice');
    content.appendChild(totalPrice)

    cart(cartBox);

    document.querySelector('.menu-container').className = 'order-container';

    const submitContainer = document.createElement('div');
    submitContainer.classList.add('submit-container');
    content.appendChild(submitContainer);

    const submit = document.createElement('button');
    submit.classList.add('submitBtn');
    submit.textContent = 'PLACE ORDER';


    submit.addEventListener('click', function () {
        form.requestSubmit();  // Manually trigger form submission with validation
    });

    submitContainer.appendChild(submit);

}

let total = 0;

function cart(cartBox) {
    const images = document.querySelectorAll('.item-image');
    const cart = [];

    images.forEach(image => {
        image.removeEventListener('click', handleClick);
        image.addEventListener('click', handleClick);

        function handleClick() {
            const pizzaName = image.closest('.item-container').querySelector('.pizza-name').textContent;
            const price = parseFloat(image.closest('.item-container').querySelector('.pizza-price').textContent.replace(/[^0-9.-]+/g, ''));
            
            // Find the item in the cart or add a new one
            let cartItem = cart.find(item => item.name === pizzaName);
            if (cartItem) {
                // If the item is already in the cart, increase the quantity
                cartItem.quantity += 1;
                cartItem.element.querySelector('.counter').textContent = 'X'+ cartItem.quantity;
            } else {
                // If the item is not in the cart, add a new entry
                const img = document.createElement('img');
                img.classList.add('img-cart');
                img.src = imageMap[pizzaName];
                
                // Create a counter element
                const counter = document.createElement('span');
                counter.classList.add('counter');
                counter.textContent = 'X'+ 1;

                // Append the counter to the image element
                const cartItemContainer = document.createElement('div');
                cartItemContainer.classList.add('cart-item-container');
                cartItemContainer.appendChild(img);
                cartItemContainer.appendChild(counter);

                cartBox.appendChild(cartItemContainer);

                cart.push({ name: pizzaName, price: price, quantity: 1, element: cartItemContainer });

                // Add event listener to the cart image for removal
                img.addEventListener('click', function() {
                    // Find the item in the cart array
                    const index = cart.findIndex(item => item.name === pizzaName);
                    if (index !== -1) {
                        const cartItem = cart[index];

                        if (cartItem.quantity > 1) {
                            cartItem.quantity -= 1;
                            cartItem.element.querySelector('.counter').textContent = 'X'+ cartItem.quantity;
                        } else {

                            cart.splice(index, 1);
                            cartBox.removeChild(cartItemContainer);
                        }

                        total -= price;
                        document.querySelector('.totalPrice').innerHTML = `TOTAL: ${total}$`
                    }
                });
            }
 
            total += price;
            document.querySelector('.totalPrice').innerHTML = `TOTAL: ${total}$`
        }
    });

}