import { navItems } from '@/data/navItem.data'
import React from 'react'
import { NavLink } from '../../header/navlink'

export const MenuItem = () => {
    return (
        <div className="flex flex-col border-b border-shop-gray-border py-5">
            {navItems.map((item, index) => (
                <NavLink href={item.href} key={index}>
                    {item.label}
                </NavLink>
            ))}
        </div>
    )
}
