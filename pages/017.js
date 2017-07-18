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
<h1>Converting GitHub’s JSON into Meaningful JSX</h1>
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



</div>
    </div>
  </Layout>
)