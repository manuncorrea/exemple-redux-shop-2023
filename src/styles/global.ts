import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background: ${(props) => props.theme['--gray-900']};
    color: ${(props) => props.theme['--white-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`
