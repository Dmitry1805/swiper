let activeButton = document.querySelector('.windows-btn_show');
let textButton = document.querySelector(".windows-enable__element")
let hideItems = document.querySelector('.windows-container_show');
let clicked = false;

  activeButton.addEventListener('click',function() {
  hideItems.classList.toggle('windows-container_show'); 
  if(hideItems.classList.contains("windows-container_show")){
    textButton.textContent = 'Показать всё'
    textButton.classList.toggle('windows-enable__element-rotate');
  }else{
    textButton.textContent = 'Скрыть'
    textButton.classList.toggle('windows-enable__element-rotate');
  }
})


const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1.3,
  slidesOffsetAfter: 75,
  spaceBetween:20
});