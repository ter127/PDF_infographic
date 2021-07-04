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
        var text_starter = (_documentY - 2200) * 7
        var mainText = document.querySelector('#main')
        var mainKurten = document.querySelector('#mainKurten')
        if (text_starter <= 750 && text_starter > -100) {
            mainKurten.style.left = text_starter + 'px'
            mainKurten.style.opacity = 1
        } else {
            mainKurten.style.opacity = 0
        }
    
});
}