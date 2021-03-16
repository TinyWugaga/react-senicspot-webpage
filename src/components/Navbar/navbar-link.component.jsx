import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarLink, NavbarLinkItem, NavbarLinkItemContext } from './navbar.styles';

export default (props) => (
    <Link component={NavbarLink} to={props.to}>
        <NavbarLinkItem>
            <NavbarLinkItemContext>{props.label}</NavbarLinkItemContext>
        </NavbarLinkItem>
    </Link>
);