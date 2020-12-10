import {useCallback, useState} from 'react'

interface ControlProps {
  isActive: boolean
  time: string
}

type UseControl = [ControlProps, () => void]

export function useControl(control: ControlProps): UseControl {
  const [controlState, setControlState] = useState<ControlProps>(control)

  const onSetControl = useCallback(() => {
    setControlState({...controlState, isActive: !controlState.isActive})
  }, [controlState])

  return [controlState, onSetControl]
}
