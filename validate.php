<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="validate.css"/>
    <script src="jQuery.js" defer></script>
    <script src="validate.js" defer></script>
</head>
<body>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">

        <input name="dateinputYMD" type="text" class="validateOnChangeDateYMD belowInput requiredField">
        <input name="dateinputDMY" type="text" class="validateOnChangeDateDMY belowInput">
        <input name="dateinputMDY" type="text" class="validateOnChangeDateMDY belowInput">

        <br/>

        <select name="selectinput" class="validateOnInputSelect aboveInput afterInput errorDiv">
            <option value="" disabled selected>Choose the difficulty</option>
            <option value="veryeasy">Very Easy</option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
            <option value="veryhard">Very Hard</option>
            <option value="extreme">Extreme</option>
            <option value="custom">Custom</option>
        </select>

        <select name="selectchange" class="validateOnChangeSelect aboveInput requiredField">
            <option value="" disabled selected>Choose the difficulty</option>
            <option value="veryeasy">Very Easy</option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
            <option value="veryhard">Very Hard</option>
            <option value="extreme">Extreme</option>
            <option value="custom">Custom</option>
        </select>

        <select name="selectsubmit" class="validateOnSubmitSelect aboveInput">
            <option value="" disabled selected>Choose the difficulty</option>
            <option value="veryeasy">Very Easy</option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
            <option value="veryhard">Very Hard</option>
            <option value="extreme">Extreme</option>
            <option value="custom">Custom</option>
        </select>

        <div data-error_target="selectinput"></div>

        <br/>

        <input name="textinput" type="text" placeholder="text" class="validateOnInputText leftFromInput requiredField">
        <input name="numbinput" type="text" placeholder="text_number" class="validateOnInputNumber">
        <input name="emailinput" type="text" placeholder="text_email" class="validateOnInputEmail">
        <input name="telinput" type="text" placeholder="text_telefon" class="validateOnInputTel rightFromInput">

        <br/>

        <input name="textchange" type="text" placeholder="text" class="validateOnChangeText">
        <input name="numbchange" type="text" placeholder="text_number" class="validateOnChangeNumber">
        <input name="emailchange" type="text" placeholder="text_email" class="validateOnChangeEmail">
        <input name="telchange" type="text" placeholder="text_telefon" class="validateOnChangeTel">

        <br/>

        <input  name="textsubmit" type="text" placeholder="text" class="validateOnSubmitText">
        <input  name="numbsubmit" type="text" placeholder="text_number" class="validateOnSubmitNumber">
        <input  name="emailsubmit" type="text" placeholder="text_email" class="validateOnSubmitEmail requiredField">
        <input  name="telsubmit" type="text" placeholder="text_telefon" class="validateOnSubmitTel belowInput">

        <br/>

        <input type="email" placeholder="email" class="">
        <input type="number" placeholder="number" class="">

        <input type="submit" class="submit">

        <br/>

        <input name="checkboxinput" type="checkbox" class="validateOnInputCheckbox resultsArea">
        <input name="checkboxchange" type="checkbox" class="validateOnChangeCheckbox requiredField">
        <input name="checkboxsubmit" type="checkbox" class="validateOnSubmitCheckbox">

        <br/>

        <input name="radiobuttoninput" type="radio" class="validateOnInputRadiobutton afterInput requiredField">
        <input name="radiobuttoninput" type="radio" class="validateOnInputRadiobutton afterInput requiredField">
        <input name="radiobuttoninput" type="radio" class="validateOnInputRadiobutton afterInput requiredField">

        <br/>

        <input name="radiobuttonchange" type="radio" class="validateOnChangeRadiobutton">
        <input name="radiobuttonchange" type="radio" class="validateOnChangeRadiobutton">
        <input name="radiobuttonchange" type="radio" class="validateOnChangeRadiobutton">

        <br/>

        <input name="radiobuttonsubmit" type="radio" class="validateOnSubmitRadiobutton">
        <input name="radiobuttonsubmit" type="radio" class="validateOnSubmitRadiobutton">
        <input name="radiobuttonsubmit" type="radio" class="validateOnSubmitRadiobutton">

        <br/>

        <div class="validateOnInputCheckboxGroup" data-how_many_required="3">
            <input name="checkboxgroupinput" type="checkbox">
            <input name="checkboxgroupinput" type="checkbox">
            <input name="checkboxgroupinput" type="checkbox">
        </div>

        <br/>

        <div class="validateOnChangeCheckboxGroup requiredField" data-how_many_required="2">
            <input name="checkboxgroupchange" type="checkbox">
            <input name="checkboxgroupchange" type="checkbox">
            <input name="checkboxgroupchange" type="checkbox">
            <input name="checkboxgroupchange" type="checkbox">
        </div>

        <br/>

        <div class="validateOnSubmitCheckboxGroup" data-how_many_required="2">
            <input name="checkboxgroupinputsubmit" type="checkbox">
            <input name="checkboxgroupinputsubmit" type="checkbox">
            <input name="checkboxgroupinputsubmit" type="checkbox">
        </div>

        <br/>

        <textarea name="textareainput" class="validateOnInputTextarea aboveInput afterInput requiredField"></textarea>
        <textarea name="textareachange" class="validateOnChangeTextarea aboveInput"></textarea>
        <textarea name="textareasubmit" class="validateOnSubmitTextarea aboveInput"></textarea>


    </form>

    <div class="validationResults"></div>

    <div class="validationSuccess"></div>

</body>
</html>
            