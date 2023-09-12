import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetchApi from "../../../hooks/useFetchAPI";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetchApi(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;