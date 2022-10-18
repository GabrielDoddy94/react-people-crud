export function formatBirthdateToDisplay(birthDate: string) {
  const [year, month, day] = birthDate.split("-");

  return `${day}/${month}/${year}`;
}
