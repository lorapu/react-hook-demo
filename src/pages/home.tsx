import React, { useState, useReducer, FormEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { useError } from '../hooks'
interface FormState {
  email: string
  nickname: string
}

const formReducer = (
  state: FormState,
  action: { type: string, value: string }
): FormState => {
  switch (action.type) {
    case 'email': {
      return {
        ...state,
        email: action.value
      }
    }
    case 'nickname': {
      return {
        ...state,
        nickname: action.value
      }
    }
    default: {
      return state
    }
  }
}

export default function Home (): JSX.Element {
  const [msg, warn] = useState('')
  const [formData, setFormData] = useReducer(formReducer, { email: '', nickname: '' })
  const navigate = useNavigate()
  const { setError } = useError()
  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    if (formData.email === '' || formData.nickname === '') {
      warn('Please input your email and nickname.')
      return
    }
    navigate('/about', { state: formData })
  }
  const clearWarn = (): void => warn('')
  return (
    <div className="container">
      <form className="box mt-4" onSubmit={submit}>
        {msg !== '' && <section className="notification is-warning">
          <button className="delete" onClick={clearWarn}></button>
          <p className="content">{ msg }</p>
        </section>}
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input is-large"
              type="email"
              onFocus={clearWarn}
              onChange={(e) => {
                setFormData({ type: 'email', value: e.target.value })
              }}
              placeholder="e.g. alex@example.com" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input is-large"
              type="text"
              onFocus={clearWarn}
              onChange={(e) => {
                setFormData({ type: 'nickname', value: e.target.value })
              }}
              placeholder="any name you like" />
          </div>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button type="submit" className="button is-large is-primary">Sign in</button>
          </p>
          <p className="control">
            <button type="button" onClick={() => {
              setError({ ret: -11000, msg: 'Some error occupied' })
            }} className="button is-large is-danger">Trigger error</button>
          </p>
        </div>
      </form>
    </div>
  )
}
