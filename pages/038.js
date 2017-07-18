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




<h1>Mocking Ajax with Jest: Making an Asynchronous Test Become Synchronous</h1>
<p className="it">En la cuarta prueba que acabamos de escribir, utilizamos waitFor() y runs() para que Jest espere a que nuestro código Ajax se complete antes de revisar nuestras expectativas. Este enfoque funciona, pero tiene un problema: las pruebas unitarias son las mejores cuando se prueba una sola cosa. Si hay un error aquí, ¿fue porque nuestro código de red estaba roto, o porque nuestro código de renderizado estaba roto?</p>

<p className="p">In the fourth test we just wrote, we used waitFor() and runs() to have Jest wait for our Ajax code to complete before checking our expectations. This approach works, but it has a problem: unit tests are best when they test only one thing. If there’s a bug here, was it because our network code was broken, or because our rendering code was broken?</p>
<p className="it">Lo que queremos hacer es escribir una prueba que puede cargar algún JSON de GitHub, inyectarlo en nuestro componente Detail, luego asegurarnos de que nuestro código hizo lo correcto. Sin embargo, queremos hacer todo eso sin usar Ajax, porque eso introduce una red lenta y complica nuestra prueba.</p>

<p className="p">What we want to do is write a test that can load some JSON from GitHub, inject it into our Detail component, then make sure our code did the right thing. However, we want to do all that without using Ajax, because that introduces a slow network and complicates our test.</p>
<p className="it">Afortunadamente, hay una solución maravillosamente simple: GitHub ya nos da JSON de su API, que significa JavaScript Object Notation. Si descargamos algunos datos de GitHub a un archivo, podemos cargarlo en una prueba e inmediatamente usarlo en lugar de nuestra llamada de Ajax. Con este método, nuestra prueba se ejecuta más rápido, ya que no hay retraso de la red, podemos estar seguros de siempre obtener buenos datos, y - bonus!</p>

<p className="p">Fortunately, there is a marvellously simple solution: GitHub already gives us JSON from its API, which stands for JavaScript Object Notation. If we download some GitHub data to a file, we can load it into a test and immediately use it in place of our Ajax call. With this method, our test runs faster because there’s no network delay, we can be sure of always getting good data, and – bonus!</p>
<p className="it">- no obtendrá la tasa limitada por la API de GitHub.</p>

<p className="p">– it won’t get rate limited by the GitHub API.</p>
<p className="it">Espero que estés listo para lo fácil que esto va a ser, porque sólo podemos utilizar la función require() para cargar otro archivo JavaScript y utilizarlo inmediatamente. Como JSON ya está listo para usar, podemos importar su contenido en nuestra prueba y comenzar a usarlo.</p>

<p className="p">I hope you’re ready for how easy this is going to be, because we can just use the require() function to load another JavaScript file and use it immediately. As JSON already is JavaScript ready to use, we can just import its contents into our test and start using it.</p>
<p className="it">Añadí esta quinta prueba ahora, pero no la ejecutá todavía:</p>

<p className="p">Add this fifth test now, but don’t run it just yet:</p>
<pre></pre>



<p className="it">Como se puede ver, cargamos un archivo JSON llamado forks.json (ver más abajo) en la constante testData, luego usamos el método setState() de nuestro componente para forzarlo a cargar. Por último, podemos esperar() que la propiedad rendered.state.forks se establezca en 30 - fácil!</p>

<p className="p">As you can see, we load a JSON file called forks.json (see below) into the constant testData, then use the setState() method of our component to force it to load. Finally, we can expect() that the rendered.state.forks property be set to 30 – easy!</p>


<p className="it">Un hipo menor: en realidad no tenemos el archivo forks.json todavía, pero eso es fácil de arreglar con un simple comando de terminal:</p>

<p className="p">One minor hiccup: we don’t actually have the file forks.json yet, but that’s easily fixed with a simple terminal command:</p>



<p className="it">Curl https://api.github.com/repos/facebook/react/forks&gt; tests /forks.json</p>

<p className="p">curl https://api.github.com/repos/facebook/react/forks > tests /forks.json</p>


<p className="it">Asegúrate de ejecutarlo desde el mismo lugar en el que se estaba ejecutando <code>npm run test</code>, y descargará el feed de forks de GitHub para React a las pruebas de archivo /forks.json.</p>

<p className="p">Make sure you run that from the same place you were running <code>npm run test</code>, and it will download the GitHub forks feed for React to the file tests /forks.json.</p>
<p className="it">Guardá sus cambios y luego ejecutá el conjunto completo de pruebas ahora - deberías ver pases completamente.</p>

<p className="p">Save your changes then run the full suite of tests now – you should see passes all the way down.</p>

<p className="it">Si todo está funcionando correctamente todas las seis de sus pruebas deben pasar.</p>

<p className="p">If everything is working correctly all six of your tests should pass.</p>






</div>
        </div>
  </Layout>
)