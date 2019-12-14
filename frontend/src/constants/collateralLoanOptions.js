const REALTY = {
  type: 'imovel',
  nicename: 'Imóvel',
  loanFeatures: {
    sizeRange: [30000.0, 4500000.0],
    terms: [120, 180, 240]
  }
}

const VEHICLE = {
  type: 'veiculo',
  nicename: 'Veículo',
  loanFeatures: {
    sizeRange: [3000.0, 100000.0],
    terms: [24, 36, 48]
  }
}

export default [
  REALTY,
  VEHICLE
]
