// 슬라이드 영역

new Swiper('.inner .swiper', {
  loop: true, 
  autoplay: {
    delay: 3000
  }, 
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.inner .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.inner .swiper-button-next',
    prevEl: '.inner .swiper-button-prev',
  },
});

const btn1El = document.querySelector(".btn-1");
const btnEl = document.querySelector(".btn-2");
const menuEl = document.querySelector(".menu-2");

btn1El.addEventListener('click', function () {
  menuEl.classList.toggle('active');
});




//
const modalEl = document.querySelector('#modal'); 
const lpImg = document.querySelector('#modal .modal-wrapper img'); 
const lpTitleEl = document.querySelector('#modal .modal-wrapper .lp-title'); 
const musicEls = document.querySelectorAll('.commend-2 li a');

lpImg.addEventListener('click', function () {
  this.classList.add('rotate');
  setTimeout(() => {
    this.classList.remove('rotate');
  }, 1000);

  const nextIndex = Number(lpTitleEl.dataset.lpIndex) + 1;
  lpTitleEl.textContent = musicEls[nextIndex].textContent;
  lpTitleEl.dataset.lpIndex = nextIndex;
});

musicEls.forEach(function (musicEl, index) {
  musicEl.addEventListener('click', function () {
    modalEl.style.display = 'block';
    lpTitleEl.textContent = this.textContent;
    lpTitleEl.dataset.lpIndex = index;
  });
});