export const slugify = (string: String = '') =>
  string.toLowerCase().replace(/\s/g, '-')
