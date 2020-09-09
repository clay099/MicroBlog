import React from "react";
import { Col, Button, Form, FormGroup, Input, FormFeedback } from "reactstrap";
import useFields from "./hooks/useFields";
import { useFormik } from "formik";

const validate = (values) => {
	const errors = {};
	if (!values.comment) {
		errors.comment = "Required";
	}

	return errors;
};

const CommentForm = ({ setPosts, id }) => {
  const commentFormInitialState = { comment: "" };
  
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
			setPosts((posts) =>
				[...posts].map((p) =>
					p.id !== id
						? p
						: {
								...p,
								comments: [...p.comments, values.comment],
						  }
				)
			);
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
						<Button color="primary">Add</Button>
					</Col>
				</FormGroup>
			</Form>
		</>
	);
};

export default CommentForm;
