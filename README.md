# input_validation
it is a validation script for the input fields

It is a simply validation script.
You can give classes for the input fields, like when should it be validated, where should be written out the error, is it required field.

It can be highly custmized.

When should be validated: You can chose from these 3 options:
- always after changing something in the input field
- always after input field looses focus
- after someone hits the submit button
It doesn't matter, which option do you use, after hitting the submit button, they will be always validated.

There is two types of validation:
- the field has class requiredField -> if it is empty, then it will cause an error, if it is not empty, it will be validate on the defined way
- the field doesn't have the class requiredField -> if it is empty, then it is valid, if it is not empty, it will be validate on the defined way
So you can give for the choosen fields the requiredField class, then they will be required.

You can choose, where should be written out the error.
Your options:
- In a area/div... There will be collected more. -> class resultsArea (The div should has the class validationResults, where the errors should appear.)
- In a div that is defined for that field. This div should have the data attribute with the property error_target and value should be the name of the input field. -> class errorDiv
- In a new line after the field. -> class afterInput
- Above the field (position: absolute) -> class aboveInput
- Below the field (position: absolute) -> class belowInput
- Right from the field (position: absolute) -> class rightFromInput
- Left from the field (position: absolute) -> class leftFromInput
And all of the field, where an error appear get the class invalidInput too.

The classes of the errors above, if you wanna format them:
- intoTheValidationResultsArea
- intoTheErrorTargetDiv
- inANewLineAfterInputField
- aboveTheInputFieldPosAbs
- belowTheInputFieldPosAbs
- rightFromTheInputFieldPosAbs
- leftFromTheInputFieldPosAbs

You should give these classes for the input fields, if you wanna validate them:
- validateOnInputText
- validateOnChangeText
- validateOnSubmitText

- validateOnInputNumber
- validateOnChangeNumber
- validateOnSubmitNumber

- validateOnInputEmail
- validateOnChangeEmail
- validateOnSubmitEmail

- validateOnInputTel
- validateOnChangeTel
- validateOnSubmitTel

- validateOnInputDateYMD
- validateOnChangeDateYMD
- validateOnSubmitDateYMD

- validateOnInputDateDMY
- validateOnChangeDateDMY
- validateOnSubmitDateDMY

- validateOnInputDateMDY
- validateOnChangeDateMDY
- validateOnSubmitDateMDY

- validateOnInputSelect
- validateOnChangeSelect
- validateOnSubmitSelect

- validateOnInputTextarea
- validateOnChangeTextarea
- validateOnSubmitTextarea

- validateOnInputCheckbox
- validateOnChangeCheckbox
- validateOnSubmitCheckbox
- validateOnInputCheckboxGroup"); -> the parent div has this class (you have to give with this attribute, how many are required: data-how_many_required)
- validateOnChangeCheckboxGroup"); -> the parent div has this class (you have to give with this attribute, how many are required: data-how_many_required)
- validateOnSubmitCheckboxGroup"); -> the parent div has this class (you have to give with this attribute, how many are required: data-how_many_required)

- validateOnInputRadiobutton
- validateOnChangeRadiobutton
- validateOnSubmitRadiobutton

The success-text is written out in this class: validationSuccess. The variable, in where you should save it, is the variable successText.

You can define the error texts in an array. There is two type of array for error. One is, if the field is empty, and the other is, if there is an error appaer.
The name of the two arrays:
- errorTexts
- emptyTexts
The select fields, checkbox fields and radiobutton fields have only one error, because it make no sence of the second one. That's why you should define the error-texts in the errorTexts-array.
