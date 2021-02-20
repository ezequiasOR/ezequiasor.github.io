import styled from 'styled-components'

export const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 0 1rem 0;

  color: #fff;

  > footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #BFC0C0
  }

  .icon {
    margin-right: 4px;
  }

  a {
    text-decoration: none;
    margin-left: 4px;
    color: #BFC0C0;
  }
`