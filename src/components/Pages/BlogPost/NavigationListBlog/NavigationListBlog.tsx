
import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const NavigationListBlog: React.FC = () => {

    
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [darkMode, setDarkMode] = React.useState(false);
    
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const classes = useStyles();


     React.useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 21 || currentHour < 8) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
     }, []);
    
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light', // Установка темной темы
            background: {
            default: darkMode ? '#fff' : '#eee', // Изменение цвета фона в зависимости от темы
        },
        },
    });


    
    return (
     <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%', maxWidth: 360, }} className={classes.BgColor}>
           
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
            
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                 
                >
                    <ListItemText primary="Куда поехать" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
              
                >
                    <ListItemText primary="Знакомства" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
               
                >
                    <ListItemText primary="Куда пойти" />
                </ListItemButton>
                       <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <Link to="/products"> 
                      <ListItemText primary="Техники знакомст"   />
                    </Link>
                </ListItemButton>
            </List>
            </Box>
  </ThemeProvider>
    );
}
export default NavigationListBlog;