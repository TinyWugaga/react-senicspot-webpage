import React, { Component } from 'react';
import {
    ScenicSpot,
    ScenicSpotMain,
    ScenicSpotTitle, ScenicSpotTitleContainer, ScenicSpotTitleText,
    ScenicSpotContent
} from './scenic-spot.styles';
import CardList from '../../components/CardList/card-list.component.jsx';
import cityList from './city-list';


class ScenicSpotPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenicSpotList: [],
            rowCount: 30,
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.fetchData(this.state.rowCount)
        window.addEventListener("scroll", this.handleScroll)
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.rowCount !== prevState.rowCount) {
            this.fetchData(30);
        }
    }

    handleScroll = (e) => {
        const { scenicSpotList, rowCount } = this.state
        const isBottom = window.scrollY + window.screen.height >= document.body.scrollHeight
        if (isBottom) {
            if (scenicSpotList.length === rowCount) {
                this.setState({
                    rowCount: rowCount + 30
                })
            }
        }
    }

    fetchData = (addCount) => {
        let { city } = this.props.match.params
        city = city && city !== 'city' ? city : ''
        addCount = addCount || 0
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${addCount}&$skip=${this.state.rowCount - addCount}`)
            .then(response => response.json())
            .then(scenicSpots => this.setState({
                scenicSpotList:this.state.scenicSpotList.concat(scenicSpots)
            }))
    }

    render() {
        const { scenicSpotList } = this.state
        const data = scenicSpotList.map(scenicSpot => {
            return {
                id: scenicSpot.ID,
                name: scenicSpot.Name,
                description: scenicSpot.Description,
                picture: scenicSpot.Picture
            }
        })
        const city = cityList.filter(city => city.id === this.props.match.params.city)
        const title = `${city.length > 0 ? city[0].name : '全縣市' } 風景區`
        return (
            <ScenicSpot>
                <ScenicSpotMain>
                    <ScenicSpotTitle>
                        <ScenicSpotTitleContainer>
                            <ScenicSpotTitleText>{title}</ScenicSpotTitleText>
                        </ScenicSpotTitleContainer>
                    </ScenicSpotTitle>
                    <ScenicSpotContent>
                        <CardList data={data} />
                    </ScenicSpotContent>
                </ScenicSpotMain>
            </ScenicSpot>
        )
    }
}

export default ScenicSpotPage;