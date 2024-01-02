import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { createBrowserHistory } from 'history';

const DarkNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'rebeccapurple', // Dark background color
}));

const LightText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
}));

const Search = styled('div')(({ theme }) => ({
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
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        console.log(event.key)

        if (event.key === 'Enter') {
            handleSearchSubmit();
        }

    }
    const handleSearchSubmit = (event) => {
        handleClose();

        // Define a mapping between search queries and their corresponding routes
        const searchQueryRoutes = {
            "home": "/",
            "get flights list": "/getflights",
            "get maintenance list": "/getmaintenance",
            "flights damaged": "/flightsdamaged",
            "flights status": "/flightstatus",
            "new registry": "/newflight",
            "search by id": "/searchbyid",
        };
        // Check if the search query matches a menu item
        const matchedRoute = searchQueryRoutes[searchQuery];

        // If a match is found, navigate to the corresponding page
        if (matchedRoute) {
            //let history = createBrowserHistory();
            navigate(matchedRoute);
            //window.location.reload();
        } else {
            // Handle the case when there's no match (optional)
            console.log("No matching menu item found for the search query");
        }
    };

    const handleLogout = () => {
        navigate("/login");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <DarkNavbar position="fixed" sx={{ width: '100%' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <LightText
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Aircraft Maintenance Tracking System
                    </LightText>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, fontSize: '1rem' }}
                        onClick={handleLogout}
                    >
                        Logout
                    </IconButton>
                    <Search component="form" onSubmit={handleSearchSubmit}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                        />
                    </Search>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
                        <MenuItem component={Link} to="/getflights" onClick={handleClose}>Get Flights List</MenuItem>
                        <MenuItem component={Link} to="/getmaintenance" onClick={handleClose}>Get Maintenance List</MenuItem>
                        <MenuItem component={Link} to="/flightsdamaged" onClick={handleClose}>Flights Damaged</MenuItem>
                        <MenuItem component={Link} to="/flightstatus" onClick={handleClose}>Flights Status</MenuItem>
                        <MenuItem component={Link} to="/newflight" onClick={handleClose}>New Registry</MenuItem>
                        <MenuItem component={Link} to="/searchbyid" onClick={handleClose}>Search By ID</MenuItem>
                    </Menu>
                </Toolbar>
            </DarkNavbar>
        </Box>
    );
};

export default NavBar;
