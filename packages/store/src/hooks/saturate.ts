import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducers'
import {setPaletteColors} from '../actions'
import {colors} from '../constants/colors'

export function useSaturate() {
  const {lvl: saturateLvl} = useSelector(({saturate}: RootState) => saturate)
  const dispatch = useDispatch()

  useEffect(() => {
    const lvlNormalized = saturateLvl - 1
    const palette = colors[lvlNormalized]

    dispatch(setPaletteColors(palette))
  }, [saturateLvl])
}
