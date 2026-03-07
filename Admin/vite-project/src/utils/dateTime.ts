export const getCurrentIST = () => {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
};
export const formatDateTimeLocal = (dateString: string) => {
  const date = new Date(dateString);

  const pad = (n: number) => String(n).padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};