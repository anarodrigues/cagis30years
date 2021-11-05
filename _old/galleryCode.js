document.getElementById('CAGIS30Years').addEventListener("click", openGallery);
document.getElementById('BeforeThen').addEventListener("click", openGallery);
document.getElementById('Books').addEventListener("click", openGallery);

let slideIndex = 1;
let galleryIndex = 0;

function openGallery(event){
    document.getElementById('grid').style.visibility="hidden";
        
    if (event.target.id == 'CAGIS30Years'){
        galleryIndex = 1;
        document.getElementById('CAGIS30Years-Gallery1').style.display="block";
    }
    if (event.target.id == 'BeforeThen'){
        galleryIndex = 2;
        document.getElementById('CAGIS30Years-Gallery2').style.display="block";
    }
    if (event.target.id == 'Books'){
        galleryIndex = 3;
        document.getElementById('CAGIS30Years-Gallery3').style.display="block";
    }
    slideIndex = 1;
    showDivs(slideIndex);
}

document.getElementById('closeGallery1').addEventListener("click", closeGallery);
document.getElementById('closeGallery2').addEventListener("click", closeGallery);
document.getElementById('closeGallery3').addEventListener("click", closeGallery);

function closeGallery(event){
    document.getElementById('grid').style.visibility = "visible";
    document.getElementById('CAGIS30Years-Gallery1').style.display="none";
    document.getElementById('CAGIS30Years-Gallery2').style.display="none";
    document.getElementById('CAGIS30Years-Gallery3').style.display="none";
}


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides"+galleryIndex);
  let size = x.length;
  if (n > size) {slideIndex = 1}
  if (n < 1) {slideIndex = size-1} ;
  for (i = 0; i < size; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}