import { Home } from '@mui/icons-material';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb" separator="›" className='h-8 flex items-end'>
            <Link underline="hover" color="inherit" href="/">
                <span className='font-semibold text-sm'>
                    acceuil
                </span>
                {/* <Home sx={{fontSize: 16}}/> */}
            </Link>
            {pathnames.map((name, index) => {

                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Link key={routeTo} underline="hover" color="primary" href={routeTo}>
                        <span className='font-bold text-sm'>
                            {name}
                        </span>
                    </Link>
                ) : (
                    <Link key={routeTo} underline="hover" color="inherit" href={routeTo}>
                        <span className='font-semibold text-sm'>
                            {name}
                        </span>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}

export default Breadcrumb