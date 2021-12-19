import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 0 10px;
  display: flex;
  align-items: center;

  cursor: pointer;
`
export const Icon = styled.img`
  height: 30px;
  width: 30px;
`

export const FloatNumber = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background:red;

  position: absolute;
  right: 0;
  top: 0;
  border: solid 2px gray;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
`
