  //   $.ajax({
  //   url: "php/profile.php",
  //   success: function(result){
  //     if(result == 0){
  //      document.getElementsByName("button1")[0].disabled = true;
  //     }
  //  }});

   var byeEl = document.getElementById("bye");
   function home()
   {
      byeEl.innerText = " See you again !!"
      setTimeout(()=> {
        window.location.href = 'login.html';			 }
     ,3000);
   }
