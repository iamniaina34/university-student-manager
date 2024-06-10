import React, { useEffect, useState } from 'react'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { Box, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

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

function NavItem({ item, onClick }) {
    return (
        <React.Fragment>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={onClick}
                    sx={{
                        paddingX: '12px',
                        paddingY: '4px',
                        borderRadius: '4px',
                        mb: '4px',
                    }}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText><span className='text-gray-700 font-medium'>{item.text}</span></ListItemText>
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    );
}

function NavList() {

    const [activeItem, setActiveItem] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const handleItemClick = (item) => {
        navigate("/" + item.path);
        setActiveItem(item);
    };

    useEffect(() => {
        const pathname = location.pathname;
        Items.forEach(item => {
            if (pathname.includes(item.path)) {
                setActiveItem(item);
            }
        })
    }, [location.pathname]);

    return (
        <div className='flex flex-col w-full p-2'>
            <List disablePadding>
                {Items.map(item => (
                    <NavItem item={item} onClick={() => handleItemClick(item)} />
                ))}
            </List>
        </div>
    )
}

export default NavList