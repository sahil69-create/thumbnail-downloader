function getThumbnail() {
  let url = document.getElementById("url").value;
  let videoId = "";

  if (url.includes("youtube.com")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be")) {
    videoId = url.split("/").pop();
  }

  if (!videoId) {
    alert("Invalid YouTube link!");
    return;
  }

  let thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  let loaderOverlay = document.getElementById("loader-overlay");
  let percentageText = document.getElementById("loader-percentage");
  
  // Show loader
  loaderOverlay.style.display = "flex";
  let progress = 0;
  percentageText.textContent = "0%";

  // Total time 12 seconds = 12000ms. 100 steps of 120ms each.
  let interval = setInterval(() => {
    progress += 1;
    percentageText.textContent = progress + "%";
    
    if (progress >= 100) {
      clearInterval(interval);
      // Hide loader
      loaderOverlay.style.display = "none";
      
      // Show thumbnail
      let img = document.getElementById("thumb");
      img.src = thumbnail;
      img.style.display = "block";
    }
  }, 120);
}

function downloadImg() {
  let img = document.getElementById("thumb").src;

  if (!img || document.getElementById("thumb").style.display !== "block") {
    alert("Generate thumbnail first!");
    return;
  }

  let a = document.createElement("a");
  a.href = img;
  a.download = "thumbnail.jpg";
  a.click();
}

// Auto-remove "?" and anything after it when pasting a link
document.getElementById("url").addEventListener("input", function(e) {
  let val = e.target.value;
  if (val.includes("?")) {
    e.target.value = val.split("?")[0];
  }
});

// --- Matrix Background Dynamic Generation ---
function generateMatrix() {
  const matrix = document.querySelector('.jp-matrix');
  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
  
  // Estimate cell size based on current window width to match CSS media queries
  let cellSize = 40; // Default PC size
  if (window.innerWidth <= 480) {
    cellSize = 20; // Mobile size
  } else if (window.innerWidth <= 768) {
    cellSize = 25; // Tablet size
  }
  
  // Calculate how many columns and rows are needed to fill the screen
  const cols = Math.floor(window.innerWidth / cellSize) + 2; // +2 for safety margin
  const rows = Math.floor(window.innerHeight / cellSize) + 2;
  const totalChars = cols * rows;
  
  // Generate the required number of spans
  let html = '';
  for (let i = 0; i < totalChars; i++) {
    html += `<span>${chars.charAt(Math.floor(Math.random() * chars.length))}</span>`;
  }
  
  matrix.innerHTML = html;
}

// Generate matrix on load
generateMatrix();

// Re-generate matrix when window is resized or device orientation changes
window.addEventListener('resize', generateMatrix);