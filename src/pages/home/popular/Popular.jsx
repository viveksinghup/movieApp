import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetchAPI from '../../../hooks/useFetchAPI'
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {
    const [endPoint, setEndPoint] = useState('movie')
    const {data, loading} = useFetchAPI(`/${endPoint}/popular`)
    const onTabChange = (tab) => {
        setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
    }

    return (
        <>
            <div className="carouselSection">
                <ContentWrapper>
                    <span className="carouselTitle">Popular</span>
                    <SwitchTab data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
                </ContentWrapper>
                <Carousel endpoint={endPoint} data={data?.results} loading={loading}/>
            </div>
        </>
    )
}

export default Popular