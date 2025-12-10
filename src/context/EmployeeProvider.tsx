import { useState, type ReactNode } from 'react';
import { EmployeeContext, type EmployeeContextType } from './EmployeeContext';
import { type EmployeeData } from '../components/employees/EmployeeForm';

export function EmployeeProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  
  const addEmployee = (employee: EmployeeData) => {
    setEmployees(prev => [...prev, employee]);
  };

  const deleteEmployee = (id: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const updateEmployee = (updatedEmployee: EmployeeData) => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  }

  const value: EmployeeContextType = {
    employees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
