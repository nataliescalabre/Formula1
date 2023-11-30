const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");

img1.addEventListener("mouseover", function () {
    img1.src = "images/image4.jpeg";
});

img1.addEventListener("mouseout", function () {
    img1.src = "images/Image1.jpeg";
});

img2.addEventListener("mouseover", function () {
    img2.src = "images/image5.jpeg";
});

img2.addEventListener("mouseout", function () {
    img2.src = "images/image2.jpeg";
});

img3.addEventListener("mouseover", function () {
    img3.src = "images/image6.webp";
});

img3.addEventListener("mouseout", function () {
    img3.src = "images/image3.jpeg";
});
