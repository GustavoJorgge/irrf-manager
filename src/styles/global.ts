import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}

body{
    background-color: ${props => props.theme['gray-100']};
    color: ${props => props.theme.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`