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



<h1>Cleaning up Our Tests: Last Tweaks</h1>
<p className="it">Antes de terminar con las pruebas, vamos a hacer dos cambios más para que nuestras pruebas sean más útiles y menos propensas a caer en el futuro.</p>

<p className="p">Before we finish up with testing, we’re going to make two more changes to make our tests more useful and less likely to fall over in the future.</p>
<p className="it">En primer lugar, sólo probar que la propiedad rendered.state.forks.length es igual a 30 es un buen comienzo, pero sería bueno asegurarse de que todos los 30 de los que se procesó correctamente por React. Cada tenedor se representa en nuestro código usando una etiqueta &lt;p&gt;, por lo que podrías pensar que podríamos escribir algo como esto en la última prueba:</p>

<p className="p">First, just testing that the rendered.state.forks.length property is equal to 30 is a good start,      but it would be nice to make sure that all 30 of those got rendered correctly by React. Each fork is rendered in our code using a &#60;p&#62; tag, so you might think we could write something like this in the last test:</p>


<pre></pre>

<p className="it">Lamentablemente, eso no funcionará: Jest encontrará 31 &lt;p&gt; etiquetas en la página y fallará la prueba. Esto sucede porque nuestra página ya tiene una etiqueta &lt;p&gt; allí mostrando nuestras migas de pan, así que tenemos las 30 &lt;p&gt; etiquetas de los tenedores más una más de las migas de pan.</p>

<p className="p">Sadly, that won’t work: Jest will find 31 &#60;p&#62; tags in the page and fail the test. This happens because our page already has one &#60;p&#62; tag on there showing our breadcrumbs, so we have the 30 &#60;p&#62; tags from the forks plus one more from the breadcrumbs.</p>
<p className="it">Hay algunas soluciones aquí. Opción 1: quitar el pan rallado. Esto funcionaría, pero significa renunciar a una buena característica de nuestra aplicación. Opción 2: procesar los commit, forks y pull usando un nombre de etiqueta diferente, como &lt;li&gt;. Esto también funcionaría, y no requiere perder una característica, por lo que esto es ciertamente posible.</p>

<p className="p">There are a few solutions here. Option 1: remove the breadcrumbs. This would work, but means giving up a nice feature of our app. Option 2: render the commits, forks and pulls using a different tag name, such as &#60;li&#62;. This would also work, and doesn’t require losing a feature, so this is certainly possible.</p>
<p className="it">Pero hay una tercera opción, y es la que usaremos aquí: scryRenderedDOMComponentsWith- Class(). Esto le permite encontrar todas las etiquetas basadas en su nombre de clase CSS en lugar de su nombre de etiqueta. Este nombre de clase no necesitas realmente ninguna información de estilo adjunta a ella, así que todo lo que se necesitas es ajustar los métodos renderCommits(), renderForks() y renderPulls() de nuestro componente Detail de esto:</p>

<p className="p">But there’s a third option, and it’s the one we’ll be using here: scryRenderedDOMComponentsWith- Class(). This lets you find all tags based on their CSS class name rather than their tag name. This class name doesn’t actually need any style information attached to it, so all it takes is to adjust the renderCommits(), renderForks(), and renderPulls() methods of our Detail component from this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">De vuelta en el código de prueba, ahora podemos usar scryRenderedDOMComponentsWithClass() para extraer exactamente las cosas que queremos decir, independientemente de si son &lt;p&gt;, &lt;li&gt; o cualquier otra cosa:</p>

<p className="p">Back in the test code, we can now use scryRenderedDOMComponentsWithClass() to pull out exactly the things we mean, regardless of whether they are &#60;p&#62;, &#60;li&#62; or anything else:</p>


<code>tests /Detail-test.js</code>

<pre></pre>

<p className="it">Hay sólo una cosa más que vamos a hacer antes de que hayamos terminado con las pruebas, que es tomar una mirada fría y dura en esta línea:</p>

<p className="p">There’s just one more thing we’re going to do before we’re finished with testing, which is to take a cold, hard look at this line:</p>

<code>tests /Detail-test.js</code>

<pre></pre>
 

<p className="it">Este es otro ejemplo de código que funciona muy bien, pero sigue siendo menos de lo ideal. Esta vez es porque estamos rompiendo la cuarta pared de la programación orientada a objetos: nuestra prueba está forzando un nuevo estado en nuestro componente en lugar de hacer una llamada de método. Si en el futuro actualiza el componente Detalle para que la configuración del estado de forks también llame a otro código, tendrá que copiar ese código en su prueba también, lo cual es complicado y difícil de mantener.</p>

<p className="p">This is another example of code that works great but is still less than ideal. This time it’s because we’re breaking the fourth wall of object-oriented programming: our test is forcing a new state on our component rather than making a method call. If in the future you update the Detail component so that setting the forks state also calls some other code, you’ll have to copy that code into your test too, which is messy and hard to maintain.</p>
<p className="it">La solución correcta aquí es utilizar una técnica OOP llamada encapsulación, lo que significa que nuestra prueba no debe intentar echar un vistazo y ajustar los componentes internos de nuestro componente Detalle. En este momento todas nuestras pruebas hacen exactamente eso: leen y escriben el estado libremente, lo que no es muy flexible en el futuro. Voy a arreglar uno de estos con usted en este momento, pero podes arreglar los otros a ti mismo si lo desea.</p>

<p className="p">The correct solution here is to use an OOP technique called encapsulation, which means our test shouldn’t try to peek into and adjust the internals of our Detail component. Right now all our tests do exactly that: they read and write the state freely, which isn’t very flexible going forward. I’m going fix one of these with you right now, but you can fix the others yourself if you want to.</p>
<p className="it">Necesitamos un nuevo método en el componente Detalle que actualiza el estado del componente. Esto puede ser llamado por nuestra prueba para inyectar el JSON guardado de manera limpia en lugar de forzar un estado. Realísticamente todo lo que necesitamos para mover una línea de código fuera del método fetchFeed() y envolverlo en su propio método.</p>

<p className="p">We need a new method in the Detail component that updates the component state. This can then be called by our test to inject the saved JSON cleanly rather than by forcing a state. Realistically all we need to move one line of code out of the fetchFeed() method and wrap it into its own method.</p>
<p className="it">Encuentre esta línea:</p>

<p className="p">Find this line:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">Que utiliza un nombre de propiedad calculado junto con el cuerpo de respuesta de SuperAgent con el fin de actualizar nuestro estado de componente. Vamos a hacer que un nuevo método llamado saveFeed(), que tendrá el tipo y el contenido de la alimentación como sus parámetros:</p>

<p className="p">That uses a computed property name along with the response body from SuperAgent in order to update our component state. We’re going to make that a new method called saveFeed(), which will take the type and contents of the feed as its parameters:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Ahora puede llamar directamente desde el método fetchFeed():</p>

<p className="p">You can now call that straight from the fetchFeed() method:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Si ha realizado los cambios correctos, los dos métodos deberíasn tener este aspecto:</p>

<p className="p">If you’ve made the correct changes, the two methods should look like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Con este nuevo método saveFeed(), podemos actualizar la quinta prueba para usarlo en lugar de forzar un estado en el componente:</p>

<p className="p">With that new saveFeed() method in place, we can update the fifth test to use it rather than forcing a state on the component:</p>



<code>tests /Detail-test.js</code>

<pre></pre>

<p className="it">Eso le muestra la técnica de encapsular el estado de tu componente detrás de una llamada de método, lo que hará que su código sea mucho más fácil de mantener en el futuro. Sí, es un trabajo extra en el corto plazo, pero se pagará cuando no están en 3am tratando de depurar un problema oscuro!</p>

<p className="p">That shows you the technique of encapsulating your component’s state behind a method call, which will make your code much more maintainable in the future. Yes, it’s extra work in the short term, but it will pay off when you aren’t up at 3am trying to debug an obscure problem!</p>
<p className="it">No voy a ir a través de y ajustar el resto de las pruebas, porque eso es sólo inútil repetición - le invitamos a considerar la tarea si desea probar.</p>

<p className="p">I’m not going to go through and adjust the rest of the tests, because that’s just pointless repetition – you’re welcome to consider it homework if you want to try.</p>









</div>
        </div>
  </Layout>
)