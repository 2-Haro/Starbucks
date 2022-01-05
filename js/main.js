const searchEl = document.querySelector('.search'); // 'search'라는 class를 가진 요소를 CSS 선택자에서 찾아서 'searchEl'이라는 변수에 할당 // document: 하나의 요소(HTML)
const searchInputEl = searchEl.querySelector('input'); // 'search'의 input 요소를 CSS 선택자에서 찾아서 'searchInputEl'이라는 변수에 할당 // 효율성을 위해서 searchEl 안에서 input 요소를 찾도록 한다
// const searchInputEl = document.querySelector('.search input'); 과 동일

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
}); // 'search'라는 class를 가진 div 요소를 클릭하면 'input' 요소에 focus를 하는 함수를 실행 // 'input' 요소 자체를 선택하지 않고 'input' 요소가 소속되어 있는 search라는 class를 가지고 있는 div 요소 아무곳이나 클릭해도 input focus 가능(maerial-icon을 클릭해도 focus 가능)

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
}); // 'input' 요소가 focus가 되면, 요소의 클래스 정보를 가지고 있는 객체에 focused 클래스가 추가되고, 'input' 요소에 추가할 수 있는 HTML 속성 'placeholder'를 통해 input 부분에 입력할 hint(통합검색)작성

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
}); // 'input' 요소의 focus가 해제되면(blur), 요소의 클래스 정보를 가지고 있는 객체에 focused 클래스가 제거되고, 'input' 요소에 추가할 수 있는 HTML 속성 'placeholder'를 통해 input 부분에 입력할 hint(빈 문자)작성

const badgeEl = document.querySelector('header .badges'); // 'header' 선택자의 하위 class인 'badges' 선택자를 찾아서 'badgeEl'이라는 변수에 할당 // document: 하나의 요소(HTML)
const toTopEl = document.querySelector('#to-top'); // 'to-top'이라는 id를 가진 요소를 CSS 선택자에서 찾아서 'toTopEl'이라는 변수에 할당

window.addEventListener('scroll', _.throttle(function () { // 'window' 객체는 프로젝트가 출력되는 화면 자체를 의미(window: 브라우저의 하나의 탭(브라우저 창), 화면 자체)
  console.log(window.scrollY); // 'scroll' 이벤트를 추가해서 scroll 되면 익명의 함수를 실행(window.scrollY) // 화면이 스크롤 될 때 'window' 객체 부분의 scrollY 속성의 값이 갱신 -> 화면이 위에서부터 몇 px 지점에 위치하는지
  if (window.scrollY > 500) { // 화면이 위에서부터 500px 이상 지점에 위치
    gsap.to(badgeEl, .6, { // 애니메이션 처리 방법: gsap.to(요소, 지속시간(초), 옵션) // 배지 숨기기
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, { // CSS 선택자('#to-top')만 적어도 gsap.to 메소드가 해당 요소를 자동으로 찾는다 // 버튼 보이기
      x: 0  // 원래 위치로 돌아오게 해서 버튼이 보이게 한다
    });
  }
  else {
    gsap.to(badgeEl, .6, { // 배지 보이기
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, { // CSS 선택자('#to-top')만 적어도 gsap.to 메소드가 해당 요소를 자동으로 찾는다 // 버튼 숨기기
      x: 100  // x축 방향(오른쪽)으로 100px 움직이도록 해서 버튼을 숨긴다
    });
  }
}, 300)); // 'throttle' 기능을 통해 300 millisecond(0.3초)단위로 부하를 줘서 실행되는 함수의 개수를 제한 // _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () { // 'to-top'이라는 id를 가진 div 요소를 클릭하면 gsap.to 메소드를 사용해서 window 객체를 통해 화면 자체를 애니메이션 처리(0.7초 동안 화면(window)의 위치를 0px로 옮긴다)
  gsap.to(window, .7, {
    scrollTo: 0 // 화면(window)의 위치를 0px로 옮긴다 // ScrollToPlugin 라이브러리
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in'); // 'visual'이라는 class를 가진 요소의 후손인 'fade-in'이란 class를 가진 모든 요소를 CSS 선택자에서 찾아서 'fadeEls'라는 변수에 할당 // document: 하나의 요소(HTML)
fadeEls.forEach(function (fadeEl, index) { // HTML 부분에서 찾은 'fade-in'이라는 요소들의 개수만큼 'forEach'의 인수로 작성한 함수가 실행된다
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1 // 'fade-in'이라는 class를 가진 요소들을 찾아서 0.7초의 지연시간을 두며 순차적으로 각 요소들의 opacity를 1로 1초 동안 바꿔가며 화면에 나타나도록 한다
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생
  loop: true // 반복 재생
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' (기본값)
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생
  autoplay: { // 자동 재생
    delay: 5000 // 5초에 한 번씩 자동으로 슬라이드 실행(기본값: 3초)
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자가 페이지 번호 요소 제어 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드를 보는 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이드를 보는 버튼
  }
});
new Swiper('.awards .swiper-container', {
    // direction: 'horizontal' (기본값)
    autoplay: true, // 자동 재생
    loop: true, // 반복 재생
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 하나의 화면에 보이는 슬라이드 개수
    navigation: {
      prevEl: '.awards .swiper-prev',
      nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion'); // 'promotion'이라는 class를 가진 요소를 CSS 선택자에서 찾아서 'promotionEl'이라는 변수에 할당 
const promotionToggleBtn = document.querySelector('.toggle-promotion'); // 'toggle-promotion'이라는 class를 가진 요소를 CSS 선택자에서 찾아서 'promotionToggleBtn'이라는 변수에 할당 
let isHidePromotion = false; // let 키워드를 사용해서 'isHidePromotion'(프로모션 영역의 숨김 여부)을 false로 할당(숨김 X)
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // 특정 변수의 값을 지속적으로 반대 값으로 전환해서 할당할 수 있는 코드
  if (isHidePromotion) { // 'isHidePromotion'이 true라면
    promotionEl.classList.add('hide'); // 'promotion'에 'hide' 클래스 추가 // 'promotion' 부분에 'hide' 클래스가 있으면 CSS 스타일로 숨김 처리
  }
  else { // isHidePromotion이 false면
    promotionEl.classList.remove('hide'); // 'promotion'에서 'hide' 클래스 삭제
  }
}); // 'PromotionToggleBtn'이 click 되면 'isHidePromotion'의 값을 반대로 바꾸고, 1. 'isHidePromotion' 값이 true인 경우 숨김 처리 2. 'isHidePromotion' 값이 false인 경우 보임 처리

function random(min, max) { // 범위 랜덤 함수(소수점 2자리까지)
  return parseFloat((Math.random() * (max - min) + min).toFixed(2)) // '.toFixed()'를 통해 반환된 문자 데이터를, 'parseFloat()'을 통해 소수점을 가지는 숫자 데이터로 변환
}
function floatingObject(selector, delay, size) { // 'floatingObject' 함수 -> 함수가 호출될 때 매개변수로 selector, delay, size 설정
  gsap.to(selector, random(1.5, 2.5), { // gsap의 to 메소드 -> 1. 요소: selector(선택자) 2. 애니메이션 동작 시간: random 함수 3. 옵션
    y: size, // y축으로 움직이는 정도
    repeat: -1, // 반복하는 횟수(repeat: -1: 무한 반복)
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, // Easing 함수(gsap easing)
    delay: random(0, delay) // 지연 시간(애니메이션 시작 시간)
  });
}
floatingObject('.floating1', 1, 15); // 'floatingObject' 함수 실행 -> 인수로 'floating1'이라는 클래스를 가진 CSS 선택자, 1초의 delay, 15px의 size(위아래로 움직이는 범위)를 받는다
floatingObject('.floating2', 0.5, 15); // 'floatingObject' 함수 실행 -> 인수로 'floating2'이라는 클래스를 가진 CSS 선택자, 0.5초의 delay, 15px의 size(위아래로 움직이는 범위)를 받는다
floatingObject('.floating3', 1.5, 20); // 'floatingObject' 함수 실행 -> 인수로 'floating3'이라는 클래스를 가진 CSS 선택자, 1.5초의 delay, 20px의 size(위아래로 움직이는 범위)를 받는다

const spyEls = document.querySelectorAll('section.scroll-spy') // 'section.scroll-spy'이라는 class를 가진 모든 요소를 CSS 선택자에서 찾아서 'spyEls'라는 변수에 할당
spyEls.forEach(function (spyEl) { // HTML 부분에서 찾은 'section.scroll-spy'이라는 요소들의 개수만큼 'forEach'의 인수로 작성한 함수가 실행된다
  new ScrollMagic
    .Scene({ // 'ScrollMagic' Javascript 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정하는 메소드 
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 감시하고 있는 요소를 뷰포트의 어떤 지점에서 감시할 것인지 판단할지 지정 // 뷰포트의 시작: 0, 뷰포트의 끝: 1
    })
    .setClassToggle(spyEl, 'show') // HTML의 class 속성의 삽입/제거를 제어하는 역할을 하는 메소드 // setClassToggle(Toggle할 요소, Toggle할 클래스 이름)
    .addTo(new ScrollMagic.Controller()); // 'ScrollMagic' Javascript 라이브러리가 필요한 컨트롤러 개념
  // 메소드체이닝 기법
});

const thisYear = document.querySelector('.this-year'); // 'this-year'이라는 class를 가진 요소를 CSS 선택자에서 찾아서 'thisYear'이라는 변수에 할당 
thisYear.textContent = new Date().getFullYear(); // 'this-year'라는 class를 가진 요소의 글자 내용으로 값을 지정 // Javascript 'Date'(현재 날짜 정보)객체를 생성자 함수로 실행해서 내부에 있는 'getFullYear' 메소드를 실행 -> 현재 연도의 정보가 숫자 데이터로 반환