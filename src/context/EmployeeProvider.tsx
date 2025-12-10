import { useState, type ReactNode } from 'react';
import { EmployeeContext, type EmployeeContextType } from './EmployeeContext';
import { type EmployeeData } from '../pages/EmployeeForm';

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);

  const addEmployee = (employee: EmployeeData) => {
    setEmployees(prev => [...prev, employee]);
  };

  const value: EmployeeContextType = {
    employees,
    addEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
