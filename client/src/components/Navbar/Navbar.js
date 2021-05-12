import React, { useState } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import OctaneLogo from '../../images/octanelogo.png'


export const Navbar = () => {

    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <div>
            <Menu pointing secondary color='blue' size='massive' inverted>
                <Menu.Item
                    name='logo'
                    active={activeItem === 'logo'}
                    onClick={handleItemClick}
                >
                    <Image src={OctaneLogo} size='mini' circular />
                </Menu.Item>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}
