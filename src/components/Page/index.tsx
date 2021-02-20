import React from 'react'

import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

import { Container } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content />
      
      <Footer />
    </Container>
  )
}

export default Page