import { EmployeeContainer, Title } from './styles';
import { EmployeeSearch } from './EmployeeSearch';
import { EmployeeList } from './EmployeeList';
import { User } from '@phosphor-icons/react';


export function Employee() {


  return (
    <EmployeeContainer>
        <div>
            <Title>
                <User size={24} />
                Funcionários Cadastrados
            </Title>
        </div>
        <div>
            <EmployeeSearch />
        </div>
      <EmployeeList
      />
    </EmployeeContainer>
  );
}