import Layout from '../components/layout'

export default() => (
  <Layout title='Ch4'>
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

<h1>Changing a React Component’s State with setState()</h1>
<p className="it">A diferencia de los props, un componente puede cambiar su estado cuando quiera y estos se guardarán hasta que el componente se destruye. Dicho esto, debes cambiar su estado cuidadosamente de lo contrario se encontrará con problemas.</p>


<p className="p">Unlike props, a component can change its state whenever it wants to and these will be saved until the component is destroyed. That being said, you should change your state carefully otherwise you will run into problems.</p>
<p className="it">¿Por qué "cuidadosamente"? Bueno, primero debes saber que cualquier cambio del estado de un componente o props hará que automáticamente vuelva a renderizar para que los nuevos valores se reflejen en tu interfaz. Esto significa que los cambios frecuentes harán que su código se ejecutá lentamente, lo cual nunca es una experiencia agradable para el usuario.</p>


<p className="p">Why “carefully”? Well, first you need to know that any change of a component’s state or props will automatically cause it to re-render so that the new values are reflected in your interface. This means frequent changes will make your code run slowly, which is never a pleasant user experience.</p>
<p className="it">En segundo lugar, React fusiona el estado para que el estado antiguo y el nuevo estado coexistan como un valor combinado. Esto significa que si su estado inicial tiene el nombre de Bob y el país de Australia, y cambia el nombre de Lucy, el país permanecerá establecido en Australia también.</p>


<p className="p">Second, React merges state so that old state and new state co-exist as a combined value. This means if your initial state has the name Bob and the country Australia, and you change the name to be Lucy, the country will remain set to Australia too.</p>
<p className="it">La combinación de esos dos es por qué React tiene una manera especial de establecer el estado llamado, astutamente, setState(). Esto toma nuevos valores para combinar en los valores existentes, y luego activa un re-render. Por lo tanto, vamos a modificar el método <code>buttonClicked()</code> para que cambie el nombre al dejar el país intacto:</p>


<p className="p">The combination of those two is why React has a special way to set state called, cunningly, setState(). This takes new values to merge into the existing values, then triggers a re-render. So, let’s modify the <code>buttonClicked()</code> method so that it changes the name while leaving the country intact:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Tené en cuenta que he eliminado la llamada a this.forceUpdate() - ya no es necesario. De hecho, llamar a <code>forceUpdate()</code> sólo es necesario si React no detecta un cambio de estado muy profundo, por lo que no lo utilizaremos a partir de ahora.</p>


<p className="p">Note that I’ve removed the call to this.forceUpdate() – it’s no longer needed. In fact, calling <code>forceUpdate()</code> is only needed if React didn’t spot a very deep state change, so we won’t be using it from now on.</p>
<p className="it">Ese nuevo código hace exactamente lo que dijimos: crea un objeto newState que tiene una nueva clave de nombre con un nombre aleatorio, y le dice a React que lo fusione en el estado actual del componente usando this.setState(). Debido a que los cambios de estado activan automáticamente un nuevo procesamiento, verá un nuevo nombre cada vez que haga clic en el botón, pero el país no cambiará.</p>


<p className="p">That new code does exactly what we said: it creates a newState object that has a new name key with a random name, and tells React to merge it into the component’s current state by using this.setState(). Because state changes automatically trigger a re-render, you’ll see a new name every time you click the button, but the country won’t change.</p>
<p className="it">En el improbable caso de que esté realizando tantos cambios en el estado y / o en los props que las llamadas constantes a <code>render()</code> están haciendo que su página se ejecutá lentamente, React tiene una solución: si crea un método llamado shouldUpdateComponent() y devuelve false from Su componente No te volverá a representar.</p>


<p className="p">In the unlikely event that you are making so many changes to state and/or props that the constant calls to <code>render()</code> are making your page run slowly, React has a solution: if you create a method called shouldUpdateComponent() and return false from it, your component won’t be re-rendered.</p>


<p className="it">Para usar esto, ponga alguna lógica dentro de shouldUpdateComponent() para devolver true o false dependiendo de sus necesidades, o alternativamente siempre puede hacer que devuelva false entonces use this.forceUpdate() para volver a renderizar según sea necesario - ese método forzará Un nuevo procesamiento incluso si shouldUpdateComponent() devuelve false.</p>


<p className="p">To  use this, either put some logic inside shouldUpdateComponent() to return either true or   false depending on your needs, or alternatively you can always make it return false then    use this.forceUpdate() to re-render as needed – that method will force a new render even if shouldUpdateComponent() returns false.</p>


<h2>State and the Single Source of Truth</h2>
<p className="it">Antes de ir más lejos, hay un poco de teoría que usted necesitas saber. No te preocupes, voy a mantenerlo corto!</p>


<p className="p">Before we go any further, there’s an important bit of theory you need to be aware of. Don’t worry, I’ll keep it short!</p>
<p className="it">Cuando empiezas, probablemente piensas que la idea de tener un estado dentro de los componentes es pura - después de todo, mantiene la funcionalidad y los datos relevantes juntos en un solo objeto, ¿verdad?</p>


<p className="p">When you’re starting out you probably think the idea of having state inside components is neat – after all, it keeps functionality and relevant data together in one object, right?</p>
<p className="it">Es cierto que aislar las cosas de esta manera puede ser una forma útil de romper grandes aplicaciones en pedazos más pequeños, pero al mismo tiempo puede ser tremendamente complicado. ¿Dónde están almacenados todos esos datos? ¿Está duplicado? Si está duplicado, ¿cómo se asegura de que todos los valores se actualizan correctamente cuando se cambia? Cuando llegas a la clase de escala de Facebook funciona - tienen más de 10.000 componentes React! - esto se convierte en un vórtice del cerebro.</p>


<p className="p">It’s true that isolating things this way can be a useful way to break large apps into smaller pieces, but at the same time it can get awfully complicated. Where is all that data stored? Is it duplicated? If it is duplicated, how do you make sure all values are updated correctly when one changes? When you get to the kind of scale Facebook works to – they have over 10,000 React components! – this becomes a brain vortex.</p>
<p className="it">La solución en el React idiomático -es decir, el código que fue escrito de la manera en que un desarrollador React experimentado lo escribiría- es tener lo que se llama una sola fuente de verdad, que es un estado maestro para la mayoría, si no toda su aplicación, Estado abajo como props a sus componentes del niño.</p>


<p className="p">The solution in idiomatic React – i.e., code that was written the way an experienced React developer would write it – is to have what’s called a single source of truth, which is one master state for most if not all of your application, then send that state down as props to your child components.</p>
<p className="it">Utilizando esta técnica, cuando cualquier parte de ese estado maestro cambia, actualizará automáticamente los props de sus componentes secundarios y los cambios fluirán en una dirección de arriba hacia abajo siempre sincronizados, nunca duplicados.</p>


<p className="p">Using this technique, when any part of that master state changes it will automatically update the props of your child components, and the changes will flow down in one direction from top to bottom always synchronized, never duplicated.</p>
<p className="it">En el perfecto mundo React, pocos o ninguno de los componentes tienen estado. Y así React tiene una sintaxis especial para crear componentes que no son nada más que un método <code>render()</code> - no pueden tener estado o cualquier método, simplemente aceptan algunos props y los renderizan. He aquí un ejemplo básico:</p>


<p className="p">In the perfect React world, few if any components have state. And so React has a special syntax to create components that are nothing more than a <code>render()</code> method – they can’t have state or any methods, they just accept some props and render them. Here’s a basic example:</p>



<pre></pre>

<p className="it">Una vez que está en su código, puede utilizarlo como cualquier otro componente:</p>


<p className="p">Once that’s in your code, you can use it like any other component:</p>


<pre></pre>
 

<p className="it">No te mates tratando de evitar el estado. En su lugar, ser un programador pragmático: ir a los componentes sin estado, siempre que sea posible, pero el estado está ahí para ser utilizado cuando usted realmente lo necesita.</p>


<p className="p">Don’t kill yourself trying to avoid state. Instead, be a pragmatic programmer: go for stateless components where possible, but state is there to be used when you really need it.</p>

<h2>Rendering an Array of Data with map() and JSX</h2>
<p className="it">Hay una cosa más que vamos a cubrir antes de saber lo suficiente React conceptos básicos para poder pasar a un proyecto real, y eso es cómo hacer un bucle sobre una matriz para procesar su contenido. En este momento tenemos una sola persona con un solo país, pero ¿no sería genial si pudiéramos tener 10 personas con 10 países, y hacer que todos ellos sean prestados? Seguro que lo haría.</p>


<p className="p">There’s one more thing we’re going to cover before you know enough React basics to be able to move on to a real project, and that’s how to loop over an array to render its contents. Right now we have a single person with a single country, but wouldn’t it be neat if we could have 10 people with 10 countries, and have them all rendered? Sure it would.</p>
<p className="it">Por suerte para nosotros, esto es fácil de hacer en JSX gracias a un método de array llamado map(). Cuando llama a esto en una matriz, puede hacer que se ejecutá a través de todos los elementos de esa matriz y hacer algo interesante con ellos - en nuestro caso, devolver una nueva matriz de JSX que se pueden dibujar.</p>


<p className="p">Luckily for us, this is easy to do in JSX thanks to an array method called map(). When you call this on an array, you can have it run through all the items in that array and do something interesting with them – in our case, returning a new array of JSX that can be drawn.</p>
<p className="it">Primero, modifique su constructor para que tengamos una matriz de personas a las que podemos realizar bucle:</p>


<p className="p">First, modify your constructor so that we have an array of people we can loop over:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Tené en cuenta que estoy usando la sintaxis de mano corta para establecer el valor de la gente en <code>this.state</code> - si el nombre de la clave es el mismo que el valor que deseas utilizar, sólo puede escribir una vez.</p>


<p className="p">Note that I’m using short-hand syntax to set the people value in <code>this.state</code> – if the key name is the same as the value you want to use, you can just write it once.</p>
<p className="it">Ahora que nuestro estado tiene una serie de datos con los que trabajar, podemos realizar bucle sobre el mismo usando map() modificando nuestro método <code>render()</code> de la siguiente manera:</p>


<p className="p">Now that our state has an array of data to work with, we can loop over it using map() by modifying our <code>render()</code> method like this:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Hay bastantes paréntesis allí gracias a la forma en que funciona map(), pero ese bloque de código hace lo siguiente:</p>


<p className="p">There are quite a few parentheses in there thanks to the way map() works, but that code block does the following:</p>

<p className="it">Para cada artículo en el arsenal, nos da el artículo sí mismo en persona y la posición del artículo en índice.</p>


<p className="p">For every item in the array, it gives us the item itself in person and the position of the item in index.</p>
<p className="it">Crea una nueva función anónima (que es la =&gt; parte) que recibe esas dos cosas como un parámetro y devolverá un valor de los datos modificados.</p>


<p className="p">It creates a new anonymous function (that’s the => part) that receives those two things as a parameter and will return a value of the modified data.</p>
<p className="it">Utiliza el elemento de entrada para crear un JSX basado en la persona.</p>


<p className="p">It uses the input element to create some JSX based on the person.</p>

<p className="it">Si guarda el archivo y mira en su navegador, probablemente verá diez mensajes de saludo allí, por lo que parece que todo está funcionando. Pero si abre la consola de error de su navegador, verá una gran advertencia: Cada hijo en una matriz o iterador debe tener un elemento "clave" único.</p>


<p className="p">If you save the file and look in your browser, you’ll probably see ten greeting messages in there so it looks like everything is working. But if you open your browser’s error console you’ll see a large warning: Each child in an array or iterator should have a unique “key” prop.</p>
<p className="it">Ese error es bastante claro, pero en el caso de que no estés seguro de lo que significa aquí va: si usas un bucle como lo estamos haciendo aquí (con map()) debes dar cada elemento de nivel superior impreso por ese Loop un atributo clave que lo identifica de manera única. La razón de esto se llama reconciliación y se vuelve muy importante cuando se hacen aplicaciones más avanzadas - y puede causar algunos errores muy extraño si no lo entiendes completamente!</p>


<p className="p">That error is pretty clear, but just in case you’re not sure what it means here goes: if you use a loop like we’re doing here (with map()) you need to give every top-level item printed by that loop a key attribute that identifies it uniquely. The reason for this is called reconciliation and it becomes very important when you make more advanced apps – and can cause some really weird bugs if you don’t understand it fully!</p>

<p className="it">Si crea JSX en un bucle y no proporciona un atributo clave para cada elemento, React le advertirá.</p>


<p className="p">If you create JSX in a loop and don’t provide a key attribute for each element, React will warn you.</p>

<p className="it">Considere la siguiente salida:</p>


<p className="p">Consider the following output:</p>


<pre></pre>

<p className="it">Eso es tres párrafos de texto todo envuelto dentro de un elemento &lt;div&gt; - es trivial hacer un componente que hace que. Ahora imagine los cambios de estado de tu componente, y ahora imprime lo siguiente:</p>


<p className="p">That’s three paragraphs of text all wrapped up inside a &#60;div&#62; element – it’s trivial to make a component that renders that. Now imagine your component’s state changes, and now it prints the following:</p>


<pre></pre>

<p className="it">¿Que pasó? Bueno, tú y yo podemos ver que "Dave from Malaysia!" Fue removido por la razón que sea, pero React no sabe que - sólo ve que hay dos elementos en lugar de tres, por lo que React se refiere a que acaba de eliminar El último elemento y movió a los demás.</p>


<p className="p">What happened? Well you and I can both see that “Dave from Malaysia!” got removed for whatever reason, but React doesn’t know that – it just sees that there are two items rather than three, so as far as React is concerned you just deleted the last item and moved the others up.</p>
<p className="it">React pide un atributo clave para que sepa qué elemento es cuál. Si volvemos a escribir los ejemplos anteriores, se vería así:</p>


<p className="p">React asks for a key attribute so that it knows which item is which. If we re-wrote the previous examples it would look like this:</p>



<pre></pre>


<p className="it">Así que cuando eliminamos a Dave, React pudo ver que los números 1 y 3 permanecían y actualizar en consecuencia.</p>


<p className="p">So when we delete Dave, React could see that numbers 1 and 3 remained and update accordingly.</p>
<p className="it">Volver a nuestro componente de Detalle con sus nombres y lugares aleatorios: podemos proporcionar una clave usando el valor de índice que estamos recibiendo de map(), así:</p>


<p className="p">Back to our Detail component with its random names and places: we can provide a key by using the index value we are receiving from map(), like this:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Eso funciona bien por ahora, pero si alguna vez desea agregar, quitar o mover elementos, tendrá que utilizar un atributo clave que no cambia cuando los elementos se mueven o se reorganizan. Confíe en mí, yo ha estado allí: si usted utiliza la posición de un artículo como su llave cuando mueva artículos alrededor, usted conseguirá un comportamiento maravillosamente extraño!</p>


<p className="p">That works fine for now, but if you ever want to add, remove or move items, you’ll need to use a key attribute that doesn’t change when items are moved or rearranged. Trust me, I’ve been there: if you use the position of an item as its key when move items around, you’ll get some marvellously weird behavior!</p>





<h2>Cleaning up and Preparing for a Real Project</h2>
<p className="it">En este punto probablemente te estás preguntando a dónde va este tutorial, así que déjame resumir dónde estás hasta ahora:</p>


<p className="p">At this point you’re probably wondering where this tutorial is going, so let me summarise where you are so far:</p>
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
</ul>
<p className="it">Todo esto comenzará a reunirse ahora: vamos a utilizar una llamada Ajax para obtener datos de GitHub. Bueno, técnicamente es Ajaj en lugar de Ajax, porque GitHub proporciona JSON en lugar de XML, pero aún así: es nuestra próxima gran tarea. Si nunca has utilizado Ajax antes, es sólo una forma de obtener datos de forma remota utilizando el navegador web.</p>


<p className="p">All this will begin to come together now: we’re going to use an Ajax call to fetch data from GitHub. Well, technically it’s Ajaj rather than Ajax, because GitHub provides JSON rather than XML, but still: it’s our next big task. If you’ve never used Ajax before, it’s just a way to fetch data remotely using the web browser.</p>
<p className="it">En el terminal, salga de Webpack Dev Server pulsando Ctrl + C y ejecutá este comando:</p>


<p className="p">In the terminal, quit Webpack Dev Server by pressing Ctrl+C and run this command:</p>



<code>npm install --save superagent</code>
 

<p className="it">SuperAgent es un cliente Ajax ridículamente ligero con una sintaxis clara y simple que hace que sea fácil de aprender y usar. Vamos a reemplazar todo esto "Hola, Scott de Escocia!" Cosa con los resultados de una llamada de Ajax a GitHub que tirará en una lista de compromisos al proyecto de React. Esto requerirá hacer bastantes cambios, pero es casi todo lo que has visto antes.</p>


<p className="p">SuperAgent is a ridiculously lightweight Ajax client with clear, simple syntax that makes it easy to learn and use. We’re going to replace this whole “Hello, Scott from Scotland!” thing with the results of an Ajax call to GitHub that will pull in a list of commits to the React project. This will require making quite a few changes, but it’s almost all stuff you’ve seen before.</p>
<p className="it">Nota: cuando SuperAgent haya finalizado la instalación, asegurate de ejecutar webpack-dev-server de nuevo. Primero, encuentre estas líneas en su constructor:</p>


<p className="p">Note: when SuperAgent has finished installing, make sure you run webpack-dev-server again. First, find these lines in your constructor:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">... luego borrarlos todos. Ya no necesitamos personas. Mientras está borrando cosas, siga adelante y elimine la posibilidad de importación de la línea 'casual' y todo el método <code>buttonClicked()</code>; Estos no son necesarios en este momento. No te preocupe: todas las cosas que aprendió resultarán útiles en un próximo capítulo, es sólo que por ahora no lo necesitamos.</p>


<p className="p">…then delete them all. We don’t need people any more. While you’re deleting stuff, go ahead and remove the import Chance from 'chance' line and the whole <code>buttonClicked()</code> method too; these aren’t needed right now. Don’t worry: all that stuff you learned will prove useful in an upcoming chapter, its just that for now we don’t need it.</p>
<p className="it">En su lugar, vamos a crear un estado inicial muy simple: una matriz vacía de commits. Esto será llenado por SuperAgent cuando termine su llamada Ajax. Por lo tanto, donde esas líneas en su constructor fueron hace un momento, poner esto en su lugar:</p>


<p className="p">Instead, we’re going to create some very simple initial state: an empty array of commits. This will be filled by SuperAgent when its Ajax call completes. So, where those lines in your constructor were just a moment ago, put this instead:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">En cuanto al método render(), vamos a cambiar los nombres de las variables, pero de lo contrario sólo imprimir datos estáticos - vamos a llenar los detalles muy pronto, no te preocupes. Cambiarlo para que sea:</p>


<p className="p">As for the <code>render()</code> method, we’re going to change the variable names but otherwise just print out static data – we’ll fill in the specifics soon enough, don’t worry. Change it to be this:</p>
<pre></pre>

<p className="it">Sólo para asegurarse de que está siguiendo a lo largo, aquí es cómo tu componente debe mirar ahora mismo:</p>


<p className="p">Just to make sure you’re following along, here’s how your component should look right now:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Una vez que Guardá ese archivo, su página web quedará en blanco. Esto se debe a que la matriz commits comienza vacía y nunca se llena. Vamos a arreglar eso ahora ...</p>


<p className="p">Once you save that file, your web page will go blank. This is because the commits array starts empty and never gets filled. Let’s fix that now…</p>

</div>
</div>
  </Layout>
)