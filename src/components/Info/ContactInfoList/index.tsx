import React from 'react'

import ContactInfo from './ContactInfo'

import { Container } from './styles'

interface Props {
  labels: string[],
  links: string[]
}

const ContactInfoList: React.FC<Props> = ({ labels, links }) => {
  return (
    <Container>
      {labels.map((label, index) => (
        <ContactInfo key={label} label={label} link={links[index]} />
      ))}
    </Container>
  )
}

export default ContactInfoList