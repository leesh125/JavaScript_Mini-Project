const images = [
    "eiffel_tower-France.jpg",
    "golden_temple-India.jpg",
    "santorini-Greece.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement : html 태그 요소 생성 
const bgImage = `img/${chosenImage}`;
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