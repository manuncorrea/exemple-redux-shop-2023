import styled from 'styled-components'

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;

  div {
    display: flex;
    gap: 0.5rem;

    cursor: pointer;

    svg {
      &:hover {
        color: ${(props) => props.theme['--pink-700']};
      }
    }
  }
`
