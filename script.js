/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/
var images;



images = ['https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-03-22_13-55-58.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-03-31_18-32-23.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-09_11-16-13.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-09_11-17-50.jpg?raw=true'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images.shift());
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images[0]);

});
const {
  core: { test, expect, run },
  prettify
} = window.jestLite;
