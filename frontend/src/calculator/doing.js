
export function handleChangeWarrantyType () {
    const warrantySelectElement = document.querySelector('#garantia')

    warrantySelectElement.addEventListener('change', function (event) {
      updateLoanTerms(event.target.value)
    })
  }

  export function registerWarrantyOptions () {
    const warrantySelectElement = document.querySelector('#garantia')

    acceptedCollateralList.forEach(({ type, nicename }) => {
      const optionElement = document.createElement('option')

      optionElement.value = type
      optionElement.textContent = nicename

      warrantySelectElement.appendChild(optionElement)
    })
  }

  export function updateLoanTerms (collateralType) {
    const termsSelectElement = document.querySelector('#parcelas')

    const selectedType = acceptedCollateralList.find(({ type }) => type === collateralType)

    selectedType.loanFeatures.terms.forEach(term => {
      const optionElement = document.createElement('option')

      optionElement.value = term
      optionElement.textContent = term

      termsSelectElement.appendChild(optionElement)
    })
  }
