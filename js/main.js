document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.querySelectorAll('.video-wrap').forEach((wrap) => {
  const video = wrap.querySelector('video');
  const overlay = wrap.querySelector('.play-overlay');
  if (!video || !overlay) return;

  overlay.addEventListener('click', () => video.play());
  video.addEventListener('click', () => {
    if (video.paused) video.play();
  });
  video.addEventListener('play', () => overlay.classList.add('is-hidden'));
  video.addEventListener('pause', () => overlay.classList.remove('is-hidden'));
});
