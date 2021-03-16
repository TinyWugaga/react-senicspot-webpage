import ScenicSpot from 'pages/ScenicSpotPage/scenic-spot.page';
import cityList from 'pages/ScenicSpotPage/city-list';

export const routes = [
    {
        path: "/scenicspot",
        exact: true,
        component: ScenicSpot,
        label: "風景區"
    },
    {
        path: "/scenicspot/:city",
        component: ScenicSpot,
        label: "城市列表"
    }
];

export const redirects = [
    {
        from: "/",
        to: "/scenicspot"
    }
]

const cityListLinks = cityList.map(city => {
    return {
        type: 'link',
        path: `/scenicspot/${city.id}`,
        label: city.name
    }
})

export const links = [
    {
        type: 'link',
        path: "/scenicspot",
        label: "風景區"
    },
    {
        type: 'title',
        label: "城市風景區",
        children: cityListLinks
    }
]