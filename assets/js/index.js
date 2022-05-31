


const prevIcon_1 = '<img src="assets/icons/prev.svg" alt="">';
const prevIcon = '<img src="assets/icons/roasted-icons/next.svg" alt="">';
const nextIcon = '<img src="assets/icons/roasted-icons/next.svg" alt="">';

const nextIcon_1 = '<img src="assets/icons/next.svg" alt="">';


$(document).ready(function () {
    var owl = $(".owl-carousel-1");
    owl.owlCarousel({
        loop: true,
        nav: false,
        navText: [
            prevIcon_1,
            nextIcon],
        smartSpeed: 650,
        responsive: {
            0: {
                items: 1,
                stagePadding: 40,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});
$(document).ready(function () {
    var owl = $(".owl-carousel-6");
    owl.owlCarousel({
        loop: true,
        nav: false,
        navText: [
            prevIcon_1,
            nextIcon],
        smartSpeed: 650,
        responsive: {
            0: {
                items: 1,
                stagePadding: 40,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });
});


$(document).ready(function () {
    var owl = $(".owl-carousel-6-1");
    owl.owlCarousel({
        loop: true,
        nav: false,
        navText: [
            prevIcon_1,
            nextIcon],
        smartSpeed: 650,
        responsive: {
            0: {
                items: 1,
                stagePadding: 40,
            },
            475: {
                stagePadding: 40,
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1000: {
                items: 4,
            },
        },
    });
});



$(document).ready(function () {
    var owl = $(".owl-carousel-3");
    owl.owlCarousel({
        loop: true,
        smartSpeed: 650,
        nav: false,
        navText: [
            prevIcon_1,
            nextIcon_1],
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
});


$(document).ready(function () {
    var owl = $(".owl-carousel-4");
    owl.owlCarousel({
        loop: true,
        stagePadding: 70,
        smartSpeed: 650,

        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
                stagePadding: 50,
            },
            600: {
                items: 3,
                stagePadding: 50,
            },
            700: {
                items: 6,
                loop: false,
                stagePadding: 0,
            },
            992: {
                loop: false,
                stagePadding: 0,
                smartSpeed: 0,
                nav: false,
                items: 6,
            },
        },
    });
});


$(".navbar").click(function () {
    $(".nav-container").toggle("slide");
});

$(".close-btn").click(function () {
    $(".nav-container").toggle("slide");
});

function openNav() {
    document.getElementById("bg-overlay").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("bg-overlay").style.display = "none";
}

var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';


$(document).ready(function () {
    var owl = $(".owl-carousel-7");
    owl.owlCarousel({
        loop: true,
        smartSpeed: 650,
        responsive: {
            0: {
                items: 1,
            },
            475: {
                smartSpeed: 650,
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    }).on('changed.owl.carousel', syncPosition);

    function syncPosition(el) {
        $owl_slider = $(this).data('owl.carousel');
        var loop = $owl_slider.options.loop;

        if (loop) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
        } else {
            var current = el.item.index;
        }

        var owl_thumbnail = sync2.data('owl.carousel');
        var itemClass = "." + owl_thumbnail.options.itemClass;


        var thumbnailCurrentItem = sync2
            .find(itemClass)
            .removeClass("synced")
            .eq(current);

        thumbnailCurrentItem.addClass('synced');

        if (!thumbnailCurrentItem.hasClass('active')) {
            var duration = 500;
            sync2.trigger('to.owl.carousel', [current, duration, true]);
        }
    }
});

$(document).ready(function () {
    var owl = $(".owl-carousel-8");
    owl.owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            475: {
                items: 1,
            },
            1000: {
                items: 5,
            },
        },
        onInitialized: function (e) {
            var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
            thumbnailCurrentItem.addClass('synced');
        },
    })
        .on('click', thumbnailItemClass, function (e) {
            e.preventDefault();
            var duration = 500;
            var itemIndex = $(e.target).parents(thumbnailItemClass).index();
            sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
        }).on("changed.owl.carousel", function (el) {
            var number = el.item.index;
            $owl_slider = sync1.data('owl.carousel');
            $owl_slider.to(number, 500, true);
        });
});


$(document).ready(function () {
    var owl = $(".owl-carousel-9");
    owl.owlCarousel({
        loop: true,
        smartSpeed: 650,
        responsive: {
            0: {
                items: 1,
            },
            475: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});


$(document).ready(function () {
    var owl = $(".owl-carousel-10");
    owl.owlCarousel({
        loop: true,
        smartSpeed: 650,
        stagePadding: 40,
        responsive: {
            0: {
                items: 1,
            },
            475: {
                stagePadding: 40,
                items: 2,
            },
            576: {
                stagePadding: 2,
                items: 3,
            },
            768: {
                items: 3,
                stagePadding: 00,
            },
            1000: {
                stagePadding: 0,
                loop: true,
                items: 2,
            },
        },
    });
});





$(window).bind('resize', 'load', function () {
    if ($(this).width() > 768) {
        $('.collapse').addClass('show');
        $('#accordion h4.collapsed').removeAttr('data-toggle');
        $('#toggle-collapse h3.collapsed').removeAttr('data-toggle');
    } else {
        $('.collapse').removeClass('show');
        $('#accordion h4.collapsed').addAttr('data-toggle');
        $('#toggle-collapse h3.collapsed').addAttr('data-toggle');
    };
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("popular-courses-list");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

var owlCarouselActive = document.getElementsByClassName("owl-item active");
var first = owlCarouselActive[0]; //get first item
var last = owlCarouselActive[owlCarouselActive.length - 1]; //get last item


