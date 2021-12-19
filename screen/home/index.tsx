import { FC } from 'react'

import { Container, HomeContent, Content } from './home.styles'
import Navbar from '../../components/navbar'
import CardImage from '../../components/card-image'
import { fakeData } from '../../constants/fake-data'

const Home: FC = () => (
  <Container>
    <Content>
      <Navbar />
      <HomeContent>
        {fakeData.map(item => (
          <CardImage
            key={item.id}
            img={item.img}
            avatar={item.avatar}
            name={item.name}
          />
        ))}

      </HomeContent>
    </Content>
  </Container>
)

export default Home
