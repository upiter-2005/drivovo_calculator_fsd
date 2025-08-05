export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const re = /^\+?[0-9]{10,15}$/;
  return re.test(cleaned);
}