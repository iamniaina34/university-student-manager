import { Tooltip } from '@mui/material';
import React from 'react';

function SideNavBarItem({ icon, text, active, expanded, onClick }) {

    return (
        <Tooltip title={!expanded ? text : ''} placement="right">
            <li
                className={`
                    relative flex justify-center items-center p-2 font-semibold rounded-md cursor-pointer transition-all
                    ${active ? 'bg-green-200 text-green-700' : 'hover:bg-green-50 text-gray-600'}
                    ${expanded ? 'w-full' : ''}
                `}
                onClick={onClick}
            >
                {icon}
                <span className={`
                    overflow-hidden transition-all
                    ${expanded ? 'ml-3 w-full' : 'w-0'}
                `}>
                    {text}
                </span>
            </li>
        </Tooltip>);
}

export default SideNavBarItem;