const API_KEY = "7bd814cbd58e531a2c97ea0a156c9184";

// 성공했을때의 함수는 GeolocationPosition 객체를 넘겨줌
 // 그 객체에서 위도와 경도를 추출할 수 있음..ㄷ
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
    console.log(position);
    // url에 units를 metric으로 준다면 온도를 섭씨(C)로 나타내준다
    const url  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch : 실제로 URL에 갈 필요 없이 js가 대신 url을 부른다.
    // fetch는 일종의 promise. promise는 당장 일어나지않고 시간이 좀 걸린뒤 일어난다.
    // ex) 서버에 뭔가 요청했는데 서버가 응답하는데 5분이 걸리면 답답하다.
    // 그래서 then()을 사용한다. (바로 응답하게끔)
    fetch(url).then(response => response.json()).then(data => { 
    // 1. fetch(url).then()
    //   -> url을 fetch하여 실제 url에 접속하지 않고 url을 네트워크 상에서 부른다.
    //      then(~~~) 을 통해 서버에 요청을 하고 받을 응답을 바로 받을 수 있게한다.
    // 2. response => response.json()
    //   -> 응답으로 해당 url에 json을 받는다.(개발자모드 network에서 fetch된 url 확인해보기)
    // 3. then(data => { "some data" }
    //    -> 응답 받은 json data를 활용한다.
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
        city.innerText = data.name;
    });
    
}

function onGeoError() {
    alert("Can't fint you.");
}

// 브라우저에서 위치 좌표를 줌(wifi, 위치, GPS 등등);;
// 첫번째 인자는 위치를 얻는걸 성공했을 때 실행될 함수
// 두번째 인자는 위치를 얻는걸 실패했을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);