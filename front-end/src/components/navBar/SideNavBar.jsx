import { MenuOpen, Menu as MenuIcon } from '@mui/icons-material';
import { IconButton, Typography, Tooltip, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SideNavBarItem from './SideNavBarItem';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { useLocation, useNavigate } from 'react-router-dom';

const sideNavBarItems = [
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

export default function SideNavBar() {

    const [expanded, setExpanded] = useState(false);
    const [activeItem, setActiveItem] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const handleExpansion = () => {
        setExpanded(current => !current);
    };

    const handleItemClick = (item) => {
        navigate("/" + item.path);
        setActiveItem(item);
    };

    useEffect(() => {
        const pathname = location.pathname;
        sideNavBarItems.forEach(item => {
            if (pathname.includes(item.path)) {
                setActiveItem(item);
            }    
        })
    }, [location.pathname]);

    return (
        <aside className={`
        h-screen bg-white transition-width duration-300 py-2
        ${expanded ? 'w-64' : 'w-20'}
        `}>
            <nav className={`
            h-full flex flex-col bg-inherit shadow-sm gap-4
            `}>
                <div className={`
                flex items-center ml-3 mr-1
                ${expanded ? 'justify-between' : 'justify-center'}
                `}>
                    <Link href='/' underline='none'>
                        <Typography
                            variant="h6"
                            className={`
                            font-semibold text-lg tracking-wider overflow-hidden
                            ${expanded ? 'w-full opacity-100 duration-300' : 'w-0 opacity-0'}`
                            }>
                            USManager
                        </Typography>
                    </Link>
                    <IconButton disableTouchRipple onClick={handleExpansion}>
                        {expanded ? <MenuOpen fontSize='medium' /> : <MenuIcon fontSize='medium' />}
                    </IconButton>
                </div>
                <ul className={`flex flex-col flex-1 mx-3 gap-1`}>
                    {sideNavBarItems.map((item) => (
                        <Tooltip title={!expanded ? item.text : ""} placement="right" arrow key={item.text}>
                            <div>
                                <SideNavBarItem
                                    icon={item.icon}
                                    text={item.text}
                                    active={item === activeItem}
                                    expanded={expanded}
                                    onClick={() => handleItemClick(item)}
                                />
                            </div>
                        </Tooltip>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}