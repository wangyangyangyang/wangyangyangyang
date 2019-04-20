var menu = document.getElementById('nav');
// 获取距离页面顶端的距离
var titleTop = menu.offsetTop;
//滚动事件
window.addEventListener('scroll', function () {
    var btop = document.body.scrollTop || document.documentElement.scrollTop;
    //如果滚动距离大于导航条据顶部的距离
    if (btop > titleTop) {
        //为导航设置fixed
        $('.brand').addClass('fixed')
    } else {
        $('.brand').removeClass('fixed')
    }
})
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
  var swiper2 = new Swiper('.swiper-container-two', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });