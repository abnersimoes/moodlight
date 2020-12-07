import styled from 'styled-components'

const whiteRGB = '255, 255, 255'
const blackRGB = '0, 0, 0'
const dropShadowLight = `-6px -6px 10px rgba(${whiteRGB}, 0.06)`
const dropShadowDark = `6px 6px 10px rgba(${blackRGB}, 0.02)`

export const ButtonWrapper = styled.button`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  outline: none;
  background-color: transparent;
  filter: drop-shadow(${dropShadowLight}) drop-shadow(${dropShadowDark});
  position: relative;

  :before,
  :after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  :before {
    background: linear-gradient(-45deg, rgba(${whiteRGB}, 0.16) 0%, rgba(${whiteRGB}, 0) 50%, transparent 100%);
  }

  :after {
    background: linear-gradient(135deg, rgba(${blackRGB}, 0.02) 0%, rgba(${blackRGB}, 0) 50%, transparent 100%);
  }
`
