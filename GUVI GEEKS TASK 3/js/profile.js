    $.ajax({
    url: "php/profile.php",
    success: function(result){
      if(result == 0){
       document.getElementsByName("button1")[0].disabled = true;
      }
   }});