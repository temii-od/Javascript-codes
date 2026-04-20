
function ucFirst(str){
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("temi"));

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

function extraCurrencyValue(str){
    return +str.slice(1);
}
console.log(extraCurrencyValue("$1200"));

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length -1 ) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap","Reggae");
