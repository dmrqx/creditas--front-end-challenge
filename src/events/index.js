// const elements = {
//     COLLATERAL_TYPE_SELECT: document.querySelector('select[name="garantia"]')
// }

// export const eventListenersList = [
//     {
//         element: elements.COLLATERAL_TYPE_SELECT,
//         eventListener: {
//             type: 'change',
//             listener: onCollateralTypeChange
//         }
//     }
// ]

export function addEventListenerToElement ({ element, eventListener }) {
  const { type, listener, options = [] } = eventListener
  element.addEventListener(type, listener, options)
}

export function registerEventListeners (eventListeners) {
  eventListeners.forEach(addEventListenerToElement)
}
