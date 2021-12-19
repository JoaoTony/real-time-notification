import { FC, useRef, FormEvent } from 'react'

import { SignInForm as Form, Input, Button } from './sign-in.styles'
import { fakeData } from '../../constants/fake-data'
import { customUseContext } from '../../context'

const SignInForm: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { handleLogin, handleActiveUser } = customUseContext()

  const handleUserExists = () => {
    return fakeData.find(item => item.name === inputRef.current?.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (handleUserExists()) {
      handleLogin()
      handleActiveUser(handleUserExists() || { id: '', name: '', avatar: '' })
    } else alert('Este usuario n existe')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Type your name" ref={inputRef} />
      <Button type="submit">Enter</Button>
    </Form>
  )
}

export default SignInForm
