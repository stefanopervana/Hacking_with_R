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



<h1>Creating our First React Test with Jest</h1>
<p className="it">La razón por la que tuvimos que nombrar nuestras pruebas de directorio de prueba es porque eso es exactamente lo que Jest busca cuando ejecuta su proceso de prueba: todos los archivos JavaScript de allí se consideran pruebas y se ejecutarán.</p>

<p className="p">The reason we had to name our test directory tests is because that’s exactly what Jest looks for when it runs its test process: all JavaScript files in there are considered tests and will be executed.</p>
<p className="it">Por lo tanto, podemos poner una prueba muy simple en esa carpeta, y <code>npm run test</code>lo encontrará automáticamente, ejecutarlo y decirnos los resultados. Comencemos con una prueba extremadamente simple: ¿nuestro componente de lista genera tres repositorios para que los usuarios hagan clic?</p>

<p className="p">So, we can put a very simple test into that folder, and <code>npm run test</code> will automatically find it, run it, and tell us the results. Let’s start with an extremely simple test: does our List component render three repositories for users to click on?</p>
<p className="it">Ahora, probablemente pienses que es una tontería probar porque podemos ver que siempre representa exactamente tres repositorios. Pero eso esta bien; Usted está aprendiendo, y esto es un poco de un ejemplo forzado para ayudarle a empezar. Cree un nuevo archivo en el directorio de pruebas llamado List-test.js y déle este contenido:</p>

<p className="p">Now, you probably think that’s a silly thing to test because we can see it always renders exactly three repositories. But that’s OK; you’re just learning, and this is a bit of a forced example to help you get started. Create a new file in the tests directory called List-test.js and give it this content:</p>

<code>tests /List-test.js</code>

<pre></pre>

<p className="it">Eso es casi todo el código nuevo, así que quiero explicar todo a usted. Pero primero, Guardá ese archivo y luego ejecutá la prueba usando <code>npm run test</code>. deberías ver la salida como esta:</p>

<p className="p">That’s almost all new code so I want to explain it all to you. But first, save that file then run the test by using <code>npm run test</code>. You should see output like this:</p>
<ul>
<li className="it">Uso de Jest CLI v0.8.2, jasmine1</li>


<li className="p">Using Jest CLI v0.8.2, jasmine1</li>
<li className="it">Pruebas PASS /List-test.js (1.036s) Lista</li>


<li className="p">PASS  tests /List-test.js (1.036s) List</li>
<li className="it">Realiza tres enlaces de repo</li>


<li className="p">it renders three repo links</li>
</ul>
<p className="it">¡La prueba fue exitosa! Eso no es una gran sorpresa, como ya he dicho, pero al menos muestra que tienes Jest configurado correctamente.</p>

<p className="p">The test was successful! That’s no great surprise, as I already said, but at least it shows you have Jest set up correctly.</p>
<p className="it">Vamos a hablar a través de todo el código en ese archivo, porque usted ha visto sólo unas pocas líneas de la misma antes:</p>

<p className="p">Let’s talk through all the code in that file, because you’ve seen only a few lines of it before:</p>

<p className="it">Jest.autoMockOff () Desactiva una de las funciones más poderosas de Jest, conocida como burla. Sin esta línea, Jest reemplazará silenciosamente cualquier biblioteca que intentámos usar con una versión falsa adecuada para pruebas. Esto es extremadamente útil cuando ya has pasado el estado de principiante, pero ahora mismo sólo va a confundirte para que lo apaguemos.</p>

<p className="p">jest.autoMockOff() Disables one of Jest’s most powerful features, known as mocking. Without this line, Jest will silently replace any library we try to use with a fake version suitable for testing. This is extremely helpful when you’re past beginner status, but right now it’s just going to confuse you so we turn it off.</p>
<p className="it">Importar TestUtils desde 'react-addons-test-utils'; La biblioteca de utilidades de prueba de React nos da la capacidad de convertir los componentes de React en un documento falso que luego se puede comprobar para asegurarnos de que vea cómo creemos que deberías hacerlo.</p>

<p className="p">import TestUtils from ‘react-addons-test-utils’; React’s test utility library gives us the ability to render React components into a fake document that can then be checked to make sure it looks how we think it ought to.</p>
<p className="it">Const List = require ( <code>‘../src/pages/List’</code>) .default carga nuestro componente List. Esto es una molestia relacionada con la forma en que Babel y Jest trabajan juntos y hace lo mismo que nuestra Lista de importación previa de <code>'./pages/List'</code>código.</p>

<p className="p">const List = require(<code>‘../src/pages/List’</code>).default loads our List component. This is an annoy- ance related to the way Babel and Jest work together and does the same as our previous import List from <code>'./pages/List'</code> code.</p>
<p className="it">⇒</p>

<p className="p">⇒</p>
<p className="it">Describe ('List', () &#123;inicia una suite de pruebas, que es un grupo de pruebas relacionadas.En este tutorial tendremos una suite de pruebas por componente React.</p>

<p className="p">describe(‘List’, () &#123; starts a test suite, which is a group of related tests. In this tutorial we’ll have one test suite per React component.</p>
<p className="it">⇒</p>

<p className="p">⇒</p>
<p className="it">Cada especificación de prueba tiene una descripción ("devuelve tres enlaces de repo) y algún código adjunto a él (todo después de la &#123;).</p>

<p className="p">it(‘renders three repo links’, () &#123; starts a test spec. Each test spec has a description (“renders three repo links”) and some code attached to it (everything after the &#123;).</p>
<p className="it">Const rendered = TestUtils.renderIntoDocument convierte algunos JSX en un documento virtual que podemos examinar. Pasamos en &lt;List /&gt; para que haga que nuestro componente List.</p>

<p className="p">const rendered = TestUtils.renderIntoDocument converts some JSX into a virtual document that we can examine. We pass in &#60;List /&#62; so that it renders our List component.</p>
<p className="it">Const repos = TestUtils.scryRenderedDOMComponentsWithTag (renderizado, 'li') busca en nuestro documento virtual todos los elementos &lt;li&gt; y los devuelve en una matriz.</p>

<p className="p">const repos = TestUtils.scryRenderedDOMComponentsWithTag(rendered, ‘li’) searches through our virtual document for all &#60;li&#62; elements, and returns them in an array.</p>
<p className="it">Espera (repos.length) .toEqual (3) comprueba que el número de &lt;li&gt; elementos que se encontraron coincide con el número 3 - es decir, que tres &lt;li&gt; elementos existen en la página.</p>

<p className="p">expect(repos.length).toEqual(3) checks that the number of &#60;li&#62; elements that were found matches the number 3 – i.e., that three &#60;li&#62; elements exist on the page.</p>

<p className="it">That’s a raw description of what the code does, but three things deserve further clarification.</p>

<p className="p">That’s a raw description of what the code does, but three things deserve further clarification.</p>
<p className="it">First, Jest encourages you to use natural language to express what you’re trying to test and why. This is part of the behavior-driven development approach, and it’s important because it forces you to focus on what you’re trying to test rather than how it works. So, we can read each test out loud: “it renders three repo links”.</p>

<p className="p">First, Jest encourages you to use natural language to express what you’re trying to test and why. This is part of the behavior-driven development approach, and it’s important because it forces you to focus on what you’re trying to test rather than how it works. So, we can read each test out loud: “it renders three repo links”.</p>
<p className="it">Second, the method scryRenderedDOMComponentsWithTag() has a curious name. “Scry” (which rhymes with “cry”, if you were wondering) is an archaic word meaning “to gaze into a crystal ball”, i.e. fortune telling. Clearly hipsters are intent on making it cool once more, so you can scry into your rendered document to look for things.</p>

<p className="p">Second, the method scryRenderedDOMComponentsWithTag() has a curious name. “Scry” (which rhymes with “cry”, if you were wondering) is an archaic word meaning “to gaze into a crystal ball”, i.e. fortune telling. Clearly hipsters are intent on making it cool once more, so you can scry into your rendered document to look for things.</p>
<p className="it">En tercer lugar, le decimos a Jest lo que esperamos que ocurra usando su función expect (). Una vez más, esto está diseñado para ser leído en voz alta como el inglés simple: "espera que la longitud del repos sea igual a 3." Si esta expectativa es igualada (es decir, si nuestro componente emite tres repos) entonces la prueba se considera un éxito. Cualquier variación con respecto al resultado esperado se considera una falla en la prueba.</p>

<p className="p">Third, we tell Jest what we expect to happen using its expect() function. Again, this is designed to be read aloud like plain English: “expect repos length to equal 3.” If this expectation is matched (i.e., if our component outputs three repos) then the test is considered a success. Any variation from the expected result is considered a test failure.</p>
 
<p className="it">Estamos usando Jest con la opción -verbose, que proporciona información más detallada sobre cada prueba que se ejecuta.</p>

<p className="p">We’re using Jest with the –verbose option, which provides more detailed feedback on each test it runs.</p>



</div>

        </div>
  </Layout>
)