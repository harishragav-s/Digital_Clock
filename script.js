function updateClock() {
  const now = new Date();
  let hrs = now.getHours();
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  const ampm = hrs >= 12 ? 'PM' : 'AM';

  hrs = hrs % 12 || 12; // Convert to 12-hour format
  const timeString = `${String(hrs).padStart(2, '0')}:${mins}:${secs} ${ampm}`;
  const dateString = now.toDateString();

  document.getElementById('clock').innerText = timeString;
  document.getElementById('date').innerText = dateString;
}

setInterval(updateClock, 1000);
updateClock(); // initial call
