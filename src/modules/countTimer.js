const countTimer = (dedline, id, daysTimer, hoursTimer, minutesTimer, secondsTimer) => {
  let idInterval = 0;
  
  const clock = document.querySelector(id);
  let timerDays = clock.querySelector(daysTimer),
    timerHours = clock.querySelector(hoursTimer),
    timerMinutes = clock.querySelector(minutesTimer),
    timerSeconds = clock.querySelector(secondsTimer);

  const getTimeRemaining = () => {

    let dateStop = new Date(dedline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000;

    let seconds = 0,
      minutes = 0,
      hours = 0,
      days = 0;

    if (timeRemaining > 0) {
      seconds = Math.floor(timeRemaining % 60);
      minutes = Math.floor((timeRemaining / 60) % 60);
      hours = Math.floor((timeRemaining / 60 / 60) % 24);
      days = Math.floor(timeRemaining / (60 * 60 * 24));
    }

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const addZero = (elem) => {
    if (String(elem).length === 1) {
      return '0' + elem;
    } else {
      return String(elem);
    }
  };

  const updateClock = () => {
    let timer = getTimeRemaining();
    
    timerDays.textContent = addZero(timer.days);
    timerHours.textContent = addZero(timer.hours);
    timerMinutes.textContent = addZero(timer.minutes);
    timerSeconds.textContent = addZero(timer.seconds);

    if (timer.timeRemaining <= 0) {
      clearInterval(idInterval);
    }
  };
  updateClock();
  idInterval = setInterval(updateClock, 1000);
};

export default countTimer;