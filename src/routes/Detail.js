import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [Movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailMovie
          coverImg={Movie.large_cover_image}
          title={Movie.title}
          rating={Movie.rating}
          genres={Movie.genres}
          runtime={Movie.runtime}
          description={Movie.description_intro}
        />
      )}
    </div>
  );
};
export default Detail;
