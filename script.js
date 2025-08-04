// Starfield canvas
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Star logic
const stars = Array.from({ length: 400 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  radius: Math.random() * 1.5 + 0.5,
  alpha: Math.random(),
  flicker: Math.random() * 0.02 + 0.01,
}));

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    star.alpha += (Math.random() > 0.5 ? 1 : -1) * star.flicker;
    star.alpha = Math.max(0.1, Math.min(1, star.alpha));

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }

  requestAnimationFrame(animate);
}
animate();

//Captcha section
const captchaText=document.getElementById("captchaText"),captchaInput=document.getElementById("captchaInput");
let generatedCaptcha="";
function generateCaptcha(){generatedCaptcha="";
    const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    for(let i=0;i<6;i++)generatedCaptcha+=chars[Math.floor(Math.random()*chars.length)];
    captchaText.textContent=generatedCaptcha}
generateCaptcha();
document.getElementById("loginBtn").addEventListener("click",()=>{const u=document.getElementById("username").value.trim(),p=document.getElementById("password").value.trim(),c=captchaInput.value.trim();
    if(!u||!p||!c)return alert("Fill in all fields.");if(c!==generatedCaptcha)return alert("Invalid captcha.");
    document.getElementById("loginScreen").style.display="none";
    document.querySelector("main").style.display="grid";document.querySelector(".nav").style.display="block"});


// Login to dashboard transition
document.getElementById("loginBtn").onclick = () => {
  const login = document.getElementById("loginScreen");
  const main = document.getElementById("mainApp");

  login.style.opacity = 0;
  setTimeout(() => {
    login.classList.add("hidden");
    main.classList.remove("hidden");
    main.classList.add("fade-in");
  }, 1000);
};

// To-Do Logic
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return alert("Enter a task.");

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Contact Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email.");
    return false;
  }

  alert("Message sent!");
  return true;
}
