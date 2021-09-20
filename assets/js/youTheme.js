// youTheme.js code by Yoniu(www.200011.net)
(()=>{
  $("#go-top").fadeOut(200);
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("#go-top").fadeIn(200);
    } else {
      $("#go-top").fadeOut(200);
    }
  });
  $("#go-top").click(function() {
      $('body,html').animate({
          scrollTop: 0
      },500);
      return false;
  });
  $("#friends").click(function() {
    $('#friends-list').toggleClass('show');
    return false;
  });
  $("#mobile-nav").click(function() {
    $('.navigation').toggleClass('show');
    return false;
  });
  if($(".post-list").length > 0){
    setTimeout(function(){
      $('.post-list').masonry({
          itemSelector: '.post-list-item',
          columnWidth: '.post-list-item',
          gutter: 20
      });
    }, 100);
  }
  if($('.post-links').length > 0){
    setTimeout(function(){
      $('.post-links').masonry({
          itemSelector: '.link-item',
          columnWidth: '.link-item',
          gutter: 10
      });
    }, 100);
  }
  if($(".owl-carousel").length > 0){
    $(".owl-carousel").owlCarousel({
      items: 2,
      margin: 20,
      dots: false,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });
  }
  $("article.post img:not(.noImageLightBox)").each(function(i) {
    if (!this.parentNode.href) {
      $(this).wrap('<a class="post-imgLink" href="' + this.src + '" data-caption="' + this.alt + '"></a>');
    }
  });
  $("article.post .photosets").each(function(){
    var count = $(this).find("a.post-imgLink").length;
    switch(count){
      case 1:
        $(this).addClass("photosets-1");
        break;
      case 2:
        $(this).addClass("photosets-2");
        break;
      case 4:
        $(this).addClass("photosets-4");
        break;
      default:
        $(this).addClass("photosets-3");
    }
  });
  if($(".post-imgLink").length > 0){
    lightGallery(document.getElementsByTagName('article')[0], {
      selector: '.post-imgLink',
      share: false,
      showThumbByDefault: false,
      autoplayControls: false
    });
  }
  function ias_function(){
      var href = $(".post-pagination-next:not(.post-pagination-nofollow)").attr("href");
      if (href != undefined) {
          $.ajax( {
              url: href,
              type: "get",
          beforeSend:function(){
              $(".post-pagination-next:not(.post-pagination-nofollow)").html("加载中...");
          },
          error: function(request) {
              $(".post-pagination-next:not(.post-pagination-nofollow)").html("加载失败，请重试");
          },   
          success: function(data) {
              var $res = $(data).find("article.post-list-item");
              setTimeout(function(){
                $('.post-list').append($res).masonry('appended', $res);
                var newhref = $(data).find(".post-pagination-next:not(.post-pagination-nofollow)").attr("href");
                if( newhref != undefined ){   
                    $(".post-pagination-next:not(.post-pagination-nofollow)").attr("href", newhref).html("加载更多");   
                }else{   
                    $(".post-pagination-next:not(.post-pagination-nofollow)").attr("style","display:none");
                    $(".post-pagination").append('<span class="post-pagination-loaded" href="JavaScript:;" rel="nofollow" >加载完毕</span>'); 
                }   
              }, 200);
          }   
          });   
      }
  }
  var io = new IntersectionObserver(function(){
      if($(".post-pagination-next:not(.post-pagination-nofollow)").length > 0 && $(".post-pagination-loaded").length <= 0) {
          ias_function();
      }
  }, { threshold: 1.0 });

  if($(".post-pagination-next:not(.post-pagination-nofollow)").length > 0)
      io.observe(document.querySelector(".post-pagination-next:not(.post-pagination-nofollow)"));

  if($("#tcomment").length > 0){
    twikoo.init({
      envId: 'https://twikoo-kappa-khaki.vercel.app/',
      el: '#tcomment'
    })
  }
})();