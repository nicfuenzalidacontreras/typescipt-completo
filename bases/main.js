"use strict";
(function () {
    var a = 10;
    var b;
    function sayHello(msg) {
        console.log(msg);
    }
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '---').toUpperCase;
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '---');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '---');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return 'El Mundo está salvado'; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activeBatiSignal = function () {
        return 'Batiseñal Activada';
    };
    console.log(typeof activeBatiSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad']
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'Nicolás';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avengers = 123;
    var exists;
    var power;
    avengers = 'Dr. Strange';
    console.log(avengers.charAt(0));
    avengers = 150.12312312;
    console.log(avengers.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega Rojo', 'Dormmamu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
    };
    error('Auxilio!');
    console.log('Hola Mundo');
})();
(function () {
    var isActive = undefined;
    console.log(isActive);
})();
(function () {
    var avengers;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var flash = "Flash";
    var superman = "Superman";
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Dr. Strange', 100, true];
    hero[0] = 'Iron Man';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    ;
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map