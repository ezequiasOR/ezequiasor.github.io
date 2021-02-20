import React from 'react'

import ContactInfoList from './ContactInfoList'
import { infos } from '../../data/info.json'

import { Container } from './styles'

const { labels, links } = infos

const Info: React.FC = () => {
  return (
    <Container>
      <ContactInfoList labels={ labels } 
                       links={ links } />
    </Container>
  )
}

export default Info