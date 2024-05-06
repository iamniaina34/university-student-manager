import React from 'react';
import { Skeleton } from '@mui/material';

function getRandomWidth() {
    const min = 256;
    const max = 324;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function EtudiantListLoadingSkeletonItem({ width }) {
    return (
        <div className='flex justify-between w-full items-center px-4 py-3 m-1 border border-none rounded-lg hover:bg-gray-100 hover:transition-all duration-75 ease-out cursor-default' onClick={() => console.log("You like clicking ?")}>
            <div className='flex gap-4'>
                <div>
                    <Skeleton variant='circular' animation='wave' width='3rem' height='3rem' />
                </div>
                <div>
                    <Skeleton variant='text' animation='wave' width={width} height={24} fontSize={20} />
                    <Skeleton variant='text' animation='wave' color='textSecondary' width={56} />
                </div>
            </div>
            <div className='flex justify-center gap-0.5 w-10'>
                {/* <Skeleton variant='circular' animation='pulse' width={4} height={4} />
                <Skeleton variant='circular' animation='pulse' width={4} height={4} />
                <Skeleton variant='circular' animation='pulse' width={4} height={4} /> */}
            </div>
        </div>
    );
}

function EtudiantListLoadingSkeleton({ count }) {
    const widths = React.useMemo(() => Array.from({ length: count }, () => getRandomWidth()), [count]);

    const skeletonItems = widths.map((width, index) => (
        <EtudiantListLoadingSkeletonItem key={index} width={width} />
    ));

    return (
        <>
            {skeletonItems}
        </>
    );
}

export default EtudiantListLoadingSkeleton;
