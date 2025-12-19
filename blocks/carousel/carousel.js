/**
 * Carousel block - image or content carousel
 * @param {Element} block The carousel block element
 */
export default async function decorate(block) {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  const track = document.createElement('div');
  track.className = 'carousel-track';

  // Extract slides from block
  const items = block.querySelectorAll(':scope > div');
  let currentSlide = 0;

  items.forEach((item, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    if (idx === 0) slide.classList.add('active');
    slide.appendChild(item.cloneNode(true));
    track.appendChild(slide);
  });

  carousel.appendChild(track);

  // Navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-button carousel-prev';
  prevBtn.innerHTML = '‹';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-button carousel-next';
  nextBtn.innerHTML = '›';
  nextBtn.setAttribute('aria-label', 'Next slide');

  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);

  // Carousel functions
  const slides = track.querySelectorAll('.carousel-slide');

  // Indicators
  const indicators = document.createElement('div');
  indicators.className = 'carousel-indicators';

  function goToSlide(idx) {
    currentSlide = idx % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });
    const dots = indicators.querySelectorAll('.carousel-indicator');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  items.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-indicator';
    if (idx === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => goToSlide(idx));
    indicators.appendChild(dot);
  });

  carousel.appendChild(indicators);

  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  // Auto-rotate
  let autoRotate = setInterval(() => goToSlide(currentSlide + 1), 5000);

  carousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
  carousel.addEventListener('mouseleave', () => {
    autoRotate = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });

  block.textContent = '';
  block.appendChild(carousel);
}
