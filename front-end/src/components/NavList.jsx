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
            <ListItem disablePadding>
                <ListItemButton sx={{
                    paddingX: '12px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    mb: '4px',
                }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText><span className='font-medium'>{item.text}</span></ListItemText>
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <div className='flex flex-col w-full p-2'>
            {Items.map(item => (
                <List disablePadding>
                    <NavItem item={item} />
                </List>
            ))}
        </div>
    )
}

export default NavList