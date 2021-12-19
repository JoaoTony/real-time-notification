import { FC, useState } from 'react'

import { Container, Image, Row, BTNLike, Name, Avatar } from './card-image.styles'
import { customUseContext } from '../../context'
import { CardImageProps } from './card-image.types'

const CardImage: FC<CardImageProps> = ({ name, avatar, img, socket }) => {
  const [isLiked, setIsLiked] = useState(false)
  const { activeUser } = customUseContext()

  const handleIsLiked = (type: number) => {
    type === 0 && setIsLiked(!isLiked)
    socket.emit('sendNotification', {
      senderName: activeUser.name,
      receiverName: name,
      type
    })
  }

  return (
   <Container id="card">
     <Row>
       <Avatar src={avatar}/>
       <Name>{`${name} ${activeUser.name === name ? '(Me)' : ''}`}</Name>
     </Row>
     <Image src={img}/>

     <Row>
       <BTNLike onClick={() => handleIsLiked(0)}>
         <img src={isLiked ? './like-03.png' : './like-01.png'} alt="" />
       </BTNLike>
       <BTNLike onClick={() => handleIsLiked(1)}>
         <img src="./comment.png" alt="" />
       </BTNLike>
       <BTNLike onClick={() => handleIsLiked(2)}>
         <img src="./share.png" alt="" />
       </BTNLike>
     </Row>
   </Container>
  )
}

export default CardImage
