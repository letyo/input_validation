// // get the value of the reCaptcha checkbox
//     response = grecaptcha.getResponse();
//     // check if it is checked
//     if (response == 0) {
//         // if it is not checked
//         $(".captcha_style").find(".error_text").html(reCaptcha);
//         field_errors.push(true);
//     } else {
//         // if it is checked
//         $(".captcha_style").find(".error_text").html("");
//     }

// errorTexts
var errorTexts = {
	selectchange: "almás rétes",
	textareainput: "hammmmmmi",
	checkboxinput: "nem-nem",
	radiobuttoninput: "hanny",
	textinput: "nem üres, csak szar"
}

var emptyTexts = {
	textinput: "alma",
	selectchange: "üres alma"
}

// successTexts
var successText = "success";


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// it could be extend with reCaptcha

// it doesn't matter if a select field, chackbox or radio butten is empty -> they have this for this value false -> it should have only errorTexts -> the emptyTexts won't be trigger ever (it doesn't make any sense to have both of them)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx save the html elements into varibales xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

var $submitButton = $(".submit");


var $requiredField = $(".requiredField");


// all of the input fields and regular expressions
var $validateOnInputText = $(".validateOnInputText");
var $validateOnChangeText = $(".validateOnChangeText");
var $validateOnSubmitText = $(".validateOnSubmitText");

var $validateOnInputNumber = $(".validateOnInputNumber");
var $validateOnChangeNumber = $(".validateOnChangeNumber");
var $validateOnSubmitNumber = $(".validateOnSubmitNumber");
function validNumber(input) {
	var expression = /^\d+$/;
	return expression.test(input);
}

var $validateOnInputEmail = $(".validateOnInputEmail");
var $validateOnChangeEmail = $(".validateOnChangeEmail");
var $validateOnSubmitEmail = $(".validateOnSubmitEmail");
function validEmail(input) {
	var expression = /^([\w\.-]+@([\w-]+\.)+[a-zA-Z]{2,})$/;
	return expression.test(input);
}

var $validateOnInputTel = $(".validateOnInputTel");
var $validateOnChangeTel = $(".validateOnChangeTel");
var $validateOnSubmitTel = $(".validateOnSubmitTel");
function validTel(input) {
	var expression = /^\+?\d{1,}[ -]?\d{1,}\/?[\d -]{6,}$/;
	return expression.test(input);
}

var $validateOnInputDateYMD = $(".validateOnInputDateYMD");
var $validateOnChangeDateYMD = $(".validateOnChangeDateYMD");
var $validateOnSubmitDateYMD = $(".validateOnSubmitDateYMD");
function validDateYMD(input) {
	var expression = /^(\d{2}|[12]\d{3})[.\/-][01]\d[.\/-][0123]\d[.]?$/;
	return expression.test(input);
}

var $validateOnInputDateDMY = $(".validateOnInputDateDMY");
var $validateOnChangeDateDMY = $(".validateOnChangeDateDMY");
var $validateOnSubmitDateDMY = $(".validateOnSubmitDateDMY");
function validDateDMY(input) {
	var expression = /^[0123]\d[.\/-][01]\d[.\/-](\d{2}|[12]\d{3})[.]?$/;
	return expression.test(input);
}

var $validateOnInputDateMDY = $(".validateOnInputDateMDY");
var $validateOnChangeDateMDY = $(".validateOnChangeDateMDY");
var $validateOnSubmitDateMDY = $(".validateOnSubmitDateMDY");
function validDateMDY(input) {
	var expression = /^[01]\d[.\/-][0123]\d[.\/-](\d{2}|[12]\d{3})[.]?$/;
	return expression.test(input);
}

var $validateOnInputSelect = $(".validateOnInputSelect");
var $validateOnChangeSelect = $(".validateOnChangeSelect");
var $validateOnSubmitSelect = $(".validateOnSubmitSelect");

var $validateOnInputTextarea = $(".validateOnInputTextarea");
var $validateOnChangeTextarea = $(".validateOnChangeTextarea");
var $validateOnSubmitTextarea = $(".validateOnSubmitTextarea");

var $validateOnInputCheckbox = $(".validateOnInputCheckbox");
var $validateOnChangeCheckbox = $(".validateOnChangeCheckbox");
var $validateOnSubmitCheckbox = $(".validateOnSubmitCheckbox");
var $validateOnInputCheckboxGroup = $(".validateOnInputCheckboxGroup"); // -> the parent div has this class
var $validateOnChangeCheckboxGroup = $(".validateOnChangeCheckboxGroup"); // -> the parent div has this class
var $validateOnSubmitCheckboxGroup = $(".validateOnSubmitCheckboxGroup"); // -> the parent div has this class

var $validateOnInputRadiobutton = $(".validateOnInputRadiobutton");
var $validateOnChangeRadiobutton = $(".validateOnChangeRadiobutton");
var $validateOnSubmitRadiobutton = $(".validateOnSubmitRadiobutton");
var $validateOnSubmitRadiobuttonGroup = $(".validateOnSubmitRadiobuttonGroup"); // -> doesn't make any sense -> it has to be one group


// the error field
var $validationResults = $(".validationResults");


// the field for success-text
var $validationSuccess = $(".validationSuccess");


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx error reports xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

// get the type of the input field (if it is not an input field, then get the tagName)
function typeOfInputField(input) {
	if (input.prop("tagName") === "INPUT") {
		var typeOfInputField = input.prop("type");
	} else {
		var typeOfInputField = input.prop("tagName");
	}
	return typeOfInputField;
}

// get all of the radiobuttons with the same name
function valueIfItIsARadiobutton(input) {
	var tagName = input.prop("tagName");
	var inputName = input.prop("name");
	inputField = $(tagName + "[name='" + inputName + "']");
	return inputField;
}

// check which error should be written out
function errorOrEmpty(inputName, empty) {
	var errorText = "";
	if (empty === true) {
		errorText = emptyTexts[inputName];
	} else {
		errorText = errorTexts[inputName];
	}
	return errorText;
}

// write out all error in a seperate field
function intoTheValidationResultsArea(input, empty) {
	var inputName = input.prop("name");
	var errorText = errorOrEmpty(inputName, empty);
	$validationResults.append("<div class='intoTheValidationResultsArea' data-input_name='" + inputName + "'><p style='margin: 0; color: pink;'>" + errorText + "</p></div>");
}

// write out in a seperate field
function intoTheErrorTargetDiv(input, empty) {
	var inputName = input.prop("name");
	var errorText = errorOrEmpty(inputName, empty);
	var errorTarget = $("[data-error_target='" + inputName + "']")
	errorTarget.append("<div class='intoTheErrorTargetDiv' data-input_name='" + inputName + "'><p style='margin: 0; color: yellow;'>" + errorText + "</p></div>");
}

// write out under the input field in a new line
function inANewLineAfterInputField(input, empty) {
	var inputName = input.prop("name");
	var inputField = input;
	var inputType = typeOfInputField(input);
	if (inputType === "radio") {
		inputField = valueIfItIsARadiobutton(input).last();
	}
	var width = inputField.css("width");
	var margin = inputField.css("margin-left");
	var errorText = errorOrEmpty(inputName, empty);
	inputField.after("<div class='inANewLineAfterInputField' data-input_name='" + inputName + "' style='width: " + width + "; text-align: center; margin-left: " + margin + "'><p style='margin: 0; color: blue;'>" + errorText + "</p></div>");
}

// write out above the input field with position absolute
// positioning
function aboveTheInputFieldPosAbsPositioning(offset, inputError) {
	var offsetTop = offset.top + "px";
	var offsetLeft = offset.left + "px";
	inputError.css({"top": offsetTop, "left": offsetLeft, "transform": "translateY(-100%)"});
}
// the write out
function aboveTheInputFieldPosAbs(input, empty) {
	var inputName = input.prop("name");
	var inputField = input;
	var inputType = typeOfInputField(input);
	if (inputType === "radio") {
		inputField = valueIfItIsARadiobutton(input).first();
	}
	var width = inputField.css("width");
	var offset = inputField.offset();
	var errorText = errorOrEmpty(inputName, empty);
	inputField.before("<div class='aboveTheInputFieldPosAbs' data-input_name='" + inputName + "' style='width: " + width + "; position: absolute;'><p style='margin: 0; color: green;'>" + errorText + "</p></div>");
	var inputError = $("[data-input_name=" + inputName + "].aboveTheInputFieldPosAbs");
	aboveTheInputFieldPosAbsPositioning(offset, inputError);
}

// write out below the input field with position absolute
// positioning
function belowTheInputFieldPosAbsPositioning(offset, inputError) {
	var inputName = inputError.data("input_name");
	var height = $("[name=" + inputName + "]").css("height");
	var offsetTop = (parseInt(offset.top) + parseInt(height.replace("px", ""))) + "px";
	var offsetLeft = offset.left + "px";
	inputError.css({"top": offsetTop, "left": offsetLeft});
}
// the write out
function belowTheInputFieldPosAbs(input, empty) {
	var inputName = input.prop("name");
	var inputField = input;
	var inputType = typeOfInputField(input);
	if (inputType === "radio") {
		inputField = valueIfItIsARadiobutton(input).first();
	}
	var width = inputField.css("width");
	var offset = inputField.offset();
	var errorText = errorOrEmpty(inputName, empty);
	inputField.before("<div class='belowTheInputFieldPosAbs' data-input_name='" + inputName + "' style='width: " + width + "; position: absolute;'><p style='margin: 0; color: red;'>" + errorText + "</p></div>");
	var inputError = $("[data-input_name=" + inputName + "].belowTheInputFieldPosAbs");
	belowTheInputFieldPosAbsPositioning(offset, inputError);
}

// write out on the right side of the input field with position absolute
// positioning
function rightFromTheInputFieldPosAbsPositioning(offset, inputError) {
	var inputName = inputError.data("input_name");
	var width = $("[name=" + inputName + "]").css("width");
	var offsetLeft = (parseInt(offset.left) + parseInt(width.replace("px", ""))) + "px";
	var offsetTop = offset.top + "px";
	inputError.css({"top": offsetTop, "left": offsetLeft});
}
// the write out
function rightFromTheInputFieldPosAbs(input, empty) {
	var inputName = input.prop("name");
	var inputField = input;
	var inputType = typeOfInputField(input);
	if (inputType === "radio") {
		inputField = valueIfItIsARadiobutton(input).last();
	}
	var width = inputField.css("width");
	var offset = inputField.offset();
	var errorText = errorOrEmpty(inputName, empty);
	inputField.before("<div class='rightFromTheInputFieldPosAbs' data-input_name='" + inputName + "' style='position: absolute;'><p style='margin: 0; color: orange;'>" + errorText + "</p></div>");
	var inputError = $("[data-input_name=" + inputName + "].rightFromTheInputFieldPosAbs");
	rightFromTheInputFieldPosAbsPositioning(offset, inputError);
}

// write out on the left side of the input field with position absolute
// positioning
function leftFromTheInputFieldPosAbsPositioning(offset, inputError) {
	var offsetLeft = parseInt(offset.left) + "px";
	var offsetTop = offset.top + "px";
	inputError.css({"top": offsetTop, "left": offsetLeft, "transform": "translateX(-100%)"});
}
// the write out
function leftFromTheInputFieldPosAbs(input, empty) {
	var inputName = input.prop("name");
	var inputField = input;
	var inputType = typeOfInputField(input);
	if (inputType === "radio") {
		inputField = valueIfItIsARadiobutton(input).first();
	}
	var offset = inputField.offset();
	var errorText = errorOrEmpty(inputName, empty);
	inputField.before("<div class='leftFromTheInputFieldPosAbs' data-input_name='" + inputName + "' style='position: absolute;'><p style='margin: 0; color: gray;'>" + errorText + "</p></div>");
	var inputError = $("[data-input_name=" + inputName + "].leftFromTheInputFieldPosAbs");
	leftFromTheInputFieldPosAbsPositioning(offset, inputError);
}

// reposition the error texts
function errorTextRepositioning() {
	$(".aboveTheInputFieldPosAbs").each(function() {
		var inputName = $(this).data("input_name");
		var offset = $("[name=" + inputName + "]").offset();
		aboveTheInputFieldPosAbsPositioning(offset, $(this));
	})
	$(".belowTheInputFieldPosAbs").each(function() {
		var inputName = $(this).data("input_name");
		var offset = $("[name=" + inputName + "]").offset();
		belowTheInputFieldPosAbsPositioning(offset, $(this));
	})
	$(".rightFromTheInputFieldPosAbs").each(function() {
		var inputName = $(this).data("input_name");
		var offset = $("[name=" + inputName + "]").offset();
		rightFromTheInputFieldPosAbsPositioning(offset, $(this));
	})
	$(".leftFromTheInputFieldPosAbs").each(function() {
		var inputName = $(this).data("input_name");
		var offset = $("[name=" + inputName + "]").offset();
		leftFromTheInputFieldPosAbsPositioning(offset, $(this));
	})
}

// it gives the invalidInput class to the html element (it can be input field or parent)
function showError(input) {
	input.removeClass("validInput");
	input.addClass("invalidInput");
}

// it writes out the error-texts
function writeOutErrorText(input, empty) {
	if (input.hasClass("resultsArea")) {
		intoTheValidationResultsArea(input, empty);
	}
	if (input.hasClass("errorDiv")) {
		intoTheErrorTargetDiv(input, empty);
	}
	if (input.hasClass("afterInput")) {
		inANewLineAfterInputField(input, empty);
	}
	if (input.hasClass("aboveInput")) {
		aboveTheInputFieldPosAbs(input, empty);
	}
	if (input.hasClass("belowInput")) {
		belowTheInputFieldPosAbs(input, empty);
	}
	if (input.hasClass("rightFromInput")) {
		rightFromTheInputFieldPosAbs(input, empty);
	}
	if (input.hasClass("leftFromInput")) {
		leftFromTheInputFieldPosAbs(input, empty);
	}
}

// it removes the invalidInput class
function hideError(input) {
	input.removeClass("invalidInput");
	input.addClass("validInput");
}

// it removes the error-texts
function removeErrorText(input) {
	var inputName = input.prop("name");
	$("[data-input_name='" + inputName + "']").remove();
	errorTextRepositioning();
}

// remove the error text if it is clicked
$(document).on("click", ".intoTheValidationResultsArea, .intoTheErrorTargetDiv, .inANewLineAfterInputField, .aboveTheInputFieldPosAbs, .belowTheInputFieldPosAbs, .rightFromTheInputFieldPosAbs, .leftFromTheInputFieldPosAbs", function() {
	$(this).remove();
	errorTextRepositioning();
})

// reposition the error texts if the window is resized
$(window).bind("resize", function() {
	errorTextRepositioning();
})


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx functions for validation xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function validateText(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (input.val().length <= 2) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateNumber(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (validNumber(input.val()) === false) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateEmail(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (validEmail(input.val()) === false) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateTel(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (validTel(input.val()) === false) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateDateYMD(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (validDateYMD(input.val()) === false) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateDateDMY(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (validDateDMY(input.val()) === false) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateDateMDY(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (validDateMDY(input.val()) === false) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateSelect(input) {
	if ((input.val() === null || input.val() === "") && input.hasClass("requiredField") === true) {
		showError(input);
		removeErrorText(input);
		writeOutErrorText(input, false);
	} else {
		hideError(input);
		removeErrorText(input);
	}
}

function validateTextarea(input) {
	if (input.val() === "") {
		if (input.hasClass("requiredField") === true) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, true);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (input.val().length <= 2) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	}
}

function validateCheckbox(input) {
	if (input.hasClass("requiredField") === true) {
		if (input.not(":checked").length > 0) {
			showError(input);
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError(input);
			removeErrorText(input);
		}
	} else {
		if (input.not(":checked").length > 0) {
			input.removeClass("validInput");
			errorTextRepositioning();
		} else {
			input.addClass("validInput");
			errorTextRepositioning();
		}
	}
}

function validateRadiobutton(input) {
	var name = input.prop("name");
	if (input.hasClass("requiredField") === true) {
		if ($("input[name='" + name + "']").not(":checked").length === $("input[name='" + name + "']").length) {
			showError($("input[name='" + name + "']"));
			removeErrorText(input);
			writeOutErrorText(input, false);
		} else {
			hideError($("input[name='" + name + "']"));
			removeErrorText(input);
		}
	} else {
		if ($("input[name='" + name + "']").not(":checked").length === $("input[name='" + name + "']").length) {
			$("input[name='" + name + "']").removeClass("validInput");
			errorTextRepositioning();
		} else {
			$("input[name='" + name + "']").addClass("validInput");
			errorTextRepositioning();
		}
	}
}

function validateCheckboxGroup(input) {
	var parent = input.parent($validateOnInputCheckboxGroup);
	var children = parent.children("input[type='checkbox']");
	var requiredNumber = parent.data("how_many_required");
	if (parent.hasClass("requiredField") === true) {
		if (input.parent(parent).children("input[type='checkbox']").not(":checked").length > input.parent(parent).children("input[type='checkbox']").length - requiredNumber) {
			showError(children);
			removeErrorText(parent);
			writeOutErrorText(parent, false);
		} else {
			hideError(children);
			removeErrorText(parent);
		}
	} else {
		if (input.parent(parent).children("input[type='checkbox']").not(":checked").length > input.parent(parent).children("input[type='checkbox']").length - requiredNumber) {
			children.removeClass("validInput");
			errorTextRepositioning();
		} else {
			children.addClass("validInput");
			errorTextRepositioning();
		}
	}
}


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx validation on input xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

$validateOnInputText.on("input", function() {
	validateText($(this));
})

$validateOnInputNumber.on("input", function() {
	validateNumber($(this));
})

$validateOnInputEmail.on("input", function() {
	validateEmail($(this));
})

$validateOnInputTel.on("input", function() {
	validateTel($(this));
})

$validateOnInputDateYMD.on("input", function() {
	validateDateYMD($(this));
})

$validateOnInputDateDMY.on("input", function() {
	validateDateDMY($(this));
})

$validateOnInputDateMDY.on("input", function() {
	validateDateMDY($(this));
})

$validateOnInputSelect.on("input", function() {
	validateSelect($(this));
})

$validateOnInputTextarea.on("input", function() {
	validateTextarea($(this));
})

$validateOnInputCheckbox.click(function() {
	validateCheckbox($(this));
})

$validateOnInputRadiobutton.click(function() {
	validateRadiobutton($(this));
})

$validateOnInputCheckboxGroup.children("input[type='checkbox']").click(function() {
	validateCheckboxGroup($(this));
})


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx validation on change xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

$validateOnChangeText.blur(function() {
	validateText($(this));
})

$validateOnChangeNumber.blur(function() {
	validateNumber($(this));
})

$validateOnChangeEmail.blur(function() {
	validateEmail($(this));
})

$validateOnChangeTel.blur(function() {
	validateTel($(this));
})

$validateOnChangeDateYMD.blur(function() {
	validateDateYMD($(this));
})

$validateOnChangeDateDMY.blur(function() {
	validateDateDMY($(this));
})

$validateOnChangeDateMDY.blur(function() {
	validateDateMDY($(this));
})

$validateOnChangeSelect.blur(function() {
	validateSelect($(this));
})

$validateOnChangeTextarea.blur(function() {
	validateTextarea($(this));
})

$validateOnChangeCheckbox.blur(function() {
	validateCheckbox($(this));
})

$validateOnChangeRadiobutton.blur(function() {
	validateRadiobutton($(this));
})

$validateOnChangeCheckboxGroup.children("input[type='checkbox']").blur(function() {
	validateCheckboxGroup($(this));
})


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx validation on submit xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

$submitButton.click(function(event) {

	$validateOnInputText.each(function() {
		validateText($(this));
	})

	$validateOnChangeText.each(function() {
		validateText($(this));
	})

	$validateOnSubmitText.each(function() {
		validateText($(this));
	})

	$validateOnInputNumber.each(function() {
		validateNumber($(this));
	})

	$validateOnChangeNumber.each(function() {
		validateNumber($(this));
	})

	$validateOnSubmitNumber.each(function() {
		validateNumber($(this));
	})

	$validateOnInputEmail.each(function() {
		validateEmail($(this));
	})

	$validateOnChangeEmail.each(function() {
		validateEmail($(this));
	})

	$validateOnSubmitEmail.each(function() {
		validateEmail($(this));
	})

	$validateOnInputTel.each(function() {
		validateTel($(this));
	})

	$validateOnChangeTel.each(function() {
		validateTel($(this));
	})

	$validateOnSubmitTel.each(function() {
		validateTel($(this));
	})

	$validateOnInputDateYMD.each(function() {
		validateDateYMD($(this));
	})

	$validateOnChangeDateYMD.each(function() {
		validateDateYMD($(this));
	})

	$validateOnSubmitDateYMD.each(function() {
		validateDateYMD($(this));
	})

	$validateOnInputDateDMY.each(function() {
		validateDateDMY($(this));
	})

	$validateOnChangeDateDMY.each(function() {
		validateDateDMY($(this));
	})

	$validateOnSubmitDateDMY.each(function() {
		validateDateDMY($(this));
	})

	$validateOnInputDateMDY.each(function() {
		validateDateMDY($(this));
	})

	$validateOnChangeDateMDY.each(function() {
		validateDateMDY($(this));
	})

	$validateOnSubmitDateMDY.each(function() {
		validateDateMDY($(this));
	})

	$validateOnInputSelect.each(function() {
		validateSelect($(this));
	})

	$validateOnChangeSelect.each(function() {
		validateSelect($(this));
	})

	$validateOnSubmitSelect.each(function() {
		validateSelect($(this));
	})

	$validateOnInputTextarea.each(function() {
		validateTextarea($(this));
	})

	$validateOnChangeTextarea.each(function() {
		validateTextarea($(this));
	})

	$validateOnSubmitTextarea.each(function() {
		validateTextarea($(this));
	})

	$validateOnInputCheckbox.each(function() {
		validateCheckbox($(this));
	})

	$validateOnChangeCheckbox.each(function() {
		validateCheckbox($(this));
	})

	$validateOnSubmitCheckbox.each(function() {
		validateCheckbox($(this));
	})

	$validateOnInputRadiobutton.each(function() {
		validateRadiobutton($(this));
	})

	$validateOnChangeRadiobutton.each(function() {
		validateRadiobutton($(this));
	})

	$validateOnSubmitRadiobutton.each(function() {
		validateRadiobutton($(this));
	})

	$validateOnInputCheckboxGroup.children("input[type='checkbox']").each(function() {
		validateCheckboxGroup($(this));
	})

	$validateOnChangeCheckboxGroup.children("input[type='checkbox']").each(function() {
		validateCheckboxGroup($(this));
	})

	$validateOnSubmitCheckboxGroup.children("input[type='checkbox']").each(function() {
		validateCheckboxGroup($(this));
	})

	if ($(".intoTheValidationResultsArea, .intoTheErrorTargetDiv, .inANewLineAfterInputField, .aboveTheInputFieldPosAbs, .belowTheInputFieldPosAbs, .rightFromTheInputFieldPosAbs, .leftFromTheInputFieldPosAbs, .invalidInput").length > 0) {
		event.preventDefault();
	} else {
		$validationSuccess.append(successText);
		event.preventDefault();
	}

})