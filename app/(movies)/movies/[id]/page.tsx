// export default function MovieDetail({
import { API_URL } from "../../../(home)/page";
import MovieInfo from '../../../../components/movie-info';
import MovieVideo from '../../../../components/movie-video';
import { Suspense } from 'react';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
 
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  
  return (
		<div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
			<MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
			<MovieVideo id={id}/>
      </Suspense>
		</div>
	);
    
}
