import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetchApi from "../../../hooks/useFetchAPI";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetchApi(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;