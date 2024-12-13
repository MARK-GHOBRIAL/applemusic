import React, { useEffect, useState } from 'react'
import MusicCard from './Card'
import { Row, Col } from 'react-bootstrap'

const MyData = () => {
  const [MyData, setMyData] = useState([])

  useEffect(() => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=new-releases'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta della rete')
        }
        return response.json()
      })
      .then((data) => {
        setMyData(data.data)
      })
      .catch((error) => {
        console.error('Errore nel recuperare le nuove uscite:', error)
      })
  }, [])

  return (
    <Row className="justify-content-center">
      {newReleases.map((release) => (
        <Col xs={12} sm={6} md={4} lg={3} key={release.id} className="mb-4">
          <MusicCard
            title={release.title}
            artist={release.artist.name}
            imageUrl={release.album.cover_medium}
          />
        </Col>
      ))}
    </Row>
  )
}

export default MyData
