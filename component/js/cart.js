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
    const dropContainer = document.getElementById('drop');
    const counterSelect = document.getElementById('carCount');
    const productContainer = document.getElementById('product');
    const BUCKET_KEY = 'bucket';
    const bucketProducts = JSON.parse(localStorage.getItem(BUCKET_KEY)) || [];

    generateBucket();
    const products = [{
        img: src="assets/img/shop/1.jpg",
        title: 'BOSS Athleisure Soody Men Hoodie',
        price: 249,
    },
    {
        img: src="assets/img/shop/31.jpg",
        title: 'BOSS Titanium Run K Mens Trainers',
        price: 199,
    }
]
    let html = ''
    function generateBucket() {
        let bucketHtml = ''
        let dropHtml = ''
        let total = 0;
        bucketProducts.forEach((item, index) => {
            total += item.price * item.count;
            bucketHtml += `<div class="containerCart">  
                           <img class="sizeImg" src="${item.img}">
                            <div class="titleUnit">
                            <div class="titleContent">${item.title}</div>
                            <div class="wrapperSize">
                            <select class="selectSize">
                            <option value="1" my-lang="select">Select Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            </select>
                            <div class="unitePrice">Unite Price: ${item.price}$</div>
                            </div>
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
        dropHtml+=`<div>${bucketProducts.length}</div>` 
        dropContainer.innerHTML = dropHtml;
        bucketContainer.innerHTML = bucketHtml;
    }
    function add(clothesIndex, num) {
        const clothes = bucketProducts[clothesIndex];
        clothes.count = clothes.count + num;
        if (clothes.count === 0) {
            bucketProducts.splice(clothesIndex, 1)
        }
        localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
        generateBucket();
    }
    function deleteFromBucket(bucketItemIndex) {
        document.getElementById('drop').style.display = 'none';
        bucketProducts.splice(bucketItemIndex, 1);
        localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
        generateBucket();
    }
    function addClothes(clothesIndex) {
        const count = parseInt(counterSelect.value) || 1;
        const wear = products[clothesIndex];
        const foundClothes = bucketProducts.find(item => item.title === wear.title);
        if (foundClothes) {
            foundClothes.count+=count;
        } else {
            wear.count = count
            bucketProducts.push(wear);
            document.getElementById('drop').style.display = 'flex';
        }
        generateBucket();
        localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketProducts))
    }
    productContainer.innerHTML = html;
