import React from 'react';

function Table() {
  return (
    <div>
      <style>{'th, td {border :1px ,solid, black}'}</style>
      <h1>This is Table Component</h1>
      <table>
        <th>
          <td>Ner</td>
          <td>Nas</td>
        </th>
        <tr>
          <td>Tuguldur</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Tuvshuu</td>
          <td>14</td>
        </tr>
        <tr>
          <td>Azaa</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
