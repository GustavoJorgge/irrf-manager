export function calculateIRRF(
  salary: number,
  inss: number,
  dependents: number
) {
  const deductionPorDependent = 189.59;

  const salaryBase =
    salary - inss - dependents * deductionPorDependent;

  let aliquota = 0;
  let parcela = 0;

  if (salaryBase <= 2259.20) {
    aliquota = 0;
    parcela = 0;
  } else if (salaryBase <= 2826.65) {
    aliquota = 0.075;
    parcela = 169.44;
  } else if (salaryBase <= 3751.05) {
    aliquota = 0.15;
    parcela = 381.44;
  } else if (salaryBase <= 4664.68) {
    aliquota = 0.225;
    parcela = 662.77;
  } else {
    aliquota = 0.275;
    parcela = 896;
  }

  const irrf = salaryBase * aliquota - parcela;

  return {
    salaryBase: Math.max(salaryBase, 0),
    irrf: Math.max(irrf, 0),
  };
}
