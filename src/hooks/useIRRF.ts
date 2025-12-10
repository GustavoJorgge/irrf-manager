import { useCallback } from "react";

const DEPENDENT_DEDUCTION = 189.59;

export function useIRRF() {
  const calculate = useCallback((salary: number, previdencia: number, dependents: number) => {
    const baseSalary =
      salary - previdencia - dependents * DEPENDENT_DEDUCTION;

    let aliquot = 0;
    let deduction = 0;

    if (baseSalary <= 2259.20) {
      aliquot = 0;
      deduction = 0;
    } else if (baseSalary <= 2826.65) {
      aliquot = 0.075;
      deduction = 169.44;
    } else if (baseSalary <= 3751.05) {
      aliquot = 0.15;
      deduction = 381.44;
    } else if (baseSalary <= 4664.68) {
      aliquot = 0.225;
      deduction = 662.77;
    } else {
      aliquot = 0.275;
      deduction = 896.0;
    }

    const irrf = Math.max(0, baseSalary * aliquot - deduction);
    const netSalary = salary - previdencia - irrf;

    return {
      baseSalary,
      irrf,
      netSalary,
      aliquot,
    };
  }, []);

  return { calculate };
}
