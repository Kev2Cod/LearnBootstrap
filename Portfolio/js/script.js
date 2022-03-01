// // event pada saat link di klik
// $('.page-scroll').on('click', function(e){

//     //ambil isi href
//     var tujuan = $(this).attr('href')

//     //tangkap elemennya
//     var elemenTujuan = $(tujuan);
    
//     $('html','body').scrollTop('700');

//     e.preventDefault();


// });

$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({ // animate fungsinya memberikan efek
     scrollTop: elemenTujuan.offset().top - 50
    }, 'easeInOutExpo');
   
    e.preventDefault();
   });