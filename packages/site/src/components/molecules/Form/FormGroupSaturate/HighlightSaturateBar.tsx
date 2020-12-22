import React, {useEffect, useMemo, useState} from 'react'
import * as Styled from './styled'

interface HighlightSaturateBar {
  lvl: number
  max: number
  transition: number
  contrastColor: string
}

function HighlightSaturateBar({lvl, max, transition, contrastColor}) {
  const [list, setList] = useState([])

  useEffect(() => {
    const initialList = new Array(max).fill(lvl)
    setList(initialList)
  }, [])

  useMemo(() => {
    const updatedList = list.fill(lvl)
    setList(updatedList)
  }, [lvl])

  return (
    <Styled.IconWrapper>
      {list.map((value, index) => (
        <Styled.IconIndicator transition={transition} contrastColor={contrastColor} isFilled={index < value} key={index} />
      ))}
    </Styled.IconWrapper>
  )
}

export default HighlightSaturateBar
