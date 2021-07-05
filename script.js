window.onload = function() {
    window.__scrollPosition = document.documentElement.scrollTop || 0;
    var kurten = document.querySelector('#kurten')
    var line = document.querySelector('#line')
    var deafBar = document.querySelector('#deaf-bar')
    // 스크롤 이벤트 작동 명령어
    window.addEventListener('scroll', function () {
        let _documentY = document.documentElement.scrollTop;
        document.querySelector('.scroll').innerHTML=_documentY;
        //그래프 x축 
        if (_documentY < 900 && _documentY > 0) {
            kurten.style.left = 400 + _documentY+ 'px'
        } else if (_documentY > 900) {
            kurten.style.left = '900px'
        } else if (_documentY < 1){
            kurten.style.left = '400px'
        }
         // 청각장애인 화재 사망률 수치
        var d_b_starter = (_documentY - 550) /3
        if (d_b_starter < 470 ) {
            deafBar.style.height = d_b_starter + 'px'
            deafBar.style.padding = '20px'
            deafBar.style.border = '0.5px'
            deafBar.innerHTML = Math.floor(d_b_starter / 10) + '%'
        } else {
            deafBar.style.height = '470px'
            deafBar.innerHTML = '47%'
        }
        if (d_b_starter < 1) {
            deafBar.style.opacity = '0'
        }   else {
            deafBar.style.opacity = '1'
        }
        //그래프 스크롤로 올라가게
        if (_documentY > 2200) {
            line.style.position = 'relative'
            line.style.top = '2900px'
        } else {
            line.style.position = 'fixed'
            line.style.top = '700px'
        }
        //텍스트 보이기
        var text_starter = (_documentY - 2200) * 6
        var mainText = document.querySelector('#main')
        var mainKurten = document.querySelector('#mainKurten')
        if (text_starter > 0) {
            mainKurten.classList.add('textani')
        } 
        // else if (text_starter < 0) {
        //     mainKurten.setAttribute('.non')
        // }
        //서브 인포그래픽들
        var info = (_documentY - 2800)/500
        var d1 = document.querySelector('#databox')
        if (info > 0 && info <= 1){
            d1.style.opacity = info
        } else if ( info <= 0) {
            d1.style.opacity = 0
        }else if ( info > 1) {
            d1.style.opacity = 1
        }
        
});
}