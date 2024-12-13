import React from 'react'
import { Card, Button } from 'react-bootstrap'

const MusicCard = ({ title, artist, imageUrl }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{artist}</Card.Text>
        <Button variant="primary">Ascolta</Button>
      </Card.Body>
    </Card>
  )
}

export default MusicCard
