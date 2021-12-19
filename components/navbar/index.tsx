import { FC, useState, useCallback } from 'react'

import { Container, Logo, IconsWrapper, Avatar } from './navbar.styles'
import { customUseContext } from '../../context'
import Notifications from './navbar.notifications'
import Notification from '../notification'

const Navbar: FC = () => {
  const { activeUser } = customUseContext()
  const [showNotifications, setShowNotifications] = useState(false)

  const handleNotifications = useCallback(() => {
    setShowNotifications(!showNotifications)
  }, [showNotifications])

  return (
  <Container>
    <Logo>Simple App</Logo>
    <IconsWrapper>
      <Notification handleNotifications={handleNotifications}/>
      <Avatar src={activeUser.avatar}/>

      { showNotifications && <Notifications/> }

    </IconsWrapper>
  </Container>
  )
}

export default Navbar
