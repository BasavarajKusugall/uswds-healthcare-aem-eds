/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footer = document.createElement('div');
  footer.className = 'footer-wrapper';
  
  footer.innerHTML = `
    <div class="footer-content">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-column">
            <h3>About MHS</h3>
            <ul>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News & Updates</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Find a Doctor</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Appointments</a></li>
              <li><a href="/patient-portal">Patient Portal</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Health Library</a></li>
              <li><a href="#">Forms & Documents</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Connect With Us</h3>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><span class="icon icon-facebook"></span></a>
              <a href="#" aria-label="Twitter"><span class="icon icon-twitter"></span></a>
              <a href="#" aria-label="YouTube"><span class="icon icon-youtube"></span></a>
              <a href="#" aria-label="Instagram"><span class="icon icon-instagram"></span></a>
            </div>
            <p class="footer-description">Stay updated with the latest health information and news.</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-legal">
            <p>&copy; ${new Date().getFullYear()} Military Health Services. All rights reserved.</p>
            <ul class="legal-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">FOIA</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  
  block.appendChild(footer);
}
