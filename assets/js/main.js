function show_date_time(){  
    setTimeout(function(){
        target = new Date(2022,0,0,0,0,0);
        today = new Date();
        timeold = (target.getTime() - today.getTime());  
        sectimeold = timeold/1000  
        secondsold = Math.floor(sectimeold);  
        msPerDay = 24*60*60*1000  
        e_daysold = timeold / msPerDay  
        daysold = Math.floor(e_daysold);  
        if (daysold<0) {
            document.getElementById("time").innerHTML = "<span>2022</span><span>已到</span>";  
        }
        else{  
            if (daysold<10) {daysold="0"+daysold}
            document.getElementById("time").innerHTML = "<span>" + daysold + "</span><span>天元旦</span>";
        }
    }, 10);  
}
(function(){setTimeout(function(){
    show_date_time();
    isInViewPort();
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
}, 100)})();

function ias_function(){
	var href = $(".post-pagination-next:not(.post-pagination-nofollow)").attr("href");
	if (href != undefined) {
		$.ajax( {
			url: href,
			type: "get",
		beforeSend:function(){},
		error: function(request) {
            $(".post-pagination-next:not(.post-pagination-nofollow)").html("加载失败，请重试");
        },   
		success: function(data) {
			var $res = $(data).find("article.post-list-item");
			$('.post-list').append($res.fadeIn('slow'));
			var newhref = $(data).find(".post-pagination-next:not(.post-pagination-nofollow)").attr("href");
			if( newhref != undefined ){   
				$(".post-pagination-next:not(.post-pagination-nofollow)").attr("href", newhref);   
			}else{   
				$(".post-pagination-next:not(.post-pagination-nofollow)").attr("style","display:none");
				$(".post-pagination").append('<span class="post-pagination-loaded" href="JavaScript:;" rel="nofollow" >加载完毕</span>'); 
			}   
		}   
		});   
	}   
}

function isInViewPort() {
    var io = new IntersectionObserver(function(){
		if($(".post-pagination-next:not(.post-pagination-nofollow)").length > 0 && $(".post-pagination-loaded").length <= 0) {
            ias_function();
		}
	}, { threshold: 1.0 });
	
    if($(".post-pagination-next:not(.post-pagination-nofollow)").length > 0)
	    io.observe(document.querySelector(".post-pagination-next:not(.post-pagination-nofollow)"));
}