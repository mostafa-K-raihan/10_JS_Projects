window.addEventListener('load', () => {
  const countdown = () => {
    const targetDate = "1 Jan, 2021";
    const currentDate = new Date();
    const futureDate = new Date(targetDate);
    const diffInSeconds = (futureDate - currentDate) / 1000;

    
    const remainingDays = Math.floor(diffInSeconds / 86400);
    const remainingHours = Math.floor((diffInSeconds / 3600) % 24);
    const remainingMinutes = Math.floor((diffInSeconds / 60) % 60);
    const remainingSeconds = Math.floor(diffInSeconds % 60);
    const counterNumbers = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];

    const counters = document.querySelectorAll('.counter-number');
    counters.forEach((node, index) => {
      const numberToShow = counterNumbers[index];
      node.innerHTML = numberToShow < 10 ? `0${numberToShow}` : numberToShow;
    });
  }
  setInterval(countdown, 1000);
});