export interface Colors {
  current: string
}

export const FETCH_COLORS = 'FETCH_COLORS'

interface FetchColorsAction {
  type: typeof FETCH_COLORS
  payload: Colors
}

export type ColorsActions = FetchColorsAction
export type Actions = ColorsActions
