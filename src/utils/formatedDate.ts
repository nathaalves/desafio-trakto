export function formatedDate(value?: string | number | Date) {
  if (!value) {
    value = new Date();
  }

  const day =
    new Date(value).getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate();
  const month =
    new Date(value).getMonth() < 10
      ? `0${new Date().getMonth()}`
      : new Date().getMonth();
  const year = new Date(value).getFullYear();

  return `${day}/${month}/${year}`;
}
