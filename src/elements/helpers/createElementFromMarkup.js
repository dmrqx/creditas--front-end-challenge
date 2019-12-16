export default function createElementFromMarkup ({ markup }) {
  const root = document.createElement('template')
  root.innerHTML = markup.trim()

  return root.content
}
