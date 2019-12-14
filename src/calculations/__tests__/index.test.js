import {
  calculateCollateralRange,
  calculateMonthlyInterest,
  calculateMonthlyPayment,
  calculateTotalPayment,
  checkValueAgainstRange
} from '..'

describe('Creditas Challenge - Calculations', () => {
  describe('Method: calculateCollateralRange', () => {
    it('should return accepted collateral range array given current loan size range', () => {
      const loanSizeRange = [1500, 6750]

      expect(calculateCollateralRange({ loanSizeRange })).toEqual([
        1875,
        8437.5
      ])
    })

    it('should return accepted collateral range array given current loan size range and loan to value ratio other than default', () => {
      const loanSizeRange = [4000, 7750]
      const ltvRatio = 1.32

      expect(calculateCollateralRange({ loanSizeRange, ltvRatio })).toEqual([
        5280,
        10230
      ])
    })
  })

  describe('Method: calculateMonthlyInterest', () => {
    it('should return the sum of all interest rates in relation to given term', () => {
      const monthlyInterestByTerm = {
        24: Number(1.1112),
        36: Number(1.1232),
        48: Number(1.1352)
      }

      Object.entries(monthlyInterestByTerm).forEach(
        ([term, monthlyInterest]) => {
          expect(calculateMonthlyInterest({ term })).toEqual(monthlyInterest)
        }
      )
    })
  })

  describe('Method: calculateMonthlyPayment', () => {
    it('should return the result of the division of total due payment by selected term', () => {
      const term = 120
      const totalPayment = 420000

      expect(calculateMonthlyPayment({ term, totalPayment })).toEqual(3500)
    })
  })

  describe('Method: calculateTotalPayment', () => {
    it('should return the product of monthly interest rates by desired loan amount', () => {
      const loanAmount = 3000
      const monthlyInterest = 1.675

      expect(calculateTotalPayment({ loanAmount, monthlyInterest })).toEqual(
        5025
      )
    })
  })

  describe('Method: checkValueAgainstRange', () => {
    it('should return true if given value is within given range', () => {
      const range = [420, 666]
      const value = 595

      expect(checkValueAgainstRange({ range, value })).toBeTruthy()
    })

    it('should return false if given value is not within given range', () => {
      const range = [75, 99]
      const value = 42

      expect(checkValueAgainstRange({ range, value })).toBeFalsy()
    })
  })
})
