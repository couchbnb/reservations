import React from 'react';
import styled from 'styled-components'

import Date from './Date.jsx'

let Wrapper = styled.div`
  background-color: grey;
  width: 40%;
`;

let Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

let Arrow = styled.div`
  font-weight: bold;
`;

const LeftCalendar = (props) => {



  return (
    <Wrapper>
      <Head>
        <div>{'<'}</div>
        <div>September 2020</div>
        <div>{' '}</div>
      </Head>
      <table>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  )
}

export default LeftCalendar;