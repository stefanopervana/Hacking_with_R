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

<h1>Bringing it all Together: Project Complete!</h1>
<p className="it">Felicitaciones por llegar al final del libro!</p>

<p className="p">Congratulations on reaching the end of the book!</p>
<p className="it">Si has llegado tan lejos, creo que has aprendido mucho sobre React, React Router, Jest, ES6 y más. He estado tratando de mantener una lista de todo a lo largo del camino, y creo que este es un buen resumen:</p>

<p className="p">If you’ve made it this far, I think you have learned a great deal about React, React Router, Jest, ES6 and more. I’ve been trying to keep a list of everything along the way, and I think this is a fair summary:</p>
<ul>
<li className="it">Cómo instalar Webpack, Babel y React para el desarrollo con ES6.</li>


<li className="p">How to install Webpack, Babel and React for development with ES6.</li>
<li className="it">Cómo crear un componente básico de React e importarlo en una aplicación.</li>


<li className="p">How to create a basic React component and import it into an application.</li>
<li className="it">Cómo escribir JSX simple para procesar contenido.</li>


<li className="p">How to write simple JSX to render content.</li>
<li className="it">Cómo usar los props para dar valores de un componente.</li>


<li className="p">How to use props to give a component values.</li>
<li className="it">Cómo hacer varios elementos a la vez.</li>


<li className="p">How to render several elements at once.</li>
<li className="it">Cómo manejar eventos como onClick.</li>


<li className="p">How to handle events such as onClick.</li>
<li className="it">Cómo utilizar el estado, y cómo se diferencia de los props.</li>


<li className="p">How to use state, and how it differs from props.</li>
<li className="it">Cómo hacer un bucle y procesar datos en una matriz.</li>


<li className="p">How to loop over and render data in an array.</li>
<li className="it">Cómo obtener datos de GitHub usando SuperAgent y Ajax.</li>


<li className="p">How to fetch data from GitHub using SuperAgent and Ajax.</li>
<li className="it">Cómo utilizar interpolación de cadenas y nombres de propiedad calculados.</li>


<li className="p">How to use string interpolation and computed property names.</li>
<li className="it">Cómo pasar los parámetros usando onClick.</li>


<li className="p">How to pass parameters using onClick.</li>
<li className="it">Cómo crear rutas utilizando React Router.</li>


<li className="p">How to create routes using React Router.</li>
<li className="it">Cómo crear enlaces entre páginas usando &#60;Link&#62;.</li>


<li className="p">How to create links between pages using &#60;Link&#62;.</li>
<li className="it">Cómo procesar contenido predeterminado usando &#60;IndexRoute&#62;.&#60;/IndexRoute&#62;</li>


<li className="p">How to render default content using &#60;IndexRoute&#62;.</li>
<li className="it">Cómo almacenar sus rutas de React Router separadamente de su código.</li>


<li className="p">How to store your React Router routes separately from your code.</li>
<li className="it">Cómo hacer migas utilizando &#60;Link&#62; y &#60;indexlink&#62;.&#60;/indexlink&#62;</li>


<li className="p">How to make breadcrumbs using &#60;Link&#62; and &#60;indexlink&#62;.&#60;/indexlink&#62;</li>
<li className="it">Cómo utilizar Jest para probar React componente de representación.</li>


<li className="p">How to use Jest to test React component rendering.</li>
<li className="it">Cómo utilizar Jest para simular la interfaz de usuario con los controles.</li>


<li className="p">How to use Jest to simulate user interface with controls.</li>
<li className="it">Cómo crear pruebas asincrónicas con waitFor() y runs().</li>


<li className="p">How to create asynchronous tests using waitFor() and runs().</li>
<li className="it">Cómo falsificar una llamada Ajax utilizando la función require().</li>


<li className="p">How to fake an Ajax call using the require() function.</li>
<li className="it">Cómo encontrar componentes procesados ​​utilizando scryRenderedDOMComponentsWithClass().</li>


<li className="p">How to find rendered components using scryRenderedDOMComponentsWithClass().</li>
<li className="it">Cómo dejar su código React usando ESLint y Babel.</li>


<li className="p">How to lint your React code using ESLint and Babel.</li>
</ul>
<p className="it">Es posible que deba volver a leer algunos capítulos para ayudar a refrescar su memoria, pero eso es perfectamente normal - hemos cubierto una gran cantidad de terreno en sólo unas horas, por lo que toma algún tiempo para hundirse en El resultado final es Que has escrito un montón de código, que es bueno. Y no es cualquier código:</p>

<p className="p">You might find you need to re-read some chapters to help refresh your memory, but that’s perfectly normal – we’ve covered a huge amount of ground in just a few hours, so it takes some time to sink in. The end result is that you’ve written a lot of code, which is good. And it’s not just any code:</p>


<p className="it">Usted ha escrito las pruebas para ello y aseguró que coincide con linting estricto, por lo que este es el código que debe sentirse orgulloso de.</p>

<p className="p">you’ve written tests for it and ensured it matches strict linting, so this is code you should feel proud of.</p>
<p className="it">Si desea ampliar aún más este proyecto, tiene una gran cantidad de posibilidades de trabajo gracias a la API de GitHub que ofrece muchos datos. Para obtener más información sobre todos los puntos finales que ofrece, consulte https://developer.github.com/v3/.</p>

<p className="p">If you’re looking to expand this project further, you have a huge amount of scope to work with thanks to the GitHub API offering up lots of data. For more information about all the end points it offers, see https://developer.github.com/v3/.</p>
<p className="it">Sugiero, sin embargo, que a partir de aquí se considere tomar un enfoque basado en la prueba. Mantuve Jest y ESLint hasta el final sólo porque puede ser confuso para aprender múltiples tecnologías al mismo tiempo, pero si eres inteligente, va a escribir las pruebas a medida que va a partir de aquí hacia adelante. Ejecutar un linter con regularidad ayudará a mantener el código coherente, y muchos editores de texto enfocados en la web automáticamente pelusa su código mientras edita.</p>

<p className="p">I would suggest, however, that from here on you consider taking a test-driven approach. I kept Jest and ESLint until the very end only because it can be confusing to learn multiple technologies at the same time, but if you’re smart you’ll write tests as you’ll go from here forwards. Running a linter regularly will help keep your code consistent, and many web-focused text editors automatically lint your code while you edit.</p>
<p className="it">Este es el final de Hacking with React - espero que sientas que has aprendido mucho, espero que estés emocionado de usar React en el futuro, y espero que tengas la confianza para hacer un gran uso de otras herramientas como React el enrutador y Jest. Realmente espero ver lo que haces en el futuro. Por favor, envíame un tweet @twostraws con un enlace a tus aplicaciones de React!</p>

<p className="p">This is the end of Hacking with React – I hope you feel like you’ve learned a lot, I hope you’re excited to use React in the future, and I hope you have the confidence to make great use of other tools such as React Router and Jest. I really look forward to seeing what you make in the future – please do send me a tweet @twostraws with a link to your React apps!</p>











</div>
        </div>
  </Layout>
)