export default function validate(values) {
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
}
