import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Container } from "./styles/Shares.js"
import { GlobalCss } from "./styles/GlobalCss.js"
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import LoginContextProvider from "./store/LoginContextApi"
import RouteGuard from './helpers/RouteGuard.js'

const theme = {
  colors: {
    primary: "#0070f3"
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss/>
      <Container>
        <LoginContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={
              <RouteGuard>
                <Home />
              </RouteGuard>
            } />
          </Routes>
        </Router>
        </LoginContextProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App