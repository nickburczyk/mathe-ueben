export const TIMED_DURATION_IN_MS = 10 * 1000
export const TICK_RATE = 200

const randomValue = (range = 1) => {
  return Math.floor(Math.random() * range)
}

export const createAdditionProblem = () => {
  const type = 'add'
  const symbol = '+'
  const a = randomValue(100)
  const to100 = 100 - a
  const b = randomValue(to100)
  const equation = `${a} + ${b} = `
  const solution = a + b

  return { 
    a, b, equation, solution, type, symbol 
  }
}


export const createSubtractionProblem = () => {
  const type = 'subtract'
  const symbol = '-'
  const a = randomValue(100)
  const b = randomValue(a)
  const equation = `${a} - ${b} = `
  const solution = a - b

  return {
    a, b, equation, solution, type, symbol
  }
}


export const createMultiplicationProblem = () => {
  const type = 'multiply'
  const symbol = '*'
  let a, b
  while (!a || !b) {
    a = randomValue(11)
    b = randomValue(11)
  }
  const equation = `${a} • ${b} = `
  const solution = a * b

  return { 
    a, b, equation, solution, type, symbol 
  }
}


export const createDivisionProblem = () => {
  const type = 'divide'
  const symbol = ':'
  let numerator, denominator, remainder
  while (!numerator || !denominator || numerator < denominator) {
    denominator = randomValue(11)
    numerator = randomValue(denominator * 10)
    remainder = numerator % denominator
  }

  const equation = `${numerator} : ${denominator} = `
  const solution = Math.floor(numerator/denominator) 

  return { 
    a: numerator, 
    b: denominator, 
    type,
    symbol,
    equation, 
    solution,
    remainder
  }
}

export const activeOperationsKeysList = (operationsObject) => (
  Object.entries(operationsObject)
    .filter(([key, value]) => value)
    .map(([key]) => key)
)

export const getRandomProblem = (ops) => {
  const activeOperations = activeOperationsKeysList(ops)
  // UNCOMMENT THIS LINE TO SHORT CIRCUIT PROBLEMS OF ONLY A GIVEN TYPE
  // return createDivisionProblem()

  const rand = randomValue(activeOperations.length)
  const randOperation = activeOperations[rand]

  switch(randOperation) {
    case 'add': return createAdditionProblem()
    case 'subtract': return createSubtractionProblem()
    case 'multiply': return createMultiplicationProblem()
    case 'divide': return createDivisionProblem()
    default: return createAdditionProblem()
  }
}