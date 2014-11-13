
var media_id;
var user_id;
var media_href = 'http://instagram.com/p/s5Ti3_tRY3/';
var title;
var array = [];
GetImageDetails();
$(document).ready(function(){
    setTimeout(function(){
        $('#strength_content').css({"display":"none","visibility":"visible"});
    },2000);
});

$('#instafeed').click(function(event){
            
    media_href = event.target.id;

    GetImageDetails();
   
});
$('#pinterest_a').click(function(){
    $('#strength_content').show();
});

$('#instagram_a').click(function(){
    // alert("n");
    $('#strength_content').hide();
});

$('#facebook_a').click(function(){
    // alert("n");
    $('#strength_content').hide();
});

$('#twitter_a').click(function(){
    // alert("n");
    $('#strength_content').hide();
});

 var userFeed = new Instafeed({
        get: 'user',
        userId: 586628396,
        accessToken: '586628396.467ede5.fccf3e8283c14b0db74e8ecd57e4bc86',
        useHttp: true,
        template: '<a href="{{link}}embed" target="ins_content" class="instafeed_a"><img src="{{image}}" id="{{link}}"/></a>',
        
    });
    userFeed.run();  
  
//Get user details  
        function GetUserDetails() {  
            $.ajax({  
                type: "GET",  
                async: true,  
                contentType: "application/json; charset=utf-8", 
                url :'https://api.instagram.com/v1/media/'+array[1]+'/comments?access_token=586628396.467ede5.fccf3e8283c14b0db74e8ecd57e4bc86',
                // url: 'https://api.instagram.com/v1/users/self/feed?access_token=274348410.467ede5.c610e8b06c5645c29b92084060074a95', 
                // url:'https://api.instagram.com/v1/users/'+274348410+'/?access_token=274348410.467ede5.c610e8b06c5645c29b92084060074a95', 
                dataType: "jsonp",  
                cache: false, 
                success: function (data) { 
                    $('#ins_username').text('@'+array[2]);
                    $('#ins_title').text(array[0]);

                    var key, count = 0;
                    for(key in data.data) {
                      if(data.data.hasOwnProperty(key)) {
                        $('#comment_content').append('<div class="comment_name">'+data.data[count].from.username+':'+'<p>'+data.data[count].text+'</p></div>');
                        count++;
                      }
                    }
                }
            });  
        }

function GetImageDetails(){
    $.ajax({     
                type: 'GET',     
                // url: 'https://api.instagram.com/oembed?url=http://instagram.com/p/tL68h3NUw-/',
                url: 'https://api.instagram.com/oembed?url='+window.media_href, 
                cache: false,     
                dataType: 'jsonp',     
                success: function(data) {           
                    try{    
                            
                            window.array[0] = data.title;
                            window.array[1] = data.media_id;
                            window.array[2] = data.author_name;
                            $('#comment_content').empty();
                            GetUserDetails(array);
                   
                    }catch(err){} 
                }
            });

}

$(function() {
    var ele   = $('#scroll');
    var speed = 25, scroll = 5, scrolling;
    
    $('#scroll-up').mouseenter(function() {
        // Scroll the element up
        scrolling = window.setInterval(function() {
            ele.scrollTop( ele.scrollTop() - scroll );
        }, speed);
    });
    
    $('#scroll-down').mouseenter(function() {
        // Scroll the element down
        scrolling = window.setInterval(function() {
            ele.scrollTop( ele.scrollTop() + scroll );
        }, speed);
    });
    
    $('#scroll-up, #scroll-down').bind({
        click: function(e) {
            // Prevent the default click action
            e.preventDefault();
        },
        mouseleave: function() {
            if (scrolling) {
                window.clearInterval(scrolling);
                scrolling = false;
            }
        }
    });
});











