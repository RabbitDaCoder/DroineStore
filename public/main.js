const cart = document.querySelectorAll("#cart");
const cartSideNav = document.querySelectorAll(".cartSideNav");

const menu = document.querySelector(".menu");
const dropMenu = document.querySelector(".dropMenu");

const chevron = document.querySelector(".chevron");
const allProducts = document.querySelector(".productsMenu");

const MenuIcon = document.querySelector("#Menu");
const Xmark = document.querySelector("#Xmark");

chevron.onclick = () => {
  allProducts.classList.toggle("hidden");
};

menu.onclick = () => {
  dropMenu.classList.toggle("hidden");
  MenuIcon.classList.toggle("hidden");
  Xmark.classList.toggle("hidden");
};

cart.forEach((cart) => {
  cart.onclick = () => {
    cartSideNav.forEach((cartSideNav) => {
      cartSideNav.classList.toggle("open");
    });
  };
});


const takeTop = document.querySelector(".takeTop");

window.addEventListener("scroll",()=> {
  if(window.pageYOffset > 300) {
    takeTop.classList.add("active")
  }
  else {
     takeTop.classList.remove("active")
  }
})

// add count


const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const quantityValue = document.getElementById('quantityValue');


let quantity = 1;

decreaseButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});

increaseButton.addEventListener('click', () => {
    quantity++;
    quantityValue.textContent = quantity;
});


//  image slide

const mainImg = document.querySelector(".mainImg");
const smallImg = document.querySelectorAll(".smallImg");

smallImg.forEach(smallImg => {
  smallImg.onclick = () => {
    mainImg.src = smallImg.src
  }
})






const stars = document.querySelectorAll('.star');

function toggleStar(index) {
  const star = stars[index - 1];
  if (star.classList.contains('selected')) {
    for (let i = 0; i < index; i++) {
      stars[i].classList.remove('selected');
    }
  } else {
    for (let i = 0; i < index; i++) {
      stars[i].classList.add('selected');
    }
  }
}
