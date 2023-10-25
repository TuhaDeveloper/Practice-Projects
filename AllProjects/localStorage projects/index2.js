
const selectFontSize = document.getElementById('selectFontSize')
const selectBgColor = document.getElementById('selectBgColor');
const resetBtn = document.getElementById('btn');
const main = document.querySelector('main');

//set Value
const setValue = (FontSize, BgColor) => {

    selectBgColor.value = BgColor;
    selectFontSize.value = FontSize;
    main.style.fontSize = FontSize;
    main.style.background = BgColor;
}


//load localStorage value

const initaialSetup = () => {
    const BgColor = localStorage.getItem('BgColor')
    const FontSize = localStorage.getItem('fontSize')
    if (BgColor && FontSize) {
        setValue(FontSize, BgColor);
    }
    else if (!BgColor && !FontSize) {
        setValue("16px", "aqua")
    }
    else if (!BgColor && FontSize) {
        setValue(FontSize, "aqua")
    }

    else if (BgColor && !FontSize) {
        setValue('16px', BgColor)
    }
}
initaialSetup()

//changefontsize
const changeFontSize = (event) => {
    const selectedFontValue = event.target.value;
    main.style.fontSize = selectedFontValue;
    localStorage.setItem('fontSize', selectedFontValue)
}
selectFontSize.addEventListener('change', changeFontSize);

//changBgcolor
const changeBgColor = (event) => {

    const selectedBgValue = event.target.value;
    main.style.background = selectedBgValue;
    localStorage.setItem('BgColor', selectedBgValue)

}
selectBgColor.addEventListener('change', changeBgColor);
//resetbtn
const clearlocal = () => {
    localStorage.removeItem('BgColor')
    localStorage.removeItem('fontSize');
    setValue('16px', 'aqua');

}
resetBtn.addEventListener('click', clearlocal)

