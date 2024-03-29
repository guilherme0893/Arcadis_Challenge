/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { TableHead, TableContainer } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GlobalContext from '../../context/GlobalContext';

function SearchParameterTable() {
  const { parameter } = React.useContext(GlobalContext);
  return (
    <TableContainer component={Paper}>
      <Table data-testid="table">
        <TableHead data-testid="table-head" sx={{ minWidth: 650 }} size="large">
          <TableRow data-testid="table-row">
            <TableCell data-testid="header-cell" align="center">Sample</TableCell>
            <TableCell data-testid="header-cell" align="center">Parameter</TableCell>
            <TableCell data-testid="header-cell" align="center">Unity</TableCell>
            <TableCell data-testid="header-cell" align="center">Value</TableCell>
            <TableCell data-testid="header-cell" align="center">Sampling date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="table-body">
          {parameter.map((p, id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {' '}
              <TableCell data-testid="table-data" align="center">{p.samplePointName}</TableCell>
              <TableCell data-testid="table-data" align="center">{p.parameter}</TableCell>
              <TableCell data-testid="table-data" align="center">{p.parameterUnity}</TableCell>
              <TableCell data-testid="table-data" align="center">{Number(p.parameterValue).toFixed(3)}</TableCell>
              <TableCell data-testid="table-data" align="center">{(p.samplingDate).slice(0, -14)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SearchParameterTable;
