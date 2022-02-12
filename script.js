$(document).ready(function () {
  $("#submitbtn").click(function (e) {
    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test($email);
    }
    e.preventDefault();
    if ($("input#email").val() == "") {
      $(".emailError1").hide();
      $(".emailError2").show();
    } else if (!validateEmail($("input#email").val())) {
      $(".emailError1").show();
      $(".emailError2").hide();
    } else {
      window.location = "./success.html";
    }
  });
});
