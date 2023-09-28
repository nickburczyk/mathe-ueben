const randomValue = (multiplier = 1) => {
  return Math.floor(Math.random() * multiplier)
}
export const createAdditionProblem = () => {
  const a = randomValue(100)
  const to100 = 100 - a
  const b = randomValue(to100)
  const equation = `${a} + ${b} = `
  const solution = a + b

  return { a, b, equation, solution }
}

export const createSubtractionProblem = () => {
  const a = randomValue(100)
  const b = randomValue(a)
  const equation = `${a} - ${b} = `
  const solution = a - b

  return {
    a, b, equation, solution
  }
}

export const createMultiplicationProblem = () => {
  let a, b
  while (!a || !b) {
    a = randomValue(11)
    b = randomValue(11)
  }
  const equation = `${a} x ${b} = `
  const solution = a * b

  return { a, b, equation, solution }
}

export const createDivisionProblem = () => {
  let numerator, denominator, remainder
  while (remainder !== 0 || !numerator || !denominator) {
    denominator = randomValue(11)
    numerator = randomValue(denominator * 10)
    remainder = numerator % denominator
  }

  const equation = `${numerator} : ${denominator} = `
  const solution = numerator/denominator 

  return { 
    a: numerator, 
    b: denominator, 
    equation, 
    solution 
  }
}

export const getRandomProblem = () => {
  const rand = randomValue(4)
  switch(rand) {
    case 0: return createAdditionProblem()
    case 1: return createSubtractionProblem()
    case 2: return createMultiplicationProblem()
    case 3: return createDivisionProblem()
    default: return createAdditionProblem()
  }
}