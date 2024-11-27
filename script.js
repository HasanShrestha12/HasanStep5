var random;


random = ['https://media.licdn.com/dms/image/D5612AQFa6rvrrdXMbg/article-cover_image-shrink_720_1280/0/1700134577849?e=2147483647&v=beta&t=E29l9EGrhsPPSuEmUCZAUeTANcNX92Y356UWIIY0iXg', 'https://www.indiatravel.app/wp-content/uploads/2024/05/best-things-to-do-in-kathmandu.jpg', 'https://www.shutterstock.com/image-photo/sunset-boudhanath-stupa-kathmandu-nepalcolorful-260nw-2261333387.jpg'];

let element_jpt = document.getElementById('jpt');
let new_img = document.createElement('img');
new_img.setAttribute("src", random[0]);

element_jpt.appendChild(new_img);


document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_jpt2 = document.getElementById('jpt');
  element_jpt2.replaceChildren();
  random.push(random.shift());
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", random[0]);

  element_jpt2.appendChild(new_img2);

});

document.getElementById('previous-btn').addEventListener('click', (event) => {
  let element_jpt3 = document.getElementById('jpt');
  element_jpt3.replaceChildren();
  random.unshift(random.pop());
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", random.slice(-1)[0]);

  element_jpt3.appendChild(new_img3);

});