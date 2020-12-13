import React, {useEffect, useMemo, useState} from 'react'
import * as Styled from './styled'

interface HighlightSaturateBar {
  lvl: number
  max: number
}

function HighlightSaturateBar({lvl, max}) {
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
    <Styled.IconWrappe>
      {list.map((value, index) => (
        <Styled.IconIndicator isFilled={index < value} key={index} />
      ))}
    </Styled.IconWrappe>
  )
}

export default HighlightSaturateBar
