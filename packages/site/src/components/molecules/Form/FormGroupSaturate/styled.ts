import styled from 'styled-components'

interface IconIndicatorProps {
  contrastColor: string
  transition: number
  isFilled?: boolean
}

export const IconWrapper = styled.div`
  width: 2rem;
  height: 1.5rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 auto;
`

export const IconIndicator = styled.div<IconIndicatorProps>`
  width: 0.25rem;
  background-color: ${({contrastColor}) => contrastColor};
  border-radius: 1rem;
  opacity: ${({isFilled}) => (isFilled ? '1' : '0.25')};
  transition: ${({transition}) => `all ${transition}s ease-in-out 0s`};

  :nth-child(1) {
    height: 40%;
  }

  :nth-child(2) {
    height: 60%;
  }

  :nth-child(3) {
    height: 80%;
  }

  :nth-child(4) {
    height: 100%;
  }
`
