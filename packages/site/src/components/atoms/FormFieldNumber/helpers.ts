import {prefixId} from '../FormField'

export function triggerOnChange(element: HTMLInputElement) {
  return element.dispatchEvent(new Event('change', {bubbles: true}))
}

export function getFieldElement(name: string) {
  if (document) {
    return document.querySelector(`#${prefixId}${name}`) as HTMLInputElement
  }
}
