$(document).ready(function(){
	$('#search_name').keyup(function(){
		search_name = $(this).val();
		$('#names li').removeClass('highlight');

		if(jQuery.trim(search_name) != ''){
			$("#names li:contains('" + search_name + "')").addClass('highlight');
		}
	});
}); 


 
 $(document).ready( function(){
  
     var email_default='Enter your email..'; 
     $('input[type="email"]').attr('value',email_default).focus(function(){
	       if  ($(this).val()== email_default ) {
			   $(this).attr('value','');   
		   }
    	 }).blur(function(){
			if($(this).val()==''){  
			    $(this).attr('value', email_default);
			}
		 }   ); 
     	
   });
 
 
 
 /*$('input:button , p').click(function(){
        alert("The paragraph was clicked.");
    }); 
 
 $('#button').click(function(){
        alert("  clicked.");
         $(this).attr('value','Plese wait..');

   }); 
 
 
 */
/* 
 $(document).ready(
 function(){
	//$('#msg').fadeIn(1000); 
 //var name  =  $('#name').val();
 //alert(name ); 
 //var c= $('#msg').find('*').length;
// alert(c ); 



 $('h1').text('hhhh'); // change all h1 text to hhhh
 $('h1:last').text('xxxx'); // change last h1 text to xxxx
 var text= $('#main_header').text();// get text of id selecter=main_header
 alert(text );
 }
); */ 

 


 
/*
$(window).load(function(){
	
	alert('loaded'); 
 }
);*/
 


/*
$( window ).unload(function() {
      alert('unload');  //NS_ERROR_NOT_AVAILABLE: 
});
*/


/*
window.onbeforeunload=before;
function before(evt)
{
  
  return "This will appear in the dialog box along with some other default text";
   //If the return statement was not here, other code could be executed silently
   //   (with no pop-up)
}*/



/*
.xxxxxxxxxxxxxxxx( function(){
  
      alert("dgdfg"); 
     	
   });*/