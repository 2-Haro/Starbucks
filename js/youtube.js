var tag = document.createElement('script'); // 'tag' 변수에 'document' 객체에서 'script' 태그를 생성하는 'createElement'(요소 생성)메소드 실행

tag.src = "https://www.youtube.com/iframe_api"; // 생성된 'script' tag 부분에 src(source)속성에 youtube 영상을 재생할 수 있는 명령의 javascript 파일을 가져옴
var firstScriptTag = document.getElementsByTagName('script')[0]; // 'script'라는 tag를 가진 요소들 중에서 zero-based numbering으로 찾은 첫번째 요소를 'firstScriptTag' 변수에 할당 
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // 'firstScriptTag'의 'parentNode'(부모 요소)를 찾아서 'firstScriptTag'의 이전에 youtube API를 사용할 수 있는 'tag'를 삽입

function onYouTubeIframeAPIReady() { // onYouTubeIframeAPIReady: 외부에서 가져오는 유튜브를 제어할 수 있는 함수 -> 외부 javascript 라이브러리에서 자동으로 찾도록 설정
// <div id="player"></div>
  new YT.Player('player', { // 'YT' 유튜브 명령에서 'Player' 메소드를 실행
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: { // 영상을 재생하기 위한 변수들
      autoplay: true, // 자동 재생
      loop: true, // 반복 재생
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) { // 'onReady' 메소드(영상이 준비됨) -> 익명의 함수 실행 // 함수의 인수로 동영상이 플레이되는 상황을 데이터로 넘겨줌 -> 함수 내에서 'event'라는 매개변수로 받아서 활용 
        event.target.mute () // event.target: 재생되고 있는 영상 // event.target.mute -> 재생되고 있는 영상 음소거 
      }
    }
  });
}
