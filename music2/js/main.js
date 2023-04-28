
const moreBtn = document.querySelector(".more_list a");
const hiddenItemEl = document.querySelectorAll(".hidden");

moreBtn.addEventListener('click', () => {
  hiddenItemEl.forEach(item => {
    item.classList.toggle('hidden');
  });

  if (moreBtn.textContent === '닫기') {
    moreBtn.textContent = '더 보기';
  } else {
    moreBtn.textContent = '닫기';
  }
});




let html = '<li>';
html += '<img src>';
html += '</li>';