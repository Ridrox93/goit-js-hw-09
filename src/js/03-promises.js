import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const delay = Number(form['delay'].value);
  const step = Number(form['step'].value);
  const amount = Number(form['amount'].value);
  let currentDelay = delay;

  for (let i = 0; i < amount; i+=1) {
    const position = i + 1;

    if (i) {
      currentDelay += step;
    }
    
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  
  return promise;
}