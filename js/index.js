// Your code goes here

//nav//

const navigation = document.querySelector('.nav');
navigation.addEventListener('click', function(event) {
 event.target.style.background = 'gold'
})


//headers//
const header1 = document.querySelector('.intro h2');
header1.addEventListener('click', function(event) {
 event.target.style.color = 'blue'
})
    
const header2 = document.querySelector('.text-content h2');
header2.addEventListener('wheel', function(event) {
 event.target.style.color = 'yellow'
})

// const header3 = document.querySelector('.text-content h2');
// header3.addEventListener('mouseover', function(event) {
//  event.target.style.color = 'green'
// }) 

const header4 = document.querySelector('.content-destination h2');
header4.addEventListener('click', function(event) {
 event.target.style.color = 'gold'
})

//images//

const introImg = document.querySelector('.intro img');
introImg.addEventListener('mouseover', function(event) {
  event.target.style.border = '5px dashed orange'
})

const image1 = document.querySelector('.img-content img');
image1.addEventListener('mousemove', function(event) {
  event.target.style.border = '4px dashed yellow'
})

// const image2 = document.querySelector('.img-content .img-fluid rounded');
// image2.addEventListener('mousemove', function(event) {
//   event.target.style.border = '4px dashed blue'
// })
const image3 = document.querySelector('.content-destination img');
image3.addEventListener('mousemove', function(event) {
  event.target.style.border = '4px dashed red'
})



//paragraphhs

const paragraph1 = document.querySelector('.intro p');
paragraph1.addEventListener('mousemove', function(event) {
  event.target.style.color = 'skyBlue'
})

const paragraph2 = document.querySelector('.text-content p');
paragraph2.addEventListener('mousemove', function(event) {
  event.target.style.color = 'orange'
})

// const paragraph3 = document.querySelector('.text-content .p2');
// paragraph3.addEventListener('mousemove', function(event) {
//   event.target.style.color = 'green'
// })


const paragraph4= document.querySelector('.content-destination p');
paragraph4.addEventListener('mousemove', function(event) {
  event.target.style.color = 'seaGreen'
})

// const myButtons = document.querySelectorAll('.destination .btn');
// myButtons.addEventListener('animationstart', function(event) {
  
// AnimationEvent = new AnimationEvent('animationstart', { animationName: bounce,
// elaspedTime: 0.0,
// pseudoElement:''}) button not working yet 