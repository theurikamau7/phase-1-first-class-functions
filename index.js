function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction () {
    function namedFunction () {
       console.log(namedFunction);
    }
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log(anonymousFunction);
    }
}