import { FC } from 'react'

import { Container, Icon, FloatNumber } from './notification.styles'

const Notification: FC<{ handleNotifications: () => void }> = ({ handleNotifications }) => {
  const notification = 1

  return (
    <Container onClick={() => handleNotifications()}>
      {notification && (
        <FloatNumber>{notification}</FloatNumber>
      )}
      <Icon src="./icon-lembrete.png"/>
    </Container>
  )
}

export default Notification
