<script>
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".part-flex i");
  const hideTexts = ["N/A", "None", "No Information"];

  targets.forEach(el => {
    if (hideTexts.includes(el.textContent.trim())) {
      el.style.display = "none";
    }
  });
});
</script>


<script>
function openTab(evt, tabName) {

  // hide all tabcontent
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // remove active class from buttons
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // show selected tab
  document.getElementById(tabName).style.display = "block";

  // activate button
  evt.currentTarget.classList.add("active");
}
</script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const hidePattern = /^(n\/a|none|no information)?$/i;

  document.querySelectorAll(".content").forEach(el => {
    const text = el.textContent.trim();

    if (!text || hidePattern.test(text)) {
      el.style.display = "none";
    }
  });
});
</script>
<script>
$(document).ready(function () {

  // When clicking any link that leads to a profile
  $('a').on('click', function (e) {
    const href = $(this).attr('href');

    // Check if it's a profile link
    if (href && (href.indexOf('showuser') > -1 || href.indexOf('index.php?act=Profile') > -1)) {
      e.preventDefault();

      // Activate popout mode and fade in overlay
      $('#profile').addClass('popout');
      $('.exit-pro').fadeIn('fast');

      // Load profile data into the popout
      $.get(href, function (data) {
        const profileHTML = $('#outerprofile', data).html();
        $('#profile-content').html(profileHTML);
      });

      return false;
    }
  });

  // Function to close the popout
  function closeProfile() {
    if ($('#profile').hasClass('popout')) {
      $('#profile').removeClass('popout');
      $('.exit-pro').fadeOut('fast');
      $('#profile-content').html('<div id="outerprofile">closing...</div>');
    }
  }

  // Click events for closing
  $('.close-pro, .exit-pro').on('click', function () {
    closeProfile();
  });

  // ESC key closes the profile
  $(document).on('keyup', function (evt) {
    if (evt.key === 'Escape' && $('#profile').hasClass('popout')) {
      closeProfile();
    }
  });

});
</script>
