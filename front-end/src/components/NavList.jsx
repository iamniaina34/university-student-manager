import React, { useEffect, useState } from 'react'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Items = [
    {
        icon: <PeopleRoundedIcon fontSize='small' />,
        path: "etudiants",
        text: "Etudiants",
    },
    {
        icon: <SchoolRoundedIcon fontSize='small' />,
        path: "classes",
        text: "Classes",
    },
    {
        icon: <EventRoundedIcon fontSize='small' />,
        path: "seances",
        text: "Séances",
    },
    {
        icon: <MenuBookRoundedIcon fontSize='small' />,
        path: "cours",
        text: "Cours",
    },
];

function NavItem({ item, onClick, active = false }) {

    return (
        <React.Fragment>
            <ListItem disablePadding >
                <ListItemButton
                    onClick={onClick}
                    sx={{
                        height: '40px',
                        backgroundColor: active ? `#1a994822` : '#00000000',
                        paddingY: '4px',
                        borderRadius: '0 12px 12px 0',
                        mb: '4px',
                    }}
                >
                    <ListItemIcon
                        sx={{
                            color: active ? `#1a9948` : ``,
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    >
                        <Typography
                            variant='body2'
                            fontWeight={420}
                            color={active ? `#096918` : `#333333`}
                        >
                            {item.text}
                        </Typography>
                    </ListItemText>
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
        <div className='flex flex-col w-full pr-2'>
            <List disablePadding>
                {Items.map(item => (
                    <NavItem
                        key={item.text}
                        active={activeItem && activeItem.text === item.text || false}
                        item={item}
                        onClick={() => handleItemClick(item)}
                    />
                ))}
            </List>
        </div>
    )
}

export default NavList