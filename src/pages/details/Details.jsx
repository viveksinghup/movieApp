import React from 'react'
import "./details.scss"
import useFetchApi from "../../hooks/useFetchAPI"
import { createBrowserRouter, useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videoSection/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recomendations'


const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetchApi(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetchApi(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id}  />
    </div>
  )
}

export default Details