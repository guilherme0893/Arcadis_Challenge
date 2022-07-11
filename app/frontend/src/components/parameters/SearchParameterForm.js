/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import GlobalContext from '../../context/GlobalContext';

function SearchParameterForm() {
  const [parameterName, setParameterName] = useState('');
  const { setParameter } = React.useContext(GlobalContext);

  const onNameInputChange = ({ target }) => {
    setParameterName(target.value);
  };

  async function SearchParameter() {
    await axios.get(`http://localhost:3004/parameters/${parameterName}`)
      .then((response) => setParameter(response.data));
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));

  return (
    <div>
      <FormGroup data-testid="sample-form">
        <p style={{ marginBottom: '5px' }}>Parameter name</p>
        <TextField
          required
          onChange={onNameInputChange}
          style={{ marginBottom: '5px' }}
        />
      </FormGroup>
      <ColorButton
        style={{ marginTop: '15px' }}
        type="submit"
        variant="contained"
        size="small"
        onClick={SearchParameter}
      >
        Search
      </ColorButton>
    </div>
  );
}

export default SearchParameterForm;