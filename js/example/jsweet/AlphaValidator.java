package example.jsweet;

public class AlphaValidator extends RegularExpressionValidator {
	private static final String PATTERN = "[a-zA-Z]+";
	private static final String ERROR_MESSAGE = "{field} is not a valid alpha value.";

	public AlphaValidator() {
		this(null, ERROR_MESSAGE);
	}

	public AlphaValidator(String errorMessage) {
		this(null, errorMessage);
	}

	public AlphaValidator(Subject subject) {
		this(subject, ERROR_MESSAGE);
	}
	
	public AlphaValidator(Subject subject, String errorMessage){
		super(subject, PATTERN, errorMessage);
	}

}
