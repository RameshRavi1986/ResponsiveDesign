    function build(data){
		var length=data.items.length;
		var items= data.items;
		var imageHtml="";

		for(var item=0; item < length; item++){
     
            imageHtml+= "<li class='columns'><a title='"+items[item].title+"' href='"+items[item].link+"'><img src='"+items[item].media.m+"' alt='"+items[item].title+"'  class='grid-image'/></a></li>";

		}

		$("#flickrContent").append(imageHtml);
    if (!Modernizr.csstransforms) {

         $(".flickr-link").hover(function(){
              $(this).css("opacity", 0);
          }, function(){
              $(this).css("opacity", 1);
         });
       
    }
	};
$(function() {
        var pull        = $('#pull');
        var menu        = $('nav ul');
        var tags = 'france';
        var script = document.createElement('script'); 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=build&tags='+tags;
document.getElementsByTagName('head')[0].appendChild(script);
});