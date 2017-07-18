import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='005'>
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
<h1>Importing React Components using ES6</h1>

<p className="it">Nuestro código sigue sin hacer nada porque no hemos incluido nuestra nueva página en la aplicación, por lo que debes volver a <code>index.js</code> y modificarlo así:</p>

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
9 );

</pre>


<p className="it">Guarda tanto <code>index.js</code> como <code>Detail.js</code> y, estando bien, debes poder volver a tu navegador web y ver “This is React rendering HTML!” Justo allí en la pantalla.</p>

<p className="p">Save both <code>index.js</code> and <code>Detail.js</code> and, all being well, you should be able to return to your web browser and see “This is React rendering HTML!” right there on the screen.</p>


<p className="it">Antes de explicar lo que hace el nuevo código, intentá volver a <code>Detail.js</code> y modificá tu método render para decir "¡Esto es JSX que se está convirtiendo en HTML!" Si lo haces, a continuación, presioná guardar de nuevo, verás que algo de magia ocurre: Tu navegador web se actualizará automáticamente para mostrar el nuevo mensaje.</p>

<p className="p">Before I explain what the new code does, try going back to <code>Detail.js</code> and modify its render method to say “This is JSX being converted to HTML!” If you do that, then press save again, you’ll see some magic happen: your web browser will automatically update to show the new message.</p>


<p className="it">No es necesario ejecutar ningún comando, de hecho, no realizas cualquier otra acción que guardar el código. Webpack Dev Server detecta automáticamente el cambio y vuelve a cargar tu trabajo. Esperamos que ahora veas por qué era tan importante obtener la configuración de Webpack justo al principio de este tutorial, porque utilizando esta configuración de desarrollo (hace “hot loading”) hace que la codificación seá mucho más rápida. Nota: si no hay cambio, pulsá simplemente Refresh en tu navegador.</p>

<p className="p">You don’t need to run any commands or indeed take any other action than saving your code – Webpack Dev Server automatically detects the change and reloads your work. Hopefully you can now see why it was so important to get the Webpack configuration right at the start of this tutorial, because using this development set up (known as “hot loading”) makes coding substantially faster. Note: if you don’t see any changes, just hit Refresh in your browser.</p>

<p className="it">Ahora, permítanme explicar qué hace el nuevo código en <code>index.js</code>...</p>

<p className="p">Now, let me explain what the new code in <code>index.js</code> does…</p>

<p className="it"><code>import React from ‘react’</code> es una línea que has visto antes, y volveras a verla en este tutorial: simplemente chupa de la biblioteca principal de React para poder empezar a trabajar.</p>

<p className="p"><code>import React from ‘react’</code> is a line you’ve seen before, and you’ll see again in this tutorial: it just sucks in the main React library so we can start work.</p>

<p className="it"><code>import ReactDOM from ‘react-dom’</code> es nuevo e importa las herramientas React necesarias para renderizar al DOM, es decir, el nombre utilizado para la estructura de documentos utilizados para describir páginas web y otros documentos similares.</p>

<p className="p"><code>import ReactDOM from ‘react-dom’</code> is new, and imports the React tools required to render to the DOM – that’s the name used for the document structure used to describe web pages and other similar documents.</p>

<p className="it"><code>import Detail from ‘./pages/Detail’</code> es donde importamos nuestro nuevo componente React en nuestra aplicación para que empieces a usarlo.</p>

<p className="p"><code>import Detail from ‘./pages/Detail’</code> is where we import our new React component into our app so that we can start using it.</p>

<p className="it"><code>ReactDOM.render()</code> es lo que inicia la renderización de toda nuestra aplicación, y toma los parámetros: JSX para renderizar y renderizarlo.</p>

<p className="p"><code>ReactDOM.render()</code> is what kicks off the rendering of our entire app, and it takes two parameters: some JSX to render and where to render it to.</p>

<p className="it">&lt;Detail /&gt; es el primer parámetro que pedimos que React renderice, y es el nombre JSX de nuestro componente Detail.</p>

<p className="p">&#60;Detail /&#62; is the first parameter we ask React to render, and it’s the JSX name of our Detail component.</p>

<p className="it"><code>document.getElementById(‘app’)</code> es el segundo parámetro del método render, y le dice a React que deseas que se renderice dentro del elemento HTML llamado "app" - que está dentro del archivo <code>index.html</code> que hicimos antes.</p>

<p className="p"><code>document.getElementById(‘app’)</code> is the second parameter to the render method, and it tells React we want it to render inside the HTML element named “app” – that’s inside the <code>index.html</code> file we made earlier.</p>
<p className="it">Cuando nuestra aplicación se construye, esa línea &lt;Detail /&gt; se convierte automáticamente en el componente <code>Detail.js</code> que creó dentro de <code>Detail.js</code>, que a su vez tiene su método <code>render()</code> llamado para que dibuje en la pantalla.</p>

<p className="p">When our app gets built, that &#60;Detail /&#62; line automatically gets converted into the Detail component we created inside <code>Detail.js</code>, which in turn has its <code>render()</code> method called so it draws to the screen.</p>


<p className="it">Ahora, antes de continuar, probablemente tengo algunas preguntas. Permítanme tratar de responder algunas de ellas:</p>

<p className="p">Now, before we continue you probably have some questions. Let me try to answer some:</p>

<p className="it">¿Por qué <code>Detail.js</code> tiene mayúscula? Esto no es necesario, pero es preferido estilísticamente.</p>

<p className="p">Why does <code>Detail.js</code> have a capital letter? This isn’t needed, but it’s stylistically preferred.</p>

<p className="it">¿Cómo sabe JSX lo que significa <code>&#60;Detail /&#62;</code>? No le damos a los componentes un nombre en el interior de <code>Detail.js</code>, así que el nombre proviene de la forma en que lo importamos: si utilizas <code>import Bob from './pages/Detail';</code> entonces podes escribir <code>&#60;Bob /&#62;</code> y funcionaría muy bien. (¡Pero no hagas eso si valoras tu cordura!)</p>

<p className="p">How does JSX know what <code>&#60;Detail /&#62;</code> means? We don’t give the component a name inside <code>Detail.js</code>, so instead the name comes from the way we import it: if you use <code>import Bob from './pages/Detail';</code> then you could write <code>&#60;Bob /&#62;</code> and it would work just fine. (But please don’t do that if you value your sanity!)</p>

<p className="it">¿Puedo poner muchos componentes en <code>Detail.js</code>? Podes si queres, pero otra vez es preferible no si valoras tu cordura. Pegá un componente por archivo si podes.</p>

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
    <div>
<center><nav className="center">
<Link href='/004'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/006'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>

</div>
</div>
  </Layout>
)