import './styles.scss';

document.querySelector('.nav-opener').addEventListener('click', () => {
  document.body.classList.toggle('is-nav-opened');
});
