// Get the necessary elements
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
console.log(currentIndex)
// Display the initial slide
slides[currentIndex].style.display = 'block';

// Function to show the current slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((item) => {
    item.style.display = 'none';
  });

  // Display the selected slide
  slides[index].style.display = 'block';
}

// Function to handle the next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Wrap around to the first slide
  }
  showSlide(currentIndex);
  console.log(currentIndex + ' next')
}

// Function to handle the previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Wrap around to the last slide
  }
  showSlide(currentIndex);
  console.log(currentIndex + ' prev')

}

// Event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);


const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.container')

modalButton.addEventListener('click', () => {
  modal.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
});

overlay.addEventListener('click', (event) => {
  if (event.target !== overlay) {
    return;
  }
  modal.classList.remove('visible');
});
