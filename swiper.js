const mobile = window.matchMedia("(max-width:767px)");

let swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    slidesPerView: 'auto',
    spaceBetween: 20});
if (!mobile.matches) {
  swiper.destroy (true,true);
  swiper = null
}

function resize () {
  if (mobile.matches && !swiper) {
    swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        slidesPerView: 'auto',
        spaceBetween: 20})

  } else if (!mobile.matches && swiper) { 
   swiper.destroy(true,true);
    swiper = null;
    }
  }
  
  window.addEventListener('resize',resize);

  const buttonInit = document.querySelector('.windows-btn');
  const textButton = document.querySelector(".windows-enable__element");
  const hideItems = document.querySelectorAll('.swiper__hide_item');
  
  buttonInit.addEventListener('click', function() {
      hideItems.forEach(el => el.classList.toggle('swiper__hide_item_init'));
      const isHidden = Array.from(hideItems).every(item => item.classList.contains('swiper__hide_item_init'));
      if(isHidden){
          textButton.textContent = 'Скрыть';
      }else{
          textButton.textContent = 'Показать все';
      }
      textButton.classList.toggle('windows-enable__element-rotate');
  });
  