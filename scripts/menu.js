

let products =[{
    name:'Lasagne',
    image: './images//delicous-menu-images/lasagne-menu.png',
    priceCents: '4000',
    category: 4
},{
    name:'Olivas Rellenas',
    image: './images//delicous-menu-images/olivias-menu.png',
    priceCents: '2500',
    category: 4
},{
    name:'Tokusen Wagyu',
    image: './images//delicous-menu-images/wagyu-menu.png',
    priceCents: '3900',
    category: 4
},{
    name:'Opu Fish',
    image: './images//delicous-menu-images/fish-menu.png',
    priceCents: '4900',
    category: 4
},{
    name:'Pizza Italiano',
    image: './images//delicous-menu-images/basilikum-pizza.jpeg',
    priceCents: '2400',
    category: 2
},{
    name:'Bolognese mare',
    image: './images//delicous-menu-images/Bolognese-de-mare.jpeg',
    priceCents: '3300',
    category: 4
},{
    name:'Bolognese',
    image: './images//delicous-menu-images/Bolognese.jpeg',
    priceCents: '3050',
    category: 3
},{
    name:'Butternut',
    image: './images//delicous-menu-images/butter-nut.png',
    priceCents: '2450',
    category: 1
},{
    name:'Cake de Flouers',
    image: './images//delicous-menu-images/cake.jpeg',
    priceCents: '1250',
    category: 5
},{
    name:'Crossaint',
    image: './images//delicous-menu-images/crossaint.jpeg',
    priceCents: '500',
    category: 1
},{
    name:'Fresh Fries',
    image: './images//delicous-menu-images/fries.jpeg',
    priceCents: '470',
    category: 3
},{
    name:'Fresh Froods',
    image: './images//delicous-menu-images/frood.jpeg',
    priceCents: '550',
    category: 1
},{
    name:'Greek Salad',
    image: './images//delicous-menu-images/greek-salad.png',
    priceCents: '840',
    category: 1
},{
    name:'Pizza Hot',
    image: './images//delicous-menu-images/hot-pizza.jpeg',
    priceCents: '1890',
    category: 2
},{
    name:'Ice Cream',
    image: './images//delicous-menu-images/ice-cream.jpeg',
    priceCents: '410',
    category: 5
},{
    name:'Nuggets',
    image: './images//delicous-menu-images/nuggets.jpeg',
    priceCents: '750',
    category: 3
},{
    name:'Pizza Olive',
    image: './images//delicous-menu-images/Olive-pizza.jpeg',
    priceCents: '2250',
    category: 2
},{
    name:'Oreo Cake',
    image: './images//delicous-menu-images/oreo-cake.jpeg',
    priceCents: '1525',
    category: 5
}];



let productHTML = '';

products.forEach((product) => {
    productHTML += `
        <div class="container-food-column item" data-categories="${product.category}">
            <div class="container-food-row">
                <img class="" id="food-image" src="${product.image}">
                <p data-product-price="${product.priceCents}" id="food-name-text">${product.name}<span id="span-price-menu"> $${(product.priceCents / 100).toFixed(2)}</span></p>
            </div>
            <button onclick="addToCart('${product.name}');calculateTime ()" id="buy-food-btn">Add to cart</button>
        </div>
    `;
});

document.querySelector('.product-container-main').innerHTML = productHTML;

let cartQuantity = 0;
let priceTotal = 0;

function addToCart(productName) {
    let selectedProduct = products.find(product => product.name === productName);

    if (selectedProduct) {
        cartQuantity += 1;
        priceTotal += parseInt(selectedProduct.priceCents) / 100;
    }

    
    document.querySelector('.btn-register').textContent = cartQuantity.toString();
    document.querySelector('.btn-register1').innerHTML = `$${priceTotal.toFixed(2)}`;
}



//Category Filter System


function filterItems(category) {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        const categories = item.dataset.categories.split(',');

        if (category === 'all' || categories.includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }); 
}


let TimeTotal = 0;

function calculateTime () {
   
        if (TimeTotal <= 0) {
            TimeTotal += 15;
        }

        if (TimeTotal >=15) {
            TimeTotal += 8;
        }
    
    document.querySelector('.displayDeliveryTime').innerHTML = TimeTotal + 'min';
}



