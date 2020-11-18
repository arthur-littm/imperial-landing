const anchors = document.querySelectorAll('.anchor');
const cont = document.getElementById('containerJs');
window.addEventListener('scroll', (e) => {
  anchors.forEach((anchor) => {
    const topPos = anchor.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY + 16 >= topPos) {
      const links = document.querySelectorAll('.navigation-link')
      links.forEach((l) => { l.classList.remove('active')})
      const link = document.querySelector(`a[href='#${anchor.id}']`)
      link.classList.add('active');
    }
  });
});
