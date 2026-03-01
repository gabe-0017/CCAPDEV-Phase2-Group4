/* login verification */
const form = document.getElementById("loginForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault(); // stop page reload

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // any input is valid (for now)
        if(username !== "" && password !== ""){
            window.location.href = "pages/home.html";
        }
        else{
            alert("Please enter username and password.");
        }
    });
}

/* signup verification */
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("new_pass").value;
    const username = document.getElementById("new_user").value;
    const fullname = document.getElementById("full_name").value;

    // fake registration (doesn't save any info)
    if (fullname !== "" && email !== "" && username !== "" && password !== "") {
      window.location.href = "home.html";
    } else {
      alert("Please enter your information.");
    }
  });
}
