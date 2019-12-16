export default function replaceSelectOptions ({ selectElement, options }) {
  selectElement.innerHTML = ''

  options.forEach(option => {
    const optionElement = document.createElement('option')

    if (typeof option === 'string') {
      optionElement.textContent = option
      optionElement.value = option
    } else {
      for (const [attribute, value] of Object.entries(option)) {
        optionElement[attribute] = value
      }
    }

    selectElement.appendChild(optionElement)
  })
}
