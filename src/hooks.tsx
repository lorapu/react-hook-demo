import React, { useState, createContext, useContext } from 'react'

export interface AppError {
  ret: number
  msg: string
}

interface ErrorState {
  error: AppError | null
  setError: (error: AppError | null) => void
}

export const ErrorContext = createContext<ErrorState>({
  error: null,
  setError: () => undefined
})

export function ErrorProvider (props: { children?: JSX.Element }): JSX.Element {
  const [error, setError] = useState<AppError | null>(null)
  return <ErrorContext.Provider value={{ error, setError }}>
    {props.children}
  </ErrorContext.Provider>
}

export function useError (): ErrorState {
  const context = useContext(ErrorContext)
  return context
}
