import React from 'react';
import NavbarLink from './navbar-link.component';

import {
    NavbarSubLink,
    NavbarSubLinkWrapper,
    NavbarSubLinkMask,
    NavbarSubLinkTitle,
} from './navbar.styles';

export default (props) => (
    <NavbarSubLink>
        <NavbarSubLinkWrapper>
            <NavbarSubLinkMask>
                <span>
                    <NavbarSubLinkTitle>{props.title}</NavbarSubLinkTitle>
                    {
                        props.links.map((link, index) => (
                            <NavbarLink
                                key={index}
                                to={link.path}
                                label={link.label}
                            />
                        ))
                    }
                </span>
            </NavbarSubLinkMask>
        </NavbarSubLinkWrapper>
    </NavbarSubLink >
);