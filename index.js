const xlsx = require('node-xlsx');
const fs = require('fs');

////////////////////////////////////////////////////////
console.log("Program başladı.")
console.log("Yapımcı: Can & FastUptime")
console.log("GitHub: https://github.com/fastuptime")
process.title = "Can & FastUptime - T.C. Merkezi Dağtım Verileri / github.com/fastuptime"
////////////////////////////////////////////////////////

const obj = xlsx.parse(`${__dirname}/pivot.xls`);
const sheet = obj[0].data;
let data = sheet.slice(5);
data = data.map((item) => item.slice(1));
fs.writeFileSync('data.json', JSON.stringify([]));
console.log("Veriler İşleniyor...")

data.forEach((item) => {
    if(item[0] === undefined) {
        return console.log("Tüm bilgiler kayıt edildi.")
    }
    let [il, ilce, mahalle_koy, erkek, kadin] = item;
    [il] = item[0].split('-')[0].split('(');
    [ilce, mahalle_koy] = item[0].split('-')[0].split('(')[1].split('/');
    mahalle_koy = mahalle_koy.replace(".)", "");
    [erkek, kadin] = item.slice(1);
    console.log({il, ilce, mahalle_koy, erkek, kadin});
    let file = fs.readFileSync('data.json');
    let json = JSON.parse(file);
    json.push({il, ilce, mahalle_koy, erkek, kadin});
    fs.writeFileSync('data.json', JSON.stringify(json));
});