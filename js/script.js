let currentMonth = new Date().getMonth();
//Thinking Out Loud - Ed Sheeran
let URL = 'https://music.youtube.com/watch?v=fdz_cabS9BU&si=ARz3kOgCjCrD9PqJ';

switch (currentMonth) {
    //from 0 to 11
    case 0:
        //Enero
        //Aprender a quererte - Morat
        //Cuando te pedí salir 'oficialmente'
        URL = 'https://music.youtube.com/watch?v=nzB0MvMZiqQ&si=h-MtDFrnSm4zz5PC';
        break;
    case 1:
        //Febrero
        //La promesa - Melendi
        //San Valentín, lleno de promesas y esperanza
        URL = 'https://music.youtube.com/watch?v=5dMFEYaOBYc&si=dm4FIRfGDJuk5GEi';
        break;
    case 2:
        //Marzo
        //Mi princesa - David Bisbal
        //Tras toda la tormenta, estuvimos juntos
        URL = 'https://music.youtube.com/watch?v=AS5DOyyoXJI&si=_wTlsjVV6dQ18B8U';
        break;
    case 3:
        //Abril
        //La vie en rose - Zaz
        //Cuando me contabas tus cosillas y problemas y hablábamos para hacerte sentir mejor en esa época mala tuya
        URL = 'https://music.youtube.com/watch?v=6A_lOwSnS8c&si=xMNiXcx5jTC977pQ';
        break;
    case 4:
        //Mayo
        //I don't wanna miss a thing - Aerosmith
        //Cuando más ocupado estaba, me apoyaste
        URL = 'https://music.youtube.com/watch?v=GLFp_C0Zi3M&si=SaxJfWydO_FD-gmm';
        break;
    case 5:
        //Junio
        //Por ti volaré - Andrea Bocelli
        //Cuando me saqué el título de informática y me diste alas para volar junto a ti
        URL = 'https://music.youtube.com/watch?v=aPw25mnCB4Q&si=ASicA6dJ39eHkdYf';
        break;
    case 6:
        //Julio
        //Solamente tú - Pablo Alborán
        //Porque solamente tú me alegras en una fecha tan importante como mi cumple
        URL = 'https://music.youtube.com/watch?v=9pcYuvtBtMs&si=kR6wjSkEoSMPJ5mD';
        break;
    case 7:
        //Agosto
        //Sin miedo a nada - Alex Ubago ft. Amaia Montero
        //Porque es el mes antes de conocernos (me muero por conocerte)
        URL = 'https://music.youtube.com/watch?v=vF79vKAGY7U&si=m4TtOn4nr6LTG_jI';
        break;
    case 8:
        //Septiembre
        //Ahora tú - Malú
        //Porque es el mes en el que nos conocimos
        URL = 'https://music.youtube.com/watch?v=teOhAumHNXc&si=NR1Kw2tS8BG5UNhO';
        break;
    case 9:
        //Octubre
        //Tacones rojos - Morat
        //Cuando empecé a conocerte mejor y me gustaste más y más
        URL = 'https://music.youtube.com/watch?v=iyl0ocEW7-Q&si=V6lM3bX85yz8sZSk';
        break;
    case 10:
        //Noviembre
        //Thinking Out Loud - Ed Sheeran
        //Es la más bonita. Por muchos años que ella cumpla, la querré (es su cumpleaños este mes)
        URL = 'https://music.youtube.com/watch?v=fdz_cabS9BU&si=ARz3kOgCjCrD9PqJ';
        break;
    case 11:
        //Diciembre
        //All I Want For Christmas is you - Maria Carey
        //Porque es Navidad
        URL = 'https://music.youtube.com/watch?v=aAkMkVFwAoo&si=u5c7wSMV-sbGEWLf';
        break;
    default:
        //Por defecto
        //Thinking Out Loud - Ed Sheeran
        URL = 'https://music.youtube.com/watch?v=fdz_cabS9BU&si=ARz3kOgCjCrD9PqJ';
        break;
}

window.location.replace(URL);