$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(".two").hover(function() {
        $(".two ").css("background", "lightgrey")
    }, function() {
        $(".two").css("background", "white")
    });
    $(".three").hover(function() {
        $(".three ").css("background", "lightgrey")
    }, function() {
        $(".three").css("background", "white")
    });
    $(".four").hover(function() {
        $(".four ").css("background", "lightgrey")
    }, function() {
        $(".four").css("background", "white")
    });

    $(".header__logo").hover(
        function() { // задаем функцию при наведении курсора на элемент	
            $(this).animate({ marginTop: "-0.7%" }, 150)
        },
        function() {
            $(this).animate({ marginTop: "0%" }, 100)

        }, )

    $(".header__link1").hover(
        function() {
            $(this).animate({ fontSize: "29px" }, 80)
        },
        function() {
            $(this).animate({ fontSize: "25px" }, 80)
        }

    )
    $(".header__link2").hover(
        function() {
            $(this).animate({ fontSize: "29px" }, 80)
        },
        function() {
            $(this).animate({ fontSize: "25px" }, 80)
        }

    )

});

function flip() {
    if (window.matchMedia('(max-width: 650px)').matches) {
        let i = 1;
        for (let li of carousel.querySelectorAll('li')) {
            li.style.position = 'relative';
            li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
            i++;
        }

        let width = 273; // ширина картинки
        let count = 1; // видимое количество изображений

        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0; // положение ленты прокрутки

        carousel.querySelector('.prev').onclick = function() {
            // сдвиг влево
            position += width * count;
            // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
            position = Math.min(position, 0)
            list.style.marginLeft = position + 'px';
        };

        carousel.querySelector('.next').onclick = function() {
            // сдвиг вправо
            position -= width * count;
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position, -width * (listElems.length - count));
            list.style.marginLeft = position + 'px';
        };
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
        let i = 1;
        for (let li of carousel.querySelectorAll('li')) {
            li.style.position = 'relative';
            li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
            i++;
        }

        let width = 525; // ширина картинки
        let count = 1; // видимое количество изображений

        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0; // положение ленты прокрутки

        carousel.querySelector('.prev').onclick = function() {
            // сдвиг влево
            position += width * count;
            // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
            position = Math.min(position, 0)
            list.style.marginLeft = position + 'px';
        };

        carousel.querySelector('.next').onclick = function() {
            // сдвиг вправо
            position -= width * count;
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position, -width * (listElems.length - count));
            list.style.marginLeft = position + 'px';
        };

    } else {
        /* этот код помечает картинки, для удобства разработки */
        let i = 1;
        for (let li of carousel.querySelectorAll('li')) {
            li.style.position = 'relative';
            li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
            i++;
        }



        let width = 737.5; // ширина картинки
        let count = 1; // видимое количество изображений

        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0; // положение ленты прокрутки

        carousel.querySelector('.prev').onclick = function() {
            // сдвиг влево
            position += width * count;
            // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
            position = Math.min(position, 0)
            list.style.marginLeft = position + 'px';
        };

        carousel.querySelector('.next').onclick = function() {
            // сдвиг вправо
            position -= width * count;
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position, -width * (listElems.length - count));
            list.style.marginLeft = position + 'px';
        };

        /////////////////////////////////////////////////////////////////////////////////////
    }
}
window.addEventListener('resize', flip);
/////////////////////////////////////////////////////////////////////////////////////