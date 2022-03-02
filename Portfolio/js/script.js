// efek pada saat link di klik
$('.page-scroll').on('click', function (e) {
    // ambil href
    var tujuan = $(this).attr('href');
    // tangkap elemtnya
    var elemenTujuan = $(tujuan);

    $('html , body').animate({ // animate fungsinya memberikan efek
        scrollTop: elemenTujuan.offset().top - 50
    }, 'easeInOutExpo');

    e.preventDefault();
});

// parallax
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul')

})

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate( 0px, ' + wScroll / 4 + '% )'
    });

    $('.jumbotron h1').css({
        'transform': 'translate( 0px, ' + wScroll / 2 + '% )'
    });

    $('.jumbotron p').css({
        'transform': 'translate( 0px, ' + wScroll / 1.2 + '% )'
    });


    //portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 200 * i+1);
        });
    }

});
