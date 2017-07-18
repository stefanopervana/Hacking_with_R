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
<h2>Fetching Ajax Data from GitHub using SuperAgent</h2>
<p className="it">Parte de la razón por la que me gusta trabajar con SuperAgent es que es muy simple de usar - los creadores hicieron un gran trabajo en hacer sus métodos fáciles de leer y entender. Para empezar, importe SuperAgent en tu componente de la siguiente manera:</p>


<p className="p">Part of the reason I enjoy working with SuperAgent is that it’s so very simple to use – the creators did a great job in making its methods easy to read and understand. To get started, import SuperAgent into your component like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">Nota: puede llamar a SuperAgent lo que quiera en su código, y sus propios ejemplos usualmente lo llaman como solicitud en lugar de ajax. Encuentro ajax fácil recordar, que es porqué lo uso.</p>


<p className="p">Note: you can call SuperAgent whatever you want in your code, and their own examples usually alias it as request rather than ajax. I find ajax easy to remember, which is why I use it.</p>
<p className="it">Ahora, queremos que nuestra llamada Ajax se ejecutá cuando nuestra página se cargue, y React tiene un método especial que se llama en el momento adecuado: componentWillMount(). Como probablemente puede adivinar a partir del nombre, este método se llama a un componente justo antes de que se representa por primera vez. Esto hace que sea un gran lugar para que comience nuestra petición de Ajax.</p>


<p className="p">Now, we want our Ajax call to run when our page loads, and React has a special method that gets called at just the right time: componentWillMount(). As you can probably guess from the name, this method gets called on a component just before it’s rendered for the very first time. This makes it a great place for us to kick off our Ajax request.</p>
<p className="it">Agregue este método a tu componente:</p>


<p className="p">Add this method to your component:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Vamos a desglosar lo que realmente hace ...</p>


<p className="p">Let’s break down what it actually does…</p>

<p className="it">ComponentWillMount() es el nombre del método, y necesitas ser nombrado exactamente para que React lo llame.</p>


<p className="p">componentWillMount() is the name of the method, and needs to be named exactly this in order for React to call it.</p>


ajax.get(‘https://api.github.com/repos/facebook/react/commits’) tells SuperAgent to fetch the list of commits to the React project from GitHub. I chose GitHub because they have a simple API that doesn’t require authentication.
⇒
.end((error, response)	&#123; tells SuperAgent what to do when the request finishes: it should run the anonymous function that follows.
if (!error && response) &#123; starts a conditional statement: the following should run only if there was no error and there was a response from the server.
this.setState(&#123; commits: response.body &#125;) updates our component’s state using the body
value of the SuperAgent response.
&#125; else &#123; the other half of our conditional statement: if there was an error or if the server provided no response.
console.log(…) print an error message to the browser console window.
Lots of closing braces.

<p className="it">Hay dos cosas más que usted necesitas saber para entender ese código. Primero: todas las llamadas de SuperAgent son asíncronas, lo que significa que su código no sólo se congela mientras SuperAgent espera a que GitHub responda. En su lugar, otro código se ejecuta, y SuperAgent sólo llamará a su función anónima cuando haya terminado de recibir la respuesta de GitHub.</p>


<p className="p">There are two more things you need to know in order to understand that code. First: all SuperAgent calls are asynchronous, which means your code doesn’t just freeze while SuperAgent waits for GitHub to respond. Instead, other code executes, and SuperAgent will only call your anonymous function when it has finished getting GitHub’s response.</p>
<p className="it">La segunda cosa a saber es que response.body es un poco de magia SuperAgent: ha detectado que GitHub ha respondido con el tipo de contenido "application / json" y convierte automáticamente la respuesta de GitHub en objetos JavaScript. Es por eso que podemos enviar response.body directamente a nuestro estado: ya es una serie de objetos listos para usar.</p>


<p className="p">The second thing to know is that response.body is a bit of SuperAgent magic: it has detected that GitHub has responded with the content type “application/json” and automatically converts GitHub’s response into JavaScript objects. That’s why we can send response.body straight into our state: it’s already an array of objects ready to use.</p>
<p className="it">Cuando Guardá su página ahora, verá "Algunos datos de confirmación aquí" impresos muchas veces en su navegador. Cada uno de ellos es el resultado de un commit en el repositorio de Facebook GitHub, pero no estamos haciendo nada con cada commit todavía - nuestro JSX es estático.</p>


<p className="p">When you save your page now, you’ll see “Some commit data here” printed out lots of times in your browser. Each of those is the result of one commit to the Facebook GitHub repository, but we’re not doing anything with each commit just yet – our JSX is static.</p>
<p className="it">Nuestra aplicación muestra ahora "Algunos datos de confirmación aquí" 30 veces, pero sólo porque no hemos dicho a React qué datos queremos que muestre.</p>


<p className="p">Our app now displays “Some commit data here” 30 times, but only because we haven’t told React what data we want it to show.</p>


<h2>Converting GitHub’s JSON into Meaningful JSX</h2>
<p className="it">JSON de GitHub está lleno de datos interesantes que podríamos mostrar, por lo que lo primero que debes hacer es echar un vistazo a él para cosas particularmente significativas. Modificá su método componentWillMount() para que tenga esta línea justo antes de la llamada a setState():</p>


<p className="p">GitHub’s JSON is full of interesting data we could show, so the first thing to do is have a look through it for particularly meaningful things. Modify your componentWillMount() method so that it has this line just before the call to setState():</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 
<p className="it">Una vez hecho esto, Guardá y vuelva a cargar la página en su navegador, luego busque en la ventana de registro de errores y deberías ver "Array [30]" o similar allí. El uso de console.dir() imprime un árbol navegable en el registro, por lo que deberías ser capaz de hacer clic en una flecha junto a "Array [30]" para ver los objetos individuales dentro de él.</p>

<p className="p">Once that’s done, save and reload the page in your browser, then look in the error log window and you should see “Array [30]” or similar in there. Using console.dir() prints a navigable tree in the log, so you should be able to click an arrow next to “Array [30]” to see the individual objects inside it.</p>
 
<p className="it">Utilice el área de consola de su navegador web para explorar el GitHub JSON en una estructura de árbol.</p>


<p className="p">Use your web browser’s console area to explore the GitHub JSON in a tree structure.</p>

<p className="it">Cada uno de los objetos que ves es un código de Reacción individual que se compromete con GitHub, y cada uno debe tener otra flecha junto a ella que puedas desplegar para ver lo que hay dentro del commit. Las cosas que me parecen interesantes son:</p>


<p className="p">Each of the objects you see is an individual React code commit to GitHub, and each one should have another arrow next to it that you can fold out to see what’s inside the commit. Things that stand out to me as being interesting are:</p>

<p className="it">Autor&gt; inicio de sesión - quién hizo el cambio.</p>


<p className="p">author > login – who made the change.</p>
<p className="it">Commit&gt; mensaje - cuál fue el cambio.</p>


<p className="p">commit > message – what the change was.</p>
<p className="it">Html_url - un enlace web para ver el conjunto completo de cambios.</p>


<p className="p">html_url – a web link to see the full set of changes.</p>

<p className="it">Advertencia: GitHub puede cambiar su API en el futuro, por lo que es posible que estos campos No te apliquen cuando lo probá usted mismo. Por lo tanto, mira a través del resultado de console.dir() y encontrar algo que te interese!</p>


<p className="p">Warning: GitHub can change its API in the future, so these fields may not apply when you try it yourself. So, look through the result of console.dir() and find something that interests you!</p>
<p className="it">Lo que vamos a hacer es imprimir el nombre del autor en negrita, luego el texto completo de su commit. Voy a hacer clicable el texto de compromiso con la URL de GitHub para el commit.</p>


<p className="p">What we’re going to do is print the name of the author in bold, then the full text of their commit. I’m going to make the commit text clickable using the GitHub URL for the commit.</p>
<p className="it">En el mundo perfecto, el JSX para que esto suceda es simple:</p>


<p className="p">In the perfect world, the JSX to make this happen is simple:</p>

<pre></pre>

<p className="it">Nota 2: es estilísticamente preferido agregar paréntesis alrededor de JSX cuando contiene varias líneas.)</p>


<p className="p">(Note 1: we need to use commit.commit.message and not commit.message because the message is inside an object that is itself called commit. Note 2: it is stylistically preferred to add parentheses around JSX when it contains multiple lines.)</p>
<p className="it">Lamentablemente, si usas ese código existe la posibilidad de que tengas un error. No está garantizado, porque obviamente la lista de compromisos que ves depende de lo que ha ocurrido recientemente, pero a veces no hay nada en el campo de autor - que se establece en null. Por lo tanto, intentar utilizar commit.author.login fallará porque commit.author no existe.</p>


<p className="p">Sadly, if you use that code there’s a chance you’ll get an error. It’s not guaranteed because obviously the list of commits you see depends on what commits have happened recently, but sometimes there is nothing in the author field – that gets set to null. So, trying to use commit.author.login will fail because commit.author doesn’t exist.</p>
<p className="it">Hay algunas maneras de resolver esto. Primero, podríamos limpiar los datos cuando llegamos desde la llamada Ajax: si un commit no tiene un autor, simplemente salte sobre él. En segundo lugar, podríamos usar una expresión ternaria para comprobar la existencia de un autor y proporcionar un default significativo si no existe, como esto:</p>


<p className="p">There are a few ways to solve this. First, we could clean the data when it arrived in from the Ajax call: if a commit doesn’t have an author just skip over it. Second, we could use a ternary expression to check the for the existence of an author and provide a meaningful default if it doesn’t exist, like this:</p>

<pre></pre>

<p className="it">Esa es una solución bastante simple, pero ¿qué sucede si falta la URL HTML de confirmación o falta el mensaje de confirmación? Usted termina con las expresiones ternarias esparcidas por todas partes, que es feo.</p>

<p className="p">That’s a simple enough solution, but what happens if the commit HTML URL is missing, or the commit message is missing? You end up with ternary expressions scattered everywhere, which is ugly.</p>
<p className="it">En su lugar, hay una tercera opción: calcular cualquier campo por adelantado. Esto significa usar una sintaxis ligeramente diferente: necesitamos abrazaderas abiertas y cerradas con map(), y nuestro código necesitas devolver un valor usando la palabrí clave return.</p>

<p className="p">Instead, there is a third option: calculate any fields up front. This means using slightly different syntax: we need open and close braces with map(), and our code needs to return a value using the return keyword.</p>
<p className="it">Utilizando esta técnica, aquí está el nuevo método <code>render()</code> para el componente Detail:</p>

<p className="p">Using this technique, here’s the new <code>render()</code> method for the Detail component:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Este código revisado crea una nueva constante de autor que se establece en el nombre del autor o Anónimo dependiendo de si se proporcionó un autor. Todavía utiliza una expresión ternaria, pero separa el cálculo de los valores de la representación, lo que facilita su lectura.</p>

<p className="p">This revised code creates a new author constant that is set to either the name of the author or Anonymous depending on whether an author was provided. It still uses a ternary expression, but it separates the calculation of the values from the rendering, which makes it easier to read.</p>

<p className="it">Nuestro proyecto hasta el momento: todos los compromisos recientes de React se muestran junto con su autor, además de un enlace a más información.</p>


<p className="p">Our project so far: all recent React commits are shown along with their author, plus a link to more information.</p>


<h2>Time for a Task: Reading from Three Feeds</h2>
<p className="it">Tomamos el método <code>buttonClicked()</code> antes, pero ahora vamos a reintroducir ese aprendizaje haciendo que nuestra aplicación muestre información GitHub diferente dependiendo de la selección del usuario. En este momento mostramos commits, pero vamos a dejar que los usuarios elijan entre commits, forks y pull requests, simplemente haciendo clic en diferentes botones.</p>


<p className="p">We took the <code>buttonClicked()</code> method out earlier, but now we’re going to re-introduce that learning by having our app show different GitHub information depending on user selection. Right now we show commits, but we’re going to let users choose between commits, forks and pull requests, just by clicking different buttons.</p>
<p className="it">Los feeds que necesitas usar son:</p>


<p className="p">The feeds you need to use are:</p>
<ul>


<li className="p">https://api.github.com/repos/facebook/react/commits</li>


<li className="p">https://api.github.com/repos/facebook/react/forks</li>


<li className="p">https://api.github.com/repos/facebook/react/pulls</li>
</ul>
<p className="it">Debe examinar los datos que devuelven para que pueda crear el JSX adecuado.</p>


<p className="p">You should examine the data they return so you can craft appropriate JSX.</p>
<p className="it">Nota importante: ya hemos cubierto todas las técnicas necesarias para que usted pueda hacer esto usted mismo. Voy a caminar a través de él con usted, pero este es un gran lugar para probarse a sí mismo para asegurarse de que ha entendido lo que pasó hasta ahora.</p>


<p className="p">Important note: we have already covered all the techniques required for you to be able to do this yourself. I’m going to walk through it with you, but this is a great place to test yourself to make sure you’ve understood what happened so far.</p>
<p className="it">¿Aún aquí? Estas son algunas sugerencias:</p>


<p className="p">Still here? Here are some hints:</p>

<p className="it">Su método <code>render()</code> puede llamar a otros métodos para hacer renderizado en lugar de tratar de hacerlo todo en sí mismo.</p>


<p className="p">Your <code>render()</code> method can call other methods to do rendering rather than try to do it all itself.</p>
<p className="it">Por lo tanto, podrías tener un método renderCommits(), un método renderForks() y un método render- Pulls(), luego haga que su método <code>render()</code> principal llame a uno de ellos.</p>


<p className="p">So, you could have a renderCommits() method, a renderForks() method and a render- Pulls() method, then have your main <code>render()</code> method call one of them.</p>
<p className="it">Dependiendo de los campos que encuentres interesantes, podes encontrar que podes usar un método para todos ellos, o dos de ellos; Depende de usted.</p>


<p className="p">Depending on which fields you find interesting, you might find you can use one method for them all, or two of them; it’s down to you.</p>
<p className="it">Para mantener las cosas simples, sólo tienes que seguir adelante y llamar a todos los extremos API en componentWill-Mount() y almacenar los resultados en tres matrices separadas en estado. Recuerde que setState() fusiona los datos nuevos con los datos existentes.</p>


<p className="p">To keep things simple, just go ahead and call all through API endpoints in componentWill- Mount() and store the results in three separate arrays in state. Remember, setState() merges the new data with existing data.</p>
<p className="it">El modo de visualización activo actual (confirmación, horquillas o extracción) debe almacenarse en estado y este estado se puede cambiar haciendo clic en uno de los tres botones.</p>


<p className="p">The current active view mode (commits, forks, or pulls) should be stored in state, and that state can be changed by clicking one of three buttons.</p>

<p className="it">Con todo eso, debesrías ser capaz de crear una solución muy simple. Si desea refactorizarlo más tarde (es decir, volver a escribirlo para que sea un código más simple) puede hacerlo, pero por ahora solo vaya con la solución más fácil para que pueda estar seguro de que entiende completamente lo que ha aprendido hasta ahora.</p>


<p className="p">With all that, you should be able to create a very simple solution. If you want to refactor it later (i.e., to rewrite it to be simpler code) you can do, but for now just go with the easiest solution so you can be sure you fully understand what you’ve learned so far.</p>

<h2>How to Upgrade Our App to Read Three Feeds</h2>
<p className="it">OK, espero que se tomó el tiempo para intentar la tarea usted mismo, porque realmente ayudará a identificar qué partes que conocía bien y que no tan bien. De todos modos, te prometí que te guiaría a través de la solución, así que aquí va!</p>


<p className="p">OK, I hope you took the time to attempt the task yourself, because it will really help identify which parts you knew well and which not so well. Anyway, I promised I’d walk you through the solution, so here goes!</p>
<p className="it">Lo primero que debemos hacer es actualizar el estado inicial de nuestro componente para que tengamos tres matrices para cada uno de los modos de visualización: uno para confirmación, uno para forks y otro para pulls. También necesitas un valor para distinguir qué modo de vista está actualmente activo. Por lo tanto, he modificado mi constructor a esto:</p>


<p className="p">The first thing to do is upgrade the initial state of our component so that we have three arrays for each of the view modes: one for commits, one for forks, and one for pulls. It also needs a value to distinguish which view mode is currently active. So, I modified my constructor to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">La segunda cosa a hacer es actualizar el componentWillMount() para que haga tres llamadas GitHub. Por ahora - el MVP, por así decirlo - simplemente duplicaremos el código tres veces. No te preocupes, lo limpiaremos pronto.</p>


<p className="p">The second thing to do is upgrade the componentWillMount() so that it makes three GitHub calls.  For now – the MVP, as it were – we’ll just duplicate the code three times. Don’t worry, we’ll clean this up soon.</p>
<p className="it">Aquí está el nuevo método componentWillMount():</p>


<p className="p">Here’s the new componentWillMount() method:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">A continuación, necesitamos tres métodos de renderizado para que cada tipo de vista muestre información relevante. He llamado a estos renderCommits(), renderForks() y renderPulls():</p>


<p className="p">Next up, we need three rendering methods so that each view type shows relevant information. I’ve called these renderCommits(), renderForks() and renderPulls():</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Nota: es probable que necesite ajustar el método renderForks() para que el enlace se encuentre en la misma línea que el "bifurcado", de lo contrario React no colocará ningún espacio entre las palabras.</p>


<p className="p">Note: you will probably need to adjust the renderForks() method so that the link sits on the same line as the “forked to” otherwise React will not put any space between the words.</p>
<p className="it">Esto aísla la representación para cada tipo de vista en su propio método, lo que significa que ahora sólo necesitamos hacer <code>render()</code> elegir cuál mostrar. Estoy usando la clave de modo en el estado de componente para decidir qué mostrar, y voy a dejar que tenga tres valores: "comete", "bifurcaciones" y "tira".</p>


<p className="p">That isolates the rendering for each view type in its own method, which means we now just need to make <code>render()</code> choose which one to show. I’m using the mode key in the component state to decide which to show, and I’ll let it have three values: “commits”, “forks” and “pulls”.</p>
<p className="it">Con esto en mente, aquí está cómo debe render():</p>


<p className="p">With that in mind, here’s how <code>render()</code> should look:</p>

<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">Puede ver tres botones al final de ese método que llaman a tres métodos aún no definidos cuando se hacen clic en: showCommits(), showForks() y showPulls(). Todo lo que deben hacer es cambiar la clave de estado del modo para que el componente se actualice con datos diferentes:</p>


<p className="p">You can see three buttons at the end of that method that call three as-yet-undefined methods when they are clicked: showCommits(), showForks() and showPulls(). All these need to do is change the mode state key to have the component refresh with different data:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Recuerde, cambiar el estado o los props de un componente hace que vuelva a renderizar, lo que significa que hacer clic en esos botones actualizará nuestra salida como se esperaba.</p>


<p className="p">Remember, changing the state or props of a component causes it to re-render, which means clicking those buttons will update our output as expected.</p>
<p className="it">Antes de seguir adelante, he aquí una copia completa de <code>Detail.js</code> en este punto del proyecto. Si tienes problemas, deberías poder comparar mi versión con la tuya y ver lo que falta:</p>


<p className="p">Before I move on, here’s a complete copy of <code>Detail.js</code> at this point in the project. If you’re having problems, you should be able to compare my version against yours and see what’s missing:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Como puede ver, no hay grandes sorpresas en eso - es simplemente tomar lo que ya tenemos y repetirlo tres veces.</p>


<p className="p">As you can see, there are no great surprises in there – it’s just taking what we already have and repeating it three times over.</p>




<h2>Refactoring our Ajax Code: Don’t Repeat Yourself</h2>
<p className="it">Nuestro código funciona, no hay duda al respecto. Y es fácil de leer, porque acabamos de tomar los conceptos básicos de antes y este tutorial y los ha duplicado tres veces. Pero lo más importante no es fácil de entender o mantener.</p>


<p className="p">Our code works, there’s no doubt about it. And it’s easy to read, because we’ve just taken the basic concepts from earlier and this tutorial and duplicated them three times. But crucially it’s not easy to understand or maintain.</p>
<p className="it">La razón por la que es difícil de entender es porque usted necesitas leer a través de una gran cantidad de código para ver lo que está haciendo. Sí, es posible que sepamos que el código está exactamente duplicado, pero otros no, y tendrían que teerlo todo para verlo.</p>


<p className="p">The reason it’s hard to understand is because you need to read through an awful lot of code to see what it’s doing. Yes, we might know the code is pretty much exactly duplicated, but others won’t, and they’d have to read through it all to see that.</p>
<p className="it">La razón por la que es difícil de mantener es porque el código literalmente ha sido copiado y pegado, con pequeños ajustes. ¿Qué pasa si usted encuentra un error más tarde - se acuerda de cambiarlo para commits, tira y tenedores, o es posible que se olvide de uno de ellos?</p>


<p className="p">The reason it’s hard to maintain is because the code has literally been copied and pasted, with minor adjustments. What if you find a bug later on – will you remember to change it for commits, pulls and forks, or is it possible you’ll forget one of them?</p>
<p className="it">Podemos solucionar estos problemas refactorizando nuestro código, que es un nombre de fantasía para un proceso de hacer el código mejor. La definición de "mejor" podrías ser más rápida de ejecutar, más fácil de entender, más corta, más reutilizable, o cualquier número de mejoras o combinaciones de mejoras, pero esperemos que el resultado es mejor que lo que comenzó.</p>


<p className="p">We can fix these problems by refactoring our code, which is a fancy name for a process of making code better. The definition of “better” might be faster to run, easier to understand, shorter, more re- usable, or any number of improvements or combinations of improvements, but hopefully the result is better than what you started with.</p>
<p className="it">Un objetivo fácil en nuestro código actual es el método componentWillMount(). Hace tres grandes llamadas Ajax, cada una de las cuales varía en sólo tres líneas:</p>


<p className="p">An easy target in our current code is the componentWillMount() method. It makes three large Ajax calls, each of which vary by just three lines:</p>

<p className="it">Ajax.get ('https://api.github.com/repos/facebook/react/commits')</p>


<p className="p">ajax.get('https://api.github.com/repos/facebook/react/commits')</p>
<p className="it">This.setState (&#123;commit: response.body&#125;)</p>


<p className="p">this.setState(&#123; commits: response.body &#125;)</p>
<p className="it">Console.log ('Se produjo un error al obtener commit de GitHub', error);</p>


<p className="p">console.log('There was an error fetching commits from GitHub', error);</p>

<p className="it">Más importante aún, esas tres líneas varían sólo con tres palabras, y la palabrí es la misma cada vez: comete, comete, comete; Horquillas, horquillas, horquillas; Tira, tira, tira Esto está maduro para la refactorización: podríamos crear un método que acepte una cadena como su único parámetro, por ejemplo "commit", y luego lo coloca en esos tres lugares. Podemos entonces llamar a ese método tres veces en componentWillMount().</p>


<p className="p">More importantly, those three lines all vary only by three words, and the word is the same each time: commits, commits, commits; forks, forks, forks; pulls, pulls, pulls. This is ripe for refactoring: we could create a method that accepts a string as its only parameter, e.g. “commits”, then puts it into those three places. We can then call that method three times in componentWillMount().</p>
<p className="it">Para realizar este trabajo necesitamos alguna nueva sintaxis ES6: interpolación de cadenas y nombres de propiedades calculadas. Te mostraré el código primero y luego explicarás los bits interesantes - por favor agrega este método al componente Detalle:</p>


<p className="p">To make this work we need some new ES6 syntax: string interpolation and computed property names. I’ll show you the code first then explain the interesting bits – please add this method to the Detail component:</p>



<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">Por lo tanto, es un método llamado fetchFeed() y toma un solo parámetro llamado tipo. Para colocar eso en la URL de ajax.get() he usado la interpolación de ES6: la URL ahora está envuelta en backticks (esas citas en ángulo divertidas que normalmente se sientan comparten una clave con) en lugar de comillas simples, y cuando haces eso Puede colocar variables (incluyendo otras expresiones) dentro de la cadena. Cuando el compilador ve $ &#123;type&#125; sustituye el contenido del parámetro type en ese punto. La misma técnica se utiliza en la instrucción console.log().</p>


<p className="p">So, it’s a method called fetchFeed() and it takes a single parameter called type. To place that into the ajax.get() URL I’ve used ES6 string interpolation: the URL is now wrapped in backticks (those funny angled quotes that usually sit share a key with ) rather than single quotes, and when you do that you can place variables (including other expressions) right inside the string. When the compiler sees $&#123;type&#125; it substitutes the contents of the type parameter at that point. The same technique is used in the console.log() statement.</p>
<p className="it">La segunda característica ES6 de allí se denomina nombres de propiedades calculadas, y lo ves en la llamada a this.setState(). Echa un vistazo a este código:</p>


<p className="p">The second ES6 feature in there is called computed property names, and you see it in the call to this.setState(). Take a look at this code:</p>


<pre></pre>

<p className="it">¿Es eso decir a) "poner response.body en mi objeto usando el tipo de nombre", o b) "poner response.body en mi objeto usando el nombre commit porque eso es lo que el parámetro de tipo se establece en"?</p>


<p className="p">Is that saying a) “put response.body in my object using the name type”, or b) “put response.body in my object using the name commits because that’s what the type parameter is set to”?</p>
<p className="it">La respuesta es a), y hubo algunos hacks feo que usted podrías hacer para evitar eso. Con ES6 ahora puede escribir [tipo], que es un nombre de propiedad calculado, y efectivamente le dice a la computadora que quiere decir b).</p>


<p className="p">The answer is a), and there were some ugly hacks you could do to work around that. With ES6 you can now write [type], which is a computed property name, and effectively tells the computer you mean b).</p>
<p className="it">Con el nuevo método fetchFeed(), sólo necesitamos llamarlo tres veces cuando el componente se monta. Modificá su método componentWillMount() para extraer todo ese código de Ajax y reemplazarlo por este:</p>


<p className="p">With the new fetchFeed() method in place, we just need to call it three times when the component mounts. Modify your componentWillMount() method to rip out all that Ajax code and replace it with this:</p>



<code>src/pages/Detail.js</code>

<pre></pre>


<h2>Refactoring our State Code: Passing Parameters in onClick</h2>
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


<h2>Introducing React Router</h2>

<p className="it">Todo el trabajo que hemos hecho hasta ahora ha estado en <code>index.js</code> o en <code>Detail.js</code>, pero ahora vamos a añadir un tercer archivo llamado List.js que convertirá una página de inicio para nuestra aplicación. A partir de ahí, los usuarios podrán seleccionar un repositorio de GitHub, y al hacerlo mostrarán <code>Detail.js</code> como antes.</p>

<p className="p">All the work we’ve done so far has either been in <code>index.js</code> or <code>Detail.js</code>, but now we’re going to add a third file called List.js that will render a home page for our app. From there, users will be able to select a GitHub repository, and doing so will show <code>Detail.js</code> as before.</p>
<p className="it">Por lo tanto, pasaremos de tener sólo una página que enumera todos los compromisos de React, forks y tira de GitHub, a tener una página inicial donde los usuarios pueden seleccionar React, React Native, Jest u otros proyectos de Facebook de nuestra elección. Esto implica un cambio bastante grande, por lo que vamos a hacer esto en dos partes: primero implementar React Router de una manera que preserve el comportamiento exacto que tenemos ahora, luego agregar la nueva página de inicio.</p>

<p className="p">So, we’ll go from having just one page listing all the React commits, forks and pulls on GitHub, to having a homepage first where users can select React, React Native, Jest, or other Facebook projects of our choosing. This involves a fairly big change, so we’re going to do this in two parts: first implement React Router in a way that preserves the exact behavior we have right now, then second add the new home page.</p>
<p className="it">Si te preguntas, React Router es un componente que carga diferentes páginas dependiendo de la URL que tu usuario haya pedido. Así que si el usuario va a http: // localhost: 8080 / hola que serviría una página, y http: // localhost: 8080 / world serviría una página diferente.</p>

<p className="p">If you were wondering, React Router is a component that loads different pages depending on the URL your user asked for. So if the user goes to http://localhost:8080/hello it would serve one page, and http://localhost:8080/world would serve a different page.</p>
<p className="it">Bueno, eso no es estrictamente cierto. Para evitar tener que agregar una configuración de servidor, las páginas React Router servirá comenzarán todas con / # /, por ejemplo http: // localhost: 8080 / # / hola. Esto significa que index.html se utilizará automáticamente para procesar todas las páginas, lo que a su vez significa que React Router será capaz de cargar la página correcta.</p>

<p className="p">Well, that’s not strictly true. To avoid having to add a server configuration, the pages React Router serves up will all start with /#/, e.g. http://localhost:8080/#/hello. This means that index.html will automatically be used to render all pages, which in turn means that React Router will be able to load the right page.</p>
<p className="it">Su archivo <code>index.js</code> actual debe tener este aspecto:</p>

<p className="p">Your current <code>index.js</code> file should look like this:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">Me gustaría que agregue dos importaciones más después de las dos primeras que tiene:</p>

<p className="p">I’d like you to add two more imports after the first two you have:</p>



<code>src/index.js</code>

<pre></pre>

<p className="it">La primera importación trae tres componentes, de los cuales usaremos dos inmediatamente y el otro en breve. Router es React Router en sí, que tiene una lista de URLs y Los componentes de React y pone los dos juntos. La ruta es una asignación de URL individual, por ejemplo, el detalle de la URL y nuestro componente Detalle. IndexRoute se utiliza como ruta predeterminada; Nos pondremos en eso pronto.</p>

<p className="p">The first import brings three components, of which we’ll be using two immediately and the other shortly. Router is React Router itself, which takes a list of URLs and React components and puts the two together. Route is one individual URL mapping, e.g. the URL detail and our Detail component. IndexRoute is used as a default route; we’ll get onto that soon.</p>
<p className="it">La segunda importación trae una gran complejidad, y lo más probable es que usted no quiere saber sobre ella. En resumen, React Router necesitas una forma inteligente de manejar la historia. Esto se hace parcialmente a través de ese signo # (conocido como un historial de hash porque # se llama "hash" a personas que no reproducen música), y parcialmente a través de claves de consulta especiales en sus URLs. Estas claves de consulta no son necesarias en nuestro ejemplo y solo hacen que las cosas parezcan un poco feas, así que las sacaremos. Pero para sacarlos, necesitamos esta línea de importación como verás en un momento.</p>

<p className="p">The second import brings in a great deal of complexity, and chances are you don’t want to know about it. In short, React Router needs a smart way to handle history. This is partly done through that # sign (known as a hash history because # is called “hash” to people who don’t play music), and partly through special query keys in your URLs. These query keys aren’t needed in our example and just make things look a bit ugly, so we’ll be taking them out. But to take them out, we need this import line as you’ll see in a moment.</p>
<p className="it">Con esas nuevas importaciones, es hora de recurrir a la versión principal de nuestra aplicación. En este momento sólo hacemos un componente Detail, pero necesitamos cambiarlo para que usemos React Router en su lugar. Así es como se ve en su forma más básica:</p>

<p className="p">With those new imports, it’s time to turn to the main rendering of our app. Right now we just render a Detail component, but we need to change that so we use React Router instead. Here’s how it looks in its most basic form:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">Así que, en lugar de renderizar nuestro componente Detail directamente, ahora renderizamos Router, que a su vez crea el componente secundario apropiado para la URL que se empareja. En este momento especificamos sólo una URL, /, y decimos a React Router que cargue nuestro componente Detail.</p>

<p className="p">So, rather than rendering our Detail component directly, we now render Router, which in turn creates the appropriate child component for the URL that gets matched. Right now we specify only one URL, /, and tell React Router to load our Detail component.</p>
<p className="it">Si guarda estos cambios, probá a actualizar su navegador. Estando bien, http: // localhost: 8080 / debe actualizarse para convertirse en algo así como http: // localhost: 8080 / # /? _k = 7uv5b6. Esa es la historia de hash en acción: que? _k = part es una clave única que se usa para rastrear el estado entre ubicaciones, pero realmente no lo necesitamos, así que lo eliminaremos.</p>

<p className="p">If you save those changes, try refreshing your browser. All being well, http://localhost:8080/ should update to become something like http://localhost:8080/#/?_k=7uv5b6. That’s the hash history in action: that ?_k= part is a unique key used to track state between locations, but we really don’t need it so we’ll remove it.</p>


<p className="it">Una instalación básica de React Router muestra URL con números aleatorios en la cadena de consulta.</p>

<p className="p">A basic install of React Router shows URLs with random numbers in the query string.</p>

<p className="it">Al mismo tiempo, también vamos a añadir lo que podrías parecer un poco de un hack, pero me temo que es un requisito hasta que React Router lo resuelve de forma permanente. Ves, cuando usted navega de / # / someurl a / # / someotherurl, usted no está moviéndose realmente en cualquier lugar - React Router acaba de descargar los componentes anteriores y carga el nuevo en su lugar. Esto provoca un problema con el desplazamiento, porque si el usuario se había desplazado hasta la mitad de la página antes de cambiar las URL, se mantendría a medio camino desplazándose por la página del nuevo componente.</p>

<p className="p">At the same time, we’re also going to add what might seem like a bit of a hack, but I’m afraid it’s a required hack until React Router solves it permanently. You see, when you navigate from /#/someurl to /#/someotherurl, you’re not actually moving anywhere – React Router just unloads the previous components and loads the new one in its place. This causes a problem with scrolling, because if the user had scrolled half way down the page before changing URLs, they would remain half way scrolled down the page for the new component.</p>
<p className="it">Por lo tanto, el hack es el siguiente: cada vez que el React Router se actualiza, le decimos al navegador que vuelva a la parte superior del documento, tal como lo haría si estuviéramos cambiando las páginas de la manera pasada de moda.</p>

<p className="p">So, the hack is this: whenever the React Router updates, we tell the browser to scroll back to the top of the document, just as it would if we were changing pages the old-fashioned way.</p>
<p className="it">Podemos hacer estos dos cambios al mismo tiempo. Reemplace su actual línea &lt;Router&gt; por esta:</p>

<p className="p">We can make both these changes at the same time. Replace your current &#60;Router&#62; line with this one:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">La parte de la historia es la que elimina el desorden de _k = de nuestras URL. La parte onUpdate es lo que asegura que la posición de desplazamiento del usuario se restablece cuando se mueven entre los componentes.</p>

<p className="p">The history part is what removes the ?_k= mess from our URLs. The onUpdate part is what makes sure the user’s scroll position resets when they move between components.</p>
<p className="it">Con esos cambios guardados, deberías poder navegar a http: // localhost: 8080 / y encontrarte en http: // localhost: 8080 / # /, que es lo que queremos. Una vez más, la eliminación del signo # requiere la configuración del servidor que no vamos a hacer aquí. Si desea obtener más información al respecto, consulte la página de documentación React Router que está buscando.</p>

<p className="p">With those changes saved, you should be able to navigate to http://localhost:8080/ and find yourself on http://localhost:8080/#/, which is what we want. Again, removing the # sign requires server configuration that we aren’t going to do here. If you’d like to read more about this, here’s the React Router documentation page you’re looking for.</p>





<h2>How to Add a New Route to React Router</h2>
<p className="it">Todo ese trabajo que acabamos de hacer es importante, pero tristemente parece idéntico a los usuarios finales - frustrante, ¿eh? Pero eso está bien, porque era una base importante para lo que viene ahora: vamos a añadir una nueva página para nuestra página de inicio, y luego mover lo que tenemos que ser / React.</p>

<p className="p">All that work we just did is important, but sadly looks identical to end users – frustrating, huh? But that’s OK, because it was important groundwork for what’s coming now: we’re going to add a new page for our homepage, then move what we have now to be /react.</p>
<p className="it">Por lo tanto, crear un nuevo archivo dentro de <code>src/pages</code>List.js llamado y darle este contenido básico por ahora:</p>

<p className="p">So, create a new file inside <code>src/pages</code> called List.js and give it this basic content for now:</p>

<code>src/pages/List.js</code>

<pre></pre>

<p className="it">Lo vamos a hacer para que ir a la página principal cargue nuestro componente de lista, y ir a / React carga nuestro componente de detalle. Para que esto suceda necesitamos agregar una nueva ruta, luego mover la existente.</p>

<p className="p">We’re going to make it so that going to the homepage loads our List component, and going to /react loads our Detail component. To make this happen we need to add a new route, then move the existing one.</p>
<p className="it">Como recordatorio, aquí está su archivo <code>index.js</code> actual</p>

<p className="p">As a reminder, here is your current <code>index.js</code> file</p>

<code>src/index.js</code>

 
<pre></pre>

<p className="it">Agregue una importación para el nuevo componente Lista que hizo hace un momento. Si no está seguro, deberías verse así:</p>

<p className="p">Please add an import for the new List component you made a moment ago. If you’re not sure, it should look like this:</p>

<code>src/index.js</code>

<pre></pre>
 

<p className="it">Ahora necesitamos mover nuestra ruta existente para que maneje / reaccione y haga una nueva ruta para manejar /, como esto:</p>

<p className="p">Now we need to move our existing route so that it handles /react and make a new route to handle
/, like this:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">¡Eso es! debes ser capaz de apuntar su navegador web en http: // localhost: 8080 / # / para ver "Esta es la página de la lista", a continuación, apúntelo en http: // localhost: 8080 / # / React para ver nuestra página antigua .</p>

<p className="p">That’s it! You should be able to point your web browser at http://localhost:8080/#/ to see “This is the list page”, then point it at http://localhost:8080/#/react to see our old page.</p>
<p className="it">Eso no fue duro, ¿verdad? Derecha. Pero tampoco fue muy útil: necesitamos una forma para que los usuarios puedan seleccionar un repositorio de GitHub para ver, lo que significa actualizar nuestra página de lista ...</p>

<p className="p">That wasn’t hard, right? Right. But neither was it very useful: we need a way for users to be able to select a GitHub repository to view, which means upgrading our List page…</p>



</div>
    </div>
  </Layout>
)