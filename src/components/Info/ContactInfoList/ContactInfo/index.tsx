import React from 'react'

import { Container } from './styles'

interface Props {
  label: string,
  link: string
}

const ContactInfo: React.FC<Props> = ({ label, link }) => {
  return (
    <Container href={ link } target="_blank"
          rel="noopener noreferrer"
          className={ label }>
      { label }
    </Container>
  )
}

export default ContactInfo