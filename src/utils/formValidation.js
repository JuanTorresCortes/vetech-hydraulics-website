export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_NAME_LENGTH = 100;
export const MAX_MESSAGE_LENGTH = 5000;

export function validateContactForm({ name, email, message }) {
  if (!name || !email || !message) return "Please include name, email, and message.";
  if (name.length > MAX_NAME_LENGTH) return "Name is too long.";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address.";
  if (message.length > MAX_MESSAGE_LENGTH)
    return `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
  return null;
}
