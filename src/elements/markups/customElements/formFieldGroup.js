import { formField } from '.'

export default function formFieldGroup ({
  containerClass = 'field-group',
  fieldContainerClass,
  fields
}) {
  return `<div class="${containerClass}">${fields
    .map(field =>
      formField({ containerClass: fieldContainerClass, content: field })
    )
    .join('')}</div>`
}
