package example.jsweet;

public class ValidationError {

	private String errorMessage;
	private String fieldId;
	private boolean valid;
	
	public ValidationError(String errorMessage, String fieldId) {
		this.errorMessage = errorMessage;
		this.fieldId = fieldId;
	}
	
	public ValidationError(String errorMessage, String fieldId, boolean valid) {
		this(errorMessage, fieldId);
		this.valid = valid;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getFieldId() {
		return fieldId;
	}

	public void setFieldId(String fieldId) {
		this.fieldId = fieldId;
	}

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

}
