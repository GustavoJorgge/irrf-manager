import { useState } from 'react';
import { Dot, DotContent, EmployeeContainer } from './styles';
import { EmployeeSearch } from '../../components/employees/EmployeeSearch';
import { User } from '@phosphor-icons/react';
import { Title } from '../../components/ui/Title/title';
import EmployeeTable from '../../components/employees/EmployeeTable';
import { useEmployee } from '../../context/EmployeeContext';


export function Employee() {
  const [searchQuery, setSearchQuery] = useState('');
  const { employees } = useEmployee();

  const filteredEmployees = employees.filter(emp =>
    emp.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.cpf?.includes(searchQuery)
  );

  return (
    <EmployeeContainer>
        <div>
            <Title variant="small">
                <User size={24} />
                Funcionários Cadastrados
            <Dot>
                <DotContent>{employees.length}</DotContent>
            </Dot>
            </Title>
        </div>
        <div>
            <EmployeeSearch onSearch={setSearchQuery} />
        </div>
      <EmployeeTable filteredEmployees={filteredEmployees} />
      Total: R$1400
    </EmployeeContainer>
  );
}