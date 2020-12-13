function removeColumn(thisID){
  $('#'+thisID).css('background-color', 'blue');
  // document.getElementById.style('background-color', 'blue');
}
 counter = 0 ;
const imgs = document.querySelectorAll("img");
  imgs.forEach(img => { 
  
  if(img.clientWidth >= 500 && img.clientHeight >= 150 && counter < 2){
    console.log(img.src);
    console.log("width"+img.clientWidth);
    console.log("height"+img.clientHeight);
    
    var iDiv = document.createElement('div');
      // iDiv.id = 'block'+counter;
      iDiv.setAttribute("style","height:100%;width:100%;");
      
    var iframe = document.createElement('iframe');
    iframe.id = 'block1'+counter;
    iframe.setAttribute("onclick", "removeColumn(this.id)");
    iframe.setAttribute("style","height:100%;width:100%;background-color:red");
    iDiv.appendChild(iframe);	
    img.after(iDiv);
    counter = counter +1 ;
  }
});


// let ele = document.createElement('div')
// ele.style.width = '728px';
// ele.style.height = '90px';
// document.body.appendChild(ele)
// function prepareFrame() {
//     //   let div1 = document.createElement('div')
//     var ifrm = document.createElement('iframe')
//     ifrm.setAttribute('img', {class : "img-fluid mr-4"});
//     // ifrm.setAttribute('src', 'website\images\news\img-1.jpg');
//     ifrm.style.backgroundColor = "red";
//     ifrm.style.width = '728px'
//     ifrm.style.height = '90px'
//     ifrm.style.scrolling="no";
//     var images = document.querySelectorAll("img");
//     if(images === [1] && [2]) {
//       var image = images;
//       console.log(image.getAttribute('src'));
//   }
//   ele.appendChild(ifrm);
// }
// prepareFrame()
