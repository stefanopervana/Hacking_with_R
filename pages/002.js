import Layout from '../components/layout';
import Link from 'next/link'

export default() => (
  <Layout title='002'>
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


<p className="it">Este libro está dividido en muchos capítulos cortos. He tratado de hacer que cada capítulo tome unos cinco minutos para completar, aunque un puñado podría tomar 10 minutos porque cubren temas más complicados. Estos capítulos cortos están diseñados para que sea más fácil iniciar y detener lo que necesites, volver a leer los capítulos si había algo que no comprendías completamente y permitirte ver tu progreso con más claridad a medida que te moves capítulo a capítulo</p>

<p className="p">This book is broken up into lots of short chapters. I’ve tried to make every chapter take about five minutes to complete, although a handful might take 10 minutes because they cover more complicated topics. These short chapters are designed to make it easier for you to start and stop as you need to, to re-read chapters if there was something you didn’t fully understand, and allow you to see your progress more clearly as you move from chapter to chapter.</p>



<p className="it">Importante: cuando veas el código con un nombre de archivo adjunto, como el siguiente, significa que debes escribir ese código en ese archivo. Me gusta esto:</p>

<p className="p">Important: when you see code with a filename attached, like the below, it means you should write that code in that file. Like this:</p>


<code>dist/somefile.js</code>

<hr></hr>

<code>Poné este código en somefile.js en el directorio dist.</code>

<code>Put this code into somefile.js in the <code>dist</code> directory.</code>

<hr></hr>

<p className="it">Código sin un título es un comando para ejecutar en la línea de comandos, o es el código presentado sólo para su referencia - en cuyo caso a menudo prefijo con "El código siguiente no funcionará porque ...". Hay algunos lugares donde verás código con un nombre de archivo en el contexto de leer código en ese archivo en lugar de escribir, pero estos lugares están claramente marcados. Por ejemplo, podrías decir "aquí es cómo su código deberías buscar si usted ha estado siguiendo adelante ..."</p>

<p className="p">Code without a title is either a command to run on the command line, or is code presented just for your reference – in which case I often prefix it with “The following code won’t work because…”. There are some places where you’ll see code with a filename in the context of reading code in that file rather than writing, but these places are clearly marked. For example, I might say “here’s how your code should look if you’ve been following along…”</p>



<p className="it">De todos modos, eso es más que suficiente explicación. Si estás listo, comencemos: abrí la aplicación Terminal y ejecutá estos comandos para crear el directorio del proyecto:</p>

<p className="p">Anyway, that’s more than enough explanation. If you’re ready, let’s get started: open the Terminal app and run these commands to create your project directory:</p>


<hr></hr>
<code>cd Desktop</code><br></br>

<code>mkdir hwr cd hwr</code><br></br>

<code>npm init -y</code>
<hr></hr>

<p className="it">Si nunca has utilizado el comando Terminal antes, deberías poder encontrarlo con Spotlight en OS X. Si usas Windows, debes usar el símbolo del sistema. Si estás utilizando Linux, cualquier emulador de terminal está bien.</p>

<p className="p">If you’ve never used the Terminal command before, you should be able to find it using Spotlight on OS X. If you’re using Windows, you should use the Command Prompt. If you’re using Linux, any terminal emulator is fine.</p>

<p className="it">El primer comando cambia a su escritorio, lo que facilita la búsqueda de su trabajo. El segundo comando crea un nuevo directorio llamado hwr - abreviatura de Hacking with React - pero se puede llamar como quieras dentro de reason. Nota: llamarlo "React" causará problemas, así que por favor tratá de ser original!</p>

<p className="p">The first command switches to your desktop, which makes finding your work easier. The second command creates a new directory called hwr - short for Hacking with React - but you can call it whatever you want within reason. Note: calling it “react” will cause problems, so please try to be original!</p>

<p className="it">El tercer comando navega en el directorio hwr creado recientemente, que es donde vamos a trabajar para el resto de este tutorial. Este es tu directorio de proyectos, y debes ejecutar todos los comandos futuros desde aquí. El comando final crea un nuevo proyecto usando npm, momento en el que ya está listo.</p>

<p className="p">The third command navigates into the newly created hwr directory, which is where we’ll be working for the remainder of this tutorial. This is your project directory, and you should run all future commands from here. The final command creates a new project using npm, at which point you’re ready to go.</p>

<p className="it">La configuración de un esqueleto de proyecto toma sólo cuatro comandos en el terminal. Vale la pena tomarse el tiempo para sentirse cómodo en la ventana del terminal, porque lo usaremos más en el futuro.</p>

<p className="p">Setting up a skeleton project takes just four commands in the terminal. It’s worth taking the time to get comfortable in the terminal window, because we’ll be using it more in the future.</p>

<p className="it">Antes de hacer cualquier codificación, tenemos un poco de configuración aburrida para pasar. Esto es inevitable, me temo, pero al mismo tiempo es muy valioso: pasarás las próximas horas trabajando en este tutorial, así que pasar cinco minutos asegurándote de que tu proyecto esté configurado correctamente te hará la vida mucho más fácil!</p>

<p className="p">Before we do any coding, we have a bit of boring configuration to get through. This is unavoidable, I’m afraid, but at the same time it’s hugely valuable: you’ll be spending the next few hours working through this tutorial, so spending five minutes making sure your project is configured correctly will make your life much easier!</p>

<p className="it">En la ventana del terminal, todavía en el directorio del proyecto, ejecutá estos comandos:</p>

<p className="p">In your terminal window, still in your project directory, run these commands:</p>

<hr></hr>
<code>npm install --save-dev webpack webpack-dev-server react-hot-loader</code><br></br>
<code>npm install --save-dev babel-core babel-loader</code><br></br>
<code>npm install --save-dev babel-preset-es2015 babel-preset-react</code><br></br>
<code>npm install --save react react-dom history react-router</code>
<hr></hr>

<p className="it">Nota: si ves "comando no encontrado" para npm, significa que no tiene Node.js instalado. Debes ir a nodejs.org e instalar Node.js luego intentalo de nuevo.</p>

<p className="p">Note: if you see “command not found” for npm, it means you don’t have Node.js installed. You need to go to nodejs.org and install Node.js then try again.</p>

<p className="it">Esos comandos de npm toman un poco de tiempo para ejecutar porque tira bastantes piezas de software. Si nunca has utilizado npm antes, los tres primeros comandos significan "instalar este software para su uso mientras estoy desarrollando", y el cuarto significa "instalar este software para su uso mientras estoy desarrollando, pero también lo necesitaré" Cuando mi aplicación está en producción también."</p>

<p className="p">Those npm commands take a little while to run because they pull in quite a few pieces of software. If you’ve never used npm before, the first three commands mean “install this software for use while I’m developing,” and the fourth means “install this software for use while I’m developing, but I’ll also need it when my app is in production too.”</p>

<p className="it">Si vos te estabas preguntando, Babel es una herramienta que acepta código ES6 y React como entrada, y crea JavaScript normal como salida. Esto es importante porque las tecnologías que vamos a utilizar no son compatibles con los navegadores web, por lo que es tarea de Babel hacerlo compatible en un proceso conocido como "transpiling", convirtiendo el código fuente ES6 en JavaScript de la vieja escuela.</p>

<p className="p">If you were wondering, Babel is a tool that accepts ES6 and React code as input, and creates regular JavaScript as output. This is important because the technologies we’ll be using aren’t compatible with web browsers, so it’s Babel’s job to make it compatible in a process known as “transpiling” - converting ES6 source code to old-school JavaScript.</p>

<p className="it">Con todo ese software instalado, el siguiente paso es decirle cómo deben trabajar juntos. En el directorio del proyecto, buscá un archivo denominado <code>package.json</code> y ábrilo en un editor de texto. Añadí estas líneas justo después de donde dice "license": "ISC":</p>

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

<p className="it">Tené en cuenta que necesitas una coma al final de la llave de cierre, que es el símbolo &#125;. En caso de que no estés seguro de dónde colocarlo, he aquí un archivo <code>package.json</code> completo para referencia:</p>

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

<p className="it">El último paso en nuestra configuración es preparar Webpack, que es una herramienta que convierte todo nuestro código fuente en una aplicación terminada lista para enviar a los usuarios. Webpack está controlado por un archivo denominado webpack.config.js, que aún no existe. Por lo tanto, pegue lo siguiente en un archivo y guárdelo como <code>webpack.config.js</code> en el directorio del proyecto:</p>

<p className="p">The last step in our configuration is to prepare Webpack, which is a tool that converts all our source code into one finished app ready to ship to users. Webpack is controlled by a file named webpack.config.js, which doesn’t exist yet. So, please paste the below into a file and save it as <code>webpack.config.js</code> in your project directory:</p>


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



<p className="it">Esto configura Webpack para leer todo nuestro código fuente y convertirlo en un solo script terminado llamado <code>bundle.js</code> dentro de un directorio llamado <code>dist - short</code> para "distribución". No hemos creado ese directorio todavía, así que por favor, crealo dentro de tu directorio de proyectos ahora. Mientras estés allí, por favor, también crea uno llamado src - que es corto para "fuente" y es donde vamos a almacenar todo el código fuente que escribimos.</p>

<p className="p">That configures Webpack to read all our source code and convert it into a single finished script called <code>bundle.js</code> inside a directory called <code>dist – short</code> for “distribution”. We haven’t made that directory yet, so please create it inside your project directory now. While you’re there, please also create one called src – that’s short for “source” and it’s where we’ll be storing all the source code we write.</p>


<p className="it">Por lo tanto, tenemos <code>src</code> para nuestro código fuente, y <code>dist</code> para los archivos listos para distribuir al mundo. El siguiente paso es agregar el mínimo necesario a esos directorios para que nuestro proyecto comience a funcionar. Para ello, creá un nuevo archivo en <code>src</code> llamado <code>index.js</code>, dándole este contenido:</p>

<p className="p">So, we have <code>src</code> for our source code, and <code>dist</code> for files ready to distribute to the world. The next step is to add the bare minimum to those directories in order for our project to start working. To do that, create a new file in <code>src</code> called <code>index.js</code>, giving it this content:</p>


<code>src/index.js</code>

<pre>console.log('React is up and running!');
</pre>
	

<p className="it">Cuando se ejecuta el script, se mostrará un mensaje simple para que puedas estar seguro de que todo funciona correctamente.</p>

<p className="p">When the script runs, that will show a simple message so you can be sure everything is working correctly.</p>


<p className="it">En el directorio <code>dist</code>, por favor creá <code>index.js</code> con este contenido:</p>

<p className="p">In the <code>dist</code> directory, please create <code>index.js</code> with this content:</p>


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


<p className="it">Hay dos cosas interesantes. En primer lugar, &#60;div id="app"&#62;&#60;/div&#62; es donde pediremos a React que procese nuestra aplicación en unos instantes. En segundo lugar, &#60;script src="bundle.js"&#62;&#60;/script&#62; es el script finalizado que Webpack construye para nosotros combinando todo nuestro código en un solo archivo.</p>

<p className="p">There are two interesting things in there. First, &#60;div id="app"&#62;&#60;/div&#62; is where we’ll be asking React to render our app in just a few moments. Second, &#60;script src="bundle.js"&#62;&#60;/script&#62; is the finished script that Webpack builds for us by combining all our code into one single file.</p>


<p className="it">Con esos dos archivos creados, deberías poder ejecutar webpack desde la ventana del terminal y ver un output como este:</p>

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

<p className="it">Si ves errores como "command not found" después de ejecutar el comando webpack, probá este comando:</p>

<p className="p">If you see errors like “command not found” after you run the webpack command, try this command:</p>


<hr></hr>

<code>sudo npm install -g webpack webpack-dev-server</code> 
				 
<hr></hr>

<p className="it">Que instala dos componentes clave globalmente en tu sistema, por lo que tendrás que introducir la contraseña del sistema de tu computadora.</p>

<p className="p">That installs two key components globally to your system, so you will need to enter your computer’s system password.</p>


<p className="it">Una vez que se completa, esperamos que deberías ser capaz de ejecutar webpack y ver los resultados verdes.</p>

<p className="p">Once that completes, hopefully you should be able to run webpack and see green results.</p>
<div>
<center><nav className="center">
<Link href='/001'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/003'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>
</div>
</div>
  </Layout>
)