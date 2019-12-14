import { loanRates } from '../../constants/'

export default function convertLoanToValue ({ loanAmount, ltvRatio = loanRates.LOAN_TO_VALUE_RATIO }) {
        return loanAmount * ltvRatio
}
