/* scripts.js */

// Menghilangkan Preloader setelah Halaman Dimuat
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(function () {
    preloader.style.display = 'none';
    document.body.style.overflowX = 'hidden'; // Tambahkan ini
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

document.querySelector('.show-more').addEventListener('click', function () {
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

document.querySelector('.show-more-habits').addEventListener('click', function () {
  var details = document.querySelector('#modernhabits .content-details');
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

document.querySelector('.show-more-consumtionpatterns').addEventListener('click', function () {
  var details = document.querySelector('#consumtionpatterns .content-details');
  var showMoreText = this;

  if (showMoreText.textContent === 'Tampilkan lebih lengkap') {
    details.classList.add('show');
    showMoreText.textContent = 'Sembunyikan';
  } else {
    details.classList.remove('show');
    showMoreText.textContent = 'Tampilkan lebih lengkap';
  }
});

// Showmore Teknik Pembuatan

document.querySelector('.show-more-technique').addEventListener('click', function () {
  var details = document.querySelector('#technique .content-details');
  var showMoreText = this;

  details.classList.toggle('show');
  showMoreText.textContent = details.classList.contains('show') ? 'Sembunyikan' : 'Tampilkan lebih lengkap';
});

// Komentar

document.addEventListener('DOMContentLoaded', function () {
  fetchComments();
  setInterval(fetchComments, 5000); // Interval setiap 5 detik
});

let submitted = false;
let commentsVisible = false;
let allComments = [];

document.getElementById('commentForm').addEventListener('submit', function (e) {
  setTimeout(function () {
    if (submitted) {
      fetchComments();
      document.getElementById('commentForm').reset();
      alert('Komentar berhasil dikirim!');
      submitted = false;
    }
  }, 1000);
});

function fetchComments() {
  fetch('https://script.google.com/macros/s/AKfycbzZyC0l_LvDOI_u7ZbIWc1D_ujT89RY4WqMXLzcKsdnfT_y8YnDpdLlV1EioJScr_Ul1w/exec')
    .then(response => response.json())
    .then(data => {
      allComments = data.comments;
      updateComments();
      updateButtons();
    });
}

function updateComments() {
  const commentsContainer = document.getElementById('comments');
  commentsContainer.innerHTML = '';

  if (allComments.length > 0) {
    const firstComment = allComments[0];

    // Tampilkan komentar pertama (pinned comment)
    const firstCommentElement = document.createElement('div');
    firstCommentElement.className = 'comment';
    firstCommentElement.innerHTML = `
            <p><strong>${firstComment.nama}</strong></p>
            <p>${firstComment.komentar}</p>
        `;
    commentsContainer.appendChild(firstCommentElement);

    if (commentsVisible) {
      const remainingComments = allComments.slice(1);
      remainingComments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
                    <p><strong>${comment.nama}</strong></p>
                    <p>${comment.komentar}</p>
                `;
        commentsContainer.appendChild(commentElement);
      });
    }
  }
}

function updateButtons() {
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const hideCommentsBtn = document.getElementById('hideCommentsBtn');

  if (allComments.length > 1) {
    if (commentsVisible) {
      hideCommentsBtn.style.display = 'block';
      seeMoreBtn.style.display = 'none';
    } else {
      hideCommentsBtn.style.display = 'none';
      seeMoreBtn.style.display = 'block';
    }
  } else {
    seeMoreBtn.style.display = 'none';
    hideCommentsBtn.style.display = 'none';
  }

  seeMoreBtn.onclick = function () {
    commentsVisible = true;
    updateComments();
    updateButtons();
  };

  hideCommentsBtn.onclick = function () {
    commentsVisible = false;
    updateComments();
    updateButtons();
  };
}
