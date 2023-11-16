function insertHTML(selector, html) {
    var element = document.querySelector(selector);
    if (element) {
        element.insertAdjacentHTML('afterend', html);
    } else {
        console.error('找不到指定的 DOM 元素：', selector);
    }
}
