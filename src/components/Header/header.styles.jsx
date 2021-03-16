import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0px;
  z-index: 11;
  height: 48px;
  width: 100%;
  background: rgb(0, 106, 166);
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: auto;
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;

export const HeaderMainContainer = styled.div`
  height: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;

export const HeaderLogo = styled.a`
  height: 100%;
  padding: 10px 0px;
  display: block;

  color: #3397cf;
  text-decoration: none;

  background-color: transparent;
`;

export const HeaderLogoImg = styled.img`
  display: block;
  height: 100%;
`;