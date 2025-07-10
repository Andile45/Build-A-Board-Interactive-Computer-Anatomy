const toggleBtn = document.getElementById("toggleBtn");
const motherboard = document.getElementById("motherboardView");
const bios = document.getElementById("biosView");

toggleBtn.addEventListener("click", () => {
  if (motherboard.style.display !== "none") {
    motherboard.style.display = "none";
    bios.style.display = "block";
    toggleBtn.textContent = "Switch to Motherboard";
  } else {
    motherboard.style.display = "grid";
    bios.style.display = "none";
    toggleBtn.textContent = "Switch to BIOS";
  }
});

const components = document.querySelectorAll(".component");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const closeModal = document.getElementById("closeModal");

components.forEach((comp) => {
  comp.addEventListener("click", () => {
    modalTitle.textContent = comp.getAttribute("data-name");
    modalInfo.textContent = comp.getAttribute("data-info");
    modalImage.src = comp.getAttribute("data-image");
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
