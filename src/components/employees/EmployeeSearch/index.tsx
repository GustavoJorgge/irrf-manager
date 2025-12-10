import { MagnifyingGlass } from '@phosphor-icons/react';
import { SearchContainer, SearchInput } from './styles';

interface EmployeeSearchProps {
  onSearch: (query: string) => void;
}

export function EmployeeSearch({ onSearch }: EmployeeSearchProps) {
  return (
    <SearchContainer>
      <MagnifyingGlass size={20} color="#9CA3AF" />
      <SearchInput 
        type="text" 
        placeholder="Buscar por nome ou CPF..." 
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchContainer>
  );
}
    