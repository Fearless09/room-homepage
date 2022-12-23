let previous = Array.from(document.querySelectorAll('.previous'))
let next = Array.from(document.querySelectorAll('.next'))
let tree = document.querySelector('.tree')
let discover = document.querySelector('.discover-content')


let Images = ['url("./images/desktop-image-hero-1.jpg")', 'url("./images/desktop-image-hero-2.jpg")', 'url("./images/desktop-image-hero-3.jpg")']

let HeaderContent = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"]

let pContent = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

card = document.querySelector('.grid')

let FcardImg = ['url("./images/image-about-dark.jpg")', 'url("./images/image-about-light.jpg")']

let LcardImg = ['url("./images/image-about-light.jpg")', 'url("./images/image-about-dark.jpg")']

let i = 0
setInterval(() => {
    card.children[0].style.backgroundImage = FcardImg[i]
    card.children[2].style.backgroundImage = LcardImg[i]
    //console.log(i)

    i++

    if (i > 1) {
        i = 0
    }

}, 15000);



imgNum = 1

//console.log("initial Num",imgNum)

next.map(nexts => {
    imgNum = 1
    nexts.addEventListener('click', () => {
        imgNum += 1

        if (imgNum > 3) {
            imgNum = 1
            tree.style.backgroundImage = Images[0]
            discover.children[0].textContent = HeaderContent[0]
            discover.children[1].textContent = pContent[0]
        }

        else if (imgNum == 2) {
            tree.style.backgroundImage = Images[1]
            discover.children[0].textContent = HeaderContent[1]
            discover.children[1].textContent = pContent[1]
        }

        else if (imgNum == 3) {
            tree.style.backgroundImage = Images[2]
            discover.children[0].textContent = HeaderContent[2]
            discover.children[1].textContent = pContent[2]
        }

    })

    let i = 0
    setInterval(() => {
        tree.style.backgroundImage = Images[i]

        discover.children[0].textContent = HeaderContent[i]
        discover.children[1].textContent = pContent[i]

        //console.log(i)

        i++

        if (i > 2) {
            i = 0
        }

    }, 10000);
})


previous.map(previouss => {
    previouss.addEventListener('click', () => {
        //console.log("previous")

        imgNum -= 1

        if (imgNum < 1) {
            imgNum = 3
            tree.style.backgroundImage = Images[2]
            discover.children[0].textContent = HeaderContent[2]
            discover.children[1].textContent = pContent[2]
        }

        else if (imgNum == 1) {
            tree.style.backgroundImage = Images[0]
            discover.children[0].textContent = HeaderContent[0]
            discover.children[1].textContent = pContent[0]
        }

        else if (imgNum == 2) {
            tree.style.backgroundImage = Images[1]
            discover.children[0].textContent = HeaderContent[1]
            discover.children[1].textContent = pContent[1]
        }

    })
})




console.log("Welcome")

//MENU
let openBtn = document.querySelector('.hamburger')
let closeBtn = document.querySelector('.close')
let menu = document.querySelector('.menu')

openBtn.addEventListener('click', () => {

    menu.style.display = "inline"
    console.log("Open Clicked")
})

closeBtn.addEventListener('click', () => {

    menu.style.display = "none"
    console.log("Close Clicked")
})




