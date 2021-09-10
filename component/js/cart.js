let dilog = document.getElementById('window');
function opened(){
    dilog.classList.add('opened');
    document.body.classList.add('general');
}

function closed(){
    dilog.classList.remove('opened');
    document.body.classList.remove('general');
}



    const bucketContainer = document.getElementById('bucket');
    const counterSelect = document.getElementById('carCount');
    const productContainer = document.getElementById('product');
    const BUCKET_KEY = 'bucket';
    const bucketProducts = JSON.parse(localStorage.getItem(BUCKET_KEY)) || [];
    generateBucket();
    const products = [{
        img: src="assets/img/shop/1.jpg",
        title: 'BOSS Athleisure Soody Mens Hoodie',
        price: 249,
    }]

    let html = ''
    function generateBucket() {
        let bucketHtml = ''
        let total = 0;
        bucketProducts.forEach((item, index) => {
            total += item.price * item.count;
            bucketHtml += `<div class="containerCart">  
                           <img class="sizeImg" src="${item.img}">
                            <div class="titleUnit">
                            <div class="titleContent">${item.title}</div>
                            <div class="unitePrice">Unite Price: ${item.price}$</div>
                            </div>
                            <div class="quantity">
                            <div>Quantity:</div>
                            <span><button class="cartCount" onclick="add(${index}, -1)">-</button>
                             <span class="countTitle">${item.count}</span>
                            <button class="cartCount" onclick="add(${index}, 1)">+</button></span></div>
                            <div class="totalPrice">
                            <div>Price:</div>
                            <div>${item.price * item.count}$</div>
                            </div>
                            </div>
                            <div class="borderLine"><button class="trash" onclick="deleteFromBucket(${index})"><i class="fas fa-trash-alt"></i></button></div>`
                            
        })
        if (bucketHtml === '') {
            bucketHtml = 'Your shopping bag is empty'
        } 
        else {
            bucketHtml += `<div class="totalAll">
                            <div class="priceAll">Total Price: ${total}$</div>
                            <div class="totalAll"><button class="buyAll">BUY</button></div>
                            </div>`
        }
        bucketContainer.innerHTML = bucketHtml;
    }


    function add(carIndex, num) {
        const clothes = bucketProducts[carIndex];
        clothes.count = clothes.count + num;
        if (clothes.count === 0) {
            bucketProducts.splice(carIndex, 1)
        }
        localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
        generateBucket();
    }

    function deleteFromBucket(bucketItemIndex) {
        bucketProducts.splice(bucketItemIndex, 1);
        localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
        generateBucket();
    }

    function addCar(carIndex) {
        const count = parseInt(counterSelect.value) || 1;
        const car = products[carIndex];
        const foundCar = bucketProducts.find(item => item.title === car.title);
        if (foundCar) {
            foundCar.count+=count;
        } else {
            car.count = count
            bucketProducts.push(car);
        }
        generateBucket();
        localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
    }

    productContainer.innerHTML = html;