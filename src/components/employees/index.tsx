import { Dot, DotContent, EmployeeContainer } from './styles';
import { EmployeeSearch } from './EmployeeSearch';
import { User } from '@phosphor-icons/react';
import { Title } from '../ui/Title/title';
import EmployeeTable from './EmployeeTable';


export function Employee() {


  return (
    <EmployeeContainer>
        <div>
            <Title variant="small">
                <User size={24} />
                Funcionários Cadastrados
            <Dot>
                <DotContent>3</DotContent>
            </Dot>
            </Title>
        </div>
        <div>
            <EmployeeSearch />
        </div>
      <EmployeeTable />
      Total: R$1400
    </EmployeeContainer>
  );
}