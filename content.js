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
        + ' .mea-multi-regional__item-title'
    ]
    document.querySelectorAll(titlesToReplace).forEach(function (element) {
        element.innerHTML = 'blip blop '.repeat(3);
    });
    const descriptionsToReplace = [
        +' .card-article-majeure__chapo,'
        + ' .card-article-m__chapo,'
    ]
    document.querySelectorAll(descriptionsToReplace).forEach(function (element) {
        element.innerHTML = 'blip blup '.repeat(7);
    });
}

function replaceImagesByCat(document) {
    const imagesToReplace = [
        'img.card-article-majeure__img,'
        + ' img.card-article-related__img,'
        + ' img.card-article-l__img,'
        + ' img.card-article-m__img,'
        + ' img.card-article-s__img,'
        + ' img.card-article-xs__img,'
        + ' img.card-article-list-xs__img,'
        + ' img.most-read__item-img,'
        + ' img.mea-multi-regional__item-img'
    ]
    // let newBody = document.body.innerHTML;
    console.log(document.querySelectorAll('img'));
    document.querySelectorAll('img').forEach(function (element) {
        console.log(element.src);
        element.src = 'https://placekitten.com/200/300';
    });
}

replaceTitlesAndDescription(document);
replaceImagesByCat(document);
