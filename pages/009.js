import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='009'>
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


<h1>Using JSX to Render Several Elements at Once</h1>
<p className="it">Nuestro código actual no es muy emocionante, pero espero que puedas sentir que estás aprendiendo cosas. Para hacer las cosas más interesantes, vamos a imprimir un nombre y un país para nuestra persona ficticia.</p>

<p className="p">Our current code isn’t very exciting, but I hope you can feel you’re learning things. To make things more interesting, let’s print both a name and a country for our fictional person.</p>
<p className="it">Esto es fácil de hacer con la biblioteca <code>Chance</code> que ya hemos añadido, pero primero debes quitar la expresión ternaria si la agregaste, volviendo a un método <code>render()</code> muy básico como este:</p>

<p className="p">This is easy to do with the <code>Chance</code> library we already added, but first please remove the ternary expression if you added it, going back to a very basic <code>render()</code> method like this:</p>

<code>src/pages/Detail.js</code>

<pre>
    return <p>Hello, &#123;chance.first()&#125;!</p>;

</pre>
 

<p className="it">OK, agradable y fácil otra vez. Añadir un nombre de país al azar con <code>Chance</code> se hace así:</p>

<p className="p">OK, nice and easy again. Adding a random country name using <code>Chance</code> is done like this:</p>


<pre></pre>
 

<p className="it">Eso devolverá "Australia" u otros nombres de países, listos para usar, por lo que podrías pensar que podríamos modificar nuestro método <code>render()</code> para que se parezca a algo así:</p>

<p className="p">That will return “Australia” or other country names, ready to use, so you might think we could modify our <code>render()</code> method to look something like this:</p>


<pre></pre>

<p className="it">Pero si lo intentás encontrarás que React se niega a cargar tu página. Dentro de la consola de mensajes de tu navegador, verá una pared de mensajes de error en rojo que te indica que tu JSX no es válido. Entonces, ¿qué salió mal?</p>

<p className="p">But if you try that you’ll find that React refuses to load your page. Inside your browser’s message console you’ll see a wall of red error messages telling you that your JSX is invalid. So what went wrong?</p>
<p className="it">Bueno, al igual que con las expresiones ternarias, esta es otra instancia en la que debes "mirar detrás de la cortina" de JSX para ver qué está pasando: tu método <code>render()</code> devuelve uno y solo un valor y cada uno de esos elementos &lt;p&gt; Se convierte en código cuando se crea tu aplicación. Por lo tanto, cuando la aplicación se construye, tener dos elementos &lt;p&gt; significa que está tratando de devolver dos valores, lo que no es posible.</p>

<p className="p">Well, as with ternary expressions this is another instance where you need to “look behind the curtain” of JSX to see what’s going on: your <code>render()</code> method gets to return one and only one value, and each of those &#60;p&#62; elements gets converted into code when your app is built. So, when the app gets built, having two &#60;p&#62; elements means you’re trying to return two values, which isn’t possible.</p>

<p className="it">Hay una solución, y es fácil: envolver esos dos elementos &lt;p&gt; dentro de otro elemento, por ejemplo un elemento &#60;div&#62;. Si lo haces, JSX puede ver claramente el inicio y el final de un único valor de retorno, y todo funciona de nuevo.</p>



<p className="p">There is a solution, and it’s an easy one: wrap those two &#60;p&#62; elements inside another element, e.g. &#60;div&#62; element. If you do that, JSX can clearly see the start and end of a single return value, and everything works again.</p>

<p className="it">Así que, de nuevo, aquí está el código malo:</p>
<p className="p">So, again, here’s the bad code:</p>



<pre>render() &#123;
return &#60;p&#62;Hello, &#123;chance.first()&#125;.&#60;/p&#62;
&#60;p&#62;You're from &#123;chance.country(&#123; full: true &#125;)&#125;.&#60;/p&#62;;
&#125;

</pre>


<p className="it">Y aquí está el código fijo que envuelve ambos &lt;p&gt; elementos dentro de un solo &lt;div&gt;:</p>
<p className="p">And here’s the fixed code that wraps both those &#60;p&#62; elements inside a single &#60;div&#62;:</p>

<code>src/pages/Detail.js</code>

<pre>

render() &#123;
return (&#60;div&#62;
&#60;p&#62;Hello, &#123;chance.first()&#125;.&#60;/p&#62;
&#60;p&#62;You're from &#123;chance.country(&#123; full: true &#125;)&#125;.&#60;/p&#62;
&#60;/div&#62;);
&#125;
</pre>

<p className="it">No importa cuántos elementos de niño (o elementos de nieto, nietos, etc.) tenga &lt;div&gt;, siempre y cuando haya un solo elemento que seá devuelto.</p>

<p className="p">It doesn’t matter how many child elements (or grandchild elements, great-grandchild elements, etc) that &#60;div&#62; has, as long as there is only one element being returned.</p>


<p className="it">No es posible devolver más de un elemento JSX del método <code>render()</code> y generará muchos mensajes de error.</p>
<p className="p">Returning more than one JSX element from your <code>render()</code> method is not possible and will output a great many error messages.</p>

<div>
<center><nav className="center">
<Link href='/008'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/010'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>


</div>

</div>
  </Layout>
)
