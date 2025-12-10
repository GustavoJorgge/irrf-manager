import { useState, type ReactNode } from 'react';
import { EmployeeContext, type EmployeeContextType } from './EmployeeContext';
import { type EmployeeData } from '../pages/EmployeeForm';

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  
  const addEmployee = (employee: EmployeeData) => {
    setEmployees(prev => [...prev, employee]);
  };

  const deleteEmployee = (id: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const value: EmployeeContextType = {
    employees,
    addEmployee,
    deleteEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
