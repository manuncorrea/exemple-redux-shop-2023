import ReactModal from 'react-modal'
import styled from 'styled-components'

export const ContentCart = styled(ReactModal)`
  background: ${(props) => props.theme['--gray-500']};
  color: ${(props) => props.theme['--white-100']};

  padding: 1.875rem;
  border-radius: 6px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30%;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`

export const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .close-button {
    background: transparent;
    border: none;

    svg {
      color: ${(props) => props.theme['--white-100']};
    }
  }
`
