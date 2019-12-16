export default function rangeDisplayValue ({
  containerClass = 'range__values',
  rangeValues: [min, max]
}) {
  return `
    <div class="${containerClass}">
      <span>${isNaN(min) ? '' : String(min)}</span>
      <span>${isNaN(max) ? '' : String(max)}</span>
    </div>
  `
}
