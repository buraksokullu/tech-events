export const formatDate = value => {
  const d = new Date(value);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const dayNumber = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const dayString = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);

  return `${dayString}, ${dayNumber} ${month} ${year}`;
};

export const formatTime = value => {
  const d = new Date(value);
  const h = (d.getHours() < 10 ? '0' : '') + d.getHours();
  const m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

  return `${h}:${m}`;
};

export const getTime = (startDate, endDate) => {
  return `from ${formatTime(startDate)} to ${formatTime(endDate)}`;
};

export const getTimeDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const seconds = (end.getTime() - start.getTime()) / 1000;
  return `${seconds / 60}'`;
};
