import Layout from '../components/layout'

export default() => (
  <Layout title='Ch3'>
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

<h1>Rendering an Array of Data with map() and JSX</h1>
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








</div>

</div>
  </Layout>
)
