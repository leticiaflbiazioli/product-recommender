export function clearText(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]|[^a-zA-Z0-9]/g, '')
    .toLowerCase();
}
