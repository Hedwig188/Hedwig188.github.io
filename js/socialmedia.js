var flag = 1;
var pinterest_link;
var pinterest_type;
var pinterest_tag;
 $(document).ready(function() {
 	// if(flag == 2){
 	// 	$('#recent_content').find('a').attr('href','http://www.pinterest.com/racemill/'+tag);
		// $('#recent_content').find('a').attr('data-pin-do','embedBoard');
		// flag = 1;
 	// }
 	// alert(flag);
 	if(flag == 2){
 		$('#recent_content').find('div').attr('display','none');
 		flag = 1;
 	}
 });

 var userFeed = new Instafeed({
        get: 'user',
        userId: 274348410,
        accessToken: '274348410.467ede5.c610e8b06c5645c29b92084060074a95',
        useHttp: true,
        template: '<a href="{{link}}embed" target="ins_content"><img src="{{image}}"/></a>',
        success:function({{model.data}}){

        }
        
        
    });
    userFeed.run();


$('#pinit_submit').click(function(){
	pinterest_tag=$('#pinit_input').val();
	flag = 2;
	// pinterest_link=$('#recent_content').find('div').attr('display','none');
	// pinterest_type=$('#recent_content').find('a').attr('data-pin-do');
	// alert(pinterest_link);
	// $('#recent_content').find('div').attr('display','none');
		window.location.reload(true);
});


