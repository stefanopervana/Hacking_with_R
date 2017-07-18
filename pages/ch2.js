import Layout from '../components/layout'

export default() => (
  <Layout title='Ch2'>
    <div>
    <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                    
                    h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                    .sub{
                        text-decoration: underline;
                    }
                `}</style>

    <div className="col-md-6"> 
    <h2>Begin at the Beginning: Chapter One</h2>


<p className="it">Este libro está dividido en muchos capítulos cortos. He tratado de hacer que cada capítulo tome unos cinco minutos para completar, aunque un puñado podrías tomar 10 minutos porque cubren temas más complicados. Estos capítulos cortos están diseñados para que sea más fácil iniciar y detener lo que necesite, volver a leer los capítulos si había algo que no comprendía completamente y permitirle ver su progreso con más claridad a medida que se mueve del capítulo Al capítulo</p>

<p className="p">This book is broken up into lots of short chapters. I’ve tried to make every chapter take about five minutes to complete, although a handful might take 10 minutes because they cover more complicated topics. These short chapters are designed to make it easier for you to start and stop as you need to, to re-read chapters if there was something you didn’t fully understand, and allow you to see your progress more clearly as you move from chapter to chapter.</p>



<p className="it">Importante: cuando vea el código con un nombre de archivo adjunto, como el siguiente, significa que debe escribir ese código en ese archivo. Me gusta esto:</p>

<p className="p">Important: when you see code with a filename attached, like the below, it means you should write that code in that file. Like this:</p>


<code>dist/somefile.js</code>

<hr></hr>

<code>Ponga este código en somefile.js en el directorio dist.</code>

<code>Put this code into somefile.js in the <code>dist</code> directory.</code>

<hr></hr>

<p className="it">Código sin un título es un comando para ejecutar en la línea de comandos, o es el código presentado sólo para su referencia - en cuyo caso a menudo prefijo con "El código siguiente no funcionará porque ...". Hay algunos lugares donde verás código con un nombre de archivo en el contexto de leer código en ese archivo en lugar de escribir, pero estos lugares están claramente marcados. Por ejemplo, podrías decir "aquí es cómo su código deberías buscar si usted ha estado siguiendo adelante ..."</p>

<p className="p">Code without a title is either a command to run on the command line, or is code presented just for your reference – in which case I often prefix it with “The following code won’t work because…”. There are some places where you’ll see code with a filename in the context of reading code in that file rather than writing, but these places are clearly marked. For example, I might say “here’s how your code should look if you’ve been following along…”</p>



<p className="it">De todos modos, eso es más que suficiente explicación. Si está listo, comencemos: abrí la aplicación Terminal y ejecutá estos comandos para crear el directorio del proyecto:</p>

<p className="p">Anyway, that’s more than enough explanation. If you’re ready, let’s get started: open the Terminal app and run these commands to create your project directory:</p>


<hr></hr>
<code>cd Desktop</code><br></br>

<code>mkdir hwr cd hwr</code><br></br>

<code>npm init -y</code>
<hr></hr>

<p className="it">Si nunca has utilizado el comando Terminal antes, deberías poder encontrarlo con Spotlight en OS X. Si usas Windows, debes usar el símbolo del sistema. Si está utilizando Linux, cualquier emulador de terminal está bien.</p>

<p className="p">If you’ve never used the Terminal command before, you should be able to find it using Spotlight on OS X. If you’re using Windows, you should use the Command Prompt. If you’re using Linux, any terminal emulator is fine.</p>




<p className="it">El primer comando cambia a su escritorio, lo que facilita la búsqueda de su trabajo. El segundo comando crea un nuevo directorio llamado hwr - abreviatura de Hacking with React - pero se puede llamar lo que se quiera dentro de reason. Nota: llamarlo "React" causará problemas, así que por favor trate de ser original!</p>

<p className="p">The first command switches to your desktop, which makes finding your work easier. The second command creates a new directory called hwr - short for Hacking with React - but you can call it whatever you want within reason. Note: calling it “react” will cause problems, so please try to be original!</p>



<p className="it">El tercer comando navega en el directorio hwr creado recientemente, que es donde vamos a trabajar para el resto de este tutorial. Este es su directorio de proyectos, y debe ejecutar todos los comandos futuros desde aquí. El comando final crea un nuevo proyecto usando npm, momento en el que ya está listo.</p>

<p className="p">The third command navigates into the newly created hwr directory, which is where we’ll be working for the remainder of this tutorial. This is your project directory, and you should run all future commands from here. The final command creates a new project using npm, at which point you’re ready to go.</p>



<p className="it">La configuración de un proyecto de esqueleto toma sólo cuatro comandos en el terminal. Vale la pena tomarse el tiempo para sentirse cómodo en la ventana del terminal, porque lo usaremos más en el futuro.</p>

<p className="p">Setting up a skeleton project takes just four commands in the terminal. It’s worth taking the time to get comfortable in the terminal window, because we’ll be using it more in the future.</p>



<p className="it">Antes de hacer cualquier codificación, tenemos un poco de configuración aburrida para pasar. Esto es inevitable, me temo, pero al mismo tiempo es muy valioso: pasarás las próximas horas trabajando en este tutorial, así que pasar cinco minutos asegurándose de que tu proyecto esté configurado correctamente te hará la vida mucho más fácil!</p>

<p className="p">Before we do any coding, we have a bit of boring configuration to get through. This is unavoidable, I’m afraid, but at the same time it’s hugely valuable: you’ll be spending the next few hours working through this tutorial, so spending five minutes making sure your project is configured correctly will make your life much easier!</p>



<p className="it">En la ventana del terminal, todavía en el directorio del proyecto, ejecutá estos comandos:</p>

<p className="p">In your terminal window, still in your project directory, run these commands:</p>

<hr></hr>
<code>npm install --save-dev webpack webpack-dev-server react-hot-loader</code><br></br>
<code>npm install --save-dev babel-core babel-loader</code><br></br>
<code>npm install --save-dev babel-preset-es2015 babel-preset-react</code><br></br>
<code>npm install --save react react-dom history react-router</code>
<hr></hr>

<p className="it">Nota: si ve "comando no encontrado" para npm, significa que no tiene Node.js instalado. Debes ir a nodejs.org e instalar Node.js luego intentarlo de nuevo.</p>

<p className="p">Note: if you see “command not found” for npm, it means you don’t have Node.js installed. You need to go to nodejs.org and install Node.js then try again.</p>

<p className="it">Esos comandos de npm toman un poco de tiempo para ejecutar porque tiran en bastantes piezas de software. Si nunca ha utilizado npm antes, los tres primeros comandos significan "instalar este software para su uso mientras estoy desarrollando", y el cuarto significa "instalar este software para su uso mientras estoy desarrollando, pero también lo necesitaré" Cuando mi aplicación está en producción también. "</p>

<p className="p">Those npm commands take a little while to run because they pull in quite a few pieces of software. If you’ve never used npm before, the first three commands mean “install this software for use while I’m developing,” and the fourth means “install this software for use while I’m developing, but I’ll also need it when my app is in production too.”</p>

<p className="it">Si vos se estaba preguntando, Babel es una herramienta que acepta ES6 y React código como entrada, y crea JavaScript normal como salida. Esto es importante porque las tecnologías que vamos a utilizar no son compatibles con los navegadores web, por lo que es tarea de Babel hacerlo compatible en un proceso conocido como "transpiling", convirtiendo el código fuente ES6 en JavaScript de la vieja escuela.</p>

<p className="p">If you were wondering, Babel is a tool that accepts ES6 and React code as input, and creates regular JavaScript as output. This is important because the technologies we’ll be using aren’t compatible with web browsers, so it’s Babel’s job to make it compatible in a process known as “transpiling” - converting ES6 source code to old-school JavaScript.</p>

<p className="it">Con todo ese software instalado, el siguiente paso es decirles cómo deben trabajar juntos. En el directorio del proyecto, busque un archivo denominado <code>package.json</code> y ábralo en un editor de texto. Añadí estas líneas justo después de donde dice "license": "ISC":</p>

<p className="p">With all that software installed, the next step is to tell them how they should work together. In your project directory, look for a file named <code>package.json</code> and open it in a text editor. Please add these lines just after where it says "license": "ISC":</p>

<hr></hr>
<code>package.json</code><br></br>
<code>"babel": &#123;</code><br></br>
<code>"presets": [</code><br></br>
<code>"es2015",</code><br></br>
<code>"react"</code><br></br>
<code>]</code><br></br>
<code>&#125;,</code>
<hr></hr>

<p className="it">Tené en cuenta que necesitas una coma al final de la llave de cierre, que es el símbolo &#125;. En caso de que no esté seguro de dónde colocarlo, he aquí un archivo <code>package.json</code> completo para referencia:</p>

<p className="p">Note that you need a comma at the end of the closing brace – that’s the &#125; symbol. In case you’re not sure where to put it, here’s a complete <code>package.json</code> file for reference:</p>


<code>package.json</code>

<pre>
1 &#123;<br></br>
2 "name": "hwr",<br></br>
3 "version": "1.0.0",<br></br>
4 "description": "",<br></br>
5 "main": "index.js",<br></br>
6 "scripts": &#123;<br></br>
7 "test": "echo \"Error: no test specified\" && exit 1"<br></br>
8 &#125;,<br></br>
9 "keywords": [],<br></br>
10 "author": "",<br></br>
11 "license": "ISC",<br></br>
12 "babel": &#123;<br></br>
13 "presets": [<br></br>
14 "es2015",<br></br>
15 "react"<br></br>
16 ]<br></br>
17 &#125;,<br></br>
18 "devDependencies": &#123;<br></br>
19 "babel-core": "^6.3.15",<br></br>
20 "babel-loader": "^6.2.0",<br></br>
21 "babel-preset-es2015": "^6.3.13",<br></br>
22 "babel-preset-react": "^6.3.13",<br></br>
23 "react-hot-loader": "^1.3.0",<br></br>
24 "webpack": "^1.12.9",<br></br>
25 "webpack-dev-server": "^1.14.0"<br></br>
26 &#125;,<br></br>
27 "dependencies": &#123;<br></br>
28 "history": "^1.13.1",<br></br>
29 "react": "^0.14.3",<br></br>
30 "react-dom": "^0.14.3",<br></br>
31 "react-router": "^1.0.2"<br></br>
32 &#125;<br></br>
33 &#125;

</pre>

<p className="it">El último paso en nuestra configuración es preparar Webpack, que es una herramienta que convierte todo nuestro código fuente en una aplicación terminada lista para enviar a los usuarios. Webpack está controlado por un archivo denominado webpack.config.js, que aún no existe. Por lo tanto, pegue lo siguiente en un archivo y guárdelo como <code>webpack.config.js</code>en el directorio del proyecto:</p>

<p className="p">The last step in our configuration is to prepare Webpack, which is a tool that converts all our source code into one finished app ready to ship to users. Webpack is controlled by a file named webpack.config.js, which doesn’t exist yet. So, please paste the below into a file and save it as <code>webpack.config.js</code>in your project directory:</p>


<code>webpack.config.js</code>

<pre>
1 var webpack = require('webpack');<br></br>
2<br></br>
3 module.exports = &#123;<br></br>
4 entry: [<br></br>
5 'webpack-dev-server/client?http://localhost:8080',<br></br>
6 'webpack/hot/only-dev-server',<br></br>
7 './src/index.js'<br></br>
8 ],<br></br>
9 module: &#123;<br></br>
10 loaders: [&#123;<br></br>
11 test: /\.js?$/,<br></br>
12 exclude: /node_modules/,<br></br>
13 loader: 'react-hot!babel'<br></br>
14 &#125;]<br></br>
15 &#125;,<br></br>
16 resolve: &#123;<br></br>
17 extensions: ['', '.js']<br></br>
18 &#125;,<br></br>
19 output: &#123;<br></br>
20 path: 'dist',<br></br>
21 publicPath: '/',<br></br>
22 filename: 'bundle.js'<br></br>
23 &#125;,<br></br>
24 devServer: &#123;<br></br>
25 contentBase: './dist',<br></br>
26 hot: true<br></br>
27 &#125;,<br></br>
28 plugins: [<br></br>
29 new webpack.HotModuleReplacementPlugin()<br></br>
30 ]<br></br>
31 &#125;;
</pre>



<p className="it">Esto configura Webpack para leer todo nuestro código fuente y convertirlo en un solo script terminado llamado <code>bundle.js</code> dentro de un directorio llamado <code>dist</code> - corto para "distribución". No hemos creado ese directorio todavía, así que por favor, crearlo dentro de su directorio de proyectos ahora. Mientras estés allí, por favor, también crea uno llamado src - que es corto para "fuente" y es donde vamos a almacenar todo el código fuente que escribimos.</p>

<p className="p">That configures Webpack to read all our source code and convert it into a single finished script called <code>bundle.js</code> inside a directory called <code>dist</code> – short for “distribution”. We haven’t made that directory yet, so please create it inside your project directory now. While you’re there, please also create one called src – that’s short for “source” and it’s where we’ll be storing all the source code we write.</p>


<p className="it">Por lo tanto, tenemos src para nuestro código fuente, y <code>dist</code> para los archivos listos para distribuir al mundo. El siguiente paso es agregar el mínimo necesario a esos directorios para que nuestro proyecto comience a funcionar. Para ello, cree un nuevo archivo en src llamado index.js, dándole este contenido:</p>

<p className="p">So, we have src for our source code, and <code>dist</code> for files ready to distribute to the world. The next step is to add the bare minimum to those directories in order for our project to start working. To do that, create a new file in src called index.js, giving it this content:</p>


<code>src/index.js</code>

<pre>console.log('React is up and running!');
</pre>
	

<p className="it">Cuando se ejecuta el script, se mostrará un mensaje simple para que pueda estar seguro de que todo funciona correctamente.</p>

<p className="p">When the script runs, that will show a simple message so you can be sure everything is working correctly.</p>


<p className="it">En el directorio dist, por favor cree index.html con este contenido:</p>

<p className="p">In the <code>dist</code> directory, please create index.html with this content:</p>


<code>dist/index.html</code>

<pre>
1 &#60;!DOCTYPE html&#62;<br></br>
2 &#60;html&#62;<br></br>
3 &#60;body&#62;<br></br>
4 &#60;div id="app"&#62;&#60;/div&#62;<br></br>
5 &#60;script src="bundle.js"&#62;&#60;/script&#62;<br></br>
6 &#60;/body&#62;<br></br>
7 &#60;/html&#62;

</pre>


<p className="it">Hay dos cosas interesantes. En primer lugar, &lt;div id = "app"&gt; &lt;/ div&gt; es donde pediremos a React que procese nuestra aplicación en unos instantes. En segundo lugar, &lt;script src = "bundle.js"&gt; &lt;/ script&gt; es el script finalizado que Webpack construye para nosotros combinando todo nuestro código en un solo archivo.</p>

<p className="p">There are two interesting things in there. First, &#60;div id="app"&#62;&#60;/div&#62; is where we’ll be asking React to render our app in just a few moments. Second, &#60;script src="bundle.js"&#62;&#60;/script&#62; is the finished script that Webpack builds for us by combining all our code into one single file.</p>


<p className="it">Con esos dos archivos creados, deberías poder ejecutar webpack desde la ventana del terminal y ver la salida como esta:</p>

<p className="p">With those two files created, you should be able to run webpack from your terminal window and see output like this:</p>




<hr></hr>
<pre>
Hash: 696d94eec4dc3cb40865<br></br>
Version: webpack 1.12.9<br></br>
Time: 1304ms<br></br>
Asset Size Chunks Chunk Names<br></br>
bundle.js 940 kB 0 [emitted] main<br></br>
[0] multi main 52 bytes &#123;0&#125; [built]<br></br>
+ 245 hidden modules
</pre>
<hr></hr>

<p className="it">Si ve errores como "command not found" después de ejecutar el comando webpack, probá este comando:</p>

<p className="p">If you see errors like “command not found” after you run the webpack command, try this command:</p>


<hr></hr>

<code>sudo npm install -g webpack webpack-dev-server</code> 
				 
<hr></hr>

<p className="it">Que instala dos componentes clave globalmente en su sistema, por lo que tendrá que introducir la contraseña del sistema de su computadora.</p>

<p className="p">That installs two key components globally to your system, so you will need to enter your computer’s system password.</p>


<p className="it">Una vez que se completa, esperamos que deberías ser capaz de ejecutar webpack y ver los resultados verdes.</p>

<p className="p">Once that completes, hopefully you should be able to run webpack and see green results.</p>



<h2>The Importance of using Webpack with React</h2>

<p className="it">Cuando ejecuta webpack en su ventana de terminal, crea su aplicación React y la coloca en la carpeta <code>dist</code> que hizo anteriormente para que pueda probarla. De hecho, está allí ahora mismo: si miras en <code>dist</code> verás un archivo llamado <code>bundle.js</code> que es sorprendentemente grande - el mío es 940KB!</p>

<p className="p">When you run webpack in your terminal window it builds your React application and places it into the <code>dist</code> folder you made earlier so you can try it. In fact, it’s there right now: if you look in <code>dist</code> you’ll see a file called <code>bundle.js</code> that’s surprisingly large – mine is 940KB!</p>


<p className="it">Si lo abre en un editor de texto, verá todo tipo de código que no escribió. No te preocupes: tu única línea de JavaScript está allí en algún lugar envuelto (intenta buscarlo!), Pero todo el resto de las cosas es importante también porque permite usar React.</p>

<p className="p">If you open it in a text editor you’ll see all sorts of code that you didn’t write. Don’t worry: your single line of JavaScript is in there somewhere all wrapped up (try searching for it!) but all the rest of the stuff is important too because it lets use use React.</p>



<p className="it">Nuestro archivo <code>bundle.js</code> contiene todo tipo de código que no escribimos, que es el punto de Webpack: ensambla (y comprime!) Todas tus bibliotecas para ti.</p>

<p className="p">Our <code>bundle.js</code> file contains all sorts of code that we didn’t write, which is the point of Webpack: it assembles (and compresses!) all your libraries for you.</p>


<p className="it">Ejecutar webpack directamente desde la línea de comandos demuestra que funciona, pero no es cómo lo usaremos. Esto se debe a que junto con Webpack también instalamos Webpack Dev Server, que es la forma más inteligente y sencilla de crear aplicaciones React, y es lo que usaremos a partir de ahora. Por lo tanto, ejecutá este comando ahora:</p>

<p className="p">Running webpack straight from the command line proves that it works, but it’s not how we’ll be using it. This is because alongside Webpack we also installed Webpack Dev Server, which is the smartest, simplest way to build React applications – and it’s what we’ll be using from now on. So, please run this command now:</p>

<hr></hr>
<code>webpack-dev-server</code>
<hr></hr>				 

<p className="it">Su computadora pensará durante unos segundos y luego un montón de texto pasará, pero espero que la última línea diga "webpack: bundle es ahora válido".</p>

<p className="p">Your computer will think for a few seconds then lots of text will whizz by, but hopefully the last line says “webpack: bundle is now VALID.”</p>



<p className="it">Webpack Dev Server construirá todo el código de su aplicación en un único archivo y luego lo servirá desde el contenido de su directorio dist.</p>

<p className="p">Webpack Dev Server will build all your app’s code into one single file, then serve it up from the contents of your <code>dist</code> directory.</p>



<p className="it">Ahora para el bit inteligente: abrí su navegador web y apúntelo en la dirección http: // localhost: 8080. Este es su equipo local que ejecuta Webpack Dev Server - no sólo ha construido su aplicación para usted, sino que también está sirviendo esa aplicación para que pueda probarlo en vivo.</p>

<p className="p">Now for the clever bit: open your web browser and point it at the address http://localhost:8080. This is your local computer running Webpack Dev Server – not only has it built your app for you, but it’s also serving that app up so you can try it live.</p>


<p className="it">En este momento nuestro código no hace nada, pero deberías poder acceder a la consola de desarrollo de tu navegador web y ver el mensaje "¡React está funcionando!".</p>

<p className="p">Right now our code doesn’t do anything, but you should be able to to your web browser’s developer console and see the message “React is up and running!” printed there.</p>



<p className="it">Usuarios de Chrome: vaya al menú Ver y elejí Desarrollador&gt; Consola JavaScript.</p>

<p className="p">Chrome users: go to the View menu and choose Developer > JavaScript Console.</p>


<p className="it">Usuarios de Safari: vaya al menú Desarrollar y elejí Show Error Console. Si no puede ver el menú de desarrollo, vaya a Safari&gt; Preferencias, seleccione la pestaña Avanzado y asegurate de que la casilla "Mostrar el menú Desarrollar en la barra de menús" esté marcada.</p>

<p className="p">Safari users: go to the Develop menu and choose Show Error Console. If you can’t see the develop menu, go to Safari > Preferences, select the Advanced tab, then make sure the “Show Develop menu in menu bar” checkbox is checked.</p>


<p className="it">Usuarios de Firefox: vaya al menú Herramientas y elejí Web Developer&gt; Web Console.</p>

<p className="p">Firefox users: go to the Tools menu and choose Web Developer > Web Console.</p>




<p className="it">Esto demuestra que nuestra configuración básica ya está hecha, y es hora de iniciar algunos React codificación.</p>

<p className="p">This shows that our basic configuration is all done, and it’s time to start some React coding.</p>


<p className="it">Nota: si eres un usuario de Chrome, encontrarás que React Chrome Developer Tools es muy útil al depurar tus aplicaciones de React.</p>

<p className="p">Note: if you’re a Chrome user, you will find the React Chrome Developer Tools very useful when debugging your React apps.</p>



<p className="it" data-reactid="136">Detenga lo que está haciendo y asegurate de encontrar la consola de desarrollo de su navegador web, ¡esto es importante más adelante!</p>

<p className="p">Stop what you’re doing and make sure you can find your web browser’s developer console – this is important later on!</p>



<h2>Introduction to JSX</h2>



<p className="it">Dentro del directorio crean un nuevo subdirectorio llamado páginas, y allí crean el archivo <code>Detail.js</code>. Al trabajar con React , algunos desarrolladores de los gustos que usan la extensión de archivo .jsx y otros como usar antiguos .js llanos - honestamente realmente no importa, así que use lo que haga feliz. Dicho esto, si esta es tu primera vez que usa React te sugiero que te quedes con .js para que puedas seguir este tutorial con más facilidad.</p>

<p className="p">Inside the src directory create a new subdirectory called pages, and in there please create the file <code>Detail.js</code>. When working with React some developers like to use the file extension .jsx and others like to use plain old .js – honestly it really doesn’t matter, so use whichever makes you happy. That being said, if this is your first time using React I would suggest you stick with .js so you can follow this tutorial more easily.</p>


<p className="it">En <code>Detail.js</code> vamos a hacer React algo realmente simple para que pueda ver por qué necesitamos saltar a través de todos los aros de Webpack y NPM anteriores. Modificá <code>Detail.js</code> para que tenga este contenido:</p>

<p className="p">In <code>Detail.js</code> we’re going to make React render something really simple so you can see why we needed to jump through all those Webpack and NPM hoops earlier. Modify <code>Detail.js</code> so it has this content:</p>


<code>src/pages/Detail.js</code>

<pre>
1 import React from 'react';<br></br>
2<br></br>
3 class Detail extends <code>React.Component</code> &#123;<br></br>
4 <code>render()</code> &#123;<br></br>
5 return &#60;p&#62;This is React rendering HTML!&#60;/p&#62;;<br></br>
6 &#125;<br></br>
7 &#125;<br></br>
8<br></br>
9 export default Detail;<br></br>
</pre>



<p className="it" data-reactid="145">Esas son siete líneas de código ES6, de las cuales una está vacía y dos están cerrando llaves por sí mismos, así que esperemos que nada sea demasiado difícil para usted. Pero lo que está interesado en el uso de HTML, porque está justo en el medio y no rodeado de comillas. Y sin embargo, funciona, que es una de las cosas maravillosas de React : esto se llama JSX, y cuando el código se construye por Webpack que JSX automáticamente se convierte en JavaScript.</p>

<p className="p">That’s seven lines of ES6 code, of which one is empty and two are just closing braces by themselves, so hopefully nothing too challenging for you. But what’s interesting is the use of HTML, because it’s right in the middle there and not surrounded by quotes. And yet it works, which is one of the marvellous things about React: this is called JSX, and when your code gets built by Webpack that JSX automatically gets converted into JavaScript.</p>



<p className="it">Si se preguntan, una "llave" es el nombre del delfín, siendo una llave de apertura y una llave de cierre. Vas a usar mucho estos!</p>

<p className="p">If you were wondering, a “brace” is the name for the &#123; and &#125; symbol, with &#123; being an opening brace and &#125; being a closing brace. You’ll be using these a lot!</p>



<p className="it">De todos modos, como se puede ver JSX se parece mucho HTML, aunque hay algunas excepciones que aprender a medida que avanza. Echemos un vistazo a cada una de las líneas importantes de código:</p>

<p className="p">Anyway, as you can see JSX looks pretty much like HTML, although there are a few exceptions you’ll learn as you progress. Let’s take a look at each of the important lines of code:</p>




<p className="it">Importar React de 'React' cargas de la biblioteca de React, que es bastante central a toda nuestra aplicación y por lo tanto es necesario.</p>

<p className="p">import React from ‘react’ loads the React library, which is pretty central to our whole application and thus is required.</p>



<p className="it">Clase Detalle extiende <code>React.Component</code> &#123; definir un nuevo componente React. Los componentes de React pueden ser grandes (como páginas) o pequeños (como un componente personalizado para procesar las migas de pan) y son muy flexibles.</p>

	<p className="p">class Detail extends <code>React.Component</code> &#123; defines a new React component. React components can be big (like pages) or small (like a custom component to render breadcrumbs) and they are very flexible.</p>




<p className="it">Render() &#123;iniciar el método <code>render()</code> de nuestro componente. Esto se llama React cuando el componente necesitas ser dibujado en la pantalla, y necesitas devolver algo que se puede dibujar en el navegador.</p>

	<p className="p">render() &#123; starts the <code>render()</code> method of our component. This is called by React when the component needs to be drawn to the screen, and needs to return something that can be drawn in the browser.</p>



<p className="it">Lo que queda en esta clase es solo la llave de cierre que termina el método render y la segunda llave de cierre que termina la clase que está creando.</p>

<p className="p">What’s left in this class is just the closing brace &#125; that ends the <code>render()</code> method and the second closing brace that ends the class we’re creating.</p>



<p className="it">Exportación predeterminado Detalle; La palabrí clave "export" significa que este componente está siendo expuesto al resto de nuestra aplicación, y "default" significa que es única cosa que esta clase va a un exponente.</p>

<p className="p">export default Detail; The “export” keyword means this component is being exposed to the rest of our app to use, and “default” means it’s the only thing this class will expose.</p>



<p className="it">Este ejemplo tiene todo el JSX en una línea, pero pronto nos moveremos a escribir JSX multilínea. JSX multi-línea introduce una peculiaridad importante que debe tener en cuenta ahora, que es que JSX recorta espacios entre líneas. Por lo tanto, si está siguiendo los ejemplos de código de este libro y encuentra algunos espacios en blanco entre dos líneas, intentá ponerlos en una línea y verá que funciona.</p>

<p className="p">This example has all the JSX on one line, but we’ll soon move to writing multi-line JSX. Multi-line JSX introduces one important quirk you should be aware of now, which is that JSX automatically trims whitespace between lines. So, if you’re following the code examples in this book and find some missing whitespace between two lines, try putting them on one line and you’ll find it works.</p>



<p className="it">Ahora, después de todo ese código, siento que no hace nada todavía. Afortunadamente, eso es fácil de arreglar ...</p>

<p className="p">Now, after all that code I’m sorry to say it won’t do anything just yet. Fortunately, that’s easily fixed…</p>


<h2>Importing React Components using ES6</h2>



<p className="it">Nuestro código sigue sin hacer nada porque no hemos incluido nuestra nueva página en la aplicación, por lo que debes volver a <code>index.js</code> y modificarla a esta:</p>

<p className="p">Our code doesn’t do anything yet because we haven’t included our new page in the app, so please go back to <code>index.js</code> and modify it to this:</p>


<code>src/index.js</code>
 
<pre>
	
1 import React from 'react';<br></br>
2 import ReactDOM from 'react-dom';<br></br>
3<br></br>
4 import Detail from './pages/Detail';<br></br>
5<br></br>
6 ReactDOM.render(<br></br>
7 &#60;Detail /&#62;,<br></br>
8 document.getElementById('app')<br></br>
9 );
1 import React from 'react';<br></br>
2 import ReactDOM from 'react-dom';<br></br>
3<br></br>
4 import Detail from './pages/Detail';<br></br>
5<br></br>
6 ReactDOM.render(<br></br>
7 &#60;Detail message="This is coming from props!" /&#62;,<br></br>
8 document.getElementById('app')<br></br>
9 );<br></br>

</pre>


<p className="it">Guarda tanto <code>index.js</code> como Detalle.js y, estando bien, debes poder volver a su navegador web y ver "¡Esto es Reactar el HTML!" Justo allí en la pantalla.</p>

<p className="p">Save both <code>index.js</code> and <code>Detail.js</code> and, all being well, you should be able to return to your web browser and see “This is React rendering HTML!” right there on the screen.</p>


<p className="it">Antes de explicar lo que hace el nuevo código, intentá volver a <code>Detail.js</code> y modifique su método de hacer para decir "¡Esto es JSX que se está convirtiendo en HTML!" Si lo hace, a continuación, presione guardar de nuevo, verá algo de magia ocurre: Su navegador web se actualizará automáticamente para mostrar el nuevo mensaje.</p>

<p className="p">Before I explain what the new code does, try going back to <code>Detail.js</code> and modify its render method to say “This is JSX being converted to HTML!” If you do that, then press save again, you’ll see some magic happen: your web browser will automatically update to show the new message.</p>


<p className="it">No es necesario ejecutar ningún comando, de hecho, realizar cualquier otra acción que guardar el código. Webpack Dev Server detecta automáticamente el cambio y vuelve a cargar su trabajo. Esperamos que ahora vea por qué era tan importante obtener la configuración de Webpack justo al principio de este tutorial, porque utilice esta configuración de desarrollo (hace como "carga en caliente") hace que la codificación mar mucho más rápida. Nota: si no hay cambio, pulse simplemente Actualizar en su navegador.</p>

<p className="p">You don’t need to run any commands or indeed take any other action than saving your code – Webpack Dev Server automatically detects the change and reloads your work. Hopefully you can now see why it was so important to get the Webpack configuration right at the start of this tutorial, because using this development set up (known as “hot loading”) makes coding substantially faster. Note: if you don’t see any changes, just hit Refresh in your browser.</p>

<p className="it">Ahora, permítanme explicar qué hace el nuevo código en <code>index.js</code> ...</p>

<p className="p">Now, let me explain what the new code in <code>index.js</code> does…</p>

<p className="it">Importar React de 'React' es una línea que ha visto antes, y volver a ver este tutorial: simplemente chupa en la biblioteca principal de React para poder empezar a trabajar.</p>

<p className="p">import React from ‘react’ is a line you’ve seen before, and you’ll see again in this tutorial: it just sucks in the main React library so we can start work.</p>

<p className="it">Importar ReactDOM de 'react-dom' es nuevo e importar las herramientas React necesarias para renderizar al DOM, es decir, el nombre utilizado para la estructura de documentos utilizados para describir páginas web y otros documentos similares.</p>

<p className="p">import ReactDOM from ‘react-dom’ is new, and imports the React tools required to render to the DOM – that’s the name used for the document structure used to describe web pages and other similar documents.</p>

<p className="it">Import Detalle de './pages/Detail' es donde importamos nuestro nuevo componente React en nuestra aplicación para que empiece a usarlo.</p>

<p className="p">import Detail from ‘./pages/Detail’ is where we import our new React component into our app so that we can start using it.</p>

<p className="it"><code>ReactDOM.render()</code> es lo que inicia la renderización de toda nuestra aplicación, y toma los parámetros: JSX para representar y hacer renderizarlo.</p>

<p className="p"><code>ReactDOM.render()</code> is what kicks off the rendering of our entire app, and it takes two parameters: some JSX to render and where to render it to.</p>

<p className="it">&lt;Detalle /&gt; es el primer parámetro que pedimos que React haga el resultado, y es el nombre JSX de nuestro componente Detalle.</p>

<p className="p">&#60;Detail /&#62; is the first parameter we ask React to render, and it’s the JSX name of our Detail component.</p>

<p className="it">Document.getElementById ('app') es el segundo parámetro del método render, y le dice a React que deseas que se vuelva dentro del elemento HTML llamado "app" - que está dentro del archivo index.html que hicimos antes.</p>

<p className="p">document.getElementById(‘app’) is the second parameter to the render method, and it tells React we want it to render inside the HTML element named “app” – that’s inside the index.html file we made earlier.</p>
<p className="it">Cuando nuestra aplicación se construye, esa línea &lt;Detail /&gt; se convierte automáticamente en el componente El detalle que creó dentro de <code>Detail.js</code>, que a su vez tiene su método <code>render()</code> llamado para que dibuje a la pantalla.</p>

<p className="p">When our app gets built, that &#60;Detail /&#62; line automatically gets converted into the Detail component we created inside <code>Detail.js</code>, which in turn has its <code>render()</code> method called so it draws to the screen.</p>


<p className="it">Ahora, antes de continuar, probablemente tengo algunas preguntas. Permítanme tratar de responder a algunos:</p>

<p className="p">Now, before we continue you probably have some questions. Let me try to answer some:</p>

<p className="it">¿Por qué <code>Detail.js</code> tiene mayúscula? Esto no es necesario, pero es estilísticamente preferido.</p>

<p className="p">Why does <code>Detail.js</code> have a capital letter? This isn’t needed, but it’s stylistically preferred.</p>

<p className="it">¿Cómo sabe JSX lo que significa &lt;Detalle /&gt;? No le damos a los componentes de un nombre en el interior de <code>Detail.js</code>, por lo que el nombre de la forma en el que importamos: se utiliza de importación Bob desde './pages/Detail'; Entonces podes escribir &lt;Bob /&gt; y funcionaría muy bien. (¡Pero no hagas eso si valoras tu cordura!)</p>

<p className="p">How does JSX know what &#60;Detail /&#62; means? We don’t give the component a name inside <code>Detail.js</code>, so instead the name comes from the way we import it: if you use import Bob from './pages/Detail'; then you could write &#60;Bob /&#62; and it would work just fine. (But please don’t do that if you value your sanity!)</p>

<p className="it">¿Puedo poner muchos componentes en <code>Detail.js</code>? Podes si quiere, pero otra vez es preferible no a si valoras su cordura. Pegue un componente por archivo si podes.</p>

<p className="p">Can I put lots of components in <code>Detail.js</code>? You can if you want to, but again it’s preferable not to if you value your sanity. Stick to one component per file if you can.</p>

<p className="it">Tengo que hacer cosas dentro de mi componente? No, pero React necesitas algo que hacer en este momento. Cuando seas un desarrollador React más experimentado, aprenderás más sobre esto.</p>

<p className="p">Do I have to render stuff inside my component? No, but React does need something to render at this point. When you’re a more experienced React developer you’ll learn more about this.</p>

<p className="it">Para recapitular, hasta ahora has aprendido:</p>

<p className="p">To recap, so far you’ve learned:</p>

<ul>
<li className="it">Cómo instalar Webpack, Babel y React para el desarrollo con ES6.</li>

<li className="p">How to install Webpack, Babel and React for development with ES6.</li>
<li className="it">Cómo crear un componente básico de React e importarlo en una aplicación.</li>

<li className="p">How to create a basic React component and import it into an application.</li>
<li className="it">Cómo escribir JSX simple para procesar contenido.</li>

<li className="p">How to write simple JSX to render content.</li>
</ul>

<p className="it">No está mal, pero eso es sólo el comienzo</p>

<p className="p">Not bad, but that’s just the beginning…</p>

</div>
</div>
  </Layout>
)