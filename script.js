/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/
/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements. 
  You can make this window bigger. 
   ===================
*/
var images;


images = ['https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-03-22_13-55-58.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-03-31_18-32-23.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-09_11-16-13.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-09_11-17-50.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-10_12-53-18.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-10_12-53-22.jpg?raw=true','https://github.com/DianaSavchuk/code-pen-landingpage/blob/main/photo_2022-08-10_13-03-40.jpg?raw=true'];

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

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('add_comment').addEventListener('click', (event) => {
  let element_comment = document.getElementById('commentlist');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('commentarea').value);

  element_comment.appendChild(new_li);

});
