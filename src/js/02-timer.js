
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    dateInput: document.querySelector('#datetime-picker'),
    timer: document.querySelector('.timer'),
    day: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]'),
}

const disBtn = () => refs.startBtn.setAttribute('disabled', true);
const removeDisBtn = () => refs.startBtn.removeAttribute('disabled');

let sellDate

disBtn()

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      sellDate = selectedDates[0];
      if (sellDate < Date.now()) {
            disBtn();
             Notiflix.Notify.failure('Please choose a date in the future');
      } else {
          removeDisBtn();
           console.log(sellDate - Date.now());
        }
    },

 };

const fp = flatpickr(refs.dateInput, options);


const timer = {
    intervalId: null,
    start() {
        disBtn();
        this.intervalId = setInterval(() => {
        const dateNow = Date.now();
        const deltaTime = (sellDate.getTime() - dateNow);
        const {days, hours, minutes, seconds} = convertMs(deltaTime);
        console.log(`${days}:${hours}:${minutes}:${seconds}`);
        refs.day.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${minutes}`;
        refs.seconds.textContent = `${seconds}`;
        
         if (deltaTime <= 1) {
             clearInterval(this.intervalId);
              alert("Таймер завершено!");
        }   
        }, 1000);
        
    },
    stop() {
        if (deltaTime === 0) {
            clearInterval(this.intervalId);
        }           
    },  
}

refs.startBtn.addEventListener('click', () => {
    timer.start();
})

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function convertMs(ms) {
   
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

   
  const days = addLeadingZero(Math.floor(ms / day));
  
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
   
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
 
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};