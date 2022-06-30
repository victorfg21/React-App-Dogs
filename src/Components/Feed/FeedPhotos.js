import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import FeedPhotoItem from "./FeedPhotosItem";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

function FeedPhotos() {
	const { data, error, loading, request } = useFetch();

	React.useEffect(() => {
		async function fetchPhotos() {
			const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
			const { json } = await request(url, options);
		}
		fetchPhotos();
	}, []);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<ul className={`${styles.feed} animeLeft`}>
				{data.map((photo) => (
					<FeedPhotoItem key={photo.id} photo={photo} />
				))}
			</ul>
		);
	else return null;
}

export default FeedPhotos;
