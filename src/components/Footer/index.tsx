import React from 'react'
import { FaCode } from 'react-icons/fa'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        {<FaCode className="icon" size={20}/>}
        by
        <a href="https://www.instagram.com/ezequiasr/"
              target="_blank" rel="noopener noreferrer">
          Ezequias R
        </a>
      </footer>
    </Container>
  )
}

export default Footer