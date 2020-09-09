import React from "react";
import { useHistory } from "react-router-dom";
import {
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";

const validate = (values) => {
	const errors = {};
	if (!values.title) {
		errors.title = "Required";
	} else if (values.title.length > 20) {
		errors.title = "Must be 20 characters or less";
	}

	if (!values.description) {
		errors.description = "Required";
	} else if (values.description.length > 30) {
		errors.description = "Must be 30 characters or less";
	}

	if (!values.body) {
		errors.body = "Required";
	}
	return errors;
};

const BlogForm = ({
	setPosts,
	id,
	setId = false,
	edit = false,
	setEdit = false,
	INITIAL_STATE = { title: "", description: "", body: "" },
}) => {
	const {
		values,
		handleSubmit,
		handleChange,
		handleBlur,
		touched,
		errors,
		resetForm,
	} = useFormik({
		initialValues: INITIAL_STATE,
		validate,
		onSubmit: (values) => {
			if (!edit) {
				setPosts((posts) => [
					...posts,
					{ ...values, id, comments: [] },
				]);
				setId((id) => id + 1);
				history.push("/");
			} else if (edit) {
				setPosts((posts) =>
					[...posts].map((p) =>
						p.id !== id
							? p
							: { ...values, id, comments: [...p.comments] }
					)
				);
				setEdit(false);
			}
		},
	});

	const history = useHistory();

	const handleCancel = () => {
		resetForm();
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
							value={values.title}
							onBlur={handleBlur}
							invalid={errors.title && touched.title}
						/>
						{errors.title && touched.title ? (
							<FormFeedback>{errors.title}</FormFeedback>
						) : null}
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
							value={values.description}
							onBlur={handleBlur}
							invalid={errors.description && touched.description}
						/>
						{errors.description && touched.description ? (
							<FormFeedback>{errors.description}</FormFeedback>
						) : null}
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
							value={values.body}
							onBlur={handleBlur}
							invalid={errors.body && touched.body}
						/>
						{errors.body && touched.body ? (
							<FormFeedback>{errors.body}</FormFeedback>
						) : null}
					</Col>
				</FormGroup>

				<FormGroup check row>
					<Row>
						<Col sm="1">
							<Button color="primary">Save</Button>
						</Col>
						<Col>
							<Button onClick={handleCancel} color="danger">
								Cancel
							</Button>
						</Col>
					</Row>
				</FormGroup>
			</Form>
		</div>
	);
};

export default BlogForm;
