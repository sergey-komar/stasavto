$(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev slick-prev-img"></button>',
        nextArrow : '<button type="button" class="slick-next slick-next-img"></button>',

        responsive: [
                    {
                       breakpoint: 850,
                      settings: {
                       arrows: false
                       }
                    }
                   
                   ]
            
    });


    $('.brend-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
       arrows: false,
       centerMode: true,
       variableWidth: true,

        responsive: [
                    {
                       breakpoint: 850,
                      settings: {
                       arrows: false
                       }
                    }
                   
                   ]
            
    })


})

const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');
    const main = document.querySelector('main');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');

    main.classList.toggle('main-menu');
});



    const btnCart = document.querySelector('.auto-cart__btn');
    const itemCart = document.querySelectorAll('.auto-cart__item');
    
    if(btnCart){
        btnCart.addEventListener('click', function () {
            itemCart.forEach(item => {
                item.classList.add('show');
                item.classList.remove('hide');
            });
    
            btnCart.classList.add('hide');
        });
}




const guaranteeHide = document.querySelector('#guarantee');
const decor = document.querySelector('.decor');
const guaranteeBtn = document.querySelector('.guarantee__btn');

if(guaranteeBtn){
    guaranteeBtn.addEventListener('click', () => {
        guaranteeHide.classList.add('show');
        guaranteeHide.classList.remove('hide');

        decor.classList.add('show');
        decor.classList.remove('hide');

        guaranteeBtn.classList.add('hide');
    })
}
  