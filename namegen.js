/*
Name generator initially written in 2020.

example of namez(100): 
['Haldeg Jimbim', 'Fedjum Dodgof', 'Lijjod Damlod', 'Dadkoc Bujgem', 'Mofhum Difdof', 'Famdok Jicfof', 'Hejbud Fofdog', 'Mikjej Dijgib', 'Mafbaj Kudjof',
'Jadcob Cebkaf', 'Dombih Jomkac', 'Labbuk Fofmab', 'Bibjac Kimhel', 'Gikhef Lubmul', 'Fojcuc Bajmul', 'Jocdod Lamcij', 'Cojmod Jedcug', 'Cogfuk Fuckuc', 
'Huffuc Cubkok', 'Dufbeg Hokjef', 'Jabhoh Cugmod', 'Jigcul Duhboc', 'Gedjed Huffuh', 'Joljib Humfad', 'Hadkef Bibdob', 'Fomcod Kabjuc', 'Gebgaf Folfob', 
'Kodlef Lecgob', 'Jeccel Gudjul', 'Fugjej Figgej', 'Belmem Bugmeg', 'Hijlac Jibjoh', 'Famdod Kackah', 'Gockec Memkid', 'Gujmug Kujgek', 'Jibceh Gujlob', 
'Gimfij Jakfel', 'Meglok Jicmug', 'Keckad Kuglum', 'Kamlag Cogbef', 'Jehcic Mabfuk', 'Jeldok Joglul', 'Logfuk Midcif', 'Hudkam Hudgig', 'Judgoc Jujmag', 
'Damlem Jedgeg', 'Lihfeg Gifhom', 'Cudcic Gihfub', 'Babfal Jobcuk', 'Jahbam Mifjeg', 'Boljuk Jilcel', 'Kikcol Bicgag', 'Bohjoh Gajmig', 'Dujlog Cihcuk', 
'Hafgeh Billog', 'Juhlic Dafjab', 'Dobjib Hugcik', 'Lujleb Dejhod', 'Kojdoh Bejhof', 'Jummuh Dogmok', 'Fajguf Jekbog', 'Belfeb Luckuj', 'Fohcal Biggud', 
'Dadkib Bomlej', 'Deggil Gibdal', 'Commog Kedmed', 'Bebkod Bubfeh', 'Gohdod Jubjeg', 'Hollic Galcej', 'Bamgec Lokjag', 'Doghul Kicjah', 'Lelbil Fijkuj', 
'Jicfuk Joljek', 'Lulfum Mamgol', 'Lukcim Mehlik', 'Lugmim Falkuf', 'Gejhoj Ciggem', 'Bojdad Bikmag', 'Jocmaj Mabjah', 'Ficgok Jomdad', 'Fojbul Cekguk', 
'Lufdom Cobfig', 'Kidkok Kalmol', 'Dikbig Mefmej', 'Jobjem Kahgib', 'Gebjud Lufkum', 'Dedmeb Hibduf', 'Kakjoh Gadkuc', 'Gukdem Gidleg', 'Bildeb Gohdag', 
'Bojgob Giddem', 'Logdef Habhuc', 'Bamdek Legkef', 'Kiklak Dacdaf', 'Mujfoj Dogfel', 'Mefkeh Fembek', 'Gibcam Mihluh', 'Hoddid Filcig', 'Kahbod Jubcug', 
'Lacbih Dadfaj']
*/

function nameGen() {
  const vowels = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
  const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z",];

  let firstName = [];
  let lastName = [];
  for (let i = 0; i < 2; i++) {
    let rand = Math.floor(Math.random() * 10);
    firstName += consonants[rand];
    rand = Math.floor(Math.random() * 10);
    firstName += vowels[rand];
    rand = Math.floor(Math.random() * 10);
    firstName += consonants[rand];
  }
  for (let i = 0; i < 2; i++) {
    let rand = Math.floor(Math.random() * 10);
    lastName += consonants[rand];
    rand = Math.floor(Math.random() * 10);
    lastName += vowels[rand];
    rand = Math.floor(Math.random() * 10);
    lastName += consonants[rand];
  }
  return firstName + " " + lastName;
}

function namez(randomNamesAmount) {
  if (randomNamesAmount > 0) {
    let names = [];
    let randomNamesAmount1 = randomNamesAmount;
    while (randomNamesAmount1 > 0) {
      randomNamesAmount1--;
      names.push(nameGen());
    }
    return Array.from(names, (a) =>
      a.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      })
    );
  }
  throw "Input a positive number please";
}

//namez(10);
