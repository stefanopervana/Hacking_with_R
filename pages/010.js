import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='010'>
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

<h1>Handling Events with JSX: onClick</h1>
<p className="it">El evento <code>onClick</code> ha existido desde hace mucho tiempo, y permite a los desarrolladores llamar a un fragmento de código en particular cuando el usuario hace clic o teclea un elemento en particular. También podes usar esto en React, pero la sintaxis es un poco diferente. Para ampliar nuestro código actual, es posible que deseemos agregar un botón que muestre un nombre aleatorio diferente y un país cada vez que se haga clic.</p>

<p className="p">The <code>onClick</code> event has been around for a long time, and it lets developers call a particular piece of code when the user clicks or taps a particular item. You can use this in React too, but the syntax is a little different. To extend our current code, we might want to add a button that shows a different random name and country every time it’s clicked.</p>

<p className="it">Principalmente gracias a algunas peculiaridades históricas de JavaScript, hay tres principales maneras de llamar a los métodos en React/ES6, de los cuales los dos primeros son los más comunes. Aquí está el ejemplo más básico:</p>

<p className="p">Thanks mainly to some historical quirks of JavaScript, there are three primary ways of calling methods in React/ES6, of which the first two are by first the most common. Here’s the most basic example:</p>

<code>src/pages/Detail.js</code>

<pre>
class Detail extends <code>React.Component</code> &#123;<br></br>
buttonClicked() &#123;<br></br>
console.log('Button was clicked!')<br></br>
&#125;<br></br>
render() &#123;<br></br>
return (&#60;div&#62;<br></br>
&#60;p&#62;Hello, &#123;chance.first()&#125;.&#60;/p&#62;<br></br>
&#60;p&#62;You're from &#123;chance.country(&#123; full: true &#125;)&#125;.&#60;/p&#62;<br></br>
&#60;button onClick=&#123;this.buttonClicked&#125;&#62;Meet Someone New&#60;/button&#62;<br></br>
&#60;/div&#62;);<br></br>
&#125;<br></br>
&#125;<br></br>
export default Detail;
</pre>


<p className="it">Hay tres cosas nuevas:</p>
<p className="p">There are three new things there:</p>

<ul>
<li className="it">El elemento <code>&lt;button&gt;</code> JSX es idéntico al elemento <code>&lt;button&gt;</code> HTML: dibuja un botón al que se le puede hacer clic en la pantalla, en este caso diciendo "Meet Someone New".</li>

<li className="p">The <code>&#60;button&#62;</code> JSX element is identical to the <code>&#60;button&#62;</code> HTML element: it draws a clickable button on the screen, in this case saying “Meet Someone New”.</li>
<li className="it"><code>onClick=&#123;this.buttonClicked&#125;</code> es la forma de adjuntar eventos a elementos JSX. No debes poner comillas alrededor de él como lo habrías hecho con HTML -  después de todo, este es el código al que se llama.</li>

<li className="p"><code>onClick=&#123;this.buttonClicked&#125;</code> is how you attach events to JSX elements. You shouldn’t put quotes around it like you would have done with HTML – this is code being called, after all.</li>
<li className="it">Hay un nuevo método <code>buttonClicked()</code> que escribe algún texto en la ventana de la consola del navegador. Utilizá esto para significar "este es mi método en comparación con el de alguien más".</li>

<li className="p">There’s a new <code><code>buttonClicked()</code></code> method that writes some text to your browser’s console window. It uses this to mean “this is my method as opposed to someone else’s.”</li>
</ul>

<p className="it">Guardá ese código e intentá hacer clic en el botón - deberías poder ver el mensaje que está imprimiendo. Por lo tanto, esa es la primera manera de llamar a los métodos cuando ocurren eventos, y espero que estes de acuerdo en que es fácil.</p>

<p className="p">Save that code and try clicking the button – you should be able to see the message being printed out. So, that’s the first way to call methods when events occur, and I hope you’ll agree it’s easy.</p>
<p className="it">La segunda forma es donde aparecen las peculiaridades de JavaScript. No sólo queremos escribir un texto en la consola de depuración, queremos volver a representar nuestro componente para que se genere un nuevo nombre y lugar. Los componentes de React tienen un método especial (si se utiliza rara vez) horneado para hacer precisamente eso, y se llama <code>forceUpdate()</code>. Por lo tanto, podrías pensar en escribir código como este:</p>
<p className="p">The second way is where the JavaScript quirks come in. We don’t just want to write some text to the debug console, we want to re-render our component so that a new name and place are generated. React components have a special (if rarely used) method baked in to do just that, and it’s called <code>forceUpdate()</code>. So, you might think of writing code like this:</p>



<pre>&#60;button onClick=&#123;this.forceUpdate&#125;&#62;Meet Someone New&#60;/button&#62;</pre>


<p className="it">Lamentablemente eso no funciona. Y no funciona porque JavaScript se confunde lo que quiere decir con "this". Bueno, no está confundido, pero todo el mundo ciertamente lo esta. Así que mientras el método <code>render()</code> sabe que esto se refiere a la instancia actual del componente <code>Detail</code>, el código dentro del método <code>forceUpdate()</code> no lo sabrá y obtendrá errores.</p>


<p className="p">Sadly that doesn’t work. And it doesn’t work because JavaScript gets confused what you mean by “this”. Well, it isn’t confused, but everyone else certainly is. So while the <code>render()</code> method knows that this refers to the current instance of the <code>Detail</code> component, the code inside the <code>forceUpdate()</code> method won’t know, and you’ll get errors.</p>
<p className="it">Sí, esto es confuso. Sí, es desagradable. Y sí, estás atascado con él. Afortunadamente hay una solución relativamente simple: un método especial llamado <code>bind()</code> que te permite el forzar a JavaScript a usar una definición de esto que especificas. Es decir, decis literalmente, "cuando veas 'this', me estoy refiriendo a X, no a tu propia idea loca de lo que podría ser".</p>

<p className="p">Yes, this is confusing. Yes, it’s unpleasant. And yes, you’re stuck with it. Fortunately there’s a relatively simple solution: a special method called <code>bind()</code> that lets you force JavaScript to use a definition of this you specify. That is, you literally say, “when you see ‘this’, I mean X, not your own crazy idea of what it might be.”</p>
<p className="it">Para usar <code>bind()</code> basta con ponerlo después del nombre del método que deseas llamar, luego asegurate de pasar el valor actual de este para hacer que es el utilizado en su método. No te preocupes si esto es confuso: esto es un problema de JavaScript, no es tu problema.</p>

<p className="p">To use <code>bind()</code> just put it after the method name you want to call, then make sure and pass in the current value of this to make that the one used inside your method. Don’t worry if this is confusing: this is a JavaScript problem, not a you problem.</p>
<p className="it">Para resolver este problema de una vez por todas, necesitamos llamar a <code>buttonClicked()</code> usando bind (this), entonces podemos llamar a <code>forceUpdate()</code> desde dentro de <code>buttonClicked()</code>.</p>

<p className="p">To solve this problem once and for all, we need to call <code>buttonClicked()</code> using bind(this), then we can safely call <code>forceUpdate()</code> from inside <code>buttonClicked()</code>.</p>

<p className="it">Primero lo primero, aquí está el código del nuevo botón:</p>
<p className="p">First things first, here’s the new button code:</p>

<code>src/pages/Detail.js</code>

<pre>&#60;button onClick=&#123;this.buttonClicked.bind(this)&#125;&#62;Meet Someone New&#60;/button&#62;</pre>
 


<p className="it">Ahora aquí está el nuevo método <code>buttonClicked()</code>:</p>
<p className="p">Now here’s the new <code>buttonClicked()</code> method:</p>

<code>src/pages/Detail.js</code>


<pre>buttonClicked() &#123;<br></br>
                this.forceUpdate();<br></br>
                &#125;</pre>


<p className="it">Guardá esos cambios, luego intentá hacer clic en tu botón - fácil, ¿eh?</p>
<p className="p">Save those changes, then try clicking your button – easy, huh?</p>

<p className="it">Una última cosa antes de continuar - Y ESTO necesitas UNA GRAN ADVERTENCIA EN LETRAS MAYUSCULAS - debes tener cuidado de no escribir esto por accidente:</p>
<p className="p">One last thing before we continue – AND THIS NEEDS A BIG WARNING IN CAPITAL LETTERS
– you must be careful not to write this by accident:</p>

<pre>&#60;button onClick=&#123;this.buttonClicked(this)&#125;&#62;Meet Someone New&#60;/button&#62;</pre>

<p className="it">Tenés en cuenta cómo se está perdiendo la parte <code>.bind</code>? Es un error que harás tarde o temprano, así que quiero explicar brevemente por qué es un error.</p>
<p className="p">Notice how that’s missing the <code>.bind</code> part? It’s a mistake you will make sooner or later, so I want to explain briefly why it’s a mistake.</p>


<p className="it">La diferencia es la siguiente: si escribís <code>onClick=&#123;this.buttonClicked(this)&#125;</code> ese código se llama inmediatamente cuando se ejecuta tu página, no cuando se hace clic en el botón. Y debido a que ese método llama a <code>forceUpdate()</code>, significa que <code>render()</code> se llama de nuevo, así que <code>onClick=&#123;this.buttonClicked(this)&#125;</code> se llama de nuevo, por lo que <code>forceUpdate()</code> se llama de nuevo ... ad infinitum - o al menos hasta que tu Navegador web se da por vencido, lo que es probablemente alrededor de un millar de veces a través de ese bucle.</p>

<p className="p">The difference is this: if you write <code>onClick=&#123;this.buttonClicked(this)&#125;</code> that code gets called immediately when your page is run, not when the button is clicked. And because that method calls <code>forceUpdate()</code>, it means that <code>render()</code> gets called again, so <code>onClick=&#123;this.buttonClicked(this)&#125;</code> gets called again, so <code>forceUpdate()</code> gets called again… ad infinitum – or at least until your web browser gives up, which is probably about a thousand or so times through that loop.</p>

<p className="it">Por lo tanto: si se desencadena un evento y necesitas usar esto dentro del método para manejar ese evento, debe usar <code>bind()</code> para asegurarte de que esto es lo que crees que es, y también para asegurarte de que el código no te llama de inmediato .</p>

<p className="p">So: if an event is triggered and you need to use this inside the method to handle that event, you need to use <code>bind()</code> to make sure this is what you think it is, and also to ensure the code is not called straight away.</p>

<div>
<center><nav className="center">
<Link href='/009'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/011'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>



</div>

</div>
  </Layout>
)
