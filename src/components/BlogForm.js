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
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import validate from "../helpers/blogFormValidator";
import { addDatabasePost, updateDatabasePost } from "../actions/actions";

const BlogForm = ({ edit = false, setEdit = false, id = false }) => {
	const posts = useSelector((st) => st.posts, shallowEqual);
	const INITIAL_STATE = id
		? posts[id]
		: { title: "", description: "", body: "" };

	const dispatch = useDispatch();
	const history = useHistory();

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
				dispatch(addDatabasePost(values));
				history.push("/");
			} else if (edit) {
				dispatch(updateDatabasePost({ ...values, id }));
				setEdit(false);
			}
		},
	});

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
							<Button type="submit" color="primary">
								Save
							</Button>
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
