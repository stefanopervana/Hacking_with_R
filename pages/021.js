import Layout from '../components/layout'

export default() => (
  <Layout title='Ch5'>
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
<h1>Refactoring our State Code: Passing Parameters in onClick</h1>
<p className="it">La siguiente cosa que debe saltar a usted para la refactorización debe ser los tres métodos showCommits(), showForks() y showPulls() - todos ellos sólo cambian el estado a una de tres cadenas, por lo que esto debe ser bastante fácil de refactor.</p>


<p className="p">The next thing that should jump out at you for refactoring ought to be the three methods showCommits(), showForks() and showPulls() – they all just change the state to one of three strings, so this should be fairly easy to refactor.</p>
<p className="it">Bueno, sí: es fácil de refactorizar. Pero también me da la oportunidad de mostrarle dos formas diferentes de enviar datos a los métodos. En este momento, todo lo que has utilizado es onClick = &#123;this.someMethod&#125; o onClick = &#123;this.someMethod.bind (this)&#125; - No te han pasado parámetros interesantes.</p>


<p className="p">Well,  yes: it is easy to refactor. But it also gives me a chance to show you two different ways  of sending data to methods. Right now all you’ve used is either onClick=&#123;this.someMethod&#125; or onClick=&#123;this.someMethod.bind(this)&#125; – no interesting parameters have been passed.</p>
<p className="it">Queremos enviar a lo largo de 'commits', 'forks' o tira 'dependiendo de qué botón se ha hecho clic, lo que es bastante fácil. Actualiza tu código <code>render()</code> a esto:</p>


<p className="p">We want to send along either ‘commits’, ‘forks’ or pulls’ depending on which button was clicked, which is easy enough. Update your <code>render()</code> code to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Esto hace que los tres botones llamen al mismo método, por lo que ahora es sólo cuestión de escribir el método selectMode() para que acepte un parámetro y lo use para establecer el estado del modo:</p>


<p className="p">That makes all three buttons call the same method, so it’s now just a matter of writing the
selectMode() method so that it accepts a parameter and uses it to set the mode state:</p>

<pre></pre>

<p className="it">Nota: no es necesario utilizar la nueva sintaxis de nombre de propiedad calculada ES6 aquí, porque siempre ha sido posible utilizar variables como valores. De hecho, debido a que la clave y el valor son los mismos, sólo podemos escribir modo.</p>


<p className="p">Note: you don’t need to use the new ES6 computed property name syntax here, because you’ve always been able to use variables as values. In fact, because the key and value are the same, we can just write mode.</p>
<p className="it">Con selectMode() en su lugar, puede seguir adelante y eliminar showCommits(), showForks() y showPulls().</p>


<p className="p">With selectMode() in place, you can go ahead and delete showCommits(), showForks(), and showPulls().</p>
<p className="it">Ese código funciona, y funciona bien. Pero podríamos reescribirlo de manera ligeramente diferente, y voy a mostrarlo a usted porque es el tipo de cosas que encontrará en código real, no porque estoy diciendo que estoy a favor de un enfoque sobre el otro. Hay dos maneras de hacerlo, y dos campos de gente que cada uno está convencido de que su camino es el Único Camino Verdadero, pero una vez más sugiero que trate de ser pragmático.</p>


<p className="p">That code works, and it works well. But we could rewrite it slightly differently, and I’m going to show it to you because it’s the kind of thing you’ll find in real code, not because I’m saying I favor one approach over the other. There are two ways of doing it, and two camps of people who each are convinced their way is the One True Way, but again I suggest you try to be pragmatic.</p>
<p className="it">ADVERTENCIA IMPORTANTE: Te voy a mostrar cómo se ve esto para que lo sepas. Debe seguir utilizando su código existente en lugar de cambiar a esta alternativa.</p>


<p className="p">IMPORTANT WARNING: I am going to show you how this looks just so you’re aware of it. You should keep using your existing code rather than switch to this alternative.</p>
<p className="it">La otra manera en que podríamos escribir estos onClick es almacenando datos en los botones que describen lo que deben hacer. El método selectMode() puede leer esos datos y actuar adecuadamente. Para tomar este enfoque, tendríamos que modificar el método <code>render()</code> a esto:</p>


<p className="p">The other way we could write these onClick is by storing data in the buttons that describe what they should do. The selectMode() method can then read that data and act appropriately. To take this approach, we would need to modify the <code>render()</code> method to this:</p>

<pre></pre>

<p className="it">(Nota: divido los elementos &lt;button&gt; en varias líneas para que sean más fáciles de leer, puede escribirlas en una línea si lo prefiere.)</p>

<p className="p">(Note: I split the &#60;button&#62; elements onto multiple lines to make them easier to read; you can write them on one line if you prefer.)</p>
<p className="it">Como puede ver, ya no pasa una cadena de parámetros al método selectMode(). En su lugar, las cadenas se almacenan dentro de parámetros de modo de datos. Para que selectMode() funcione con esto se basa en un detalle de implementación de JavaScript: todos los manejadores de eventos pasan automáticamente un objeto de evento que describe lo sucedido. No hemos estado usando esto por lo que ha sido silenciosamente ignorado. Pero en el código que usa este enfoque de atributo de modo de datos, veremos cómo el método selectMode() deberías buscar:</p>

<p className="p">As you can see, that no longer passes a parameter string to the selectMode() method. Instead, the strings are stored inside data-mode parameters. To make selectMode() work with this relies on a JavaScript implementation detail: all event handlers are automatically passed an event object describing what happened. We haven’t been using this so it’s been silently ignored. But in code that uses this data-mode attribute approach we would – here’s how the selectMode() method would need to look:</p>


<pre></pre>


<p className="it">Como puede ver, para leer el atributo de modo de datos del botón que se ha hecho clic, sólo leemos la propiedad dataset.mode de la currentTarget del evento - que automáticamente será el botón pulsado.</p>

<p className="p">As you can see, to read the data-mode attribute of whichever button was clicked, we just read the dataset.mode property of the event’s currentTarget – that will automatically be the clicked button.</p>
<p className="it">Hay buenas razones para usar ambas formas de llamar métodos. Pasar parámetros de forma explícita hace que su código sea un poco más fácil de leer porque puede ver exactamente lo que se está enviando y lo que se está recibiendo, pero tener métodos de extracción de datos del evento puede ser útil para reducir la duplicación de código. Una vez más, ser pragmático!</p>

<p className="p">There are good reasons to use both of these ways of calling methods. Explicitly passing parameters makes your code a bit easier to read because you can see exactly what is being sent and what is being received, but having methods pull data from the event can be helpful to reduce code duplication. Again, be pragmatic!</p>
<p className="it">RECORDATORIO DE ADVERTENCIA IMPORTANTE: Código mucho más adelante en este libro se basa en pasar un parámetro de cadena a selectMode() en lugar de utilizar el enfoque de atributo de modo de datos.</p>

<p className="p">REMINDER OF IMPORTANT WARNING: Code much later in this book relies on you passing a string parameter to selectMode() rather than using the data-mode attribute approach.</p>
<p className="it">Eso es suficiente refactoring por ahora. Si fuera mi propio código, probablemente intentaría armonizar un poco los distintos métodos de renderizado, pero no es algo que podamos hacer aquí porque probablemente has elegido diferentes campos JSON para mí. Aún así, considérelo como un ejercicio: ¿puede bajar de cuatro métodos de representación a tres, dos o incluso uno? Es posible que deba limpiar el JSON antes de utilizarlo para el estado de tu componente.</p>

<p className="p">That’s enough refactoring for now. If it were my own code, I’d probably try to harmonize the various rendering methods a little, but it’s not something we can do here because you’ve probably chosen different JSON fields to me. Still, consider it an exercise: can you get down from four rendering methods to three, two or even one? You might need to clean the JSON before you use it for your component’s state.</p>



</div>
    </div>
  </Layout>
)