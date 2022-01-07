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

const thisYear = document.querySelector('.this-year'); // 'this-year'이라는 class를 가진 요소를 CSS 선택자에서 찾아서 'thisYear'이라는 변수에 할당 
thisYear.textContent = new Date().getFullYear(); // 'this-year'라는 class를 가진 요소의 글자 내용으로 값을 지정 // Javascript 'Date'(현재 날짜 정보)객체를 생성자 함수로 실행해서 내부에 있는 'getFullYear' 메소드를 실행 -> 현재 연도의 정보가 숫자 데이터로 반환