import { FC, useState } from 'react'

import { Container, Image, Row, BTNLike, Name, Avatar } from './card-image.styles'
import { customUseContext } from '../../context'

export interface CardImageProps {
  img: string;
  avatar: string;
  name: string;
}

const CardImage: FC<CardImageProps> = ({ name, avatar, img }) => {
  const [isLiked, setIsLiked] = useState(false)
  const { activeUser } = customUseContext()

  const handleIsLiked = () => {
    setIsLiked(!isLiked)
  }

  return (
   <Container id="card">
     <Row>
       <Avatar src={avatar}/>
       <Name>{`${name} ${activeUser.name === name ? '(Me)' : ''}`}</Name>
     </Row>
     <Image src={img}/>

     <Row>
       <BTNLike onClick={() => handleIsLiked()}>
         <img src={isLiked ? './like-03.png' : './like-01.png'} alt="" />
       </BTNLike>
     </Row>
   </Container>
  )
}

export default CardImage
