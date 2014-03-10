$(function() {
	$('#imgLogo').addClass('animated bounceInDown');
	var device = navigator.userAgent

	if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)) { 
		$('.slides').addClass('slides-movil');
	}	
	else{
		$('.slides').removeClass('slides-movil');
	}
});

Reveal.addEventListener( 'slidechanged', function( event ) {
 	if ($("#inicio").hasClass('present')){
        $('#imgLogo').addClass('animated bounceInDown');
    }else{
        $('#imgLogo').removeClass('animated bounceInDown');
    }    
 	if ($("#estrategias-digitales").hasClass('present')){
 		$('#tituloEstrategiasDigitales').addClass('animated bounceInDown');
        $('#imgEstrategiasDigitales').addClass('animated bounceInDown');        
        $('#textoEstrategiasDigitales').addClass('animated bounceInDown');
    }else{
    	$('#tituloEstrategiasDigitales').removeClass('animated bounceInDown');
        $('#imgEstrategiasDigitales').removeClass('animated bounceInDown');        
        $('#textoEstrategiasDigitales').removeClass('animated bounceInDown');        
    } 
 	if ($("#desarrollo-web").hasClass('present')){
 		$('#tituloDesarrolloWeb').addClass('animated bounceInDown');
        $('#imgDesarrolloWeb').addClass('animated bounceInDown');        
        $('#textoDesarrolloWeb').addClass('animated bounceInDown');
    }else{
    	$('#tituloDesarrolloWeb').removeClass('animated bounceInDown');
        $('#imgDesarrolloWeb').removeClass('animated bounceInDown');        
        $('#textoDesarrolloWeb').removeClass('animated bounceInDown');        
    } 
 	if ($("#email-marketing").hasClass('present')){
 		$('#tituloEmailMarketing').addClass('animated bounceInDown');
        $('#imgEmailMarketing').addClass('animated bounceInDown');        
        $('#textoEmailMarketing').addClass('animated bounceInDown');
    }else{
    	$('#tituloEmailMarketing').removeClass('animated bounceInDown');
        $('#imgEmailMarketing').removeClass('animated bounceInDown');        
        $('#textoEmailMarketing').removeClass('animated bounceInDown');        
    }
 	if ($("#generacion-de-contenidos-en-medios-digitales").hasClass('present')){
 		$('#tituloGeneracionContenidos').addClass('animated bounceInDown');
        $('#imgGeneracionContenidos').addClass('animated bounceInDown');        
        $('#textoGeneracionContenidos').addClass('animated bounceInDown');
    }else{
    	$('#tituloGeneracionContenidos').removeClass('animated bounceInDown');
        $('#imgGeneracionContenidos').removeClass('animated bounceInDown');        
        $('#textoGeneracionContenidos').removeClass('animated bounceInDown');        
    }                 
 	if ($("#consultoria-digital").hasClass('present')){
 		$('#tituloConsultoriaDigital').addClass('animated bounceInDown');
        $('#imgConsultoriaDigital').addClass('animated bounceInDown');        
        $('#textoConsultoriaDigital').addClass('animated bounceInDown');
    }else{
    	$('#tituloConsultoriaDigital').removeClass('animated bounceInDown');
        $('#imgConsultoriaDigital').removeClass('animated bounceInDown');        
        $('#textoConsultoriaDigital').removeClass('animated bounceInDown');        
    }  
 	if ($("#planeacion-y-ejecucion-de-estrategia-en-redes-sociales").hasClass('present')){
 		$('#tituloRedesSociales').addClass('animated bounceInDown');
        $('#imgRedesSociales').addClass('animated bounceInDown');        
        $('#textoRedesSociales').addClass('animated bounceInDown');
    }else{
    	$('#tituloRedesSociales').removeClass('animated bounceInDown');
        $('#imgRedesSociales').removeClass('animated bounceInDown');        
        $('#textoRedesSociales').removeClass('animated bounceInDown');        
    }
 	if ($("#metricas-y-analiticas-web").hasClass('present')){
 		$('#tituloMetricas').addClass('animated bounceInDown');
        $('#imgMetricas').addClass('animated bounceInDown');        
        $('#textoMetricas').addClass('animated bounceInDown');
    }else{
    	$('#tituloMetricas').removeClass('animated bounceInDown');
        $('#imgMetricas').removeClass('animated bounceInDown');        
        $('#textoMetricas').removeClass('animated bounceInDown');        
    } 
 	if ($("#seo").hasClass('present')){
 		$('#tituloSeo').addClass('animated bounceInDown');
        $('#imgSeo').addClass('animated bounceInDown');        
        $('#textoSeo').addClass('animated bounceInDown');
    }else{
    	$('#tituloSeo').removeClass('animated bounceInDown');
        $('#imgSeo').removeClass('animated bounceInDown');        
        $('#textoSeo').removeClass('animated bounceInDown');        
    }
 	if ($("#publicidad-online").hasClass('present')){
 		$('#tituloPublicidadOnline').addClass('animated bounceInDown');
        $('#imgPublicidadOnline').addClass('animated bounceInDown');        
        $('#textoPublicidadOnline').addClass('animated bounceInDown');
    }else{
    	$('#tituloPublicidadOnline').removeClass('animated bounceInDown');
        $('#imgPublicidadOnline').removeClass('animated bounceInDown');        
        $('#textoPublicidadOnline').removeClass('animated bounceInDown');        
    }
 	if ($("#soluciones-empresariales-en-la-nube").hasClass('present')){
 		$('#tituloSolucionesNube').addClass('animated bounceInDown');
        $('#imgSolucionesNube').addClass('animated bounceInDown');        
        $('#textoSolucionesNube').addClass('animated bounceInDown');
    }else{
    	$('#tituloSolucionesNube').removeClass('animated bounceInDown');
        $('#imgSolucionesNube').removeClass('animated bounceInDown');        
        $('#textoSolucionesNube').removeClass('animated bounceInDown');        
    }                          
} );