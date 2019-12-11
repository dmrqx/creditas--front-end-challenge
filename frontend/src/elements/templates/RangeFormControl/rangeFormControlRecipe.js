export default {
  tagName: 'div',
  className: 'range',
  children: [
    {
      tagName: 'input',
      type: 'range'
    },
    {
      tagName: 'div',
      className: 'range__values',
      children: [
        { tagName: 'span' },
        { tagName: 'span' }
      ]
    }
  ]
}
