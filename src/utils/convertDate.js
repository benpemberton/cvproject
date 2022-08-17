function convertDate(date) {
  if (!date) return;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parts = date.split("-");

  const index = Number(parts[1]);

  return month[index - 1] + " " + parts[0];
}

export default convertDate;
