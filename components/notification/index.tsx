import { FC } from 'react'

import { Container, Icon, FloatNumber } from './notification.styles'
import { NotificationsProps } from './notification.types'

const Notification: FC<NotificationsProps> = ({ handleNotifications, notificationQuality }) => (
  <Container onClick={() => handleNotifications()}>
    {notificationQuality > 0 && (
      <FloatNumber>{notificationQuality}</FloatNumber>
    )}
    <Icon src="./icon-lembrete.png"/>
  </Container>
)

export default Notification
