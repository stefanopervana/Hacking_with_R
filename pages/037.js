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


<h1>Time for Ajax: Using Jest with Asynchronous Tests</h1>
<p className="it">Aquí es donde las cosas empiezan a ser un poco complicadas. Utilizamos Ajax en nuestro componente Detalle y la cuarta prueba que vamos a escribir comprobará que la llamada Ajax se completa y nos prepara con las 30 horquillas más recientes de nuestro proyecto seleccionado. Esto es complicado porque Jest no tiene idea de que hay una llamada Ajax esperando para regresar, así que si escribimos una prueba como ésta, fallará:</p>

<p className="p">This is where things start to get a bit complicated. We’re using Ajax in our Detail component, and the fourth test we’re going to write will check that the Ajax call completes and sets us up with the 30 most recent forks on our selected project. This is complicated because Jest has no idea there’s an Ajax call waiting to return, so if we write a test like this it will fail:</p>


<pre></pre>



<p className="it">Que carga nuestro componente &lt;Detail&gt; utilizando el nombre de repo "React" (forzándolo así a comportarse como el usuario tenía el navegador a / detail / React), a continuación, comprueba inmediatamente para ver si hay 30 tenedores disponibles. Esto falla porque la llamada Ajax es asíncrona (eso es lo que significa el primer A en Ajax), lo que significa que no impedirá que otro código se ejecutá mientras se están recuperando los datos.</p>

<p className="p">That loads our &#60;Detail&#62; component using the repo name ‘react’ (thus forcing it to behave like the user had browser to /detail/react), then immediately checks to see whether there are 30 forks available. This fails because the Ajax call is Asynchronous (that’s what the first A in Ajax means) which means it won’t stop other code from running while the data is being fetched.</p>
<p className="it">Hay una serie de posibles soluciones a este problema, y ​​vamos a ver dos de ellos.</p>

<p className="p">There are a number of possible solutions to this problem, and we’re going to look at two of them.</p>
<p className="it">La primera solución es utilizar las funciones waitFor() y runs() de Jest. El primero de ellos, waitFor(), comprueba una condición cada 10 milisegundos para ver si la condición se ha convertido en verdadera. Tan pronto como se convierte en verdad, podemos comprobar nuestra espera está presente, que es donde entra en ejecución la función runs(): el código que ejecuta dentro de una función runs() sólo se ejecutará una vez que el código dentro de la función waitsFor() se completa.</p>

<p className="p">The first solution is to use Jest’s waitFor() and runs() functions. The first of these, waitFor(), checks a condition once every 10 milliseconds to see whether the condition has become true. As soon as it becomes true, we can check our expected is present, which is where the runs() function comes in: code you run inside a runs() function will only execute once code inside the waitsFor() function completes.</p>
<p className="it">La forma en que esto realmente funciona es a través de funciones anónimas, lo que hace que todo sea muy flexible. Es decir, waitsFor() se detendrá hasta que la función anónima que cree devuelve true, lo que significa que puede comprobar cualquier número de condiciones complejas. Detrás de las escenas, waitFor() llama a esta función una vez cada 10 milisegundos y continuará comprobando hasta que devuelva true.</p>

<p className="p">The way this actually works is through anonymous functions, which makes it all very flexible. That is, waitsFor() will pause until the anonymous function you create returns true, which means you can check any number of complex conditions in there. Behind the scenes, waitFor() calls this function once every 10 milliseconds, and will carry on checking until it returns true.</p>
<p className="it">Hay una pequeña captura, sin embargo: ¿qué pasa si hay un problema de red y se tarda un minuto para GitHub para devolver valores? En este caso, una colección de pruebas de red puede tardar horas en ejecutarse, lo que probablemente causará problemas. Para facilitar las cosas, waitFor() le permite especificar un tiempo de espera en milisegundos: si su función anónima devuelve true dentro de ese tiempo, se considera un error y se imprime un mensaje de error.</p>

<p className="p">There’s a small catch, though: what if there’s a network problem and it takes a minute for GitHub to return values? In this case, a collection of network tests might take hours to run, which is likely to cause problems. To make things easier, waitFor() lets you specify a timeout in milliseconds: if your anonymous function does return true within that time, it’s considered a failure and an error message is printed out.</p>
<p className="it">Suficiente teoría: tiempo para algún código. Añadir esta prueba debajo de los tres existentes:</p>

<p className="p">Enough theory: time for some code. Add this test beneath the existing three:</p>



<code>tests /Detail-test.js</code>

<pre></pre>

<p className="it">Alrededor de la mitad de eso es lo mismo que el ejemplo anterior, pero tenga en cuenta que moví la llamada expect() dentro de runs() usando una función anónima, que es el() =&gt; &#123;jumble de símbolos.</p>

<p className="p">About half of that is the same as the broken example above, but note that I moved the expect() call to be inside runs() using an anonymous function – that’s the() => &#123; jumble of symbols.</p>
<p className="it">La nueva parte es el código waitsFor(), que de nuevo crea una función anónima. Esta función hace dos cosas, imprime un mensaje a la consola, luego verifica si nuestro Detalle ha cargado cualquier bifurcación de GitHub. Guardá su archivo y luego ejecutá <code>npm run test</code>desde la línea de comandos.</p>

<p className="p">The new part is the waitsFor() code, which again creates an anonymous function. This function does two things, it prints a message to the console, then checks whether our Detail has loaded any forks from GitHub. Save your file then run <code>npm run test</code> from the command line.</p>
<p className="it">Ahora, la razón por la que tuve esa llamada console.log() es para que puedas ver exactamente cómo funciona waitFor(). La salida de la prueba será algo como esto:</p>

<p className="p">Now, the reason I had that console.log() call is so that you can see exactly how waitFor() works. The output from the test will be something like this:</p>


<pre></pre>


<code>tests /Detail-test.js</code>

<p className="it">	Recuerde que dije que waitsFor() llama a su función una vez cada 10 milisegundos? Bueno, ahí está tu prueba: cada vez que ves En esperaPorque es porque tu función está siendo llamada para comprobar si</p>

<p className="p">	Remember I said that waitsFor() calls your function once every 10 milliseconds? Well, there’s your proof: every time you see In waitFor it’s because your function is being called to check whether it</p>


<p className="it">	Devuelve true. En nuestra prueba usamos return rendered.state.forks.length&gt; 0; Lo que significa "devolver true es tenedor tiene cualquier elemento en ella, de lo contrario devolver falsa."</p>

<p className="p">	returns true. In our test we use return rendered.state.forks.length > 0; which means “return true is fork has any items in it, otherwise return false.”</p>
<p className="it">	Cuando esa función finalmente encuentra 30 elementos en rendered.state.forks, devuelve true y waitFor() sale. Como dije, sin embargo, es posible que los gremlins de red se arrastren, que es donde entran los parámetros segundo y tercero para waitFor(): el segundo es "se compromete a establecer" y el tercero es 2000. Esto indica waitFor() para esperar Hasta un máximo de 2000 milisegundos (2 segundos), y si ese tiempo pasa a fallar con el mensaje "timeout: expirado después de 2000 msec esperando a que se establezcan los compromisos"</p>

<p className="p">	When that function finally finds 30 items in rendered.state.forks, it returns true and waitFor() exits. Like I said, though, it’s possible network gremlins creep in, which is where the second and third parameters for waitFor() come in: the second is "commits to be set" and the third is 2000. This tells waitFor() to wait up to a maximum of 2000 milliseconds (2 seconds), and if that time passes to fail with the message “timeout: timed out after 2000 msec waiting for commits to be set”</p>
<p className="it">	- esa última parte es el texto que proporcionamos.</p>

<p className="p">	– that last part is the text we provided.</p>
<p className="it">	Esas son las cuatro pruebas escritas, pero aún no hemos terminado con las pruebas. Antes de continuar, sugiero que elimine la instrucción console.log() de la cuarta prueba, de lo contrario se pondrá molesto.</p>

<p className="p">	That’s all four of our tests written, but we’re not done with testing just yet. Before continuing, I suggest you remove the console.log() statement from the fourth test otherwise it will get annoying.</p>

<p className="it">	Si coloca una llamada console.log() dentro de su función waitFor(), verá que se llama cada 10 milisegundos.</p>

<p className="p">	If you place a console.log() call inside your waitFor() function you’ll see it being called every 10 milliseconds.</p>




<h2>Mocking Ajax with Jest: Making an Asynchronous Test Become Synchronous</h2>
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





<p className="it">Limpieza de nuestras pruebas: Últimos cambios</p>

<p className="p">Cleaning up Our Tests: Last Tweaks</p>
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





<h2>Linting React using ESLint and Babel</h2>
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

<h2>Linting React using Airbnb’s ESLint Rules</h2>
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
<p className="it">Cómo agregar la validación del componente de reactivo en minutos</p>

<p className="p">How to Add React Component Prop Validation in Minutes</p>
<p className="it">Si vos ha estado siguiendo muy de cerca, los únicos errores del linter dejados deben leer algo como esto: "" params "falta en la validación de los props". Esto abre la puerta a un área entera de React que aún no hemos tocado, pero es importante porque hace que tu código sea más fácil de entender y ayuda a reducir los errores, y como acabas de ver, No lo hagas</p>

<p className="p">If you’ve been following very closely, the only linter errors left should read something like this: “‘params’ is missing in props validation”. This opens the door to a whole area of React we haven’t touched yet, but it’s important because it makes your code easier to understand and helps reduce bugs – and, as you’ve just seen, you get linting errors if you don’t do it!</p>
<p className="it">Cuando se ejecuta en modo de desarrollo (es decir, todo lo que hemos hecho hasta ahora), React verificará automáticamente todos los props que establezca en los componentes para asegurarse de que tienen el tipo de datos correcto. Por ejemplo, si decis que un componente tiene un Prop de mensaje que es una cadena y es necesario, React se quejará si se establece mediante un número o No te establece en absoluto. Por razones de rendimiento, este control sólo ocurre mientras se está desarrollando el código - tan pronto como cambie a la producción, esto desaparece.</p>

<p className="p">When running in development mode (i.e., everything we’ve done so far), React will automatically check all props you set on components to make sure they have the right data type. For example, if you say a component has a Message prop that is a string and required, React will complain if it gets set using a number or doesn’t get set at all. For performance reasons this check only happens while you’re developing your code – as soon as you switch to production, this goes away.</p>
<p className="it">ESLint nos está advirtiendo porque no le decimos a React qué tipos de datos nuestros props deberíasn ser. Esto se hace fácilmente usando un conjunto de opciones predefinidas, tales como React.PropTypes.string, React.PropTypes.number y React.PropTypes.func, además de un catch-all "todo lo que se puede procesar, incluyendo arreglos de cosas que pueden ser Rendered ": React.PropTypes.node.</p>

<p className="p">ESLint is warning us because we don’t tell React what data types our props should be. This is easily done using a set of predefined options such as React.PropTypes.string, React.PropTypes.number, and React.PropTypes.func, plus a catch-all “anything that can be rendered, including arrays of things that can be rendered”: React.PropTypes.node.</p>
<p className="it">ESLint nos está diciendo que el componente App usa this.props.children sin especificar qué tipo de datos es. Eso es fácil de solucionar: agrega esto directamente después del final de la clase App en App.js:</p>

<p className="p">ESLint is telling us that the App component uses this.props.children without specifying what data type that is. That’s easily fixed: add this directly after the end of the App class in App.js:</p>

<code>src/pages/App.js</code>

<pre></pre>

<p className="it">Nota: cuando digo "directamente después del final" quiero decir después de la llave de cierre para la clase, pero antes de la línea de aplicación predeterminada de exportación, como esto:</p>

<p className="p">Note: when I say “directly after the end” I mean after the closing brace for the class, but before the export default App line, like this:</p>



<code>src/pages/App.js</code>

<pre></pre>

<p className="it">Si desea ver qué sucede cuando React detecta el tipo de soporte incorrecto que se está utilizando, intentá utilizar React.PropTypes.string en el fragmento anterior. Como verá, la página todavía se carga bien, pero debe aparecer un mensaje de error en la consola de depuración de su navegador.</p>

<p className="p">If you want to see what happens when React detects the wrong prop type being used, try using React.PropTypes.string in the snippet above. As you’ll see, your page still loads fine, but an error message should appear in your browser’s debug console.</p>

<p className="it">Una vez que esté usando la validación de prop, React le avisará si intenta utilizar el tipo de datos incorrecto.</p>

<p className="p">Once you’re using prop validation, React will warn you if you try to use the wrong kind of data.</p>

<p className="it">Necesitamos agregar dos declaraciones propTypes más para hacer que nuestro código se limpie a través de linting. Ambos son iguales, y dicen que el componente puede esperar una propiedad params que es un objeto. Añadí esto directamente después del final de la clase Detalle:</p>

<p className="p">We need to add two more propTypes declarations in order to make our code get cleanly through linting. Both are the same, and say that the component can expect a params property that is an object. Add this directly after the end of the Detail class:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Y agregue esto directamente después del final de la clase de usuario:</p>

<p className="p">And add this directly after the end of the User class:</p>

<code>src/pages/User.js</code>

<pre></pre>

<p className="it">¡Eso es! Si ejecuta el comando <code>npm run</code>lint ahora no deberías ver más errores.</p>

<p className="p">That’s it! If you run the command <code>npm run</code> lint now you should see no more errors.</p>

<p className="it">Llevándolo todo Juntos: ¡Proyecto Completo!</p>

<p className="p">Bringing it all Together: Project Complete!</p>
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