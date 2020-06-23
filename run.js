
        
    $(document).ready(function(){
        
        
        
        
        function logInAndSingUp() { 

            $("#login_button_close").click(function(){
            
            
                $("body").css("overflow","scroll");

                $("#login_popup").css("display","none");
                
                
            })
            
            $("#login").click(function(){
                
                $("body").css("overflow","hidden");
                
                $("#login_popup").css("display","flex");
                
                
            })
            
            
             $("#singup_button_close").click(function(){
                
                $("body").css("overflow","scroll");
                $("#singup_popup").css("display","none");
                
                
            })
            
            $("#singup").click(function(){
                
                $("body").css("overflow","hidden");
                $("#singup_popup").css("display","flex");
                
                
            })
            
            


         }
      
        function slideShowPosters() { 

            $('.poster_slideshow').children().hide();

            $(".poster_slideshow img:nth(0)").show();
        
            setInterval(function() { 
           $('.poster_slideshow  img:first').fadeOut(500).next().fadeIn(500).end().appendTo('.poster_slideshow');},  2000);


         }

        function checkLogInAndSignUpValidation() { 
    

    var flag1=false;
    var flag2=false;
    
    $("#login_text").focusin(function(){
 
    
        $("#login_text").attr("placeholder", "Must be at least 5 letters long");
     
      
    })
 
    $("#login_text").focusout(function(){
 
      
     checkUsernameLength();
     
     checkBoth();
     
    })
 
 
    function checkUsernameLength(){
 
     var size =  $("#login_text").val().length;
     
 
     if(size<5){
 
         
           $("#login_text").css("background-color", "red");
         
         
     }
     
    if(size===0){
 
          
        $("#login_text").css("background-color", "white");
         
 
     }
 
 
     if(size>=5) {
 
        $("#login_text").css("background-color", "green");

        flag1=true;
       
     }
     
     
 
 
    }
 ///////////////////////////////////////////
     
    $("#login_password").focusin(function(){
 
 
     
 
    $("#login_password").attr("placeholder", "Must be at least 5 letters long");
 
 
    })
 
    $("#login_password").focusout(function () {
 
 
        passwordCheck();
        checkBoth();
    
 
      })
 
    function passwordCheck() {
 
       var passwordSize = $("#login_password").val().length;
 
       if(passwordSize<5){
 
         
        $("#login_password").css("background-color", "red");
         
       }
       
       if(passwordSize>=5) {
 
    
 
        $("#login_password").css("background-color", "green");

        flag2=true;

       }
 
       if(passwordSize===0){
 
        
 
        $("#login_password").css("background-color", "white");
       }
 
 
    }
 
    
 
      function checkBoth(){
 
        if(flag1===true && flag2===true){

            $("#login_button").css("background-color", "green");

        }



      }
   
////////////////////////////////////////////////////////////

 
 var flag3=false;
 var flag4=false;
 var flag5=false;
 var flag6=false;

$("#singup_username").focusin(function(){
 
    
    $("#singup_username").attr("placeholder", "Must be at least 5 letters long");
 
  
})

$("#singup_username").focusout(function(){

  
 checkSingUp();
 
 checkSingUpFlags();
 
})


function checkSingUp(){

 var size =  $("#singup_username").val().length;
 

 if(size<5){

     
       $("#singup_username").css("background-color", "red");
     
    
     
 }
 
if(size===0){

      
    $("#singup_username").css("background-color", "white");
     
    

 }


 if(size>=5) {

    $("#singup_username").css("background-color", "green");

    flag3=true;
    
   
 }
 
 


}

/////////////////////



$("#singup_password").focusin(function(){
 
    
    $("#singup_password").attr("placeholder", "Must be at least 5 letters long");
 
    
})

$("#singup_password").focusout(function(){

  
 checkSingUpPassword();
 checkPassWords();
 
 checkSingUpFlags();
 
 

 
})


function checkSingUpPassword(){

 var size =  $("#singup_password").val().length;
 
 

 if(size<5){

     
       $("#singup_password").css("background-color", "red");
     
      
 }
 
if(size===0){

      
    $("#singup_password").css("background-color", "white");
     
    

 }


 if(size>=5) {

    $("#singup_password").css("background-color", "green");

    flag4=true;
    
   
 }
 
 


}

function checkPassWords() {

  var sizeOfPassword =  $("#singup_password").val().length;

    if($("#singup_password").val()===$("#singup_password_re").val()){

        $("#singup_password_re").css("background-color", "green");

        flag5=true;
    }

    else {

        $("#singup_password_re").css("background-color", "red");

        
    }

    if(sizeOfPassword===0){

        $("#singup_password_re").css("background-color", "red");

        
    }

}


/////////////////////////////////


$("#singup_password_re").focusin(function(){
 
    
    $("#singup_password_re").attr("placeholder", "Must be same as password !");
 

  
})

$("#singup_password_re").focusout(function(){

  
 

  checkPassWords();

  checkSingUpFlags();
 
})

////////////////////////////////////////

    $("#singup_email_text").focusin(function () { 

        $("#singup_email_text").attr("placeholder", "Type valid email");
        
    });

    

    $("#singup_email_text").focusout(function () { 

        checkSingUpFlags();
        
    });



    $("#singup_email_text").keyup(function () { 
        
      

        if(validateEmail()){

          $("#singup_email_text").css("background-color", "green");
 
          flag6=true;
        }

        else {

            $("#singup_email_text").css("background-color", "red");

        }


    });

    function validateEmail(){
		
		var email=$("#singup_email_text").val();
		
         var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
         
		 if(reg.test(email)){
             return true;
             
		 }else{
             return false;
             
		 }

	}


    function checkSingUpFlags() { 


        if(flag3===true && flag4===true && flag5===true && flag6===true )
         {

         $("#singup_button").css("background-color", "green");

        return true ;

     }

     else {

        return false;
     }

         


         }

         }


         function moviePicker() { 
        //pocetak
        
         $("#flex_test section").hide();


          var txt;

         $("#button_ready").click(function () { 

           
    

            txt = $( "#genere_select option:selected" ).text();

            if(txt==="Sci-fi"){

                $("#flex_test section").hide();
                $("#flex_test #sci_fi_id").show();


            }
           
            if(txt==="War"){

                $("#flex_test section").hide();
                $("#flex_test #war_id").show();

            }

            if(txt==="All"){

                $("#flex_test section").show();

            }

            if(txt==="Mystery"){

                $("#flex_test section").hide();
                

            }
           

            
          })

       


          


          //kraj
         }   


       logInAndSingUp();

       slideShowPosters();

       checkLogInAndSignUpValidation();

       moviePicker();

       
    })



