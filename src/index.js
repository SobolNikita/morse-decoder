const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    let ans = "";
    for (let i = 0; i + 9 < expr.length; i += 10) {
        let sub = expr.substr(i, 10);
        if (sub === "**********") {
            ans += " ";
            continue;
        }
        while (sub[0] == "0") sub = sub.substr(1);
        let code = "";
        for (let j = 0; j + 1 < sub.length; j += 2) {
            if (sub.substr(j, 2) === "10") code += ".";
            else code += "-";
        }
        ans += MORSE_TABLE[code];
    }
    return ans;
}

module.exports = {
    decode,
};
