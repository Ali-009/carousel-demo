
//moving the frame by clicking the arrows

const backButton = document.querySelector('#back-button');
const forwardButton = document.querySelector('#forward-button');

//moving the image based on an intreval
let autoScrollId = setInterval(moveForward, 5000);

forwardButton.addEventListener('click', moveForward);

backButton.addEventListener('click', (e) => {

  const frameElement = document.querySelector('#frame');
  let currentTranslation = parseInt(frameElement.dataset.translate);

  if(frameElement.dataset.translate === '0'){
    frameElement.style.transform = 'translate(-330%)';
    currentTranslation = -330;
    frameElement.dataset.translate = -330;
  } else {
      frameElement.style.transform =
          `translate(${currentTranslation + 110}%)`;
      currentTranslation += 110;
      frameElement.dataset.translate = currentTranslation;
  }

  //changing the color of the bottom circle
  const navCircle = document.querySelector
      (`#nav-circles > div[data-translate="${currentTranslation}"]`);

  clearNavCircles();
  navCircle.style.backgroundColor = 'black';

  clearInterval(autoScrollId);
  autoScrollId = setInterval(moveForward, 5000);
});

//moving the frame by clicking the circles
const navCircles = document.querySelectorAll('#nav-circles > .nav');

navCircles.forEach(element => element.addEventListener('click',
 (e) => {
   const frameElement = document.querySelector('#frame');

   circleTranslation = parseInt(e.target.dataset.translate);

   frameElement.style.transform = `translate(${circleTranslation}%)`;
   frameElement.dataset.translate = circleTranslation;

   clearNavCircles();
   e.target.style.backgroundColor = 'black';

   clearInterval(autoScrollId);
   autoScrollId = setInterval(moveForward, 5000);
}));

function moveForward(){

  const frameElement = document.querySelector('#frame');
  let currentTranslation = parseInt(frameElement.dataset.translate);

  if(frameElement.dataset.translate === '-330'){
    frameElement.style.transform = 'translate(0%)';
    currentTranslation = 0;
    frameElement.dataset.translate = 0;
  } else {
      frameElement.style.transform =
          `translate(${currentTranslation - 110}%)`;
      currentTranslation -= 110;
      frameElement.dataset.translate = currentTranslation;
  }

  //changing the color of the bottom circle
  const navCircle = document.querySelector
      (`#nav-circles > div[data-translate="${currentTranslation}"]`);

  clearNavCircles();
  navCircle.style.backgroundColor = 'black';

  clearInterval(autoScrollId);
  autoScrollId = setInterval(moveForward, 5000);
}

function clearNavCircles(){
 const allNavCircles = document.
    querySelectorAll('#nav-circles > .nav');

 allNavCircles.
    forEach(element => element.style.backgroundColor = 'white');
}
