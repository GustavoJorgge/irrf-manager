import { MagnifyingGlass } from '@phosphor-icons/react';
import { SearchContainer, SearchInput } from './styles';



export function EmployeeSearch() {
  return (
    <SearchContainer>
      <MagnifyingGlass size={20} color="#9CA3AF" />
      <SearchInput 
        type="text" 
        placeholder="Buscar por nome ou CPF..." 
      />
    </SearchContainer>
  );
}
    