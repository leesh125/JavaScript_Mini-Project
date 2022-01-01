const images = {
    "greece" : "greece.jpg",
    "그리스" : "greece.jpg",
    "france" : "france.jpg",
    "프랑스" : "france.jpg",
    "japan" : "japan.jpg",
    "일본" : "japan.jpg",
    "singapore" : "singapore.jpg",
    "싱가포르" : "singapore.jpg",
    "싱가폴" : "singapore.jpg"
}
let bgImage = 'img/default.jpg';
try {
    const country = localStorage.getItem("todos");
    const chosenImage = images[country]
    if(chosenImage != undefined){
        bgImage = `img/${chosenImage}`;
    }else{
        bgImage = 'img/default.jpg';
    }
} catch (error) {
    console.log(error)
}

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement : html 태그 요소 생성 

const bgImageDiv = document.createElement("div");
const bodyDiv = document.querySelector(".body-div");

bgImageDiv.setAttribute("class", "bg-img");

// apendchild : body 마지막에 html을 추가
// prependchild : body 처음에 html을 추가
if(savedUsername != null){
    document.body.prepend(bgImageDiv);
    bgImageDiv.style.backgroundImage = `url('${bgImage}')`;
    bodyDiv.style.background = 'none';
}
// document.body.style.backgroundImage = `url(${bgImage.src})`
