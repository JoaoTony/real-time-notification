import { FC } from 'react'

import { INotification } from './navbar.types'
import { Notifications as Container } from './navbar.styles'
import { customUseContext } from '../../context'
import { typeCodeToText, formatedName } from './navbar.utils'

const Notifications: FC<{notifications: Array<INotification>}> = ({ notifications }) => {
  const { activeUser } = customUseContext()

  return (
  <Container>
    <div className="arrow"/>
    {notifications.map((notification, index) =>
      (<p key={index.toString()} className="notification">
        {formatedName(activeUser.name, notification.senderName)} {typeCodeToText(notification.type)} your photo
    </p>))}
  </Container>
  )
}

export default Notifications
