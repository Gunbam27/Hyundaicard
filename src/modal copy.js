// Modal을 가져옵니다.
const modals = document.getElementsByClassName('modal');
// Modal을 띄우는 클래스 이름을 가져옵니다.
const btns = document.getElementsByClassName('btn');
// Modal을 닫는 close 클래스를 가져옵니다.
const spanes = document.getElementsByClassName('close');

// 클릭하여 내용 바꾸기
const gallery = document.querySelector('.gallery_container');
let title = document.querySelector('.header-txt h1');
let mimg = document.querySelector('.header-img img');
let summary = document.querySelector('.header-txt span');
let desc = document.querySelectorAll('.header-txt p');

const before = document.querySelector('.before');
const sub = document.querySelector('.sub-container');
let funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function () {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick = function () {
      // 갤러리컨테이너내용숨기기
      gallery.style.display = 'none';
      cardname.style.display = 'none';

      // data-id 출력
      let id = btns[num].dataset.id;
      console.log('data-id', id);
      // id에 따른 객체 데이터 읽어오기
      let data = deck[id];
      console.log('데이터:', data);

      // data-id에따라 바뀌는 내용
      mimg.src = `images/${id}all.png`;
      title.innerText = data['타이틀'];
      summary.innerText = data['요약'];
      data['설명'].forEach((val, idx) => {
        desc[idx].innerText = val;
      });
      /////////////////////
      sub.style = 'display:block';
      before.addEventListener('click', () => {
        sub.style = 'display:none';
        gallery.style.display = 'block';
        cardname.style.display = 'block';
      });

      // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
      // spanes[num].onclick = () => {
      //   modals[num].style.display = 'none';
      // };
    };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
// funcs=[Modal(0),[Modal(1),[Modal(2).....[Modal(8)]
for (var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
// funcs[0](); funcs[1](); funcs[2]();.....funcs[8]();
for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}

var deck = {
  green: {
    타이틀: 'the Green Edition2',
    요약: 'My First Luxury',
    설명: [
      '자유와 모험을 즐기는, 나의 첫 럭셔리 카드',
      '국내외 여행·해외쇼핑 5% 적립',
    ],
  },
  red: {
    타이틀: 'the Red Edition5',
    요약: 'My Hot Luxury',
    설명: ['럭셔리 라이프스타일을 매순간 더 핫하게', '20만원 프리미엄 바우처'],
  },
  pink: {
    타이틀: 'the Pink',
    요약: 'My First Seduction',
    설명: ['프로쇼퍼들의 필수 럭셔리 카드', '프리미엄쇼핑·고메 5% 적립'],
  },
  purple: {
    타이틀: 'the Purple osée',
    요약: 'Not Just Luxury',
    설명: [
      '취향따라 설계·사용하는 바우처 네트워크',
      '항공마일리지와 M포인트 중 선택 적립 기본 적립',
      '혜택에 추가로 제공되는 로열티 보너스',
    ],
  },
  fam: {
    타이틀: '현대카드Z family',
    요약: '패밀리용 구간반복 할인카드',
    설명: ['우리 가족을 위한 쇼핑·마트·배달 10% 할인, 주유 100/L 할인'],
  },
  mboo: {
    타이틀: '현대카드 M BOOST',
    요약: '쓰면 쓸수록 강력한 포인트카드',
    설명: ['어디서나 한도 없는 최대 4.5% 적립', '페이·해외결제 5% 적립'],
  },
  xboo: {
    타이틀: '현대카드 X BOOST',
    요약: '쓰면 쓸수록 강력한 할인카드',
    설명: ['어디서나 최대 1.5%', '할인 페이·해외결제 5% 할인'],
  },
  naver: {
    타이틀: '네이버 현대카드',
    요약: '쓸 때마다 네이버페이 포인트 적립받는 카드',
    설명: [
      '네이버플러스 멤버십 무료 이용권 제공',
      '네이버플러스 멤버십 적립 대상 결제 시, 네이버페이 포인트 최대 5% 적립',
      '그 외 가맹점 네이버페이 포인트 1% 적립',
    ],
  },
  black: {
    타이틀: '혜택의 블랙 라벨',
    요약: '현대카드 MX Black',
    설명: ['M의 전 영역 적립과 X의 10% 할인을 동시에'],
  },
}; ///////// lang 객체 ///////

// 버튼마다 이벤트리스너 등록
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', () => {
//     // 버튼갯수 출력
//     console.log('버튼갯수', [i]);
//     // data-id 출력
//     let id = event.currentTarget.dataset.id;
//     console.log('data-id', id);
//     // id에 따른 객체 데이터 읽어오기
//     let data = deck[id];
//     console.log('데이터:', data);
//     // 메인이미지 변경하기
//     mimg.src = `images/${id}all.png`;

//     title.innerText = data['타이틀'];
//     summary.innerText = data['요약'];
//     desc.innerText = data['설명'];

//     sub.style = 'display:block';
//   });
// }
// before.addEventListener('click', () => {
//   sub.style = 'display:none';
// })
