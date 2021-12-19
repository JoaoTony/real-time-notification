import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background: #B653B5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  position: relative;
`

export const Logo = styled.p`
  font-size:  26px;
  font-weight: bold;
  color: #fff;
`
export const IconsWrapper = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const Notifications = styled.div`
  width: 200px;
  padding: 12px;
  border-radius: 8px;

  background: #fff;

  position: absolute;
  z-index: 2000;
  right: 0;
  bottom:  -35px;
  box-shadow: #B0C4DE 0 0 19px;

  .arrow {
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;

    top: -8px;
    left: 53%;
    transform: rotate(45deg);
  }
`
