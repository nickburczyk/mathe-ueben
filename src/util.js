/**
 * @todo control for selected operations
 */

const randomValue = (multiplier = 1) => {
  return Math.floor(Math.random() * multiplier)
}

const createAdditionProblem = () => {
  const type = 'add'
  const a = randomValue(100)
  const to100 = 100 - a
  const b = randomValue(to100)
  const equation = `${a} + ${b} = `
  const solution = a + b

  return { a, b, equation, solution, type }
}


const createSubtractionProblem = () => {
  const type = 'subtract'
  const a = randomValue(100)
  const b = randomValue(a)
  const equation = `${a} - ${b} = `
  const solution = a - b

  return {
    a, b, equation, solution, type
  }
}


const createMultiplicationProblem = () => {
  const type = 'multiply'
  let a, b
  while (!a || !b) {
    a = randomValue(11)
    b = randomValue(11)
  }
  const equation = `${a} x ${b} = `
  const solution = a * b

  return { a, b, equation, solution, type }
}


const createDivisionProblem = () => {
  const type = 'divide'
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
    equation, 
    solution,
    remainder
  }
}


export const getRandomProblem = () => {
  // UNCOMMENT THIS LINE TO SHORT CIRCUIT PROBLEMS OF ONLY A GIVEN TYPE
  // return createDivisionProblem()

  const rand = randomValue(4)
  switch(rand) {
    case 0: return createAdditionProblem()
    case 1: return createSubtractionProblem()
    case 2: return createMultiplicationProblem()
    case 3: return createDivisionProblem()
    default: return createAdditionProblem()
  }
}