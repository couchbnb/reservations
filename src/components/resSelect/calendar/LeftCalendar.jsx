import React from 'react';
import styled from 'styled-components'

import RowDates from './Date.jsx'

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


const LeftCalendar = (props) => {
  // goal: given an array of dates in a month, create an array of week arrays, each containing their respective days
  // i array of days
  // o array of week arrays
  // s none
  // e
  // explain: organize days into weeks
  // create 5 weeks

  if (props.month) {
    // week 1
    // handle any unused days in the month)
    var weeks = [[], [], [], [] ,[]];
    for (var i = 0; i < props.month[0].dayIndex; i++) {
      weeks[0].push({});
    }

    // start adding days to the month
    var week = 0;
    for (var i = 0; i < props.month.length; i++) {
      console.log(week)
      weeks[week].push(props.month[i]);
      if (props.month[i].dayIndex === 6) {
        week++;
      }
    }
    console.log(weeks);
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

export default LeftCalendar;