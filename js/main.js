const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

/* menu */

var menuOpen = [
    {
        elements: $('.nav'),
        properties: {
            height: ['100vh', 0],
            width: ['100vw', 0],
            // minHeight: '40rem'
        },
        options: {
            duration: 200
        }
    },
    {
        elements: $('nav').find('h1, p, small'),
        properties: {
            opacity: 1
        },
        options: {
            duration: 200,
            delay: 100,
            sequenceQueue: false
        }
    },
    {
        elements: $('.right-inner'),
        properties: {
            width: '100%'
        },
        options: {
            duration: 250,
            complete: function () {
                $('.right-inner')
                    .find('li').each(function (i) {
                        $(this).velocity({ opacity: 1 }, { delay: i * 50 });
                    })

                $('.social').find('i').each(function (i) {
                    $(this).velocity('transition.bounceUpIn', { delay: i * 75 });
                })
            }
        }
    }
];

$('.hamb').on('click', function () {

    if ($(this).hasClass('open')) {

        $(this)
            .removeClass('open')
            .find('i')
            .addClass('fa-bars')
            .removeClass('fa-times');

        $('nav').velocity({
            height: 0,
            width: 0,
            minHeight: 0
        }, {
            duration: 250,
            begin: function () {
                $('nav').find('h1, p, small').css({
                    opacity: 0
                })
                $('.right-inner').find('li, .social i').css({
                    opacity: 0
                });
            },
            complete: function () {
                $('.right-inner').css({
                    width: 0
                });
            }
        });

    } else {
        $(this)
            .addClass('open')
            .find('i')
            .addClass('fa-times')
            .removeClass('fa-bars');

        $.Velocity.RunSequence(menuOpen)
    }
});
/*end menu */

$('.nav-link').on('click', function () {
    $('.hamb')
        .removeClass('open')
        .find('i')
        .addClass('fa-bars')
        .removeClass('fa-times');

    $('nav').velocity({
        height: 0,
        width: 0,
        minHeight: 0
    }, {
        duration: 250,
        begin: function () {
            $('nav').find('h1, p, small').css({
                opacity: 0
            })
            $('.right-inner').find('li, .social i').css({
                opacity: 0
            });
        },
        complete: function () {
            $('.right-inner').css({
                width: 0
            });
        }
    });

    icons[0].classList.toggle("open");
})


/** scrolling web site */
window.addEventListener('load', reveal);

window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var my_nav = document.querySelector('.my-nav');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        console.log(window.innerHeight)
        console.log('elementtop ', elementTop)

        if (elementTop > window.innerHeight)
        {
            reveals[i].classList.add("active");
        }

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }

    if (window.scrollY)
        my_nav.classList.add("my-nav-active");
    else {
        my_nav.classList.remove("my-nav-active");
    }
}
/** */