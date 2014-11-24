  $roomField = $("#room_name");

  var redirectToRoom = function(event) {
    console.log($roomField.val());
    window.test_field = $roomField;
    if (event.type === "click"){
      if ($roomField.val() === ""){
        alert("You have to set the name of the ROOM");
      }else{
        window.location = window.location.pathname + $roomField.val();
      }
    } else if (event.type === "keypress"){
      if (event.keyCode === 13){
        if ($roomField.val() === ""){
          alert("You have to set the name of the ROOM");
        } else {
          window.location = window.location.pathname + $roomField.val();
        }
      }
    }
  }

  $("#room_name").on("keypress", redirectToRoom);
  $("#btn-room").on("click", redirectToRoom);
