import React from "react";
import { Col, Button, Form, FormGroup, Input, FormFeedback } from "reactstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addDatabaseComment } from "../actions/actions";

const validate = (values) => {
	const errors = {};
	if (!values.comment) {
		errors.comment = "Required";
	}

	return errors;
};

const CommentForm = ({ id }) => {
	const commentFormInitialState = { comment: "" };
	const dispatch = useDispatch();

	const {
		values,
		handleSubmit,
		handleChange,
		handleBlur,
		touched,
		errors,
		resetForm,
	} = useFormik({
		initialValues: commentFormInitialState,
		validate,
		onSubmit: (values) => {
			dispatch(addDatabaseComment({ postId: id, ...values }));
			resetForm();
		},
	});

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<FormGroup row>
					<Col sm={10}>
						<Input
							type="text"
							name="comment"
							id="comment"
							onChange={handleChange}
							value={values.comment}
							placeholder="New Comment"
							onBlur={handleBlur}
							invalid={errors.comment && touched.comment}
						/>
						{errors.comment && touched.comment ? (
							<FormFeedback>{errors.comment}</FormFeedback>
						) : null}
					</Col>
					<Col sm={2}>
						<Button type="submit" color="primary">
							Add
						</Button>
					</Col>
				</FormGroup>
			</Form>
		</>
	);
};

export default CommentForm;
