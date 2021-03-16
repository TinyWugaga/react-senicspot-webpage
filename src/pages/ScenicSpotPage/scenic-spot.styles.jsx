import styled from 'styled-components';

export const ScenicSpot = styled.div`
  border-radius: 4px 4px 0px 0px;
  background-color: rgb(255, 255, 255);
  flex: 1 1 0%; 
`;

export const ScenicSpotMain = styled.div`
  border-radius: 4px 4px 0px 0px;
`;

export const ScenicSpotTitle = styled.div`
  position: sticky;
  top: 48px;
  padding: 12px 60px 0px;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgb(255, 255, 255);
`;

export const ScenicSpotTitleContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 80px;
`;

export const ScenicSpotTitleText = styled.h1`
  -webkit-box-flex: 1;
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(0, 0, 0);
  font-size: 30px;
  font-weight: 500;
  margin-left: 10px;
`;

export const ScenicSpotContent = styled.div`
  flex: 1 1 0%;
`;