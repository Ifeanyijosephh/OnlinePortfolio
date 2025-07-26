let navLinks = document.getElementById("navLinks");
let navLink = document.getElementById("navLink");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function (e) {
    navLinks.classList.toggle("active");
    e.stopPropagation();
});

document.body.addEventListener("click", function () {
    navLinks.classList.remove("active");
});

const scrollContainer = document.getElementById('scrollContainer');
const cards = Array.from(scrollContainer.children);

// Step 1: Clone all original cards
cards.forEach(card => {
  const clone = card.cloneNode(true);
  clone.classList.add('clone');
  scrollContainer.appendChild(clone);
});

// Step 2: Clone again to the beginning for reverse scroll
cards.slice().reverse().forEach(card => {
  const clone = card.cloneNode(true);
  clone.classList.add('clone');
  scrollContainer.insertBefore(clone, scrollContainer.firstChild);
});

// Step 3: Scroll to the real content start
const singleCardWidth = cards[0].offsetWidth + 16; // includes gap
const startScroll = singleCardWidth * cards.length;
scrollContainer.scrollLeft = startScroll;

// Step 4: Recalculate on scroll to simulate endless
scrollContainer.addEventListener('scroll', () => {
  const scrollLeft = scrollContainer.scrollLeft;
  const totalScroll = scrollContainer.scrollWidth;
  const totalOriginalWidth = singleCardWidth * cards.length;

  if (scrollLeft <= 0) {
    // Jump forward to same position in original content
    scrollContainer.scrollLeft = scrollLeft + totalOriginalWidth;
  }

  if (scrollLeft >= totalScroll - cards.length * singleCardWidth) {
    // Jump back to same position
    scrollContainer.scrollLeft = scrollLeft - totalOriginalWidth;
  }

  updateActiveCard();
});

// Add active card highlighting logic (optional)
function updateActiveCard() {
  const center = scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;
  const allCards = scrollContainer.querySelectorAll('.card');
  allCards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    card.classList.toggle('active', Math.abs(center - cardCenter) < card.offsetWidth / 2);
  });
}

// Optional: Button scroll
document.getElementById('scrollLeft').onclick = () => {
  scrollContainer.scrollBy({ left: -singleCardWidth, behavior: 'smooth' });
};
document.getElementById('scrollRight').onclick = () => {
  scrollContainer.scrollBy({ left: singleCardWidth, behavior: 'smooth' });
};

 
// floating inputs 
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("textArea");
const  nameLabel = document.getElementById("nameLabelBox");
const emailLabel = document.getElementById("emailLabelBox");
const textLabel = document.getElementById("textLabelBox");


 
userName.addEventListener("click", function(){
    nameLabel.classList.toggle("active");
});
userEmail.addEventListener("click", function(){
    emailLabel.classList.toggle("active");
});
userMessage.addEventListener("click", function(){
    textLabel.classList.toggle("active");
});
 

 
