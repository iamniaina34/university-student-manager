import React from 'react'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { Box, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Items = [
    {
        icon: <PeopleRoundedIcon />,
        path: "etudiants",
        text: "Etudiants",
    },
    {
        icon: <SchoolRoundedIcon />,
        path: "classes",
        text: "Classes",
    },
    {
        icon: <EventRoundedIcon />,
        path: "seances",
        text: "Séances",
    },
    {
        icon: <MenuBookRoundedIcon />,
        path: "cours",
        text: "Cours",
    },
];

function NavItem({ item }) {
    return (
        <React.Fragment>
            <ListItem 
            disablePadding
            >
                <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <div className='flex flex-col w-full'>
            {Items.map(item => (
                <List disablePadding>
                    <NavItem item={item} />
                </List>
            ))}
        </div>
    )
}

export default NavList