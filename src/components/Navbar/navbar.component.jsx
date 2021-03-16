import React from 'react';

import NavbarLink from './navbar-link.component';
import NavbarSubLink from './navbar-sub-link.component';

import { Navbar } from './navbar.styles';
import { links } from 'routes';

export default () => (
    <Navbar>
        {
            links
                .map((link, index) => (
                    link.type === 'link' ?
                        <NavbarLink
                            key={index}
                            to={link.path}
                            label={link.label}
                        />
                        : <NavbarSubLink key={index} title={link.label} links={link.children}/>
                ))
        }
    </Navbar>
);