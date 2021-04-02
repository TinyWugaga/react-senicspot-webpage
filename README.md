This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 運行專案

package 檔下載

**`npm install` / `yarn install`**

專案啟動

**`npm start` / `yarn start`**

打開 [http://localhost:3000](http://localhost:3000) 
可以看到專案頁面並包含自動 reload 功能

---

# 頁面結構

## Folder

⎣ public

⎣ index.html

⎣ src

⎢components

⎢⎢CardList

⎢⎢Header

⎢⎣Navbar

⎢pages

⎢⎢ScenicSpotPage

⎢⎣Home

⎣ src

⎣ index.js

⎣ App.js

⎣ routes.js

## App

- Header 標題列
- Navbar 側邊欄
    - 風景區

        → /scenicspot

    - 城市風景區列表

        → /scenicspot/[*city*]

- Main 主體內容
    - **<switch>**
        - route → page → component

## Page

### ScenicSpotPage

- ScenicSpot 風景區頁面
    - ScenicSpotTitle 頁面標題
    - ScenicSpotContent 頁面內容
        - CardList **data={data}** 內容卡片列表

## Component

- CardList *data={data}* 內容卡片列表
    - CardListItem *data={data ? '沒有資料'}* 內容卡片物件
        - CardArticle 卡片物件內容
            - CardTitle 卡片標題
            - CardContent 卡片內容
            - CardImage 卡片圖片

## Preview

- /scenicspot
- /scenicspot/[*city*]
<img width="1680" alt="截圖 2021-03-16 上午12 09 01" src="https://user-images.githubusercontent.com/47549832/113381321-3f929e80-93b1-11eb-95db-b384c786fb0a.png">
