import { loanRates } from '../../constants'
import { convertLoanToValue } from '../calculations'

//   function initializeAppMock () {
//     document.body.innerHTML = `
//       <form class="form" data-testid="form">
//         <label for="valor-garantia">Valor da Garantia</label>
//         <input id="valor-garantia" required />
//         <button type="button"></button>
//       </form>
//     `
//   }

//   function clean () {
//     document.body.innerHTML = ''
//   }

  describe('Creditas Challenge - Calculations', () => {
    // beforeEach(() => {
    //   initializeAppMock()
    // })

    // afterEach(() => {
    //   clean()
    // })

    describe('Method: convertLoanToValue', () => {
      it('should return the product of the multiplication of given loan amount by default convertion ratio', () => {
          const { LOAN_TO_VALUE_RATIO } = loanRates
            const loanAmount = 3000
            const product = loanAmount * LOAN_TO_VALUE_RATIO

        expect(convertLoanToValue({loanAmount})).toEqual(product)
      })

      it('should return the product of the multiplication of given loan amount by give convertion ratio', () => {
        const ltvRatio = 1.37
          const loanAmount = 3000
          const product = loanAmount * 1.37

      expect(convertLoanToValue({loanAmount, ltvRatio})).toEqual(product)
    })

    //   it('should return false when form has not valid', () => {
    //     const form = document.querySelector('.form')
    //     expect(checkFormValidity(form)).toBeFalsy()
    //   })
    })

    // describe('Method: Submit', () => {
    //   it('should add event listener to submit data form', () => {
    //     const container = document.querySelector('.form')
    //     Submit(container)
    //   })
    // })
  })
