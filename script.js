// Fishing tips
const tips = [
    "Fish bite best at dawn and dusk!",
    "Try different lure colors to match the water.",
    "Patience is the key to a great catch.",
    "Check local fishing reports before heading out.",
    "Keep your hooks sharp for better success!"
  ];
  
  document.getElementById("surpriseBtn").addEventListener("click", () => {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").textContent = tip;
  });
  
  // Share your catch form
  const form = document.getElementById("catchForm");
  const gallery = document.getElementById("catchGallery");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("photo");
    const name = document.getElementById("name").value;
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.alt = name + "'s catch";
        gallery.appendChild(img);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
    form.reset();
  });