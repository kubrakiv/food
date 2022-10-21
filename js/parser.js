'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.single-post-content');

    // let textNodes = [];
    
    function recursy (element) {
        element.childNodes.forEach(node => {
            if (node.nodeName !== '#text') {
                console.log(node);
            } else {
                recursy(node);
            }
        });
    }

    recursy(body);
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));
});