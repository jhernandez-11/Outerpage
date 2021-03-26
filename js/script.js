const menus = $('.menus'), menu1 = $('#menu1'), menu2 = $('#menu2'), menu3 = $('#menu3')
const lc1 = $('#lc1'), lc2 = $('#lc2'), lc3 = $('#lc3')
const down1 = $('#down1'), down2 = $('#down2'), down3 = $('#down3')
const up1 = $('#up1'), up2 = $('#up2'), up3 = $('#up3')
const search1 = $('#sic1'), search2 = $('#sic2'), copy1 = $('#copy1'), copy2 = $('#copy2'), nav = $('.nav')
const navIcon = $('#nav-icon')
const faq1 = $('#faq1'), faq2 = $('#faq2'), faq3 = $('#faq3'), answer1 = $('#answer1'), answer2 = $('#answer2'), answer3 = $('#answer3')

$(document).ready(() => {
    // JS media queries for search bar, copyright text, menus, and navigation icon
    if (window.innerWidth >= 600) {
        search2.show()
        search1.hide()
        copy2.hide()

        copy1.show()
        navIcon.hide()
    } else {
        search1.show()
        search2.hide()
        copy1.hide()

        copy2.show()
        navIcon.show()
        nav.hide()
        search1.hide()
    }
})

const resetMenus = () => {
    if (boolean1 || boolean2 || boolean3) {
        menu1.hide('slow')
        menu2.hide('slow')
        menu3.hide('slow')
        up1.hide('slow')
        up2.hide('slow')
        up3.hide('slow')
        
        down1.show('slow')
        down2.show('slow')
        down3.show('slow')
    } 
}

window.addEventListener('resize', () => {
    resetMenus()
    if (window.innerWidth <= 599) {
        search1.hide()
        search2.hide()
        copy1.hide()

        copy2.show()
        navIcon.show()
        nav.hide()
    } else {
        search2.show()
        search1.hide()
        copy1.show()

        copy2.hide()
        navIcon.hide()
        nav.show()
    }
})

let startState = true
navIcon.on('click', () => {
    if (startState) {
        nav.show('slow')
        search1.show('slow')

        navIcon.css({
            color: "black"
        }, 1000)

        startState = false
    } else {
        nav.hide('slow')
        search1.hide('slow')

        menu1.hide('slow')
        menu2.hide('slow')
        menu3.hide('slow')

        up1.hide('slow')
        up2.hide('slow')
        up3.hide('slow')

        down1.show('slow')
        down2.show('slow')
        down3.show('slow')

        navIcon.css({
            color: "grey"
        }, 1000)

        startState = true
    }
    
})

// Hide or show menus
menu1.hide()
menu2.hide()
menu3.hide()
up1.hide()
up2.hide()
up3.hide()

let boolean1 = false
lc1.on('click', () => {
    if (boolean1 === false) {
        menus.animate({
            height: '100%'
        }, 'slow')
        menu1.show('slow')
        up1.show('slow')
        down1.hide('slow')

        // In case other menus are open
        menu2.hide('slow')
        menu3.hide('slow')
        up2.hide('slow')
        up3.hide('slow')
        down2.show('slow')
        down3.show('slow')

        boolean1 = true
    } else {
        menus.animate({
            height: '0'
        }, 'slow')
        menu1.hide('slow')
        up1.hide('slow')
        down1.show('slow')

        boolean1 = false
    }
})

let boolean2 = false
lc2.on('click', () => {
    if (boolean2 === false) {
        menus.animate({
            height: '100%'
        }, 'slow')
        menu2.show('slow')
        up2.show('slow')
        down2.hide('slow')

        // In case other menus are open
        menu1.hide('slow')
        menu3.hide('slow')
        up1.hide('slow')
        up3.hide('slow')
        down1.show('slow')
        down3.show('slow')

        boolean2 = true
    } else {
        menus.animate({
            height: '0'
        }, 'slow')
        menu2.hide('slow')
        up2.hide('slow')
        down2.show('slow')

        boolean2 = false
    }
})

let boolean3 = false
lc3.on('click', () => {
    if (boolean3 === false) {
        menus.animate({
            height: '100%'
        }, 'slow')
        menu3.show('slow')
        up3.show('slow')
        down3.hide('slow')

        // In case other menus are open
        menu2.hide('slow')
        menu1.hide('slow')
        up2.hide('slow')
        up1.hide('slow')
        down2.show('slow')
        down1.show('slow')

        boolean3 = true
    } else {
        menus.animate({
            height: '0'
        }, 'slow')
        menu3.hide('slow')
        up3.hide('slow')
        down3.show('slow')

        boolean3 = false
    }
})

// Hide / show faqs
let boolean4 = false
answer1.hide()
answer2.hide()
answer3.hide()
faq1.on('click', () => {
        if (!boolean4) {
            answer1.show('slow')
            boolean4 = true
        } else {
            answer1.hide('slow')
            boolean4 = false
        }
})

let boolean5 = false
faq2.on('click', () => {
    if (!boolean5) {
        answer2.show('slow')
        boolean5 = true
    } else {
        answer2.hide('slow')
        boolean5 = false
    }
})

let boolean6 = false
faq3.on('click', () => {
    if (!boolean6) {
        answer3.show('slow')
        boolean6 = true
    } else {
        answer3.hide('slow')
        boolean6 = false
    }
})

// Back button

const goBack = () => {
    window.history.back()
}

// Swiper
let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true
})