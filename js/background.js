const images = [
    "eiffel_tower-France.jpg",
    "golden_temple-India.jpg",
    "santorini-Greece.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement : html 태그 요소 생성 
const bgImage = document.createElement("img");

bgImage.setAttribute("class", "bg-img");
bgImage.src = `img/${chosenImage}`;

// apendchild : body 마지막에 html을 추가
// prependchild : body 처음에 html을 추가
if(savedUsername != null){
    document.body.prepend(bgImage);
}
// document.body.style.backgroundImage = `url(${bgImage.src})`