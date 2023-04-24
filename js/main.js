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


