export function utcToIST_HHMM(utcDate: string | Date): string {
  const date = new Date(utcDate);
  // Get UTC hours and minutes
  const utcHours = date.getUTCHours();
  const utcMinutes = date.getUTCMinutes();
  // Add IST offset (5:30)
  let istHours = utcHours + 5;
  let istMinutes = utcMinutes + 30;
  if (istMinutes >= 60) {
    istHours += 1;
    istMinutes -= 60;
  }
  if (istHours >= 24) {
    istHours -= 24;
  }
  const hh = String(istHours).padStart(2, "0");
  const mm = String(istMinutes).padStart(2, "0");

  return `${hh}:${mm}`;
}
export function parseTimeToDate(timeStr: string, referenceDate: Date = new Date()) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const date = new Date(referenceDate); 
  date.setHours(hours, minutes, 0, 0); 
  return date;
};