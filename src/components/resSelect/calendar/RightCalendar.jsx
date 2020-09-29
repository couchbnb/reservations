import React from 'react';
import styled from 'styled-components';

import RowDates from './RowDates.jsx';

let Wrapper = styled.div`
  background-color: #E9E9E9;
  width: 40%;
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

const RightCalendar = (props) => {
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
          <div>{' '}</div>
          <div>October 2020</div>
          <Arrow>{'>'}</Arrow>
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
            {weeks.map(
              (week) => {
                return <RowDates data={week} key={Math.random()} ></RowDates>
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
          <div>{' '}</div>
          <div>October 2020</div>
          <Arrow>{'>'}</Arrow>
        </Head>
        <Cal>
          <thead>
          </thead>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr>
              <td>30</td>
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

export default RightCalendar;