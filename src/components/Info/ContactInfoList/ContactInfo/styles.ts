import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.8rem;

  margin: 1rem;
  border: 2px solid #4F5D75;
  border-radius: 8px;

  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  
  @media (min-width: 700px) {
    min-width: 400px;
  }
`