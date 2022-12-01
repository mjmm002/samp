let hot = "hotCoffee"
let iced = "icedCoffee"
let food = "foodMenu"
let icedCoffeeList;
let hotCoffeeList;
let foodMenuList;
let cartId = 0;

cartId = sessionStorage.getItem("idValue")

const hotCoffee = [
    {"name": "Caffe Americano", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot1.png"},
    {"name": "Caffe Latte", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot2.png"},
    {"name": "Cappuccino", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot3.png"},
    {"name": "Caramel Machiato", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot4.png"},
    {"name": "Espresso", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot5.png"},
    {"name": "Flat White", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot6.png"},
    {"name": "White Chocolate Mocha", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot7.png"}
]

const icedCoffee = [
    {"name": "Iced Caffe Americano", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced1.png"},
    {"name": "Iced Caffe Latte", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced2.png"},
    {"name": "Iced Cappuccino", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced3.png"},
    {"name": "Iced Caramel Machiato", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced4.png"},
    {"name": "Iced Espresso", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced5.png"},
    {"name": "Iced Flat White", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced6.png"},
    {"name": "Iced White Chocolate Mocha", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced7.png"}
]

const foodMenu = [
    {"name": "Banana Wallnut Loaf", "price":[79.00, 459.00], "size":["Solo", "1 box (6pcs)"], "pic": "food1.png"},
    {"name": "Blueberry Muffin", "price": [59.00, 399.00], "size":["Solo", "1 box (6pcs)"], "pic": "food2.png"},
    {"name": "Chocolate Chip Cookie", "price": [39.00, 219.00], "size":["Solo", "1 box (6pcs)"], "pic": "food3.png"},
    {"name": "Double Chocolate Brownie", "price": [89.00, 499.00], "size":["Solo", "1 box (6pcs)"], "pic": "food4.png"},
    {"name": "Glazed Doughnut", "price": [49.00, 269.00], "size":["Solo", "1 box (6pcs)"], "pic": "food5.png"},
]

const Mocafe = {"menu": [hotCoffeeList, icedCoffeeList, foodMenuList], "list": [hotCoffee, icedCoffee, foodMenu], "x":[hot, iced, food] }

const menuOption = (wew, cof, x) => {
    for (let i in cof) {
        wew = document.querySelector(`.menu-container .${x}`)
        wew.insertAdjacentHTML("beforeend", `
        <div class="col-lg-3 col-md-3 col-6 mb-4 menu-item ${x} first">
        <div class="bg-info border rounded-circle d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#${x}${i}">
          <img src="media/coffee photos/${x}/${cof[i].pic}" alt="">
        </div>
        <div class="text-center">
          <span class="fs-3">${cof[i].name}</span>
        </div>
      </div>

    <!-- Modal -->
    <div class="modal fade" id="${x}${i}" tabindex="-1" aria-labelledby="${x}Label${i}" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${x}Label">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="d-flex align-items-center flex-sm-row flex-column">
                            <div class="image col-sm-5">
                                <img class="coffee-pic" src="media/coffee photos/${x}/${cof[i].pic}" alt="">
                            </div>
                            <div class="col-sm-8 col-12 coffee-details">
                                <div class="h1 text-center text-sm-start coffee-name">${cof[i].name}</div>
                                <span class="d-block mb-3">A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top</span>
                                <span class="col-4">Size option: </span>
                                <input type="radio" class="btn-check btn-size" name="options${i}" id="option${x}${i}" value="${cof[i].price[0]}" autocomplete="off" checked>
                                <label class="btn btn-secondary" for="option${x}${i}">${cof[i].size[0]}</label>
                                <input type="radio" class="btn-check btn-size" name="options${i}" id="${x}${i}${i}" value="${cof[i].price[1]}" autocomplete="off">
                                <label class="btn btn-secondary" for="${x}${i}${i}">${cof[i].size[1]}</label>
                                <div class="d-flex col-10 justify-content-between coffee-priceList">
                                    <span class="coffee-price">${cof[i].price[0].toFixed(2)}</span>
                                    <span class="coffee-size d-none">${cof[i].size[0]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer row">
                    <button type="button" class="btn btn-primary col-12 col-sm-6 btn-add2cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
        `)
    }    
}

for (let i in Mocafe.menu, Mocafe.list, Mocafe.x){
    menuOption(Mocafe.menu[i], Mocafe.list[i], Mocafe.x[i])
}

const sizeButton = document.getElementsByClassName("btn-size")
for (let x = 0; x < sizeButton.length; x++) {
    let button = sizeButton[x]
    console.log(button)
    button.addEventListener("click", function() {
        wew = this.parentNode
        wew1 = wew.getElementsByClassName("coffee-priceList")[0]
        wew2 = wew1.getElementsByClassName("coffee-price")[0]
        wew3 = wew1.getElementsByClassName("coffee-size")[0]
        wew2.textContent = parseInt(this.value).toFixed(2)
        wew3.textContent = this.labels[0].textContent
        // wew2= wew.getElementsByClassName('coffee-priceList')
        // wew3 = wew.getElementsByClassName('coffee-price')
        // wew3.text = this.value
        console.log(wew3.textContent)
    })
}

const addButton = document.getElementsByClassName("btn-add2cart")
for (let x = 0; x < addButton.length; x++){
        let button = addButton[x]
        button.addEventListener("click", function() {
            let cartEntries = JSON.parse(sessionStorage.getItem("allCartEntries"));
            if (cartEntries == null) cartEntries = []
            let wiw1 = this.parentNode.parentNode
            let wiw2 = wiw1.getElementsByClassName("coffee-details")[0]
            let cartName = wiw2.getElementsByClassName("coffee-name")[0].textContent
            let cartPrice = wiw2.getElementsByClassName("coffee-price")[0].textContent
            let cartSize = wiw2.getElementsByClassName("coffee-size")[0].textContent
            let cartPic = wiw1.getElementsByClassName("coffee-pic")[0].src
            cartName = `${cartName} ${cartSize}`
            
            cartId++

            let cartItems = {
                id: cartId,
                name: cartName,
                price: cartPrice,
                pic: cartPic
            }

            sessionStorage.setItem("cartDetails", JSON.stringify(cartItems));
            cartEntries.push(cartItems);
            sessionStorage.setItem("idValue", cartId);
            sessionStorage.setItem("allCartEntries", JSON.stringify(cartEntries));
            console.log(cartEntries)

            setTimeout(() => {
                location.reload();
            }, 100)

            

        })
}

let cartList = sessionStorage.getItem("allCartEntries")
let allCartEntries = JSON.parse(cartList)

for (let i in allCartEntries){
    let cartBody = document.querySelector("#cartBody")
    cartBody.insertAdjacentHTML("beforeend", `
    <div class="wew mb-3" id="${allCartEntries[i].id}">
    <div class="d-flex justify-content-between">
        <div class="d-flex justify-content-start align-items-center">
            <div class="">
                <img src="${allCartEntries[i].pic}">
            </div>
            <div class="">${allCartEntries[i].name}</div>
        </div>
        <div class="">
            <span onclick="removeItem()"><i class="fa-solid fa-xmark"></i></span>
        </div>
    </div>
    <div class="d-flex justify-content-between ms-5 me-2">
        <span>Subtotal</span>
        <span>${parseInt(allCartEntries[i].price).toFixed(2)}</span>
    </div>
    <hr class="mb-3">
</div>
    `)
}



function updateTotal() {
    let total = 0;
    for (let i in allCartEntries){
        total = parseFloat(total) + parseFloat(allCartEntries[i].price)
    }
    let cartTotal = document.querySelector("#cartTotal")
    cartTotal.textContent = total.toFixed(2);
    
}
updateTotal()





function removeItem() {
    //selects the parentNode of the event
    let td = event.target.parentElement.parentElement.parentElement.parentElement;
    console.log(td)
    // to get the id or row
    let cartId = td.id;
    let parent = td.parentElement
    parent.removeChild(td)
    console.log(cartId)
    //to filter the array of objects and update taskEntries2 value
    allCartEntries = allCartEntries.filter((obj) => obj.id != parseInt(cartId))
    //to update all entries in local storage
    sessionStorage.setItem("allCartEntries", JSON.stringify(allCartEntries));
    updateTotal()
    
}



var menuIsotope = $('.menu-container').isotope({itemSelector: '.menu-item', layoutMode: 'fitRows'});
$('#menu-flters li').on('click', function (){
    $("#menu-flters li").removeClass('active');
    $(this).addClass('active');

    menuIsotope.isotope({filter: $(this).data('filter')});
});





