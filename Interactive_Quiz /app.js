const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

//   // log the score to console
//   console.log(score);

// show result on page
scrollTo(0, 0); 
result.querySelector('span').textContent = `${score}%`;
result.classList.remove('d-none');


});

// window object (global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//     alert('hello, Ninjas');
// }, 3000);

let i = 0
setInterval(() => {
    console.log('hello');
    i++;
    if(i== 5){
         
    }
}, 1000);










