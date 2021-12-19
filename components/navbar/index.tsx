import { FC, useState, useCallback, useEffect } from 'react'

import { Container, Logo, IconsWrapper, Avatar } from './navbar.styles'
import { customUseContext } from '../../context'
import Notifications from './navbar.notifications'
import Notification from '../notification'
import { INotification } from './navbar.types'

const Navbar: FC<{ socket: any}> = ({ socket }) => {
  const { activeUser } = customUseContext()
  const [notifications, setNotifications] = useState<Array<INotification>>([])
  const [showNotifications, setShowNotifications] = useState(false)

  const handleNotifications = useCallback(() => {
    setShowNotifications(!showNotifications)
  }, [showNotifications])

  useEffect(() => {
    socket?.on('getNotification', (data: INotification) => {
      setNotifications(prev => [...prev, data])
    })
  }, [socket])

  console.log(notifications)

  return (
  <Container>
    <Logo>Simple App</Logo>
    <IconsWrapper>
      <Notification
        handleNotifications={handleNotifications}
        notificationQuality={notifications.length}
      />
      <Avatar src={activeUser.avatar}/>

      { showNotifications && <Notifications notifications={notifications} /> }

    </IconsWrapper>
  </Container>
  )
}

export default Navbar
