export default function loadHome(){
    const restName = document.createElement('div');
    const restOrder = document.createElement('div');

    restName.classList.add('restaurant-name');
    restOrder.classList.add('order-available');
    
    restName.innerHTML = 'PIZZA PARADISE';
    restOrder.innerHTML = 'Ordering now Available!'

    document.getElementById('content').appendChild(restName);
    document.getElementById('content').appendChild(restOrder);

    setTimeout(()=>{
        restName.classList.add('loaded');
    },0)

    setTimeout(()=>{
        restOrder.classList.add('loaded');
    },1000)
};