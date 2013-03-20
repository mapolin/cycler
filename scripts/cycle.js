$.fn.cycle = function(animTime, waitTime) {
    var collection = this;
    var index = 0; var next = 1;
    var animTime = animTime || 300;
    var waitTime = waitTime || 1000;

    var swap = function() {
        next = (next + 1 > collection.length) ? 0 : next;
        index = (index + 1 > collection.length) ? 0 : index;

        collection.eq(index).fadeOut(animTime);
        collection.eq(next).delay(100).fadeIn(animTime);

        index++; next++;

        setTimeout(swap, waitTime);
    };

    swap();
};