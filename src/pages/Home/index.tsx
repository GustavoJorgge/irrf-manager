import { Employee } from "../../components/employees";
import { HomeContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            Gestão de Funcionários
            <Employee />
        </HomeContainer>
    )
}