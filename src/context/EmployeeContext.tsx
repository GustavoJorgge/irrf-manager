import { createContext, useContext } from 'react';
import { type EmployeeData } from '../pages/EmployeeForm';

export interface EmployeeContextType {
    employees: EmployeeData[];
    addEmployee: (employee: EmployeeData) => void;
    deleteEmployee: (id: string) => void;
    updateEmployee: (employee: EmployeeData) => void;
}

export const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

export function useEmployee() {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployee deve estar dentro de EmployeeProvider');
  }
  return context;
}
