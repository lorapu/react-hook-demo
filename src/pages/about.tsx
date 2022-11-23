import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function About (): JSX.Element {
  const { state } = useLocation()
  return (
    <article className="message is-success">
  <div className="message-header">
    <p>Congratuations!</p>
  </div>
  <div className="message-body">
    <p className="field">You have join in us successful!</p>
    <p><strong className="tag is-dark">Email:</strong><span>{ state.email }</span></p>
    <p><strong className="tag is-dark">Nickname:</strong><span>{state.nickname}</span></p>
    <p><Link to="/" className="button is-link">Go back</Link></p>
  </div>
</article>
  )
}
