var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(".swiper-button-next").mouseover(function () {
    $(".panels").css({ "box-shadow": "8px 0px 10px 1px rgba(0, 0, 0, 0.6)" });
});

$(".swiper-button-next").mouseleave(function () {
    $(".panels").css({ "box-shadow": "none" });
});

$(".swiper-button-prev").mouseover(function () {
    $(".panels").css({ "box-shadow": "-8px 0px 10px 1px rgba(0, 0, 0, 0.6)" });
});

$(".swiper-button-prev").mouseleave(function () {
    $(".panels").css({ "box-shadow": "none" });
});
