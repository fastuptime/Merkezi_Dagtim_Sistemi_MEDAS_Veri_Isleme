const fs = require('fs');

let data = fs.readFileSync('data.json');
data = JSON.parse(data);

let e_d_e_s = data.reduce((a, b) => Number(a.erkek) < Number(b.erkek) ? a : b); // en_dusuk_erkek_sayisi
let e_d_k_s = data.reduce((a, b) => Number(a.kadin) < Number(b.kadin) ? a : b); // en_dusuk_kadin_sayisi
let e_y_e_s = data.reduce((a, b) => Number(a.erkek) > Number(b.erkek) ? a : b); // en_yuksek_erkek_sayisi
let e_y_k_s = data.reduce((a, b) => Number(a.kadin) > Number(b.kadin) ? a : b); // en_yuksek_kadin_sayisi

console.log(`En düşük erkek sayısı: ${e_d_e_s.erkek} - ${e_d_e_s.il}/${e_d_e_s.ilce} - ${e_d_e_s.mahalle_koy}`);
console.log(`En düşük kadın sayısı: ${e_d_k_s.kadin} - ${e_d_k_s.il}/${e_d_k_s.ilce} - ${e_d_k_s.mahalle_koy}`);
console.log(`En yüksek erkek sayısı: ${e_y_e_s.erkek} - ${e_y_e_s.il}/${e_y_e_s.ilce} - ${e_y_e_s.mahalle_koy}`);
console.log(`En yüksek kadın sayısı: ${e_y_k_s.kadin} - ${e_y_k_s.il}/${e_y_k_s.ilce} - ${e_y_k_s.mahalle_koy}`);