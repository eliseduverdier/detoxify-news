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
        + ' .card-article-actu-forte__title,'
        + ' .card-article-most-read__title,'
        + ' .card-article-list-s__title,'
        + ' .c-title'
    ]
    document.querySelectorAll(titlesToReplace).forEach(function (element) {
        element.innerHTML = 'title '.repeat(3);
    });
    const descriptionsToReplace = [
        '.card-article-majeure__chapo,'
        + ' .card-article-m__chapo,'
        + ' .card-article-actu-forte__chapo,'
        + ' .c-chapo'
    ]
    document.querySelectorAll(descriptionsToReplace).forEach(function (element) {
        element.innerHTML = 'chapo '.repeat(10);
    });
}

function replaceImagesByCats(document) {
    const imagesToReplace = ['.img-stamp-wrapper', 'figure']
    // todo maybe: fetch dimensions of children <source> ou <img>
    let r;
    document.querySelectorAll(imagesToReplace).forEach(function (element) {
        element.style.opacity = '0';
        r = Math.random();
        element.parentElement.style.background = `center repeat url(\'https://eliseduv.dev/cats/?h=400&w=600&r=${r}\')`;
    });
}

function replaceImagesByColors(document) {
    const randomColor = ["366093","5f3b81","924476","a1364d","c4bf33","80b733","37b06c"];
    const imagesToReplace = ['.img-stamp-wrapper', 'figure']
    document.querySelectorAll(imagesToReplace).forEach(function (element) {
        element.style.opacity = '0';
        element.parentElement.style.backgroundColor = '#'+randomColor[Math.floor(Math.random()*randomColor.length)];
    });
}

// replaceImagesByCats(document);
replaceImagesByColors(document);
replaceTitlesAndDescription(document);
