window.onload = function() {
    window.__scrollPosition = document.documentElement.scrollTop || 0;
    var kurten = document.querySelector('#kurten')
    var line = document.querySelector('#line')
    var deafBar = document.querySelector('#deaf-bar')
    // 스크롤 이벤트 작동 명령어
    window.addEventListener('scroll', function () {
        let _documentY = document.documentElement.scrollTop;
        // document.querySelector('.scroll').innerHTML=_documentY;
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
        if(d_b_starter > 0) {
            deafBar.style.padding = '20px'
        }
        if (d_b_starter < 470 ) {
            deafBar.style.height = d_b_starter + 'px'
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
        else if (text_starter < 0) {
            mainKurten.classList.remove('textani')
        }
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
        //인명피해 비율 데이터 fixed
        var mapData = document.querySelector('#map-box')
        if (_documentY > 4550) {
            mapData.style.position = 'fixed'
            mapData.style.top = '250px'
            mapData.style.paddingTop = '0px'
        } else {
            mapData.style.position = 'relative'
            mapData.style.top = '0'
            mapData.style.paddingTop = '400px'
        }
        var oneOpa1 = (_documentY - 4650) *0.75
        var oneOpa2 = (_documentY  - 4650) *0.575
        var oneOpa3 = (_documentY - 4650) * 0.4
        var cir = _documentY - 5500

        var circle = document.querySelector('#circle')
        var line1 = document.querySelector('#homeLine')
        var line3 = document.querySelector('#imLine')
        var line4 = document.querySelector('#shopLine')
        var line2 = document.querySelector('#gitarLine')
        if (oneOpa1 < 150) {
            circle.style.opacity = oneOpa1 / 150
        } else{
            circle.style.opacity = 1
        }
        if (oneOpa1 > 160 && oneOpa1 < 460){
            line1.style.width = (oneOpa1 - 160) + 'px'
        } else if (oneOpa1 < 160) {
            line1.style.width = '0px'
        } else if (oneOpa1 > 460) {
            line1.style.width = '300px'
        }
        if (oneOpa2 > 160 && oneOpa2 < 360){
            line2.style.width = (oneOpa2 - 160) + 'px'
        } else if (oneOpa2 < 160) {
            line2.style.width = '0px'
        } else if (oneOpa2 > 360) {
            line2.style.width = '200px'
        }
        if (oneOpa3 > 160 && oneOpa3 < 260){
            line3.style.width = (oneOpa3 - 160) + 'px'
            line4.style.width = (oneOpa3 - 160) + 'px'
        } else if (oneOpa3 < 160) {
            line3.style.width = '0px'
            line4.style.width = '0px'
        } else if (oneOpa3 > 260) {
            line3.style.width = '100px'
            line4.style.width = '100px'
        }
        if (cir > 0 && cir <800) {
            document.getElementById('circle2').style.opacity = cir / 800
            document.getElementById('text1').style.opacity = cir / 800
            document.getElementById('text2').style.opacity = cir / 800
            document.getElementById('text3').style.opacity = cir / 800
            document.getElementById('text4').style.opacity = cir / 800
        } else if (cir < 0){
            document.getElementById('circle2').style.opacity = 0
            document.getElementById('text1').style.opacity = 0
            document.getElementById('text2').style.opacity = 0
            document.getElementById('text3').style.opacity = 0
            document.getElementById('text4').style.opacity = 0
        }
        else if (cir > 800){
            document.getElementById('circle2').style.opacity = 1
            document.getElementById('text1').style.opacity = 1
            document.getElementById('text2').style.opacity = 1
            document.getElementById('text3').style.opacity = 1
            document.getElementById('text4').style.opacity = 1
        }
        if (_documentY > 6030) {
            mapData.style.top = -(_documentY-6030) +250+'px'
        } else {
            mapData.style.position = 'fixed'
            mapData.style.top = '250px'
        }
        if (_documentY > 2220) {
            document.getElementById('j').classList.add('hidden')
        }
});
}