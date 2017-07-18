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

<h1>State vs Props in React</h1>
<p className="it">Ya hemos visto cómo pasar los props a un componente React para darle algunos valores iniciales, pero ¿qué pasa entonces? ¿Qué pasa si el componente necesitas actualizar esos props porque el usuario hizo clic en un botón o introdujo algún texto o, o o…?</p>


<p className="p">We’ve already seen how to pass props to a React component in order to give it some starting values, but what happens then – what if the component needs to update those props because the user clicked a button, or entered some text, or, or, or…?</p>
<p className="it">React tiene una solución y se llama estado. Estado se ve y funciona como props, con una excepción: mientras que los props son de sólo lectura por su propio componente, cualquier componente puede cambiar su propio estado o incluso el estado de un componente diferente si lo desea.</p>


<p className="p">React has a solution and it’s called state. State looks and works just like props, with one exception: while props are read-only by their owning component, any component can change its own state or even a different component’s state if it wants to.</p>
<p className="it">Es importante que entienda que el almacenamiento del estado es totalmente opcional, y de hecho es preferible evitarlo cuando sea posible. Ves, si se resta el estado de un componente, se obtiene lo que se llama un "componente sin estado" o "componente tonto", que es un componente que siempre hará lo mismo cuando se le da el mismo conjunto de props. Los componentes apátridas son más fáciles de entender y fáciles de probar, lo que siempre es una buena cosa.</p>


<p className="p">It’s important that you understand storing state is entirely optional, and indeed it’s preferable to avoid it where possible. You see, if you subtract state from a component, you get what is called a “stateless component” or “dumb component”, which is a component that will always do the same thing when given the same set of props. Stateless components are easier to understand and easier to test, which is always a good thing.</p>
<p className="it">Sin embargo, tendrá que utilizar el estado en algún momento, así que vamos a darle una oportunidad. Ahora publicamos un nuevo nombre y lugar cada vez que el componente es renderizado, pero podríamos modificar nuestra clase para que calculemos el nombre y el lugar cuando se creó entonces nunca más - lo estamos haciendo aleatorio cuando la página se carga, luego parte Del estado del componente a partir de entonces.</p>


<p className="p">Still, you will need to use state at some point, so let’s give it a try. Right now we output a new name and place every time the component is rendered, but we could modify our class so that we calculate the name and place when it’s created then never again – we’re making it random when the page loads, then part of the component state thereafter.</p>
<p className="it">Para hacer esto debes aprender tres cosas nuevas: constructor(), <code>super()</code> y la propiedad this.state.</p>


<p className="p">To do this you need to learn three new things: constructor(), <code>super()</code> and the <code>this.state</code> property.</p>
<p className="it">El método <code>constructor()</code> se llama automáticamente cuando se crea un objeto y nos da la oportunidad de realizar cualquier trabajo de inicialización necesario para hacer que el objeto sea útil. Esto sólo se llama una vez para cada objeto, y nunca lo llaman directamente.</p>


<p className="p">The <code>constructor()</code> method is automatically called when an object is created, and gives us chance to do any initialization work required to make the object useful. This only gets called once for each object, and you never call it directly.</p>
<p className="it">El método <code>super()</code> es un método especial que significa "llame a este mismo método en cualquier clase de la que heredé". Si recuerda, nuestro componente de Detalle se basa en React.Component: es lo que significa esta línea:</p>


<p className="p">The <code>super()</code> method is a special method that means “call this same method on whichever class I inherited from.” If you remember, our Detail component builds on <code>React.Component</code> – that’s what this line means:</p>


<pre>class Detail extends <code>React.Component</code> &#123;<br></br>
</pre>

<p className="it">Esto significa que nuestro componente Detail obtiene toda la funcionalidad proporcionada por su clase padre, Re- act.Component. También significa que es una buena práctica dejar <code>React.Component</code> hacer su propia inicialización si es necesario, que es lo que <code>super()</code> hace: le dice a la clase padre que siga adelante y ejecutá el mismo método en sí mismo antes de que podamos continuar.</p>


<p className="p">This means our Detail component gets all the functionality provided by its parent class, Re- act.Component. It also means that it’s good practise to let <code>React.Component</code> do its own initialization if it needs to, which is what <code>super()</code> does: it tells the parent class to go ahead and run the same method on itself before we can continue.</p>
<p className="it">Finalmente, la propiedad this.state. Esto no está definido de forma predeterminada (es decir, no existe), pero puede crearlo para que sea un diccionario de elementos que contengan datos válidos de ES6.</p>


<p className="p">Finally, the <code>this.state</code> property. This is undefined by default (i.e., it doesn’t exist), but you can create it to be a dictionary of items that contain any valid ES6 data.</p>


<p className="it">Poniendo esas tres cosas juntas vamos a 1) escribir un constructor para el componente Detail que 2) llama a <code>super()</code> para que <code>React.Component</code> pueda hacer cualquier inicialización que necesite, entonces 3) establece <code>this.state</code> como un valor Que contiene un nombre y un país de nuestra persona al azar.</p>


<p className="p">Putting those three things together we’re going to 1) write a constructor for the Detail component that 2) calls <code>super()</code> so that <code>React.Component</code> can do any initializing it needs to, then 3) sets <code>this.state</code> to be a value containing a name and a country of our random person.</p>
<p className="it">Aquí está el código para hacer eso - poner esto justo por encima del método <code>buttonClicked()</code> que existe ahora:</p>


<p className="p">Here’s the code to do just that – put this just above the <code>buttonClicked()</code> method that exists right now:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Hice sneak una pequeña cosa extra en allí, que es que <code>constructor()</code> toma componentes del componente como su único parámetro de entrada. Esto debe ser transmitido con el <code>super()</code> para que la clase padre pueda actuar sobre esos props según sea necesario.</p>


<p className="p">I did sneak one extra little thing in there, which is that <code>constructor()</code> takes the component’s props as its only input parameter. This must get passed on with the <code>super()</code> so that the parent class can act on those props as needed.</p>
<p className="it">Así que, ahora que el nombre y el país de nuestra persona están siendo configurados, podemos ajustar nuestro método <code>render()</code> para usarlos:</p>


<p className="p">So, now that the name and country of our person are being set up front, we can adjust our <code>render()</code> method to use them:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">La página resultante puede parecer la misma, pero si hace clic en el botón verá que no pasa nada</p>


<p className="p">The resulting page might look the same, but if you click the button you’ll see that nothing happens</p>
<p className="it">- el nombre y el país que se muestra nunca cambian, aunque todo funciona correctamente. La razón de esto es porque los valores de nombre y país se configuran cuando se crea el componente, no cuando se procesa, por lo que no importa cuántas veces se invoca a <code>forceUpdate()</code>: la salida no cambiará.</p>


<p className="p">– the name and country being shown never change, even though it’s all working correctly. The reason for this is because the name and country values are set up when the component is created, not when it’s rendered, so it doesn’t matter how many times <code>forceUpdate()</code> gets called: the output won’t change.</p>










</div>

</div>
  </Layout>
)
