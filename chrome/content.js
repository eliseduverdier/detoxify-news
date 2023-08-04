// This script can access and modify the DOM

console.log('content.js loaded');

function replaceTitlesAndDescription(document) {
    const titlesToReplace = [
        '.card-article-majeure__title,'
        + ' .card-article-related__title,'
        + ' .card-article-l__title,'
        + ' .card-article-m__title,'
        + ' .card-article-s__title,'
        + ' .card-article-xs__title,'
        + ' .card-article-list-xs__title,'
        + ' .most-read__item-title,'
        + ' .mea-multi-regional__item-title,'
        + ' .headline-event-contents__title,'
        + ' .c-title'
    ]
    document.querySelectorAll(titlesToReplace).forEach(function (element) {
        element.innerHTML = 'blip blop '.repeat(3);
    });
    const descriptionsToReplace = [
        '.card-article-majeure__chapo,'
        + ' .card-article-m__chapo,'
        + ' .c-chapo'
    ]
    document.querySelectorAll(descriptionsToReplace).forEach(function (element) {
        element.innerHTML = 'blip blup '.repeat(7);
    });
}

function replaceImagesByCat(document) {
    const imagesToReplace = ['source']
    document.querySelectorAll(imagesToReplace).forEach(function (element) {
        let dimensions = element.srcset.match(/\/(\d+)x(\d+)\//g);
        if (dimensions === null) return;

        let [w,h] = dimensions[0].replaceAll('/','').split('x')
        if (w === undefined || h === undefined) return;

        element.srcset = `https://eliseduv.dev/cats/?w=${w}&h=${h}`;
    });
}

function replaceImagesByColors(document) {
    const randomColor = ["366093","5f3b81","924476","a1364d","c4bf33","80b733","37b06c"];
    const imagesToReplace = ['.img-stamp-wrapper']
    document.querySelectorAll(imagesToReplace).forEach(function (element) {
        element.style.opacity = '0';
        element.parentElement.style.backgroundColor = '#'+randomColor[Math.floor(Math.random()*randomColor.length)];
    });
}

// replaceImagesByCat(document);
replaceImagesByColors(document);
replaceTitlesAndDescription(document);
