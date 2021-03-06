package com.QuizGame.ws.Utils;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Retention(RUNTIME)
@Target({FIELD})
@Constraint(validatedBy = {UniqueUsernameValidator.class})
public @interface UniqueUsername {
	String message() default "Bu kullanıcı adı kullanılıyor";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
