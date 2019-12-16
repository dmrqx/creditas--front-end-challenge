export default function parseElementAttributes ({ ...attributes }) {
  return Object.entries(attributes)
    .map(([attr, value]) => `${attr}="${value}"`)
    .join(' ')
}
