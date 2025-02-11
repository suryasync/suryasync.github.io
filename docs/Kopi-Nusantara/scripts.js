/* scripts.js */

// Menghilangkan Preloader setelah Halaman Dimuat
window.addEventListener('load', function(){
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(function(){
      preloader.style.display = 'none';
    }, 1000); // Sesuaikan dengan durasi transisi opacity
  });
  
  // Smooth Scrolling untuk link dan area peta
  document.querySelectorAll('.explore-button, area').forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href') || this.getAttribute('href').substring(1);
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animasi Scroll Reveal
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);  

  // Showmore Sejarah

  document.querySelector('.show-more').addEventListener('click', function() {
    var events = document.querySelectorAll('.timeline-event');
    var showMoreText = this;

    if (showMoreText.textContent === 'Tampilkan lebih lengkap') {
      for (var i = 0; i < events.length; i++) {
        events[i].classList.add('show');
      }
      showMoreText.textContent = 'Sembunyikan';
    } else {
      for (var i = 1; i < events.length; i++) {
        events[i].classList.remove('show');
      }
      showMoreText.textContent = 'Tampilkan lebih lengkap';
    }
  });
  
  // Showmore Kebiasaan Kopi di Era Modern

  document.querySelector('.show-more-kebiasaan').addEventListener('click', function() {
    var details = document.querySelector('#kebiasaanmodern .content-details');
    var showMoreText = this;

    if (showMoreText.textContent === 'Tampilkan lebih lengkap') {
        details.classList.add('show');
        showMoreText.textContent = 'Sembunyikan';
    } else {
        details.classList.remove('show');
        showMoreText.textContent = 'Tampilkan lebih lengkap';
    }
  });

  // Showmore Pola Konsumsi di Kedai Kopi

  document.querySelector('.show-more-polakonsumsi').addEventListener('click', function() {
    var details = document.querySelector('#polakonsumsi .content-details');
    var showMoreText = this;

    if (showMoreText.textContent === 'Tampilkan lebih lengkap') {
        details.classList.add('show');
        showMoreText.textContent = 'Sembunyikan';
    } else {
        details.classList.remove('show');
        showMoreText.textContent = 'Tampilkan lebih lengkap';
    }
  });