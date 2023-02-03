var Kolobok = prompt('Who is the Kolobok?');
var Ded = prompt('Who is the Ded?');
var Babka = prompt('Who is the Babka?');
var Zayats = prompt('Who is the Zayats?');
var Wolf = prompt('Who is the Wolf?');
var Medved = prompt('Who is the Medved?');
var Fox = prompt('Who is the Fox?');
var Rass = prompt('Who is the Rasskazchik?');

alert(`${"The Kolobok is " + Kolobok}
${"The Ded is" + Ded}
${"The Babka is " + Babka}
${"The Zayats is " + Zayats}
${"The Wolf is " + Wolf}
${"The Medved is " + Medved}
${"The Fox is " + Fox}
${"The Rasscazchik is " + Rass}`);

let div_R = document.createElement('div');
div_R.className="rass";
div_R.innerHTML= Rass+": Жили-были дед да бабка. Как-то сидел дед и есть захотел. Вот говорит бабке.<br><br>";
document.body.append(div_R);

let div_D = document.createElement('div');
div_D.className="ded";
div_D.innerHTML= Ded+": Испеки, бабка, колобок.<br><br>";
document.body.append(div_D);

let div_B = document.createElement('div');
div_B.className="babka";
div_B.innerHTML= Babka+": Из чего печь-то? Муки нету.<br><br>";
document.body.append(div_B);

let div_De = document.createElement('div');
div_De.className="ded";
div_De.innerHTML= Ded+": А ты, бабка, пойди, по сусекам поскреби, по амбару помети! Авось муки и наберется.<br><br>";
document.body.append(div_De);

let div_Ba = document.createElement('div');
div_Ba.className="babka";
div_Ba.innerHTML= Babka+" - (Бабка перестает вязать, заходит в дом)<br><br>";
document.body.append(div_Ba);

let div_Ra = document.createElement('div');
div_Ra.className="rass";
div_Ra.innerHTML= Rass+": Взяла старуха перышко, по сусекам поскребла, по амбару помела, и набралось муки пригоршни с две. Замесила тесто, истопила печку, испекла колобка. Получился колобок и пышен, и ароматен.<br><br>";
document.body.append(div_Ra);

let div_Bab = document.createElement('div');
div_Bab.className="babka";
div_Bab.innerHTML= Babka+" - (Бабка ставит на подоконник игрушечного колобка)<br><br>";
document.body.append(div_Bab);

let div_Ras = document.createElement('div'); 
div_Ras.className="rass";
div_Ras.innerHTML= Rass+": Положила бабка колобок на окошко остывать. А колобок прыг за окно — и покатился себе по тропинке.<br><br>";
document.body.append(div_Ras);

let div_Babk = document.createElement('div');
div_Babk.className="babka";
div_Babk.innerHTML= Babka+" - (Вместо игрушки на сцене появляется ребенок, исполняющий роль Колобка. Он бежит в лес, приговаривая).<br><br>";
document.body.append(div_Babk);

let div_Kol = document.createElement('div');
div_Kol.className="kol";
div_Kol.innerHTML= Kolobok+": Я по сусекам скребен,<br>по амбару метен,<br>в печку сажен,<br>на окошке стужен!<br>Я от Дедушки ушел и<br>от Бабушки ушел!<br><br>";
document.body.append(div_Kol);

let div_Z = document.createElement('div');
div_Z.className="za";
div_Z.innerHTML= Zayats+" - (Из-за елки справа выпрыгивает навстречу Колобку Заяц).<br><br>";
document.body.append(div_Z);

let div_Za = document.createElement('div');
div_Za.className="za";
div_Za.innerHTML= Zayats+": Колобок, румяный бок! Я тебя съем!<br><br>";
document.body.append(div_Za);

let div_Kolo = document.createElement('div');
div_Kolo.className="kol";
div_Kolo.innerHTML= Kolobok+": Не ешь меня, косой Зайчик! Я тебе стишок расскажу.<br>Я по сусекам скребен,<br>по амбару метен,<br>в печку сажен,<br>на окошке стужен!<br>Я от Дедушки ушел и<br>от Бабушки ушел!<br>А от тебя, Заяц, и подавно уйду!<br><br>";
document.body.append(div_Kolo);

let div_Rass = document.createElement('div');
div_Rass.className="rass";
div_Rass.innerHTML= Rass+": И покатился себе дальше Колобок; только Заяц его и видел!<br><br>";
document.body.append(div_Rass);

let div_Kolob = document.createElement('div');
div_Kolob.className="kol";
div_Kolob.innerHTML= Kolobok+" - (Колобок быстро «катится» мимо Зайца и исчезает за елками справа. Заяц убегает в противоположную сторону).<br><br>";
document.body.append(div_Kolob);
//(Играет музыка)

let div_Kolobo = document.createElement('div');
div_Kolobo.className="kol";
div_Kolobo.innerHTML= Kolobok+" - (Колобок появляется из-за елок слева, из-за елок справа выходит навстречу Колобку Волк).<br><br>";
document.body.append(div_Kolobo);

let div_S = document.createElement('div');
div_S.innerHTML= "...<br><br>";
document.body.append(div_S);

let div_Rassk = document.createElement('div');
div_Rassk.className="rass";
div_Rassk.innerHTML= Rass+": А лисичка, его – Ам! – и съела.<br><br>";
document.body.append(div_Rassk);

let div_E = document.createElement('div');
div_E.className="end";
div_E.innerHTML= "Вот и сказочке конец! А кто слушал – молодец!<br><br>THE END";
document.body.append(div_E);