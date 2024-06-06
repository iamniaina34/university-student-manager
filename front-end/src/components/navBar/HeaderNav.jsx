import React from 'react'
import Breadcrumb from '../breadcrumbs/Breadcrumb'
import ShortNavigator from './ShortNavigator'

function HeaderNav() {
    return (
        <div className='w-full flex flex-col gap-1'>
            {/* <ShortNavigator /> */}
            <Breadcrumb />
        </div>
    )
}

export default HeaderNav