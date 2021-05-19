var label1="<label for='name'>Nom:</label>";
var input1="<input type='text' name='name' id='name' required><br>";
var label2="<label for='lastName'>Prenom:</label>";
var input2="<input type='text' name='lastName' id='lastName' required><br>";
var label3="<label for='email'>Email:</label>";
var input3="<input type='email' name='email' id='email' required><br>";
var label4="<label for='tel'>Téléphone:</label>";
var input4="<input type='text' name='tel' id='tel' required><br>";
var input5="<input type='submit' id='submit' value='envoyer'>";
var firstName=/[A-Z][a-z]*(-[A-Z][a-z]?)?/;
var lastName=/[A-Z][a-z]*(-[A-Z][a-z]?)?/;
var telNumber=/^0[6-7][0-9]{8}$/;
var mailAdress=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
$(document).ready(function(){
    $("body").prepend(label1,input1,label2,input2,label3,input3,label4,input4,input5);
    $("#lastName").css("margin-top","10px");
    $("#email").css("margin-top","10px");
    $("#tel").css("margin-top","10px");
    $("#submit").css("margin-top","10px");
    
    $("#submit").click(function(event){
        
        //alert($("#lastName").val());
        if(lastName.test($("#lastName").val())== false){
            event.preventDefault();
           
            $('#lastName').css("border","3px solid red");
         
        }else{
            $('#lastName').css("border","3px solid green");
        }

        if(firstName.test($("#name").val())== false){
            event.preventDefault();
            $('#name').css("border","3px solid red");
        }else{
            $('#name').css("border","3px solid green");
        }

        if(telNumber.test($("#tel").val())== false){
            
                event.preventDefault();
                $('#tel').css("border","3px solid red");
        }else{
            $('#tel').css("border","3px solid green");
        }

        if(mailAdress.test($("#email").val())== false){
            event.preventDefault();
                $('#email').css("border","3px solid red");
        }else{
            $('#email').css("border","3px solid green");
        }
    })
})