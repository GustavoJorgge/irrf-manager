import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Home } from './pages/Home'
import styled from 'styled-components'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <Home />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}