import React from 'react'
import { AppError, useError } from '../hooks'

export default function ErrorView ({ error }: { error: AppError }): JSX.Element {
  const { setError } = useError()
  const clearError = (): void => {
    setError(null)
  }
  return (<article className="message is-danger">
  <div className="message-header">
    <p>Error Occupied</p>
    <button onClick={clearError} className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    <h3 className="title">There is an error.</h3>
    <p><strong className="tag">Code:</strong><span>{error.ret}</span></p>
    <p><strong className="tag is-warn">Message:</strong><span>{error.msg}</span></p>
  </div>
</article>)
}
