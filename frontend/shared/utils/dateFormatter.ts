function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  const month = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date);

  const day = date.getDate();
  const year = date.getFullYear();

  const ordinalSuffix = getOrdinalSuffix(day);

  return `${weekday}, ${month} ${day}${ordinalSuffix} ${year}`;
}
