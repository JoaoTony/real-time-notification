import { FC } from 'react'

import SignInForm from './sign-in.from'
import { Container, SignInFormWrapper, Footer } from './sign-in.styles'

const SignIn: FC = () => (
  <Container>
    <SignInFormWrapper>
      <SignInForm />
    </SignInFormWrapper>

    <Footer>A Simple Real time App </Footer>
  </Container>
)

export default SignIn
