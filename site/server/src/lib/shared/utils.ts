export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeLastLetter(string: string) {
  return string.slice(0, -1);
}
