interface GetFieldValueOrMinProps {
  target: HTMLInputElement
  min: number
}

export function getFieldValueOrMin({target: {value}, min}: GetFieldValueOrMinProps): string {
  return parseFloat(value) >= min ? value : `${min}`
}
