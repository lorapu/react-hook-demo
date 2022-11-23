import React from 'react'
import { Outlet } from 'react-router-dom'
import { ErrorProvider, useError } from './hooks'
import { ErrorView } from './pages'

function ErrorSwitcher (): JSX.Element {
  const { error } = useError()
  return (error != null) ? <ErrorView error={error} /> : <Outlet />
}

export default function App (): JSX.Element {
  return <ErrorProvider>
    <div className="columns is-mobile">
      <div className="column is-4 is-offset-4">
        <ErrorSwitcher />
        </div>
    </div>
  </ErrorProvider>
}
