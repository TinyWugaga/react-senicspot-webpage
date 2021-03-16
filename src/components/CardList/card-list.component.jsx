import React, { Suspense, lazy } from 'react';
import { CardList, CardListLoading } from './card-list.styles'

const Loading = () => <CardListLoading>資料加載中...</CardListLoading>
const CardListItem = lazy(() => import('./card-list-item.component.jsx'))

export default (props) => {
    return (
        <CardList>
            <div>
                <Suspense fallback={Loading()}>
                    {props.data ? props.data
                        .map((dataItem, index) => (
                            <CardListItem key={index} data={dataItem} />
                        )) : "沒有資料"
                    }
                </Suspense>
            </div>
        </CardList>
    )
};