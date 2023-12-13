// Fill score(10) for each input field
setTimeout(function() {
    let list = document.getElementsByClassName("blueInp dafen")
    for (let index = 0; index < list.length; index++) {
        list[index].value = 10.0
    }
}, 100);

// Click "提交"
setTimeout(function() {
    document.getElementsByClassName("botBtnBox")[0].childNodes[3].click()
}, 100);

// Click "确定"
setTimeout(function() {
    document.getElementsByClassName("layui-layer-btn0")[0].click()
}, 1000);
