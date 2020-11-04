var num=0

function Nouveau() {
if (num == 0) {
num = 1;
document.image.src = "assets/image/wm36.jpg";// taille grande de l'image
document.image.width = 400;
document.image.height = 280;
}
else {
num = 0;
document.image.src = "assets/image/wm36.jpg";// taille petite de l'image
document.image.width = 250;
document.image.height = 130;
}
}