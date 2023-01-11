let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

// Making Function
function ready() {
  // Reomve Items From Cart
  // var reomveCartButtons = document.getElementsByClassName("delete-item-from-cart");
  // console.log(reomveCartButtons);
  /*for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("onclick ", removeCartItem(this));
  }*/

  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // // Reomve Items From Cart
  // function removeCartItem ( event ) {
  // var buttonClicked = event.target ;
  //  buttonClicked.parentElement.remove ( ) ;
  // updatetotal ( ) ;}

  $(".delete-item-from-cart").attr("onclick", "removeCartItem(this)");
}

ready();

// Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
    updatetotal();
  }
}

// Remove Items From Cart
function removeCartItem(event) {
  event.parentElement.remove();
  updatetotal();
}

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// const search = document.getElementById('search-box');

// search.addEventListener('change', showItem);

// function showItem(evt) {
//   console.log(search.value);
//   if (search.value=='fresh'){
//     let item = document.getElementById('item-1');
//     item.hide()
//     // alert("Hello")
//   }
//   else{
//     item.show();
//   }
// }

// Update Total
function updatetotal() {
  // var cartContent = document.getElementsByClassName ("cart-content") [0] ;
  var cartBoxes = document.getElementsByClassName("cart-price");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    //var cartBox = cartBoxes [ i ] ;
    var priceElement = document.getElementsByClassName("cart-price")[i];
    var quantityElement = document.getElementsByClassName("cart-quantity")[i];
    var price = parseFloat(priceElement.innerText.replace("&#8377", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    // If price Contain some Cents
    document.getElementsByClassName("total-price")[0].innerText =
      " &#8377 " + total;
  }
}
