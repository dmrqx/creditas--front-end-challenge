function appendLabel ({
  container,
  labelFor,
  textContent
}) {
  const label = document.createElement('LABEL')
  label.for = labelFor
  label.textContent = textContent
  container.appendChild(label)
}

function createFormField ({
  name,
  label,
  type
}) {
  const formField = document.createElement('DIV')
  formField.className = 'field'

  if (label) {
    appendLabel({ formField, labelFor: name, textContent: label })
  }
}

function createFormFieldGroup (fields) {
  const fieldGroup = document.createElement('DIV')
  fieldGroup.className = 'field-group'

  fields.map(field => fieldGroup.appendChild(field))

  return fieldGroup
}

export class Form {

}
