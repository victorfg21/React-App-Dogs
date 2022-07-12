import React from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

function PhotoCommentsForm({ id, setComments }) {
	const { request, error } = useFetch();
	const [comment, setComment] = React.useState("");

	async function onSubmit(event) {
		event.preventDefault();
		const { url, options } = COMMENT_POST(id, { comment });
		const { response, json } = await request(url, options);

		if (response.ok) {
			setComment("");
			setComments((comments) => [...comments, json]);
		}
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<textarea
				id="comment"
				className={styles.textarea}
				name="comment"
				placeholder="Comente..."
				value={comment}
				onChange={({ target }) => setComment(target.value)}
			/>
			<button className={styles.button}>
				<Enviar />
			</button>
			<Error error={error} />
		</form>
	);
}

export default PhotoCommentsForm;