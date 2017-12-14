$(document).ready(function(){
	$(".views").hide(); 
	setTimeout(function() {
        $(".initial").fadeOut(1000, "swing" ,function(){
        	$(".secondView").show()});
    },500);

//captando el valor para el filtro 

$('select#location1').on('change',function(){
    var valor = $(this).val(); 
    console.log(valor);
    $(".cont-imgs").empty();
   for( var i=0; i<restorants.length; i++){
   	var tipo=restorants[i].tipo; 
   	
   	if (valor == tipo){
   		$(".cont-imgs").append("<div id = 'newimg-" + [i]+ "' data-index='" + [i]+ "' class='col-xs-5 col-xs-offset-1 img-lista img-lista-"+[i]+ "'><p class='informacionMouse informacionMouse-" +[i]+"'>Click para informacion</p> </div>");
   		$(".img-lista-" + [i]).css({'background': "url(" + restorants[i].foto + ")"});
   		$(".img-lista-" + [i]).css({'background-size':'cover'});
   		$(".img-lista-" + [i]).css({'background-position':'center'});
   		$(".img-lista-" + [i]).css({'height': '7em'});
   		$(".img-lista-" + [i]).css({'border': '2px solid white'});
   		$(".img-lista-" + [i]).css({'border-radius': '3px'});
   		$(".img-lista-" + [i]).css({'cursor': 'pointer'});
   	}
   }
});

//mouseover
  for ( var j=0; j<restorants.length ; j++){
    $(document).on('mouseover', ".img-lista-" + [j] , function(){
      console.log("mouse"); 
      $(this).css({"opacity":"0.3"});
      $(".informacionMouse-"+ [j]).css({"display" : "block"})
   
  });
  $(document).on("mouseout", ".img-lista-"+[j] ,function(){
    $(this).css({"opacity":"1"})
    $(".informacionMouse -" + [j]).css({"display" : "none"})
  });

  };

	//modal al hacer click 
  $(".img-lista").on("click" ,function(){
    console.log("click");
  })
 
}); 