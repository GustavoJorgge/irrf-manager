import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Tag, Actions, IconButton } from "./styles";

interface EmployeeProps {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  descontoPrev: number;
  dependentes: number;
  aliquota: string;
  irrf: number;
}

const mockEmployees: EmployeeProps[] = [
  {
    id: "1",
    nome: "Gustavo Jorge",
    cpf: "154.417.166-81",
    salario: 4000,
    descontoPrev: 200,
    dependentes: 1,
    aliquota: "15%",
    irrf: 160.12,
  },
];

export default function EmployeeTable() {
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Salário</Th>
            <Th>Desc. Prev.</Th>
            <Th>Dep.</Th>
            <Th>Alíquota</Th>
            <Th>IRRF</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        <Tbody>
          {mockEmployees.map((emp) => (
            <Tr key={emp.id}>
              <Td>{emp.nome}</Td>
              <Td>{emp.cpf}</Td>
              <Td>
                {emp.salario.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Td>
              <Td>
                {emp.descontoPrev.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Td>
              <Td>{emp.dependentes}</Td>
              <Td>
                <Tag>{emp.aliquota}</Tag>
              </Td>
              <Td>
                {emp.irrf.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Td>

              <Td>
                <Actions>
                  <IconButton title="Editar">
                    <PencilIcon size={16} />
                  </IconButton>
                  <IconButton title="Excluir">
                    <TrashIcon size={16} />
                  </IconButton>
                </Actions>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
