
document.getElementById("togglePassword").addEventListener("click", function () {
    const password = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    window.location.href = "info.html";
  
    //check a valid email
    const emailInput = document.getElementById("email");
    
        emailInput.oninput = function () {
        const email = emailInput.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
        if (!isValid && email !== "") {
          message.textContent = "Invalid email format.";
        } else {
          message.textContent = "Valid email ✔️";
          message.className = "success";
        }
    }
     
  

    const message = document.getElementById("message");
//ensure username has specific number of characters

    const username = document.getElementById("username");

    username.oninput = function () {
      if (username.value.length < 5) {
        username.setCustomValidity("Username must be at least 5 characters.");
      } else {
        username.setCustomValidity("");
      }
    };

    //ensure a strong password
    const password = document.getElementById("password");
    const value = password.value;
    const isLongEnough = value.length >= 8;
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(value);

if (!isLongEnough || !isAlphanumeric) {
  message.textContent ="Password must be at least 8 characters and alphanumeric.";
} else {
  message.textContent ="Password accepted!";
}
});

  
  const button = document.getElementById("colorButton");
  button.onclick = function () {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }; 

  //change dark mode and light mode
  const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    themeIcon.onclick = function () {
        if (body.classList.contains("light-mode")) {
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
          themeIcon.textContent = "🌞"; 
        } else {
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
          themeIcon.textContent = "🌙"; 
        }
    }
    button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#0056b3";
    button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#007bff";
    button.style.boxShadow = "none";
    button.style.transform = "translateY(0)";
    });

function toggleHint() {
    const hintBox = document.getElementById("hintBox");
    hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
  }

  //enable enter key when filling the form 
  const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
      input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          event.preventDefault(); // prevent form submission or default behavior
          const nextInput = inputs[index + 1];
          if (nextInput) {
            nextInput.focus();
          }
        }
      });
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
      slides.forEach(slide => slide.style.display = "none");
      slides[index].style.display = "block";
    }

    function changeSlide(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      showSlide(slideIndex);
    }

    function autoPlay() {
      changeSlide(1);
    }

    // Show first slide and start auto-play
    showSlide(slideIndex);
    setInterval(autoPlay, 3000);

    function openTab(evt, tabName) {
        const tabContent = document.querySelectorAll(".tab-content");
        const tabLinks = document.querySelectorAll(".tab-link");
  
        tabContent.forEach(tab => tab.classList.remove("active"));
        tabLinks.forEach(btn => btn.classList.remove("active"));
  
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
      }

      //accordion
      function toggleHelp() {
        const container = document.getElementById('helpAccordion');
        container.style.display = container.style.display === 'block' ? 'none' : 'block';
      }

      function toggleAccordion(header) {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === "block";
        document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");
        body.style.display = isOpen ? "none" : "block";
      }
    