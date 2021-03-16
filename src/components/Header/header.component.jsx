import React from 'react';
import {
    Header,
    HeaderContainer,
    HeaderMainContainer,
    HeaderLogo, HeaderLogoImg
} from './header.styles'

export default () => (
    <Header>
        <HeaderContainer>
            <HeaderMainContainer>
                <HeaderLogo>
                    <HeaderLogoImg src='https://www.dcard.tw/_next/static/media/logo-2ef7b50901acaa284f36a0484329ec05.svg'/>
                </HeaderLogo>
            </HeaderMainContainer>
        </HeaderContainer>
    </Header>
);