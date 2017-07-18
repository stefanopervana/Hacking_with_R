import Layout from '../components/layout'

export default() => (
  <Layout title='Ch8'>
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

<h1>Linting React using ESLint and Babel</h1>
<p className="it">Ya hemos terminado con las pruebas, pero nuestro código aún no es perfecto. Ves, todo este tiempo he estado haciendo que escribas código perfectamente funcional pero siempre ligeramente roto. Por favor, No te enojen y me envíen correos electrónicos furiosos: todo esto fue intencional, porque quería enseñarles una última cosa importante y necesitaba algunos casos de prueba.</p>

<p className="p">We’re done with testing now, but our code still isn’t perfect. You see, all this time I’ve been making you write perfectly functional but ever-so-slightly broken code. Please don’t get angry and send me raging emails: this was all intentional, because I wanted to teach you one last important thing and needed some test cases.</p>
<p className="it">El último paso de nuestro proyecto es agregar linting, que es el proceso de mirar automáticamente la forma en que hemos escrito nuestro código para tratar de detectar posibles errores o estilos inconsistentes. El código que hemos escrito hasta ahora no ha sido recortado en todo todavía, lo que significa que tiene muchas inconsistencias pequeñas que necesitan ser limpiados para que nuestro código sea perfecto.</p>

<p className="p">The last step in our project is to add linting, which is the process of automatically looking at the way we have written our code to try to detect possible mistakes or inconsistent styles. The code we’ve written so far hasn’t been linted at all yet, which means it has many tiny inconsistencies that need to be cleaned up in order for our code to be perfect.</p>
<p className="it">Ahora bien, es posible que estés pensando "¿A quién le importan inconsistencias minúsculas?" Pero resulta que estas inconsistencias son importantes: si tu estilo de codificación no es consistente, se necesitas a otros desarrolladores un poco más de tiempo para entender tu código, Fricción innecesaria. Y, por supuesto, siempre es posible que linting detecte problemas reales graves en su código - que no va a suceder aquí porque te he ayudado, pero en el futuro siempre es posible.</p>

<p className="p">Now, it’s possible you’re thinking “who cares about tiny inconsistencies?” But it turns out these inconsistencies are important: if your coding style isn’t consistent, it takes other developers that little bit longer to understand your code, which just causes unnecessary friction. And of course it’s always possible that linting will spot actual serious problems in your code – that’s not going to happen here because I’ve helped you, but in the future it’s always possible.</p>
<p className="it">Para empezar, necesitamos instalar algunas herramientas de linting. Ejecute este comando en una ventana de terminal:</p>

<p className="p">To get started, we need to install some linting tools. Please run this command in a terminal window:</p>



<code>npm install --save-dev eslint babel-eslint eslint-plugin-react</code>
 

<p className="it">ESLint es un linter rápido y moderno que escanea el código fuente escrito en ES6. También he incluido los paquetes babel-eslint y eslint-plugin-react, porque estamos utilizando JSX que debe ser leído por Babel antes de que llegue a ESLint.</p>

<p className="p">ESLint is a fast, modern linter that scans source code written in ES6. I’ve included the babel-eslint and eslint-plugin-react packages as well, because we’re using JSX that needs to be read in by Babel before it hits ESLint.</p>
<p className="it">Al igual que lo hicimos con las pruebas, vamos a agregar un comando dedicado para pelar nuestro código. Para ello, abrí <code>package.json</code> en su editor de texto y modifique la sección de scripts a esto:</p>

<p className="p">Just like we did with testing, we’re going to add a dedicated command to lint our code. To do this, open <code>package.json</code> in your text editor and modify the scripts section to this:</p>

<code>package.json</code>

<pre></pre>

<p className="it">asegurate de que tiene una coma al final de la línea de "prueba", de lo contrario su archivo de paquete no será válido.</p>

<p className="p">Make sure you have a comma on the end of the "test" line otherwise your package file will be invalid.</p>
<p className="it">Ese nuevo comando "test" le dice a ESLint que tea nuestro directorio src, que es todo lo que necesitamos.</p>

<p className="p">That new “test” command tells ESLint to read our src directory, which is all we need.</p>
<p className="it">Sólo hay un paso de configuración más necesario, que es crear un archivo de configuración ESLint básico. Esto se llama inescrupulosamente .eslintrc, y ese período inicial significa que el archivo será invisible para los usuarios de Mac y Linux. Crear un nuevo archivo en su editor de texto y darle este contenido inicial:</p>

<p className="p">There’s just one more configuration step required, which is to create a basic ESLint configuration file. This is rather unhelpfully named .eslintrc, and that leading period means the file will be invisible to Mac and Linux users. Create a new file in your text editor and give it this initial content:</p>

<code>.eslintrc</code>

<pre></pre>

<p className="it">Ahora guárdelo con el nombre exacto .eslintrc. Si eres inteligente, dejarás el archivo abierto en tu editor porque está oculto.</p>

<p className="p">Now save it with the exact name .eslintrc. If you’re smart, you’ll leave the file open in your editor because it’s hidden.</p>
<p className="it">Guardá ese archivo y, a continuación, ejecutá <code>npm run</code>pelusa en la ventana del terminal. Va a pensar por un momento o dos, entonces no hacer nada - pero eso no significa que nuestro código es perfecto, sólo que ESLint está instalado y listo para ser configurado.</p>

<p className="p">Save that file, then run <code>npm run</code> lint in your terminal window. It will think for a moment or two then do nothing – but that doesn’t mean our code is perfect, just that ESLint is installed and ready to be configured.</p>

<p className="it">Los archivos que comienzan con un período se ocultan en OS X y Linux, por lo que es mejor mantenerlos abiertos en el editor de texto.</p>

<p className="p">Files that start with a period are hidden on OS X and Linux, so it’s best to keep them open in your text editor.</p>



</div>
        </div>
  </Layout>
)