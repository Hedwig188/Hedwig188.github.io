 var userFeed = new Instafeed({
        get: 'user',
        userId: 274348410,
        accessToken: '274348410.467ede5.c610e8b06c5645c29b92084060074a95',
        useHttp: true,
        template: '<a href="{{link}}embed" target="ins_content"><img src="{{image}}"/></a>'
        
        
    });
    userFeed.run();

// $("#pinterest_tab").click(function(){
// 	alert("yes");
//   document.getElementById("strength_content").style.display="true";	
// });