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
