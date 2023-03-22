updateTimes = () => { 
    const date = new Date()
    const hour = date.getHours()
    const day = date.getDay()
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const greeting = document.getElementById("greeting");
    const status = document.getElementById("open_status");
    const closeTime = document.getElementById("close_time");
    
    if ( hour >= 1 && hour <= 11) { 
        greeting.innerHTML = "Good Morning"
    } else if (12 <= hour && hour <= 16) { 
        greeting.innerHTML = "Good Day"
    } else if ( 17 <= hour && hour <= 23 || hour == 0 ) {
        greeting.innerHTML = "Good Evening"
    } else{ console.log("oops")}
    
    for (let i = 0; i < daysArray.length; i++ ) { 
        if ( day === i && hour < 18) { 
            status.innerHTML = daysArray[i] + ", Currently Open";
            closeTime.innerHTML = "Till 6pm This Evening"
        } else if(day === i && hour >= 18) { 
            status.innerHTML = daysArray[i] + ", Currently Closed";
            closeTime.innerHTML = "Till 6am Tomorrow"
        }
        if ( day === i && day === 6 || day === i && day === 0) {
            status.innerHTML = daysArray[i] + ", Currently Closed"
            closeTime.innerHTML = "Till 6am Monday"
        }
    }
}
updateTimes();


window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();
//to play slide up and side animations on scroll
function reveal() {
  let slideR = document.querySelectorAll(".slide_r");
  let slideU = document.querySelectorAll(".slide_u");
  for (let i = 0; i < slideR.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideR[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      slideR[i].classList.add("active");
    } else {
      slideR[i].classList.remove("active");
    }
  }
  for (let i = 0; i < slideU.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = slideU[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
          slideU[i].classList.add("active");
      } else {
          slideU[i].classList.remove("active");
      }
  }
 }
function navbarReveal() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".nav").style.background = "rgba(255, 255, 255, 1)";
        document.querySelector('.nav').style.color = "black"
  } else {
    document.querySelector(".nav").style.background = "rgba(255, 255, 255, 0)";
    document.querySelector('.nav').style.color = "white"
  }
}
navbarReveal()
window.addEventListener("scroll", navbarReveal)

//=====product and cart code
//===NOTE: Product objects are stored in 'product.js'
const myObj = { 
    productArray: [],
    cartList: "",
    cartListArray: []
}
function Product(name, type, price, pic) { this.name = name;
    this.type = type;
    this.price = price;
    this.pic = "images/" + pic;
    this.quantity = 1;
    this.totalPrice = price
    myObj.productArray.push(this)
}

toggleCart = () => { 
    const nav = document.getElementById('cart')
     if(nav.style.width == "0%" || nav.style.width == "") { 
        nav.style.width = "100%";
        
    } else { 
        nav.style.width = "0%";
        
    }
    
}
createCartButton = () => { 
    let btn = document.querySelectorAll('.addCart_btn');
    for(let i = 0; i < myObj.productArray.length; i++) { 
        btn[i].addEventListener('click', function() { 
                addToCart(myObj.productArray[i])
            })
    }
    
}

addToCart = (product) => { 
    const notification = document.querySelector('.cart_notification')
    myObj.cartListArray.push(product);
    renderCart();
    
    notification.style.display = "block"
    setTimeout(function () { 
        notification.style.display = "none"
    }, 2500)
    
} 

renderCart = () => { 
    const display = document.querySelector('.cart_list');
    const product = myObj.cartListArray
    display.innerHTML = ''
    let text = ""
    for (let i = 0; i< product.length; i++) { 
        text += `<div class="cart_item"> 
                <div><img class='cartPic' src='${product[i].pic}'><span class="cart_name">${product[i].name}</span>
                </div>
              <div class="cartControlsContainer">
                <button class='add_btn'><i class="material-icons-outlined">add</i></button>
                <p class="quantity">${product[i].quantity}</p>
                <button class='subtract_btn'><i class="material-icons-outlined">remove</i></button>
              </div>
              <span class="cartPrice">₦${product[i].totalPrice} <a href="javascript:void(0)" onclick="removeFromCart(${i})"><span class="material-icons-outlined">close</span></a></span>
            </div>`
    }
    
    display.innerHTML = text;
    createQuantityBtns();
    renderTotal();
}

createQuantityBtns = () => { 
    const subBtn = document.querySelectorAll('.subtract_btn');
    const addBtn = document.querySelectorAll('.add_btn');
    let list = myObj.cartListArray
    for(let i = 0; i < list.length; i++) { 
        addBtn[i].addEventListener('click', function() { 
            changeQuantity(i, list[i].quantity, 1)
        })
        subBtn[i].addEventListener('click', function() { 
            changeQuantity(i, list[i].quantity, -1)
        })
    }
}
changeQuantity = (prodIndex, quant, num) =>  { 
    if (num === -1 && quant === 1) { 
        quant = 1
    } else { 
        quant += num
    }
    
    myObj.cartListArray[prodIndex].quantity = quant;
    myObj.cartListArray[prodIndex].totalPrice= 
    myObj.cartListArray[prodIndex].price * quant;
    renderCart();
}

renderTotal = () => { 
    const display = document.querySelector('.checkOutContainer')
    const cartList = myObj.cartListArray;
    let total = 0;
    let totalUnits = 0
    for(let i = 0; i < cartList.length; i++) { 
        total += cartList[i].totalPrice;
        totalUnits += cartList[i].quantity
    }
    display.innerHTML = `<span class="header-sm">Total: ${cartList.length} items (${totalUnits} units)</span>
          <h4 class="header-md">₦${total}</h4>
          <button class="checkOut_btn">Buy Now</button>`
}

removeFromCart = (index) => { 
    myObj.cartListArray.splice(index, 1)
    renderCart();
}
