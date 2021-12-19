import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SignInFormWrapper = styled.div`
  padding: 30px;
  width: auto;
`
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  width: 230px;
  height: 45px;
  border-radius: 12px;
  border: 1px #E6E6FA solid;
  background: #F0F8FF;
  margin: 20px 0;
  outline: none;
  padding: 0 10px;
  color: #778899;
  font-size: 14px;

  ::placeholder {
    color: #778899;
  };
`

export const Button = styled.button`
  width: 230px;
  height: 45px;
  border-radius: 12px;
  background: #FFC600;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`
export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #b0c4de
`
