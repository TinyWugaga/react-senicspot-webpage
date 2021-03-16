import React, { Suspense, lazy } from 'react';

import { HomeContainer } from './home.styles'

// 撰寫如果網頁載入較慢時要 render 的 component
const Loading = () => <div>頁面加載中...</div>
const CardList = lazy(() => import('../../components/CardList/card-list.component.jsx'))

const HomePage = () => (
    <Suspense fallback={Loading()}>
        HOME PAGE
        <CardList />
    </Suspense>
)



export default HomePage;
