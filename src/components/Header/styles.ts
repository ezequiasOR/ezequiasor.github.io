import styled from 'styled-components'

export const Container = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1rem 0 1rem;
    
  > h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center
  }

  > h2 {
    color: #BFC0C0;
    padding-top: 0.5rem;
    font-size: 1.5em;
    text-align: center
  }
`
