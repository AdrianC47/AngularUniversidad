# AngularUniversidad
Se plantea el Seguimiento de un Curso de Angular 
Comandos de Angular:
ng new nombreapp <== Creo un nuevo proyecto
ng serve -o <==Inicia el Servidor
ng generate component nombreComponente <= Me crea un nuevo componente, la palabra generate se puede reemplazar por g y la de component con c
ng g c persona -s -t  <= con este codigo creo un componente igual pero tiene la particularidad que con -s la hoja de estilo se genera de manera inline y 
con -t la plantilla html se genera igual de manera inline
npm install bootstrap --save <== Comando para instalar bootstrap
npm install jquery --save  <== comando para instalar jquery
npm install popper.js --save  <== comando para instalar popper
npm i bootstrap jquery popper.js --save  <== manera mas rapida de instalar bootstrap y jquery
Si no se tiene la carpeta node modules se instala con <== npm install
Generar un nuevo modulo routing <== ng g module app-routing
Para compilar la applicacion para desplegarla en  produccion (generar dist) se usa <= ng build --prod --aot Ojo que esto esta pensado
si es que se publica nuestra aplicación a nivel raíz del servidor, sin embargo si la aplicación se requiere publicar
dentro de una carpeta se usa ng build --prod --aot --base-href /nombreCarpeta/

