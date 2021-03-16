import styled from 'styled-components';

export const CardList = styled.div`
  background: rgb(255, 255, 255);
`;

export const CardListLoading = styled.div`
  margin: 0px 60px;
  position: relative;
  padding: 20px 0px;
`;

export const CardArticle = styled.article`
  margin: 0px 60px;
  border-bottom: 1px solid rgb(233, 233, 233);
  position: relative;
  padding: 20px 0px;
  display: grid;
  grid-template-areas:
      "header header"
      ". ."
      "title thumb"
      ". thumb"
      "main thumb"
      ". thumb"
      "footer thumb";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 12px auto 4px auto 16px auto;
  -webkit-tap-highlight-color: transparent;
`;

export const CardInfo = styled.div`
  font-size: 14px;
  grid-area: header / header / header / header;
`

export const CardTitle = styled.h2`
  grid-area: title / title / title / title;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const CardContent = styled.div`
  grid-area: main / main / main / main;
  overflow: hidden;
`

export const CardCaption = styled.div`
  color: rgba(0, 0, 0, 0.35);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  grid-area: footer / footer / footer / footer;
  overflow: hidden;
`

export const CardImage = styled.img`
  grid-area: thumb / thumb / thumb / thumb;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  object-fit: cover;
  margin-left: 20px;

  width: 84px;
  aspect-ratio: auto 84 / 84;
  height: 84px;
`