$(document).ready(function(){
  $(".footer-font").on('click', function(event) {
  
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

    $('.burger, .overlay, .header__inner-top__navigation a').on('click', function (e) {
        e.preventDefault()
        $('.header__inner-top__navigation').toggleClass('header__inner-top__navigation--open')
        $('.overlay').toggleClass('overlay--show')

        var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top 
    }, 800);
    })

  
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    document.getElementById('check').addEventListener('click', function() {
      var emailInput = document.getElementById('email-input');
      var email = emailInput.value;
  
      if (validateEmail(email)) {
        alert('Subscribed');
      } else {
        alert('Email must contain @');
      }
    });
  
    function validateEmail(email) {
      var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      return emailRegex.test(email);
    }

})