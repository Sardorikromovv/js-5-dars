/* localStorage in JS (JSda mahalliy server) */

/*localStorage.setItem('ism','Toxir')*/
/*localStorage.setItem('familya','Boboxonov')*/
/*localStorage.setItem('yoshi','16 yoshda')*/

/*localStorage['ism'] = 'Asad'*/
/*localStorage['familya'] = 'Mirqodirov'*/
/*localStorage['yoshi'] = '18 yoshda'*/

/*localStorage.removeItem('ism')*/
/*localStorage.removeItem('familya')*/
/*localStorage.removeItem('yoshi')*/

/*localStorage.clear()*/ /* Hammasini birdaniga ochiradi */

/*let uningIsmi = localStorage.getItem('ism')*/
/*let uningFamilyasi = localStorage.getItem('familya')*/
/*let uningYoshi = localStorage.getItem('yoshi')*/

/*console.log(uningIsmi,uningFamilyasi,uningYoshi)*/

/* HTTPS requests (HTTPS so'rovlari) */

/*let sorov = new XMLHttpRequest()
sorov.open('get','https://getty.uz/serverdan/malumot/olish')                    /!* HTTPS methods: get,post *!/
sorov.send()*/


/*sorov.onload = function (){
    console.log(sorov.responseText)
}*/


/* JSON in JS */

/*let jsFile = {'ism':'Madina','yoshi':18}*/
/*let jsonFile = '{"ism":"yoshi":16}'*/

/*console.log(JSON.stringify(jsFile))*/            /* JSni JSONga ozgartirish */
/*console.log(JSON.parse(jsonFile))*/   /* JSONni JSga aylantirish */

let sorov = new XMLHttpRequest()
sorov.open('get','jsonFile.json')
sorov.send()
sorov.onload = function (){
    console.log(JSON.parse(sorov.responseText))
}

/*let sorovv = new XMLHttpRequest()
sorovv.open('get','jsFile.js')
sorovv.send()
sorovv.onload = function (){
    console.log(JSON.stringify(sorovv.responseText))
}*/


