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





<h1>Using Jest to Test Our React Components</h1>
<p className="it">El último capítulo hizo una prueba trivial: procese el componente &lt;List&gt; en un documento virtual y compruebe que tiene tres elementos &lt;li&gt;. Lo mantuve trivial porque el objetivo era aprender cómo se ve una prueba de Jest, así que ahora que está hecho quiero pasar a algunas pruebas reales:</p>

<p className="p">Last chapter we made a trivial test: render the &#60;List&#62; component into a virtual document, and check to make sure it has three &#60;li&#62; elements. I kept it trivial because the goal was to learn how a Jest test looks, so now that’s done I want to move onto some real tests:</p>
<ul>
<li className="it"> Cuando se representa el componente Detalle, ¿tiene 0 commits?</li>

<li className="p">  When the Detail component is rendered, does it have 0 commits?</li>
<li className="it"> ¿Está configurado para mostrar datos de confirmación por defecto?</li>

<li className="p">  Is it set to show commits data by default?</li>
<li className="it"> Cuando se hace clic en su botón Forks, ¿cambió a mostrar datos de horquillas?</li>

<li className="p">  When its Forks button is clicked, did it switch to showing forks data?</li>
<li className="it"> Cuando su acabado de buscar horquillas de GitHub, ¿tiene ahora 30 tenedores para mostrar?</li>

<li className="p">  When its finishes fetching forks from GitHub, does it now have 30 forks to show?</li>
</ul>
<p className="it">  Vamos a poner los cuatro de ellos en una suite de pruebas, en un archivo: dentro de sus pruebas </p>

<p className="p">   We’re going to put all four of those into one test suite, in one file: inside your tests </p>folder please create Detail-test.js. Give it this initial content:

<code>tests /Detail-test.js</code>

<pre></pre>

<p className="it">Antes de escribir nuestras cuatro pruebas, vamos a hacer un pequeño cambio en el componente Detalle. La API de GitHub es genial porque proporciona muchos datos interesantes sin tener que registrarse para una clave de API, pero este acceso gratuito es limitado, lo que significa que sólo puede hacer 60 peticiones por hora antes de que su acceso se detenga temporalmente.</p>

<p className="p">Before we write our four tests, we’re going to make a tiny change to the Detail component. The GitHub API is great because it provides lots of interesting data without having to register for an API key, but this free access is rate limited, which means you get to make only 60 requests per hour before your access is temporarily paused.</p>
<p className="it">Cuando se trabaja en una aplicación real, se utiliza "burlarse" para hacer una solicitud simulada GitHub API para que a) sus pruebas se ejecuten más rápido, yb) usted nunca tiene que preocuparse por los límites de la tasa de nuevo. Pero burlarse introducir un nuevo conjunto de complejidades que sería un poco abrumador en este momento en su carrera React, por lo que vamos a insertar un hack: vamos a modificar el componente de detalle para que si se pasa un nombre de repo vacío Se salta haciendo cualquier llamada Ajax.</p>

<p className="p">When working on a real application, you would use “mocking” to make a simulated GitHub API request so that a) your tests run faster, and b) you never have to worry about rate limits again. But mocking introduce a new set of complexities that would be a bit overwhelming at this point in your React career, so we’re going to insert a hack: we’re going to modify the Detail component so that if an empty repo name is passed it skips doing any Ajax calls.</p>
<p className="it">Este hack es útil porque reduce el número de llamadas Ajax que realizarán nuestras pruebas, lo que a su vez reduce la probabilidad de que los límites del API de GitHub sean alcanzados. Sin este hack, cada vez que se carga el componente Detail hace tres llamadas API, por lo que en cuatro pruebas que hacen un total de 12 llamadas API cada vez que ejecutamos nuestro conjunto de pruebas - obtendríamos nuestro límite API completo en sólo cinco ejecuciones !</p>

<p className="p">This hack is helpful because it reduces the number of Ajax calls our tests will make, which in turn reduces the likelihood of us hitting GitHub’s API limits. Without this hack, each time the Detail component loads it makes three API calls, so across four tests that makes for a total of 12 API calls every time we run our test suite – we’d get through our entire API limit in just five runs!</p>
<p className="it">Vamos a insertar el hack ahora. Modificá el método fetchFeed () en <code>Detail.js</code> a esto:</p>

<p className="p">Let’s insert the hack now. Modify the fetchFeed() method in <code>Detail.js</code> to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Tiempo para la primera prueba: ¿hay cero confirma cuando el componente se carga primero? Esto es solo una cuestión de procesar el componente y luego comprobar que su propiedad state.commits tiene una longitud de 0. Pero esto también me da la oportunidad de mostrarte cómo pasar una ruta falsa al componente Detail. Añadir esta prueba en lugar de las // pruebas ir aquí comentario:</p>

<p className="p">Time for the first test: are there zero commits when the component first loads? This is just a matter of rendering the component then checking that its state.commits property has a length of 0. But this also gives me a chance to show you how to pass a fake path to the Detail component. Add this test in place of the // tests go here comment:</p>


<pre></pre>

<p className="it">Has visto cómo JSX nos permite usar llaves, &#123;&#125;, para marcar las expresiones JavaScript dentro del marcado, pero ahora estoy usando llaves dobles, &#123;&#123;&#125;&#125;. Esto no es una sintaxis especial, es sólo una combinación de &#123;significado "iniciar una expresión de JavaScript" entonces &#123;significado "iniciar un objeto de JavaScript."</p>

<p className="p">You’ve seen how JSX lets us use braces, &#123;  &#125;, to mark JavaScript expressions inside markup, but now I’m using double braces, &#123;&#123;  &#125;&#125;. This isn’t some special syntax, it’s just a combination of &#123; meaning “start a JavaScript expression” then &#123; meaning “start a JavaScript object.”</p>
<p className="it">Aprendiste cerca del principio de este libro que la configuración de los atributos en un componente React se traduce en props. Bueno, en este caso estamos configurando un prop llamado params y dándole una propiedad de repo que contiene una cadena vacía. Cuando nuestro componente Detail lo reciba, podrá leer this.props.params.repo, que es exactamente lo que habrías recibido de React Router.</p>

<p className="p">You learned near the beginning of this book that setting attributes on a React component gets translated to props. Well, in this case we’re setting a prop called params and giving that a repo property containing an empty string. When our Detail component receives that, it will be able to read this.props.params.repo, which is exactly what it would have received from React Router.</p>
<p className="it">La segunda prueba para este componente es comprobar que el componente está configurado para procesar commit de forma predeterminada. Esto es muy similar a la prueba que acabamos de escribir, así que te recomiendo que intentás ahora para asegurarte de que entiendes cómo funciona Jest.</p>

<p className="p">The second test for this component is to check that the component is set to render commits by default. This is very similar to the test we just wrote, so I recommend you give it a try now to make sure you understand how Jest works.</p>
<p className="it">Vamos, voy a esperar.</p>

<p className="p">Go on, I’ll wait.</p>
<p className="it">Por supuesto, no quiero que eches un vistazo a mi solución por accidente, porque entonces no aprenderías nada.</p>

<p className="p">Of course, I don’t want you to peek at my solution by accident, because then you wouldn’t learn anything.</p>
<p className="it">¿Aún aquí? OK, aquí está una broma: ¿qué es rojo y huele a pintura azul? Pintura roja.</p>

<p className="p">Still here? OK, here’s a joke: what’s red and smells like blue paint? Red paint.</p>
<p className="it">Voy a asumir que usted ha escrito la prueba usted mismo y aprendido mucho, o usted es uno de esos tipos que se niega a hacer un libro decirles qué hacer y quieres que escriba la solución para usted. Por lo tanto, aquí va - añada esto a Detail-test.js debajo de la prueba existente:</p>

<p className="p">I’m going to assume you’ve either written the test yourself and learned a lot, or you’re one of those types who refuses to make a book tell them what to do and you want me to write the solution for you. So, here goes - add this to Detail-test.js beneath the existing test:</p>

<pre></pre>

<p className="it">Fácil, ¿verdad? Derecha. Pero eso fue sólo para asegurarse de que estaba prestando atención: la siguiente prueba es más difícil, ya que necesitas hacer clic en el botón Forks y asegurarse de que el estado del componente se actualizó correctamente.</p>

<p className="p">Easy, right? Right. But that was just to make sure you were paying attention: the next test is harder, because it needs to click the Forks button and make sure the component’s state was updated correctly.</p>










</div>

        </div>
  </Layout>
)