var song;
var inst1;
var inst2;
var inst3;
var inst4;
var inst6;
var inst7;
var inst8;



var boton1;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;
var boton7;
var boton8;

var analisis1;
var analisis2;
var analisis3;
var analisis4;
var analisis5;
var analisis6;
var analisis7;
var analisis8;

let vid;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

let myFont;
let theta = 0;
var gui;
var back;

function preload() {
  myFont = loadFont("Poppins.ttf");

 img1 = loadImage("han.jpg");
   img2 = loadImage("tohaa.png");
   img3 = loadImage("armo.jpg");
   img4 = loadImage("didi.jpg");
   img5 = loadImage("ther.jpg");
   img6 = loadImage("yayy.png");
   img7 = loadImage("pika.png");
   img8 = loadImage("waterp.png");

  inst1 = loadImage("hang.png");
  inst2 = loadImage("toha.png");
  inst3 = loadImage("armonica.png");
  inst4 = loadImage("didgeridoo.png");
  inst5 = loadImage("theremin.png");
  inst6 = loadImage("yay.png");
  inst7 = loadImage("guitar.png");
  inst8 = loadImage("Water.png");

  //inst11 = loadImage("han.jpg");
  //inst12 = loadImage("tohaa.png");
  //inst13 = loadImage("armo.jpg");
  //inst14 = loadImage("didi.jpg");
  //inst15 = loadImage("ther.jpg");
  //inst16 = loadImage("yayy.png");
  //inst17 = loadImage("pika.png");
  //inst18 = loadImage("waterp.png");

  back = loadImage("back1.png");
  

}

var pg;

function setup() {
  createCanvas(1920, 1080);
  pg = createGraphics(500, 500, WEBGL);
  
  gui = createGui();

  
vid = createVideo(["hanvid.mp4"]);
  vid.size(100,100);
  vid.loop()
  
  
  s = createSlider("Slider", 920, 1000);

  boton1 = createToggle("Play", 208, 400, 60, 30);
  boton2 = createToggle("Play", 383, 400, 60, 30);
  boton3 = createToggle("Play", 583, 400, 60, 30);
  boton4 = createToggle("Play", 832, 400, 60, 30);
  boton5 = createToggle("Play", 1040, 400, 60, 30);
  boton6 = createToggle("Play", 1254, 400, 60, 30);
  boton7 = createToggle("Play", 1450, 400, 60, 30);
  boton8 = createToggle("Play", 1660, 400, 60, 30);

  song1 = loadSound("handpan.mp3");
  song2 = loadSound("thoga.mp3");
  song3 = loadSound("armonicaa.mp3");
  song4 = loadSound("did.mp3");
  song5 = loadSound("there.mp3");
  song6 = loadSound("yaybahar.mp3");
  song7 = loadSound("guitarr.mp3");
  song8 = loadSound("waterphone.mp3");

  analisis1 = new p5.Amplitude();
  analisis1.setInput(song1);

  analisis2 = new p5.Amplitude();
  analisis2.setInput(song2);

  analisis3 = new p5.Amplitude();
  analisis3.setInput(song3);

  analisis4 = new p5.Amplitude();
  analisis4.setInput(song4);

  analisis5 = new p5.Amplitude();
  analisis5.setInput(song5);

  analisis6 = new p5.Amplitude();
  analisis6.setInput(song6);

  analisis7 = new p5.Amplitude();
  analisis7.setInput(song7);

  analisis8 = new p5.Amplitude();
  analisis8.setInput(song8);

  // button = createButton("play");
  // button.mousePressed(togglePlaying);
}

//function togglePlaying() {
//if(!song.isPlaying()) {
// song.play();
//song.setVolume(0.3);
// button.html("pause");
// }else{
//song.pause();
//}



function draw() {
  background(200);
  image(back, 0, 0, 1920, 1080);

  textFont(myFont);

  drawGui();


  
  

  let rms1 = analisis1.getLevel();
  let rms2 = analisis2.getLevel();
  let rms3 = analisis3.getLevel();
  let rms4 = analisis4.getLevel();
  let rms5 = analisis5.getLevel();
  let rms6 = analisis6.getLevel();
  let rms7 = analisis7.getLevel();
  let rms8 = analisis8.getLevel();

  noStroke();
  textSize(12);
  
  
 
  

  //boton1
  if (boton1.val) {
    //image(inst11, 150, 500, 500, 500);
    if (song1.isPlaying()) {
 
         pg.background(255);
  pg.ambientLight(40, 40, 40);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img1);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);

      text(
        "El handpan o «hang» es un tambor de acero convexo tocado con las manos y afinado con varias notas. Fue creado en Suiza en el año 2000 por la compañía PANART. ",
        695,
        590
      );
      text(
        "La idea original surgió de dos amigos, Felix Rohner y Sabina Schärer, quienes a través de diversos experimentos a través del acero y otros instrumentos de percursión ",
        695,
        620
      );
      text(
        "resonante ya existentes, fueron perfilando este objeto semejante a un platillo con pequeñas oquedades capaz de regalarnos unos sonidos muy especiales.",
        695,
        650
      );
      text(
        "Hang significa mano, porque son ellas las encargadas de arrancar la magia y la voz de este instrumento. Se pueden utilizar los dedos, solo los pulgares o la propia palma de la mano. ",
        695,
        720
      );
      text(
        "No obstante, la mayoría de músicos hacen bailar todas estas partes con gran embrujo y eficacia, captando de inmediato la atención de todo aquel que de improviso, se encuentra a  ",
        695,
        750
      );
      text(
        "alguien sentado sosteniendo sobre sus piernas este Hang. La realidad es que, a pesar de tener una estructura simple, se encierra en ellos una curiosísima complejidad.",
        695,
        780
      );
    } else {
      song1.play();
    }
  } else {
    if (song1.isPlaying()) {
      song1.stop();
    } else {
    }
  }

  //boton2
  if (boton2.val) {
   // image(inst12, 150, 500, 500, 500);
     pg.background(255);
  pg.ambientLight(31, 31, 31);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img2);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "Es un instrumento de cuerda cuya forma se asemeja mucho a la de los nidos del ave tejedora, un ave que se extinguió en un área en conflicto en el sur de Angola, África.",
      695,
      590
    );
    text(
      "También se le conoce como el Arpa Totem y puede ser tocado por dos músicos a la vez. Cuenta con dos juegos de cuerdas afinadas exactamente igual en cada lado.",
      695,
      620
    );
    text(
      "Las aves con solo picos como herramientas, convierten los componentes básicos en nidos lo suficientemente seguros como para albergar a una creciente familia de polluelos, ",
      695,
      680
    );
    text(
      "compitiendo por la atención de sus padres y extendiendo sus alas. Al tocar la toha, la gente puede encontrar un nido, picos, el poste alrededor del cual se sostiene el nido e incluso ",
      695,
      710
    );
    text("las líneas telefónicas aéreas que soporta el poste. ", 695, 740);
    text(
      "Los dos músicos enfrentados pueden tocarla con la punta de los dedos o las uñas mientras tejen una pieza musical creada por ellos mismos.",
      695,
      795
    );
    if (song2.isPlaying()) {
    } else {
      song2.play();
    }
  } else {
    if (song2.isPlaying()) {
      song2.stop();
    } else {
    }
  }

  //boton3
  if (boton3.val) {
    //image(inst13, 150, 500, 500, 500);
         pg.background(255);
  pg.ambientLight(33, 33, 33);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img3);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "La armónica de cristal es un instrumento idiófono. Es el resultado de una automatización para el tañido del juego de copas musicales llevada a cabo por Benjamin Franklin",
      695,
      590
    );
    text(
      "en 1762, después de ver en Cambridge (Inglaterra) un concierto de copas de vino llenas de refresco tocadas por el inglés Edward Delaval.",
      695,
      620
    );
    text(
      "Consiste en una serie de platos o boles de cristal de diferentes tamaños superpuestos y alineados horizontalmente, atravesados por un eje conectado por correa a un pedal que",
      695,
      680
    );
    text(
      "los hace girar mientras se toca, a la manera de una vieja máquina de coser. Se toca mojando los dedos ligeramente y tocando los platos mientras giran, lo que produce",
      695,
      710
    );
    text("un sonido cristalino.", 695, 740);
    text(
      "Hoy en día es un instrumento poco utilizado, aunque algunos músicos, como el cantante Tom Waits en su álbum Swordfishtrombones, en su afán de innovación lo han utilizado ",
      695,
      790
    );
    text("para ampliar su sonido. ", 695, 820);

    if (song3.isPlaying()) {
    } else {
      song3.play();
    }
  } else {
    if (song3.isPlaying()) {
      song3.stop();
    } else {
    }
  }
  //boton4
  if (boton4.val) {
    //image(inst14, 150, 500, 500, 500);
     pg.background(255);
  pg.ambientLight(30, 30, 30);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img4);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "El Didgeridoo es un instrumento de viento de origen australiano. Posee un extraordinario parecido a una trompa, un instrumento primitivo utilizado por el humano primario",
      695,
      590
    );
    text(
      "para avisar sobre los peligros que acechaban. También se usaba para marchar a la guerra. El Didgeridoo se halló por vez primera en Arnhem, Australia. El origen de la",
      695,
      620
    );
    text(
      "palabra Didgeridoo sólo se conoce hace 100 años, pero los antropólogos creen que dicha palabra tiene más de 40.000 años.",
      695,
      650
    );
    text(
      "La palabra Didgeridoo está relacionada con la emisión de sonido de dicho instrumento de viento, pero este instrumento tiene muchos nombres. Por ejemplo, Yidaki, que es",
      695,
      710
    );
    text(
      "uno de los nombres más conocidos entre las tribus diversas de Australia. También posee apelativos como Didgeridu o Didgereedoo, entre otros. ",
      695,
      740
    );
    text(
      "En tiempos actuales, el Didgeridoo está fabricado en maderas diversas como eucalipto, cedro, roble, teca, pita, pasta de cáñamo, e incluso existen los construidos en cuarzo.",
      695,
      795
    );
    text(
      "Pero es la madera del eucalipto australiano la ideal y preferida para la elaboración de dicho instrumento de viento.",
      695,
      825
    );
    if (song4.isPlaying()) {
    } else {
      song4.play();
    }
  } else {
    if (song4.isPlaying()) {
      song4.stop();
    } else {
    }
  }
  //boton5
  if (boton5.val) {
    //image(inst15, 150, 500, 500, 500);
    pg.background(255);
  pg.ambientLight(30, 30, 30);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img5);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "Se trata del único instrumento musical controlado completamente sin contacto físico directo. Inventado hace 100 años, es el primer instrumento electrónico del mundo, ",
      695,
      590
    );
    text(
      "inspiró el surgimiento de la tecnología de sonido que llevó a Robert Moog a crear el sintetizador moderno, transformando el panorama musical desde entonces.",
      695,
      620
    );
    text(
      "El instrumento está formado por dos antenas metálicas que detectan la posición relativa de las manos del thereminista y los osciladores para controlar la frecuencia",
      695,
      680
    );
    text(
      "con una mano y la amplitud (volumen) con la otra. Las señales eléctricas del theremin se amplifican y se envían a un altavoz.",
      695,
      710
    );
    text(
      "El theremín se ha utilizado en temas para programas de televisión,  esto ha llevado a su asociación con situaciones inquietantes, o asociado a los géneros de misterio o  ",
      695,
      770
    );
    text(
      "terror. Asimismo, este instrumento se emplea en música clásica, especialmente en música experimental y en música clásica contemporánea de los siglos XX y XXI; ",
      695,
      800
    );
    text(
      "así como en géneros de música popular como el rock, el rock psicodélico y el art rock.",
      695,
      830
    );
    if (song5.isPlaying()) {
    } else {
      song5.play();
    }
  } else {
    if (song5.isPlaying()) {
      song5.stop();
    } else {
    }
  }

  //boton6
  if (boton6.val) {
    //image(inst16, 150, 500, 500, 500);
     pg.background(255);
  pg.ambientLight(30, 30, 30);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img6);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "El Yaybahar es una combinación de cuerdas y tambores, su inventor el músico turco: Görken Şen, explica su funcionamiento como las vibraciones de las cuerdas se ",
      695,
      590
    );
    text(
      "transmiten a través de los muelles en espiral a los tambores. Estas vibraciones se convierten en sonido por las membranas que se hacen eco en los muelles en espiral.",
      695,
      620
    );

    text(
      "Esto da lugar a una experiencia única, con un sonido envolvente hipnótico.",
      695,
      650
    );
    text(
      "Las membranas están enganchadas por dos resortes muy largos que rebotan por todos lados cuando los tocan. Las cuerdas se amarran a un mástil largo, como una ",
      695,
      710
    );
    text(
      "guitarra o un chelo, pero solo con dos cuerdas. el instrumento ha evolucionado de tener 30 bobinas y membranas a tan solo un yaybahar de dos resortes, que Gorkem ",
      695,
      740
    );
    text("toca actualmente.", 695, 770);
    if (song6.isPlaying()) {
    } else {
      song6.play();
    }
  } else {
    if (song6.isPlaying()) {
      song6.stop();
    } else {
    }
  }

  //boton7
  if (boton7.val) {
    //image(inst17, 150, 500, 500, 500);
     pg.background(255);
  pg.ambientLight(33, 33, 33);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img7);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "La Guitarra Pikasso es un instrumento musical hecho a mano por la luthier canadiense, Linda Manzer, para el músico de jazz, Pat Metheny, en 1984. Un luthier,  ",
      695,
      590
    );
    text(
      "laudero, lutero o violero es una persona que construye, ajusta o repara instrumentos de cuerda frotada y pulsada. Este instrumento tan peculiar está compuesto por ",
      695,
      620
    );
    text(
      "42 cuerdas, tres mástiles y dos boca, que le brindan un sonido suave y acústico. Su nombre parece derivar de su parecido con los trabajos cubistas de Pablo Picasso. ",
      695,
      650
    );
    text(
      "Se cuenta que Pat Metheny pidió que se diseñara y construyera una guitarra “con tantas cuerdas como fuera posible”. El resultado fue la guitarra Pikasso o Pikasso I,",
      695,
      710
    );
    text(
      "la cual ha sido popularizada por el guitarrista de jazz y se puede escuchar en su canción: Into the Dream y en los álbumes Quartet, Imaginary Day, Jim Hall & Pat Metheny,  ",
      695,
      740
    );
    text(
      "Trio->Live, y Metheny Mehldau Quartet (The Sound of Water). ",
      695,
      770
    );
    if (song7.isPlaying()) {
    } else {
      song7.play();
    }
  } else {
    if (song7.isPlaying()) {
      song7.stop();
    } else {
    }
  }
  //boton8
  if (boton8.val) {
    //image(inst18, 150, 500, 500, 500);
     pg.background(255);
  pg.ambientLight(35, 35, 35);
  pg.push();
  pg.rotateZ(frameCount * 0.01);
  pg.rotateX(frameCount * 0.01);
  pg.rotateY(frameCount * 0.01);
  pg.texture(img8);
  pg.box(250);
  pg.pop();
  
  image(pg,110,500);
    text(
      "El waterphone fue inventado y desarrollado por Richard Waters. Este instrumento cilíndrico cuenta con varias varillas de diferentes tamaños que transmiten sonidos",
      695,
      590
    );
    text(
      "distintos dependiendo de la manera cómo se toquen. Su caja de resonancia engrandece el sonido y sus tonos son verdaderamente espeluznantes. En algunas ocasiones",
      695,
      620
    );
    text(
      "cuenta con agua en dicha caja de resonancia, de allí su nombre.",
      695,
      650
    );
    text(
      "Su sonido podemos relacionarlo con las típicas melodías, que suceden en las situaciones tensas de las películas de terror. Esa especie de ruido agudo y violento, casi ",
      695,
      710
    );

    text(
      "agobiante, que aparece en esas ocasiones es el que desprende este curioso instrumento, tantas veces escuchado pero cuya imagen permanece en el incógnito por  ",
      695,
      740
    );
    text("buena parte de la audiencia. ", 695, 770);
    if (song8.isPlaying()) {
    } else {
      song8.play();
    }
  } else {
    if (song8.isPlaying()) {
      song8.stop();
    } else {
    }
  }

  fill(102, 255, 153);
  noStroke();
  ellipse(235, 320, rms1 * 550, rms1 * 550);
  ellipse(409, 270, rms2 * 600, rms2 * 600);
  ellipse(610, 320, rms3 * 3000, rms3 * 3000);
  ellipse(860, 285, rms4 * 500, rms4 * 500);
  ellipse(1070, 343, rms5 * 300, rms5 * 300);
  ellipse(1280, 305, rms6 * 500, rms6 * 500);
  ellipse(1475, 290, rms7 * 300, rms7 * 300);
  ellipse(1685, 285, rms8 * 700, rms8 * 700);

  ellipse(400, 90,100,100);
  
  

  image(inst1, 180, 280, 110, 80);
  image(inst2, 350, 180, 120, 190);
  image(inst3, 520, 220, 180, 230);
  image(inst4, 790, 225, 120, 130);
  image(inst5, 970, 210, 150, 170);
  image(inst6, 1200, 200, 140, 160);
  image(inst7, 1440, 200, 70, 160);
  image(inst8, 1630, 230, 110, 130);
  fill(0);
  stroke(0);
  textSize(36);
  text(
    "Descubre algunos de los intrumentos musicales poco conocidos",
    380,
    100
  );

  noStroke();
  textSize(15);
  text("Handpan", 200, 380);
  text("Toha", 390, 380);
  text("Armónica de cristal", 540, 380);
  text("Didgeridoo", 820, 380);
  text("Theremin", 1032, 380);
  text("Yaybahar", 1245, 380);
  text("Guitarra Pikasso", 1415, 380);
  text("Waterphone", 1640, 380);

  fill(102, 255, 153);
  noStroke();
  if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 20, 20);

    //Cambiar volumen
    if (s.isChanged) {
      song1.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song2.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song3.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song4.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song5.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song6.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song7.setVolume(s.val);
    }

    //Cambiar volumen
    if (s.isChanged) {
      song8.setVolume(s.val);
    }
  }
  fill(0);
  stroke(0);
  text("Volumen", 1010, 980);
  
  
 
  
}
