import { collateralOptions } from '../../constants'

export function getLoanFeaturesByCollateralType ({ type: chosenType }) {
  const { loanFeatures } = collateralOptions
    .filter(({ type }) => type === chosenType)
    .reduce(() => {})
  return loanFeatures
}
