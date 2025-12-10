import { Info } from '@phosphor-icons/react';
import {
  IRRFContainer,
  IRRFHeader,
  IRRFTitle,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Footer,
} from './styles';

const tableData = [
  { base: 'Até R$ 2.259,20', aliquota: 'Isento', deducao: 'R$ 0,00' },
  { base: 'R$ 2.259,21 - R$ 2.826,65', aliquota: '7,5%', deducao: 'R$ 169,44' },
  { base: 'R$ 2.826,66 - R$ 3.751,05', aliquota: '15%', deducao: 'R$ 381,44' },
  { base: 'R$ 3.751,06 - R$ 4.664,68', aliquota: '22,5%', deducao: 'R$ 662,77' },
  { base: 'Acima de R$ 4.664,68', aliquota: '27,5%', deducao: 'R$ 896,00' },
];

const dependenteDeduction = 189.59;

export function IRRF() {
  return (
    <IRRFContainer>
      <IRRFHeader>
        <Info size={20} weight="regular" />
        <IRRFTitle>Tabela Progressiva IRRF</IRRFTitle>
      </IRRFHeader>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Base de Cálculo</TableHeader>
            <TableHeader>Alíquota</TableHeader>
            <TableHeader>Dedução</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.base}</TableCell>
              <TableCell>{row.aliquota}</TableCell>
              <TableCell>{row.deducao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Footer>Dedução por dependente: <span>R$ {dependenteDeduction}</span></Footer>
    </IRRFContainer>
  );
}
