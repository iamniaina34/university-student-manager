import { AppBar, Divider, Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';
import { CloseRounded } from '@mui/icons-material';

function CustomAppBar({ open = false, onMenuClick = () => { }, onClose = () => { } }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClose = () => {
        setIsOpen(false);
        onClose();
    }

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    return (
        <Fragment>
            <AppBar
                color='transparent'
                position="sticky"
                elevation={0}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        paddingX: '16px',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '16px',
                    }}
                >
                    <div className='h-10 pl-3 pr-4 block lg:hidden w-fit border-r'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={onMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className='h-10 pr-4 hidden lg:flex justify-center items-center border-r border-gray-300'>
                        <Link href='/' underline='none'>
                            <FontAwesomeIcon icon={faGraduationCap} color='#1a9948' fontSize={28} />
                        </Link>
                    </div>
                    <div className='flex flex-col'>
                        <Typography variant="h6" fontWeight={700}>
                            GEU
                        </Typography>
                        <div className='w-fit'>
                            <Typography variant="caption" color={'#1a9948'} fontSize={12}>
                                Gestionnaire d'étudiant
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
                <Divider />
            </AppBar>
            <Drawer
                anchor="left"
                variant='temporary'
                open={isOpen || false}
                onClose={handleOnClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '40%',
                        minWidth: '324px',
                        maxWidth: '520px',
                    },
                }}
            >
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-col">
                        <Toolbar
                            disableGutters
                            sx={{
                                paddingX: '16px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                gap: '16px',
                            }}
                        >
                            <div className='w-full flex flex-row gap-4 items-center'>
                                <div className='h-10 pr-4 flex justify-center items-center border-r border-gray-300'>
                                    <Link href='/' underline='none'>
                                        <FontAwesomeIcon icon={faGraduationCap} color='#1a9948' fontSize={32} />
                                    </Link>
                                </div>
                                <div className='flex flex-col'>
                                    <Typography variant="h6" fontWeight={700}>
                                        GEU
                                    </Typography>
                                    <div className='w-fit block'>
                                        <Typography variant="caption" color={'#1a9948'} fontSize={12}>
                                            Gestionnaire d'étudiant
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <IconButton onClick={handleOnClose}>
                                    <CloseRounded />
                                </IconButton>
                            </div>
                        </Toolbar>
                        <Divider />
                    </div>
                    <NavList />
                </div>
            </Drawer>
        </Fragment>
    )
}

export default CustomAppBar