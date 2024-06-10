import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { useState } from 'react';
import { useEffect } from 'react';

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

function DrawerList() {
    return (
        <Box
            role="presentation"
            sx={{
                width: 250
            }}
        >
            <List>
                {Items.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default function CustomDrawer(open, variant) {
    const [isOpen, setIsOpen] = useState(false)
    const [variantType, setVariantType] = useState('temporary')

    const toggleDrawer = (newOpen) => () => {
        setIsOpen(newOpen);
    };

    useEffect(() => {
        setIsOpen(open)
        setVariantType(variant)
    }, [])

    return (
        <Drawer
            variant={variantType}
            open={isOpen}
            onClose={toggleDrawer(false)}
        >
            <DrawerList
            />
        </Drawer>
    );
}