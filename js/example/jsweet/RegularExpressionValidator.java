package example.jsweet;

import jsweet.lang.RegExp;

public class RegularExpressionValidator {

	private String pattern;
	private String errorMessage;
	private Subject subject;
	private ValidationError error;

	public RegularExpressionValidator(Subject subject, String pattern, String errorMessage) {
		this.subject = subject;
		this.pattern = pattern;
		this.errorMessage = errorMessage;
	}

	public ValidationError getError() {
		return error;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	private boolean performValidate(String fieldId, String fieldValue) {
		boolean isValid = true;
		if (isComplete(fieldValue)) {
////			Type 1
//			isValid = fieldValue.matches(pattern);
			
////			Type 2
//			Pattern pattern = Pattern.compile("[a-zA-Z]+");
//			Matcher matcher = pattern.matcher(fieldValue);
//			isValid = matcher.find();
			
			//Type 3 for jsweet
			RegExp regExp = new RegExp(pattern);
			isValid = regExp.test(fieldValue);
		}	

		if (!isValid) {
			ValidationError error = new ValidationError(getErrorMessage(), fieldId);
			setError(error);
		}
		return isValid;
	}

	private void setError(ValidationError error) {
		this.error = error;
		
	}

	private boolean isComplete(String fieldValue) {
		return (fieldValue != null && fieldValue.length() > 0);
	}
	
	public boolean validateSubject(){
		boolean isValid = true;
		isValid = performValidate(subject.getId(), subject.getFieldValue());
		return isValid;
	}

}
