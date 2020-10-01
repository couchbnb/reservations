import React from 'react';
import styled from 'styled-components'

import RowDates from './RowDates.jsx'

let Wrapper = styled.div`
  font-size: 1em;
  margin: 0px !important;
  padding: 0px;
`;

let Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

let Arrow = styled.div`
  font-weight: bold;
`;

let Cal = styled.table`
  display: flex;
  justify-content: center;
`;

let Header = styled.th`
  width: 15px;
`;


const LeftCalendar = (props) => {
  if (props.month) {
    var weeks = [[], [], [], [] ,[]];
    for (var i = 0; i < props.month[0].dayIndex; i++) {
      weeks[0].push({});
    }
    var week = 0;
    for (var i = 0; i < props.month.length; i++) {
      weeks[week].push(props.month[i]);
      if (props.month[i].dayIndex === 6) {
        week++;
      }
    }

    return (
      <Wrapper>
        <Head>
          <Arrow>{'<'}</Arrow>
          <div>September 2020</div>
          <div>{' '}</div>
        </Head>
        <Cal>
          <tbody>
            <tr>
              <Header>Su</Header>
              <Header>Mo</Header>
              <Header>Tu</Header>
              <Header>We</Header>
              <Header>Th</Header>
              <Header>Fr</Header>
              <Header>Sa</Header>
            </tr>
            {weeks.map(
              (week) => {
                return <RowDates data={week} key={Math.random()} listing={props.listing} reservations={props.reservations} current_date={props.current_date} ></RowDates>
              }
            )}
          </tbody>
        </Cal>
      </Wrapper>
    )

  } else {
    return (
      <Wrapper>
        <Head>
          <Arrow>{'<'}</Arrow>
          <div>September 2020</div>
          <div>{' '}</div>
        </Head>
        <Cal>
          <tbody>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
            </tr>
            <tr>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
            </tr>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td></td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        </Cal>
      </Wrapper>
    )
  }
}

export default LeftCalendar;