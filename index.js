/*
    GLORY BE TO GOD,
    By Israel Mafabi Emmanuel
*/

let _string = "hello!";

function shout(string = " ") {
    // convert to uppercase
    return string.toUpperCase();
}

function whisper(string = " ") {
    // convert to lowercase
    return string.toLowerCase();
}

function logShout(string = " ") {
    // for console logging
    console.log(string.toUpperCase());
}

function logWhisper(string = " ") {
    // for console logging
    console.log(string.toLowerCase());
}
const string = "Hello!";

function sayHiToHeadphonedRoommate(string = " ") {
    if(string === string.toUpperCase()) {
        return "YES INDEED!";
    } else {
        if(string === string.toLowerCase()) {
            return "I can't hear you!";
        } else {
            if(string === "Let's have dinner together!") {
                return "I would love to!";
            }
        }
    }
}

shout('hello');
whisper('HELLO');
logShout('hello');
logWhisper('HELLO');