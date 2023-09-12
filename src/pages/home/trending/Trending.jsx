import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetchAPI from '../../../hooks/useFetchAPI'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
    const [endPoint, setEndPoint] = useState('day')
    const {data, loading} = useFetchAPI(`/trending/all/${endPoint}`)
    const onTabChange = (tab) => {
        setEndPoint(tab === 'Day' ? 'day' : 'week')
    }

    return (
        <>
            <div className="carouselSection">
                <ContentWrapper>
                    <span className="carouselTitle">Trending</span>
                    <SwitchTab data={['Day', 'Week']} onTabChange={onTabChange} />
                </ContentWrapper>
                <Carousel  endpoint={endPoint} data={data?.results} loading={loading}/>
            </div>
        </>
    )
}

export default Trending