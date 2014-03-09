$(function() {
	$('#imgLogo').addClass('animated bounceInDown');
});

Reveal.addEventListener( 'slidechanged', function( event ) {
    //$('#imgLogo').addClass('animated bounceInDown');
 	if ($("#inicio").hasClass('present')){
        $('#imgLogo').addClass('animated bounceInDown');
    }else{
        $('#imgLogo').removeClass('animated bounceInDown');
    }    
 	if ($("#estrategias-digitales").hasClass('present')){
 		$('#tituloEstrategiasDigitales').addClass('animated fadeInRight');
        $('#imgEstrategiasDigitales').addClass('animated fadeInDown');        
        $('#textoEstrategiasDigitales').addClass('animated fadeInDown');
    }else{
    	$('#tituloEstrategiasDigitales').removeClass('animated fadeInRight');
        $('#imgEstrategiasDigitales').removeClass('animated fadeInDown');        
        $('#textoEstrategiasDigitales').removeClass('animated fadeInDown');        
    }     
} );