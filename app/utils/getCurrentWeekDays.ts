export default function getCurrentWeekDays() {
  let days = [];

  const currentDate = new Date();
  // Get today's date
  const currentDay = currentDate.getDay();

  // Calculate start of the week
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDay);
  startOfWeek.setHours(0, 0, 0, 0);

  for (let i = 0; i <= 6; i++) {
    const newDay = new Date();
    newDay.setDate(startOfWeek.getDate() + i);

    days.push(newDay);
  }

  return days;
}
