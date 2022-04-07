const anchor = document.querySelector('.nav-ul');
const href = document.querySelectorAll('.nav-li a href');
const tab = document.querySelector('.tab');
const tab1 = document.querySelector('#tab1');

anchor.addEventListener('click', function myFunction(e) {
  const contents = e.target.getAttribute('href');
  console.log(contents); //  -> 제대로 id값 출력됨
  contents.classList.add('tab'); //  -> 클래스리스트에 추가되지 않음 ㅜ
});

// 버튼 클릭시 컨텐츠 전환
//   activeCont = this.getAttribute('href');
//   document.querySelector(activeCont).style.display = 'block';
// }
