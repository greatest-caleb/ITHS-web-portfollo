function myFunction(img){
  
  var expandImg = document.getElementById("expandedImg");
  
  var imgText = document.getElementById("imgtext");
 
  expandImg.src = img.src;
  
  imgText.innerHTML = img.alt;

  expandImg.parentElement.style.display = "block";
}

