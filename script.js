function calculateValue() {
    let x = parseFloat(document.getElementById('x').value);
    let x1 = parseFloat(document.getElementById('x1').value);
    let m = parseFloat(document.getElementById('m').value);
    if (!isNaN(x) && !isNaN(x1) && !isNaN(m) && m !== 0) {
        let value = ((x - x1) * 100) / m;
        document.getElementById('result-value').innerText = 'Qiymat: ' + value;
    } else {
        document.getElementById('result-value').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m 0 dan farqli bo\'lsin.';
    }
}

function calculateX1() {
    let x = parseFloat(document.getElementById('x-x1').value);
    let m = parseFloat(document.getElementById('m-x1').value);
    let value = parseFloat(document.getElementById('value-x1').value);
    if (!isNaN(x) && !isNaN(m) && !isNaN(value) && m !== 0) {
        let x1 = x - ((value * m) / 100);
        document.getElementById('result-x1').innerText = 'x1: ' + x1;
    } else {
        document.getElementById('result-x1').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m 0 dan farqli bo\'lsin.';
    }
}

function calculateX() {
    let x1 = parseFloat(document.getElementById('x1-x').value);
    let m = parseFloat(document.getElementById('m-x').value);
    let value = parseFloat(document.getElementById('value-x').value);
    if (!isNaN(x1) && !isNaN(m) && !isNaN(value) && m !== 0) {
        let x = x1 + ((value * m) / 100);
        document.getElementById('result-x').innerText = 'x: ' + x;
    } else {
        document.getElementById('result-x').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m 0 dan farqli bo\'lsin.';
    }
}

function calculateM() {
    let x = parseFloat(document.getElementById('x-m').value);
    let x1 = parseFloat(document.getElementById('x1-m').value);
    let value = parseFloat(document.getElementById('value-m').value);
    if (!isNaN(x) && !isNaN(x1) && !isNaN(value) && (x - x1) !== 0) {
        let m = ((x - x1) * 100) / value;
        document.getElementById('result-m').innerText = 'm: ' + m;
    } else {
        document.getElementById('result-m').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va x - x1 0 dan farqli bo\'lsin.';
    }
}
