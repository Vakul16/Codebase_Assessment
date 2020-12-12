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


// document.getElementById("entry-content");
// document.getElementById("myParagraph").innerHTML = "This is <em>your</em> paragraph!";

// botaoMais.addEventListener('click', (function(i) {
//   return function() {
//       showOrHideYT("frameZES"+ i);
//   };
// })(i));
// var div = document.createElement('div');
// div.innerHTML = post_body;
// var firstImage = div.getElementsByTagName('img')[0]
// var imgSrc = firstImage ? firstImage.src : "";
// or, if you want the unresolved src, as it appears in the original HTML:

// var rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
// <iframe allowtransparency="true" style="background: #FFFFFF;" 
//     src="http://zingaya.com/widget/9d043c064dc241068881f045f9d8c151" 
//     frameborder="0" height="184" width="100%">
// </iframe>
    // images.onload = function(){
    //   var imageWidth = this.offsetWidth,
    //       imageHeight = this.offsetHeight,
    //       vpWidth = document.documentElement.clientWidth,
    //       vpHeight = document.documentElement.clientHeight;
    
    //   this.style.position = 'absolute'
    //   this.style.left = (vpWidth - imageWidth)/2 + 'px';
    //   this.style.top = (vpHeight - imageHeight)/2 +
    //                    window.pageYOffset + 'px';
    // }
    // ifrm.style.scrolling="overflow:hidden;
    // <iframe src="otherpage.html" scrolling="no" style="overflow:hidden;"></iframe>
    // document.body.appendChild(ifrm)
// var image1 = document.querySelectorAll("img:nth-child(NodeList[1])");
// console.log(image1);
// var div = document.createElement('div');
// div.style.width = '500px';
// div.style.height = '150px';

// var image1 = document.createElement("div");
// image1.style = "height = 150px; width = 500px";
// var newContent1 = document.createTextNode("Hi there and greetings!"); 
// image1.appendChild(newContent1);  
// console.log(newContent1);

// var image2 = document.createElement("div");
// image2.style = "height = 150px; width = 500px";
// var newContent2 = document.createTextNode("Hi there and greetings!"); 
// image2.appendChild(newContent2);  
// console.log(newContent2);

// let ele = document.createElement('div')
// let text = document.createTextNode('something is showing')
// ele.appendChild(text)
// document.body.appendChild(ele)
// console.log(ele)


// const yourElement = document.createElement('iframe')
// document.body.appendChild(yourElement)

// window.onload = function(){
//     var link = "http://www.quirksmode.org/iframetest2.html"
//  var iframe = document.createElement('iframe');
//  iframe.frameBorder=0;
//  iframe.width="300px";
//  iframe.height="250px";
//  iframe.id="randomid";
//  iframe.setAttribute("src", link);
//  document.getElementById("ad54").appendChild(iframe);
 
//  }


// document.body.onload = addElement;
// function addElement () { 
//   // create a new div element 
//   const newDiv = document.createElement("div"); 
  
//   // and give it some content 
//   const newContent = document.createTextNode("Hi there and greetings!"); 
  
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  
//   console.log(newDiv);

//   // add the newly created element and its content into the DOM 
//   const currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
//   console.log(currentDiv);
// }

// div.style.width = '500px';
// div.style.height = '150px';

// var div2 = document.createElement("div");
// console.log(div2);
// div.style.width = '500px';
// div.style.height = '150px';


// Find all iframes
// var $iframes = $( "iframe" );

// // Find & save the aspect ratio for all iframes
// $iframes.each(function () {
//   $( this ).data( "ratio", this.height / this.width )
//     // Remove the hardcoded width & height attributes
//     .removeAttr( "width" )
//     .removeAttr( "height" );
// });

// // Resize the iframes when the window is resized
// $( window ).resize( function () {
//   $iframes.each( function() {
//     // Get the parent container's width
//     var width = $( this ).parent().width();
//     $( this ).width( width )
//       .height( width * $( this ).data( "ratio" ) );
//   });
// // Resize to fix all iframes on page load.
// }).resize();
// function myFunction() {
//   document.getElementById("myImg").style.height = "300px";
//   document.getElementById("myImg").style.width = "300px";
// }


// document.addEventListener('DOMContentLoaded', function() {
//     var div1 = document.createElement('div', width, height);
//     console.log(div1);
//     div.id = 'container';
//     const width = "500px";
//     const height = "150px";
//     div.innerHTML = 'Hi there!';
//     div.className = 'border pad';
   
//     document.body.appendChild(div);
//   }, false);

//   document.addEventListener('DOMContentLoaded', function() {
//     var div2 = document.createElement('div', width, height);
//     console.log(div2);
//     div.id = 'container';
//     const width = "500px";
//     const height = "150px";
//     div.innerHTML = 'Hi there!';
//     div.className = 'border pad';
   
//     document.body.appendChild(div);
//   }, false);


//   let box = document.querySelector('img');
// let width = box.offsetWidth;
// let height = box.offsetHeight;


//   <script>
// var x = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// 'The text in first paragraph (index 0) is: ' + x[0].innerHTML;
// </script>




// docum

