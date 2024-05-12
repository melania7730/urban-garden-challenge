document.getElementById("moreInfoBtn").addEventListener("click", function () {
  let userName = prompt("What's your name?");
  let userEmail = prompt("What's your email?");
  if (userName && userEmail) {
    alert(
      `Thanks, ${userName}! We'll send more fun details to soon! Or feel free to email us at info@raffleshillsgarden.com`
    );
  } else {
    alert("Oops! Looks like you missed something. Try again!");
  }
});
