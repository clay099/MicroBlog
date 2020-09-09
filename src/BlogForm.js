import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import useFields from "./hooks/useFields";

const BlogForm = ({
	setPosts,
	id,
	setId = false,
	edit = false,
	setEdit = false,
	INITIAL_STATE = { title: "", description: "", body: "" },
}) => {
	const { formData, resetFormData, handleChange } = useFields(INITIAL_STATE);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!edit) {
			setPosts((posts) => [...posts, { ...formData, id }]);
			setId((id) => id + 1);
			resetFormData();
			history.push("/");
		} else if (edit) {
			setPosts((posts) =>
				[...posts].map((p) => (p.id !== id ? p : { ...formData, id }))
			);
			setEdit(false);
		}
	};

	const handleCancel = () => {
		resetFormData();
		history.push("/");
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup row>
					<Label for="title" sm={2}>
						Title
					</Label>
					<Col sm={10}>
						<Input
							type="text"
							name="title"
							id="title"
							onChange={handleChange}
							value={formData.title}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="description" sm={2}>
						Description
					</Label>
					<Col sm={10}>
						<Input
							type="text"
							name="description"
							id="description"
							onChange={handleChange}
							value={formData.description}
						/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="body" sm={2}>
						Body
					</Label>
					<Col sm={10}>
						<Input
							type="textarea"
							name="body"
							id="body"
							onChange={handleChange}
							value={formData.body}
						/>
					</Col>
				</FormGroup>

				<FormGroup check row>
					<Col>
						<Button color="primary">Save</Button>
						<Button onClick={handleCancel} color="danger">
							Cancel
						</Button>
					</Col>
				</FormGroup>
			</Form>
		</div>
	);
};

export default BlogForm;
