export const toTimeString = (date: Date) =>
  `${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)} ${date
    .toLocaleString("en-US", { hour: "numeric", hour12: true })
    .slice(-2)}`;

export const toDateString = (date: Date) =>
  `${date.toLocaleDateString("en-US", {
    weekday: "long",
  })}, ${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "long",
  })}, ${date.getFullYear()}`;
