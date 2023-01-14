let btnsofa = document.querySelector('.sofa-container img:first-child');
let sofaImage = document.querySelector('#sofaImage');

btnsofa.addEventListener('click', () => {
  if(btnsofa.getAttribute('src') == './images/closeIcon.png') {
    btnsofa.setAttribute('src', './images/icon360.png');
    sofaImage.setAttribute('src', './images/sofa.png')
    return;
  }

  btnsofa.setAttribute('src', './images/closeIcon.png');
  sofaImage.setAttribute('src', './images/sofa.gif')
})