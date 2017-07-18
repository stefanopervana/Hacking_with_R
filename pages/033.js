import Layout from '../components/layout'

export default () => (
  <Layout title='Ch7'>
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

<h1>How to Configure Jest to Test React and ES6</h1>
<p className="it">Para empezar, necesitamos añadir algunas dependencias de desarrollo adicionales ejecutando este comando en una ventana de terminal:</p>

<p className="p">To get started, we need to add some extra development dependencies by running this command in a terminal window:</p>



<code>npm install --save-dev jest-cli babel-jest react-addons-test-utils</code>
 

<p className="it">Como antes, tendrás que presionar Ctrl + C para salir de Webpack Dev Server antes de ejecutarlo, pero esta vez no quiero que reinicies Webpack Dev Server cuando <code>npm</code>termine el comando. ¡Ya hemos terminado! ¡Todo está probando ahora!</p>

<p className="p">As before, you’ll need to press Ctrl+C to quit Webpack Dev Server before you run that, but this time I don’t want you to restart Webpack Dev Server when the <code>npm</code> command finishes. We’re done with it – it’s all testing now!</p>
<p className="it">Vamos a comenzar nuestras pruebas en un nuevo subdirectorio de nuestro proyecto. Ya tenemos <code>dist</code> para nuestros archivos finalizados, node_modules para todas las cosas de NPM que usamos, y src para nuestro código fuente ES6. Pero quiero que crees una cuarta carpeta ahora:</p>

<p className="p">We’re going to start our tests in a new subdirectory of our project. We already have <code>dist</code> for our finished files, node_modules for all the NPM things we use, and src for our ES6 source code. But I want you to create a fourth folder now:</p>



<code>mkdir tests</code> 	
 

<p className="it">Eso es dos subrayados, la palabrí "pruebas", luego dos subrayados más. Por favor, póngale un nombre exacto de que de lo contrario sus pruebas no funcionarán. Con eso hecho, vamos a modificar nuestro archivo <code>package.json</code> para que sepa llamar Jest cuando le pedimos que ejecutá pruebas. Abra ahora su archivo <code>package.json</code> y verá una línea como esta:</p>

<p className="p">That’s two underscores, the word “tests”, then two more underscores. Please name it exactly that otherwise your tests will not work. With that done, we’re going to modify our <code>package.json</code> file so that it knows to call Jest when we ask it to run tests. Open your <code>package.json</code> file now and you’ll see a line like this:</p>

<code>package.json</code>

<pre></pre>
 

<p className="it">Por favor, cambie a esto:</p>

<p className="p">Please change it to this:</p>

<code>package.json</code>

<pre></pre>
 

<p className="it">Mientras estás allí, debemos insertar algunos ajustes de configuración para permitir que Jest trabaje con React y ES6. Busque "devDependencies" y ponga esto directamente delante de él:</p>

<p className="p">While you’re there, we need to insert some configuration settings to enable Jest to work with React and ES6. Look for "devDependencies" and put this directly before it:</p>



<code>package.json</code>

<pre></pre>

<p className="it">La versión final deberías tener este aspecto:</p>

<p className="p">The final version should look like this:</p>

<code>package.json</code>

<pre></pre>

<p className="it">Con ese cambio guardado, ahora podemos ejecutar nuestra prueba a través de Jest ejecutando este comando:</p>

<p className="p">With that change saved, we can now run our test through Jest by running this command:</p>



<code>npm run test</code>
 

<p className="it">Por supuesto, en realidad no hace nada más que imprimir su número de versión, porque no hemos escrito ninguna prueba. Hagámoslo ahora ...</p>

<p className="p">Of course it doesn’t actually do anything yet other than print its version number, because we haven’t written any tests. Let’s do that now…</p>

<p className="it">Running Jest sin ninguna prueba es una buena idea si sólo para asegurarse de que tiene configurado correctamente.</p>

<p className="p">Running Jest without any tests is a good idea if only to make sure you have it set up correctly.</p>



</div>

        </div>
  </Layout>
)