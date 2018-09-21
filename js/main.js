"use strict";
document.addEventListener("DOMContentLoaded", function() {

    var tutorialFeed = new Instafeed({
        get: 'user',
        userId: '4350456',
        // clientId: 'Client',
        accessToken: '4350456.b878edf.698768474cb94c5a9f8191a946653fa0',
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        limit: 3,
        template: '<div class="image-item insta-page">' +
            '<a class="image insta-image" href="{{link}}">' +
            '<img src="{{image}}">' +
            '<div class="img-backdrop">' +
            '<div class="insta-caption">' +
            '<p class="text-center"><i class="fa fa-comment"></i> {{comments}}</p>' +
            '<p class="text-center"><i class="fa fa-heart"></i> {{likes}}</p>' +
            '<p>{{caption}}</p>' +
            '</div>' +
            '</div>' +
            '<div class="captions">' +
            '<a></a>' +
            '</div>' +
            '</a>' +
            '</div>'


    });
    console.log("tutorialFeed", tutorialFeed);
    tutorialFeed.run();

});
