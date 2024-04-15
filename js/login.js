const button = document.querySelector('button');
const email = () => {
    const useremail = document.getElementById('useremail').value
    return useremail
}
const passwd = () => {
    const userepasswd = document.getElementById('userpasswd').value
    return userepasswd
}


import PocketBase from "../node_modules/pocketbase/dist/pocketbase.es.mjs";

const pb = new PocketBase('http://127.0.0.1:8090');

button.addEventListener('click', async () => {
    const data = {
        email_user: email(),
        passwd_user: passwd()
    };
    console.log(data)
    const authData = await pb.collection('users').authWithPassword(data.email_user, data.passwd_user);
    window.location.href = "/brand.html"
})



$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});