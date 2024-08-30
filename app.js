const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar")
const navbarList = document.querySelector(".navbar-list")
const navItems = document.querySelectorAll(".navbar-item")
const menuBtn = document.querySelector(".menu")
const closeMenuBtn = document.querySelector(".close-menu")


const allBtn = document.querySelector(".all-button")
const catalogBtns = document.querySelectorAll(".catalog-button")
const carContainer = document.querySelector(".car-container")
const cars = document.querySelectorAll(".car")
const brand = document.querySelector(".car-brand")
const name = document.querySelector(".car-name")
const image = document.querySelector(".car-img")
const price = document.querySelector(".car-price")

const sections = document.querySelectorAll("section")

const fordArr = [
  {
    number: 1,
    brand: "ford",
    name: "Mustang GT500",
    img: "assets/images/ford-1.png",
    price: 157000,
  },
  {
    number: 2,
    brand: "ford",
    name: "Ranger",
    img: "assets/images/ford-2.png",
    price: 61700,
  },
  {
    number: 3,
    brand: "ford",
    name: "Explorer",
    img: "assets/images/ford-3.png",
    price: 49755,
  },
  {
    number: 4,
    brand: "ford",
    name: "F150",
    img: "assets/images/ford-4.png",
    price: 63800,
  },
]

const nissanArr = [
  {
    number: 1,
    brand: "nissan",
    name: "GT-R",
    img: "assets/images/nissan-1.png",
    price: 171090,
  },
  {
    number: 2,
    brand: "nissan",
    name: "Rogue",
    img: "assets/images/nissan-2.png",
    price: 57850,
  },
  {
    number: 3,
    brand: "nissan",
    name: "Pathfinder",
    img: "assets/images/nissan-3.png",
    price: 62755,
  },
]

const bmwArr = [
  {
    number: 1,
    brand: "bmw",
    name: "5 Series",
    img: "assets/images/nissan-1.png",
    price: 65900,
  },
  {
    number: 2,
    brand: "bmw",
    name: "X2",
    img: "assets/images/nissan-2.png",
    price: 77500,
  },
  {
    number: 3,
    brand: "bmw",
    name: "M2",
    img: "assets/images/nissan-3.png",
    price: 105200,
  }
]

const mercedesArr = [
  {
    number: 1,
    brand: "mercedes",
    name: "E CLASS",
    img: "assets/images/mercedes-1.png",
    price: 95300,
  },
  {
    number: 2,
    brand: "mercedes",
    name: "GLC",
    img: "assets/images/mercedes-2.png",
    price: 60450,
  },
  {
    number: 3,
    brand: "mercedes",
    name: "AMG GT",
    img: "assets/images/mercedes-3.png",
    price: 128950,
  },
  {
    number: 4,
    brand: "mercedes",
    name: "S CLASS",
    img: "assets/images/mercedes-4.png",
    price: 133300,
  },
  {
    number: 5,
    brand: "mercedes",
    name: "GLS",
    img: "assets/images/mercedes-5.png",
    price: 117190,
  },
]

const toyotaArr = [
  {
    number: 1,
    brand: "toyota",
    name: "GR 86",
    img: "assets/images/toyota-1.png",
    price: 44300,
  },
  {
    number: 2,
    brand: "toyota",
    name: "Tundra",
    img: "assets/images/toyota-2.png",
    price: 53965,
  },
  {
    number: 3,
    brand: "toyota",
    name: "Camry Hybrid",
    img: "assets/images/toyota-3.png",
    price: 37855,
  },
  {
    number: 4,
    brand: "toyota",
    name: "Corolla Cross",
    img: "assets/images/toyota-4.png",
    price: 43860,
  },
]

const kiaArr = [
  {
    number: 1,
    brand: "kia",
    name: "EV9",
    img: "assets/images/kia-1.png",
    price: 74900,
  },
  {
    number: 2,
    brand: "kia",
    name: "EV6",
    img: "assets/images/kia-2.png",
    price: 57600,
  },
  {
    number: 3,
    brand: "kia",
    name: "Sorento",
    img: "assets/images/kia-3.png",
    price: 51990,
  },
]

const mainArr = [].concat(fordArr, nissanArr, bmwArr, mercedesArr, toyotaArr, kiaArr)

for (let i = 0; i < mainArr.length; i++) {   
  createCar(mainArr, i)
}

//* create car element

function createCar(arr, index) {
  const object = arr[index]

  const car = document.createElement("div")
  car.classList.add("car")

  const carInfo = document.createElement("div")
  carInfo.classList.add("car-info")

  const carBrand = document.createElement("span")
  carBrand.classList.add("car-brand")
  carBrand.textContent = object.brand.toUpperCase()
  
  const carName = document.createElement("span")
  carName.classList.add("car-name")
  carName.textContent = object.name

  const carImage = document.createElement("img")
  carImage.setAttribute("src", `assets/images/${object.brand}-${object.number}.png`)
  carImage.setAttribute("alt", `${object.brand}`)
  carImage.classList.add("car-img")
  
  const carPrice = document.createElement("span")
  carPrice.classList.add("car-price")
  carPrice.textContent = `$${object.price}`


  carInfo.append(carBrand, carName, carImage, carPrice)
  
  const carButton = document.createElement("div")
  carButton.classList.add("car-button")
  carButton.textContent = "Buy now"

  car.append(carInfo, carButton)

  carContainer.appendChild(car)
}

//* car catalog


catalogBtns.forEach((button,index) => {
  button.addEventListener("click", () => {
    allBtn.classList.remove('active')
    while (carContainer.firstChild) {
      carContainer.removeChild(carContainer.firstChild);
    }

    let selector = button.textContent.toUpperCase()

    let choosenArr

    switch(selector) {
      case "ALL" :
        choosenArr = mainArr
      break

      case "FORD" :
        choosenArr = fordArr
      break
      
      case "NISSAN" :
        choosenArr = nissanArr
      break
      
      case "BMW" :
        choosenArr = bmwArr
      break

      case "MERCEDES" :
        choosenArr = mercedesArr
      break
      
      case "TOYOTA" :
        choosenArr = toyotaArr
      break
      
      case "KIA" :
        choosenArr = kiaArr
      break

      default :
      alert("Check button function")
    }

    for (let i = 0; i < choosenArr.length; i++) {   
      createCar(choosenArr, i)
    }
  })

})



//* dropdown menu

menuBtn.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active")
    document.body.classList.remove("stop-scrolling")
    header.style.backgroundColor("blue")
  }
  else {
    navbar.classList.add("active")
    document.body.classList.add("stop-scrolling")
  }
})

closeMenuBtn.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.toggle("active")
    document.body.classList.toggle("stop-scrolling")
  }
})

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.toggle("active")
    navbarList.classList.toggle("active")
    document.body.classList.toggle("stop-scrolling")
  })
})



//* scroll animations

window.onscroll = () => {
  sections.forEach((sec) => {
    let windowTop = window.scrollY
    let top = sec.offsetTop
    let height = sec.offsetHeight

    if (windowTop > top && windowTop < top + height) {
      sec.classList.add("show-animate")
    }
    else {
      sec.classList.remove("show-animate")
    }
  })
}





















