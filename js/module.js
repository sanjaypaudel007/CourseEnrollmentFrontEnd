var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "Generated from Java with JSweet 1.1.1 - http://www.jsweet.org";
    "use strict";
    var MainApplication = (function () {
        function MainApplication() {
        }
        MainApplication.main = function (args) {
            var subject = new Subject();
            subject.setId("1");
            subject.setFieldValue("SanjayPaudel");
            var alphaValidator = new AlphaValidator(subject);
            var isValid = alphaValidator.validateSubject();
            console.info("Output : " + isValid);
            var subject1 = new Subject();
            subject1.setId("2");
            subject1.setFieldValue("213564");
            var alphaValidator1 = new AlphaValidator(subject1);
            var isValid1 = alphaValidator1.validateSubject();
            console.info("Output : " + isValid1);
            var tests = ["1", "2", "3", "4"];
            for (var index122 = 0; index122 < tests.length; index122++) {
                var string = tests[index122];
                {
                    console.info(string);
                }
            }
        };
        return MainApplication;
    }());
    exports.MainApplication = MainApplication;
    "Generated from Java with JSweet 1.1.1 - http://www.jsweet.org";
    var RegularExpressionValidator = (function () {
        function RegularExpressionValidator(subject, pattern, errorMessage) {
            this.subject = subject;
            this.pattern = pattern;
            this.errorMessage = errorMessage;
        }
        RegularExpressionValidator.prototype.getError = function () {
            return this.error;
        };
        RegularExpressionValidator.prototype.getErrorMessage = function () {
            return this.errorMessage;
        };
        RegularExpressionValidator.prototype.performValidate = function (fieldId, fieldValue) {
            var isValid = true;
            if (this.isComplete(fieldValue)) {
                var regExp = new RegExp(this.pattern);
                isValid = regExp.test(fieldValue);
            }
            if (!isValid) {
                var error = new ValidationError(this.getErrorMessage(), fieldId);
                this.setError(error);
            }
            return isValid;
        };
        RegularExpressionValidator.prototype.setError = function (error) {
            this.error = error;
        };
        RegularExpressionValidator.prototype.isComplete = function (fieldValue) {
            return (fieldValue != null && fieldValue.length > 0);
        };
        RegularExpressionValidator.prototype.validateSubject = function () {
            var isValid = true;
            isValid = this.performValidate(this.subject.getId(), this.subject.getFieldValue());
            return isValid;
        };
        return RegularExpressionValidator;
    }());
    exports.RegularExpressionValidator = RegularExpressionValidator;
    "Generated from Java with JSweet 1.1.1 - http://www.jsweet.org";
    var AlphaValidator = (function (_super) {
        __extends(AlphaValidator, _super);
        function AlphaValidator(subject, errorMessage) {
            if (((subject != null && subject instanceof Subject) || subject === null) && ((typeof errorMessage === 'string') || errorMessage === null)) {
                _super.call(this, subject, AlphaValidator.PATTERN, errorMessage);
                (function () {
                })();
            }
            else if (((typeof subject === 'string') || subject === null) && errorMessage === undefined) {
                var errorMessage = subject;
                {
                    var subject = null;
                    _super.call(this, subject, AlphaValidator.PATTERN, errorMessage);
                    (function () {
                    })();
                }
                (function () {
                })();
            }
            else if (((subject != null && subject instanceof Subject) || subject === null) && errorMessage === undefined) {
                {
                    var errorMessage = AlphaValidator.ERROR_MESSAGE;
                    _super.call(this, subject, AlphaValidator.PATTERN, errorMessage);
                    (function () {
                    })();
                }
                (function () {
                })();
            }
            else if (subject === undefined && errorMessage === undefined) {
                {
                    var subject = null;
                    var errorMessage = AlphaValidator.ERROR_MESSAGE;
                    _super.call(this, subject, AlphaValidator.PATTERN, errorMessage);
                    (function () {
                    })();
                }
                (function () {
                })();
            }
            else
                throw new Error('invalid overload');
        }
        AlphaValidator.PATTERN = "[a-zA-Z]+";
        AlphaValidator.ERROR_MESSAGE = "{field} is not a valid alpha value.";
        return AlphaValidator;
    }(RegularExpressionValidator));
    exports.AlphaValidator = AlphaValidator;
    "Generated from Java with JSweet 1.1.1 - http://www.jsweet.org";
    var ValidationError = (function () {
        function ValidationError(errorMessage, fieldId, valid) {
            var _this = this;
            if (((typeof errorMessage === 'string') || errorMessage === null) && ((typeof fieldId === 'string') || fieldId === null) && ((typeof valid === 'boolean') || valid === null)) {
                {
                    this.valid = false;
                    (function () {
                        _this.errorMessage = errorMessage;
                        _this.fieldId = fieldId;
                    })();
                }
                (function () {
                    _this.valid = valid;
                })();
            }
            else if (((typeof errorMessage === 'string') || errorMessage === null) && ((typeof fieldId === 'string') || fieldId === null) && valid === undefined) {
                this.valid = false;
                (function () {
                    _this.errorMessage = errorMessage;
                    _this.fieldId = fieldId;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        ValidationError.prototype.getErrorMessage = function () {
            return this.errorMessage;
        };
        ValidationError.prototype.setErrorMessage = function (errorMessage) {
            this.errorMessage = errorMessage;
        };
        ValidationError.prototype.getFieldId = function () {
            return this.fieldId;
        };
        ValidationError.prototype.setFieldId = function (fieldId) {
            this.fieldId = fieldId;
        };
        ValidationError.prototype.isValid = function () {
            return this.valid;
        };
        ValidationError.prototype.setValid = function (valid) {
            this.valid = valid;
        };
        return ValidationError;
    }());
    exports.ValidationError = ValidationError;
    "Generated from Java with JSweet 1.1.1 - http://www.jsweet.org";
    var Subject = (function () {
        function Subject() {
        }
        Subject.prototype.getId = function () {
            return this.id;
        };
        Subject.prototype.setId = function (id) {
            this.id = id;
        };
        Subject.prototype.getFieldValue = function () {
            return this.fieldValue;
        };
        Subject.prototype.setFieldValue = function (fieldValue) {
            this.fieldValue = fieldValue;
        };
        return Subject;
    }());
    exports.Subject = Subject;
    MainApplication.main(null);
});
