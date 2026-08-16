const sortimagem = [
    "../../img/goatsouls.jfif",
    "../../img/undead.gif",
    "../../img/Carson-Drew-It_com_ Photo.jfif",
    "../../img/dsfeio.jfif",
    "../../img/plimplimplom.gif",
    "../../img/elden-ring-vagabond.webp",
     "../img/goatsouls.jfif",
    "../img/undead.gif",
    "../img/Carson-Drew-It_com_ Photo.jfif",
    "../img/dsfeio.jfif",
    "../img/plimplimplom.gif",
    "../img/elden-ring-vagabond.webp"

];

const numaleatorio = Math.floor(Math.random() * sortimagem.length);

const img = document.getElementById("img-sort");

img.src = sortimagem[numaleatorio];