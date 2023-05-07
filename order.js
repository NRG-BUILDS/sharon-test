

viewOrderArray = () => {
    const display = document.querySelector('.cart_container');
    const priceDisplay = document.getElementById('totalPrice')
    const orderArray = JSON.parse(sessionStorage.getItem('orderArray'));
    let text = ''
    let price = 0
    for (i = 0; i < orderArray.length; i++) { 
        text += `<div class="product_card">
                        <div>${orderArray[i].name}</div>
                        <div>${orderArray[i].quantity}x</div>
                        <div>₦${orderArray[i].totalPrice}</div>
                    </div>`
        price += orderArray[i].totalPrice            
    }
    display.innerHTML = text
    priceDisplay.innerHTML = "₦" +price
}
viewOrderArray()
