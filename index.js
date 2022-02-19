const wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 199,
        colors: [
            {
                code: "black",
                images: "images/air.png",
            },
            {
                code: "darkblue",
                images: "images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 299,
        colors: [
            {
                code: "lightgrey",
                images: "images/jordan.png",
            },
            {
                code: "green",
                images: "images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "blazer",
        price: 399,
        colors: [
            {
                code: "black",
                images: "images/blazer.png",
            },
            {
                code: "Green",
                images: "images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 499,
        colors: [
            {
                code: "black",
                images: "images/crater.png",
            },
            {
                code: "lightgray",
                images: "images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 599,
        colors: [
            {
                code: "gray",
                images: "images/hippie.png",
            },
            {
                code: "black",
                images: "images/hippie2.png",
            },
        ],
    },
]
let choosenProduct = products[0];
const currentproductImages = document.querySelector(".productimg")
const currentproducttitle = document.querySelector(".producttitle")
const currentproductprice = document.querySelector(".productprice")
const currentproductcolors = document.querySelectorAll(".color")
const currentproductsizes = document.querySelectorAll(".size")



menuitem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        //change the choosen product//
        choosenProduct = products[index]
        //change texts of current product
        currentproducttitle.textContent = choosenProduct.title;
        currentproductprice.textContent = "$" + choosenProduct.price;
        currentproductImages.src = choosenProduct.colors[0].images;
        //assing new colors
        currentproductcolors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentproductImages.src=choosenProduct.colors[index].images
    })
})
currentproductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
});

const productbutton=document.querySelector(".productbutton")
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productbutton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})

