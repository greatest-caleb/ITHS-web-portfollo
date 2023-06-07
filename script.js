function myFunction(img){
  
  var expandImg = document.getElementById("expandedImg");
  
  var imgText = document.getElementById("imgtext");
 
  expandImg.src = img.src;
  
  imgText.innerHTML = img.alt;

  expandImg.parentElement.style.display = "block";
}


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}