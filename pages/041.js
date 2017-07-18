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

<h1>Linting React using Airbnb’s ESLint Rules</h1>
<p className="it">ESLint funciona con un conjunto de reglas que define. Nuestra configuración básica contiene sólo una regla de este tipo: las cadenas deben escribirse dentro de comillas simples en lugar de comillas dobles. Puede agregar más si lo desea, pero es más común encontrar un conjunto existente de reglas que se acercan a lo que deseas y, a continuación, personalizar desde allí.</p>

<p className="p">ESLint works with a set of rules you define. Our basic configuration contains just one such rule: strings should be written inside single quotes rather than double quotes. You can add more if you want, but it’s more common to find an existing set of rules that come close to what you want, then customise from there.</p>
<p className="it">Sin duda, las reglas más comunes son las de Airbnb, que se autoproclama como "una aproximación en gran medida razonable a JavaScript". Y es cierto: sus reglas de linting son populares porque son sencillas, sensatas y hermosamente consistentes.</p>

<p className="p">Arguably the most common linting rules around are by Airbnb, which bills itself as “a mostly reasonable approach to JavaScript.” And it’s true: their linting rules are popular because they are simple, sensible, and beautifully consistent.</p>
<p className="it">Vamos a instalar sus reglas de Airbnb para ESLint y ver qué hace de nuestro código fuente. Ejecute este comando en la ventana del terminal:</p>

<p className="p">We’re going to install their Airbnb rules for ESLint and see what it makes of our source code. Run this command in your terminal window:</p>



<code>npm install --save-dev eslint-config-airbnb</code>
 

<p className="it">Ahora solo necesitamos decirle a ESLint que nuestras propias reglas extienden sus reglas de Airbnb. Esto utiliza las reglas de Airbnb como una fundación, agregando nuestras propias anulaciones según sea necesario. Modificá su archivo .eslintrc a esto:</p>

<p className="p">We now just need to tell ESLint that our own rules extend their Airbnb rules. This uses the Airbnb rules as a foundation, adding our own overrides as needed. Modify your .eslintrc file to this:</p>

<code>.eslintrc</code>

<pre></pre>

<p className="it">Todavía hay una regla allí, pero la he modificado a algo profundamente contencioso porque estamos casi al final ahora, así que siento que es seguro tomar algunos riesgos. Esta nueva regla significa "asegúrate de usar pestañas para sangrar en lugar de espacios", y si eso no te da suficiente motivación para buscar opciones de configuración de ESLint, ¡no sé qué! (Nota: si no desea pestañas o no desea averiguar cómo configurar algo más en las opciones de linter, simplemente elimine la regla).</p>

<p className="p">There’s still only one rule in there, but I’ve modified it to something deeply contentious because we’re almost at the end now so I feel it’s safe to take some risks. This new rule means “make sure I use tabs for indenting rather than spaces,” and if that doesn’t give you enough motivation to search for ESLint configuration options, I don’t know what will! (Note: if you either don’t want tabs or don’t want to figure out how to set something else in the linter options, just delete the rule.)</p>
<p className="it">De todos modos, Guardá su nuevo archivo de configuración y ejecutá <code>npm run</code>pelusa en la ventana de su terminal. Esta vez verás un montón de errores llenar tu pantalla, todo lo que te dice cuál era el problema, así como un nombre de archivo y número de línea. Tené en cuenta que estos errores son todos los errores estilísticos en lugar de reales, pero como he dicho es importante solucionar estos problemas también si desea un código claro, limpio y de mantenimiento.</p>

<p className="p">Anyway, save your new configuration file and run <code>npm run</code> lint in your terminal window. This time you’ll see lots of errors fill your screen, all telling you what the problem was as well as a filename and line number. Note that these errors are all stylistic rather than actual bugs, but like I said it’s important to fix these issues too if you want clear, clean, maintainable code.</p>
<p className="it">Vamos a abordar los fáciles primero, comenzando con "Newline requerido al final del archivo pero no encontrado". Es posible que vea éste unas cuantas veces, y es trivial arreglarlo: simplemente añada una línea en blanco al final de cada archivo donde vea esta advertencia. Otro fácil es "Falta vírgenes", lo que significa que el código como este:</p>

<p className="p">Let’s tackle the easy ones first, starting with “Newline required at end of file but not found”. You might see this one a few times, and it’s trivial to fix: just add a blank line to the end of every file where you see this warning. Another easy one is “Missing trailing comma,” which just means that code like this:</p>


<pre></pre>

<p className="it">... necesitas ser reescrito a esto:</p>

<p className="p">…needs to be rewritten to this:</p>



<pre></pre>

<p className="it">La coma extra no agrega mucho, pero reduce la posibilidad de que añada más propiedades sin añadir primero una coma. Advertencia: no haga esto en archivos JSON tales como package.json, porque muchos analizadores serán profundamente infelices.</p>

<p className="p">The extra comma doesn’t add much, but it does reduce the chance of you adding more properties without first adding a comma. Warning: don’t do this in JSON files such as package.json, because many parsers will be deeply unhappy.</p>
<p className="it">Hay dos más fáciles de arreglar si lo deseamos. En primer lugar, "declaración de consola inesperada" significa que ESLint no quiere que usemos console.log() en nuestro código, pero esto es sólo una advertencia no un error, así que estoy feliz de ignorar esto en mi propio código - está abajo A usted si usted desea quitarlos en el suyo. En segundo lugar, "'Link' se define pero nunca se utiliza" en User.js. Para solucionar este problema, cambie esta línea:</p>

<p className="p">There are two more easy ones to fix if we choose. First, “Unexpected console statement” just means ESLint doesn’t want us to use console.log() in our code, but this is only a warning not an error so I’m happy to ignore this in my own code – it’s down to you if you want to remove them in yours. Second, “‘Link’ is defined but never used” in User.js. To fix this problem, change this line:</p>

<code>src/pages/User.js</code>

<pre></pre>
 

<p className="it">…a esto:</p>

<p className="p">…to this:</p>



<code>src/pages/User.js</code>

<pre></pre>
 

<p className="it">A menos que su código es muy diferente de la mía, que debe arreglar todos los errores linter fácil. Ahora es el momento para las cosas más difíciles ...</p>

<p className="p">Unless your code is very different from mine, that should fix all the easy linter errors. Now it’s time for the harder stuff…</p>


</div>
        </div>
  </Layout>
)