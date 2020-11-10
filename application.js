const anchors = document.querySelectorAll('.anchor');

window.addEventListener('scroll', (e) => {
  anchors.forEach((anchor) => {
    // console.log(anchor, anchor.offsetTop)
    if (window.pageYOffset >= anchor.offsetTop) {
      const links = document.querySelectorAll('.navigation-link')
      links.forEach((l) => { l.classList.remove('active')})
      const link = document.querySelector(`a[href='#${anchor.id}']`)
      link.classList.add('active');
    }
    // console.log(anchor.offsetTop)
  });
});
