package example.jsweet;

import java.util.Arrays;

public class MainApplication {
	public static void main(String[] args) {
		Subject subject = new Subject();
		subject.setId("1");
		subject.setFieldValue("SanjayPaudel");
		
		AlphaValidator alphaValidator = new AlphaValidator(subject);
		boolean isValid = alphaValidator.validateSubject();
		System.out.println("Output : " + isValid);
		
		Subject subject1 = new Subject();
		subject1.setId("2");
		subject1.setFieldValue("213564");
		
		AlphaValidator alphaValidator1 = new AlphaValidator(subject1);
		boolean isValid1 = alphaValidator1.validateSubject();
		System.out.println("Output : " + isValid1);
		
		String[] tests = {"1", "2", "3", "4"};
		//System.out.println(Arrays.toString(tests));
		for (String string : tests) {
			System.out.println(string);
		}
		
	}

}
