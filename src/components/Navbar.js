import React from 'react';
import '../App.css';
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { Search, Person, ShoppingCart } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import {Link} from 'react-router-dom';

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1F0F08' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Link to='/'><img src={require('../assets/logo.png')} alt="Pé de Carne Logo" width={100}/></Link>
        </Box>
        <div className='gigas'>
            <SearchBox>
            <SearchIconWrapper>
                <Search />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Pesquise o que deseja..."
                inputProps={{ 'aria-label': 'search' }}
            />
            </SearchBox>
            <Box display="flex" alignItems="center">
            <IconButton color="inherit">
            <Link to='/local-entrada'><Person /></Link>
            </IconButton>
            <IconButton color="inherit">
                <ShoppingCart />
            </IconButton>
            </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
