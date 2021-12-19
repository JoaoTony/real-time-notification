import { FC, useEffect, useState } from 'react'

import { Container, HomeContent, Content } from './home.styles'
import Navbar from '../../components/navbar'
import CardImage from '../../components/card-image'
import { fakeData } from '../../constants/fake-data'
import { io } from 'socket.io-client'
import { customUseContext } from '../../context'

const Home: FC = () => {
  const { activeUser } = customUseContext()
  const [socket, setSocket] = useState<any>(null)
  useEffect(() => {
    setSocket(io('http://localhost:5000'))
  }, [])

  useEffect(() => {
    socket?.emit('newUser', activeUser.name)
  }, [socket, activeUser.name])

  return (
  <Container>
    <Content>
      <Navbar socket={socket}/>
      <HomeContent>
        {fakeData.map(item => (
          <CardImage
            key={item.id}
            img={item.img}
            avatar={item.avatar}
            name={item.name}
            socket={socket}
          />
        ))}

      </HomeContent>
    </Content>
  </Container>
  )
}

export default Home
