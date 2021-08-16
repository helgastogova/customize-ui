import { useCallback, useEffect, useState } from 'react'
import type { FocusEventHandler, FocusEvent } from 'react'

type FloatLabelState = [
  boolean,
  {
    onFocus: FocusEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
  }
]

export default function useFloatLabel(
  defaultValue = false,
  props: {
    onFocus?: FocusEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
  }
): FloatLabelState {
  const [floated, setFloated] = useState(defaultValue)

  useEffect(() => {
    setFloated(defaultValue)
  }, [defaultValue])

  const onFloatFocus = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      if (props.onFocus) props.onFocus(ev)
      setFloated(true)
    },
    [props]
  )

  const onFloatBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      if (props.onBlur) props.onBlur(ev)
      if (!ev.target.value) setFloated(false)
    },
    [props]
  )

  return [
    floated,
    {
      onFocus: onFloatFocus,
      onBlur: onFloatBlur,
    },
  ]
}
