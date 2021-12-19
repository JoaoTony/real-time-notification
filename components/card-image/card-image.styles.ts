import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  height: 400px;

  border-bottom: 1px solid #E6E6FA;
  margin: 10px 0;
`

export const Image = styled.img`
  width: 100%;
  height: 280px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 12px;
`

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-left: 12px;
`

export const BTNLike = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`
