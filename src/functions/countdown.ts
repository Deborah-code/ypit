export default function countdown() {
  const eventDate = new Date("2024-11-30 13:00");
  const today = new Date();
  const dayDifferenceInMilliseconds = eventDate.getTime() - today.getTime();
  const isNotEventDay = dayDifferenceInMilliseconds > 0
  const eventIsPassedValue = 0
  const timeLeft = {
    daysLeft: isNotEventDay ? Math.floor(dayDifferenceInMilliseconds / (1000 * 60 * 60 * 24)) : eventIsPassedValue,
    hoursLeft: isNotEventDay ? Math.floor((dayDifferenceInMilliseconds / (1000 * 60 * 60)) % 24) : eventIsPassedValue,
    minutesLeft: isNotEventDay ? Math.floor((dayDifferenceInMilliseconds / 1000 / 60) % 60) : eventIsPassedValue,
  };
  return timeLeft
}
