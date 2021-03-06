function translateOnClick(){
    incorrectText.value = window.translate(incorrectText.value);
    var p = document.createElement('p');
    p.innerText = incorrectText.value;
    historyLog.appendChild(p);
}

function translate(s){
    let eng = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./';
    eng += eng.toUpperCase();
    let ukr = 'йцукенгшщзхї\\фівапролджєячсмитьбю.';
    ukr += ukr.toUpperCase();
    let result = '';

    if (identifyCharset(s, eng) > identifyCharset(s, ukr)){
        result = translateText(s, eng, ukr);
    } else {
        result = translateText(s, ukr, eng);
    }
    return result;
}

function identifyCharset(text, charset) {
    let result = 0;
    for (let i = 0; i <= text.length - 1; i++) {
        if (charset.indexOf(text[i]) >= 0)
            result++;
    }
    return result;
}

function translateText(text, srcCharset, dstCharset){
    let result = '';
    for (let i = 0; i <= text.length - 1; i++){
        let j = srcCharset.indexOf(text[i]);
        if (j >= 0) {
            result += dstCharset[j];
        } else {
            result += text[i];
        }
    }
    return result;
}
