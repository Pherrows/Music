
// const moreBtn = document.querySelector(".more_list a");
// const hiddenItemEl = document.querySelectorAll(".hidden");

// const newElement = document.createElement('li');
// const originalElement = document.querySelector('.main .list_item');
// const clonedElement = originalElement.cloneNode(true); // true를 전달하여 자식 요소들도 복사
// newElement.appendChild(clonedElement);

const moreBtn = document.querySelector('.more_list a');
moreBtn.addEventListener('click', function() {
  // 새로운 요소 만들기
  const newElement = document.createElement('div');

  // 이전 요소 복사하여 붙여넣기
  const originalElement = document.querySelector('.list_item');
  const clonedElement = originalElement.cloneNode(true);
  newElement.appendChild(clonedElement);

  // 새로운 요소 문서에 삽입하기
  const container = document.querySelector('.list');
  container.appendChild(newElement);
});