import { MagnifyingGlass } from '@phosphor-icons/react';
import { SearchContainer, SearchIcon, SearchInput } from './styles';

interface EmployeeSearchProps {
  onSearch: (query: string) => void;
}

export function EmployeeSearch({ onSearch }: EmployeeSearchProps) {
  return (
    <SearchContainer>
      <SearchIcon>
        <MagnifyingGlass size={18} weight="regular" />
      </SearchIcon>
      <SearchInput 
        type="text" 
        placeholder="Buscar por nome ou CPF..." 
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchContainer>
  );
}
    