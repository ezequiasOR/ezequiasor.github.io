import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 640px;
    max-width: 1024px;
    margin: 0 auto 0;
  }
`