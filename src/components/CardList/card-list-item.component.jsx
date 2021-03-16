import React from 'react';
import {
    CardArticle,
    CardInfo,
    CardTitle,
    CardContent,
    CardCaption,
    CardImage
} from './card-list.styles'

export default (props) => {
    const { data } = props
    return (
        <div data-index={data.id}>
            <CardArticle>
                <CardInfo></CardInfo>
                <CardTitle>{data.name}</CardTitle>
                <CardContent>{data.description || '沒有敘述文字。'}</CardContent>
                <CardCaption></CardCaption>
                {
                    data.picture.PictureUrl1 ?
                        <CardImage src={`${data.picture.PictureUrl1}`}/>
                        : ''
                }
            </CardArticle>
        </div>
    )
};