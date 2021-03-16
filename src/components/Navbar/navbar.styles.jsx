import styled from 'styled-components';

export const Navbar = styled.div`
  position: sticky;
  top: 68px;
  height: calc(100vh - 88px);
  min-width: 208px;
  width: 208px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  user-select: none;
  overflow: hidden;
`;

export const NavbarLink = styled.a`
  color: #3397cf;
  text-decoration: none;
  background-color: transparent;
`;

export const NavbarLinkItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  padding: 0px 10px 0px 20px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
`;

export const NavbarLinkItemContext = styled.div`
  font-size: 16px;
  margin: 0px 10px 0px 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const NavbarSubLink = styled.div`
  --track-radius: 3px;
  --track-size: 8px;
  overflow: auto;
  width: 100%;
  height: 100%;
  margin-left: 30px;

  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  -moz-box-align: start;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -moz-box-pack: start;
`

export const NavbarSubLinkWrapper = styled.div`
  overflow: hidden scroll;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
`

export const NavbarSubLinkTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  padding: 0px 10px 0px 20px;
  color: rgba(255, 255, 255, 0.35);
`;

export const NavbarSubLinkMask = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  direction: inherit;
  overflow: hidden;
  width: auto!important;
  height: auto!important;
  z-index: 0;
`;

export const NavbarSubLinkItem = styled.div``
export const NavbarSubLinkItemContext = styled.div``