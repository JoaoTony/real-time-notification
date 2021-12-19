import { FC } from 'react'

import { INotification } from './navbar.types'
import { Notifications as Container } from './navbar.styles'
import { typeCodeToText } from './navbar.utils'

const Notifications: FC<{notifications: Array<INotification>}> = ({ notifications }) => (
  <Container>
    <div className="arrow"/>
    {notifications.map((notification, index) =>
      (<p key={index.toString()} className="notification">
        {notification.senderName} {typeCodeToText(notification.type)} yor photo
    </p>))}
  </Container>
)

export default Notifications
