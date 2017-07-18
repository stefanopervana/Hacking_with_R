import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='007'>
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

<h1>Generating Random Values for Our Page</h1>
<p className="it">Nuestro componente <code>Detail</code> está ejecutando ahora código para renderizar el texto que se le pasa como prop, pero también podría renderizar otro código ES6 válido. Para demostrar esto, vamos a aprovechar la biblioteca <code>Chance</code>, que genera datos aleatorios realistas.</p>

<p className="p">Our <code>Detail</code> component is now executing code to render the text that gets passed to it as props, but it could easily render other valid ES6 code too. To demonstrate this, let’s pull in the <code>Chance</code> library, which generates realistic-looking random data.</p>


<p className="it">En la ventana de tu terminal, ejecutá este comando:</p>

<p className="p">In your terminal window, run this command:</p>


<code>npm install --save chance</code>
 
<p className="it">Seguramente todavía estará ejecutando <code>Webpack Dev Server</code>, pero eso está bien - presioná <code>Ctrl+C</code> para salir de eso, luego ejecutá el comando npm anterior. Una vez que haya terminado, podes reiniciar <code>Webpack Dev Server</code> de nuevo ejecutando <code>webpack-dev-server</code>.</p>

<p className="p">You were probably still running <code>Webpack Dev Server</code> in there, but that’s OK - press <code>Ctrl+C</code> to quit that, then run the npm command above. Once that’s finished you can restart Webpack Dev Server again by running <code>webpack-dev-server</code>.</p>

<p className="it">La biblioteca Chance genera datos aleatorios de aspecto realista, lo que significa que puede generar nombres aleatorios, apellidos, frases de texto, números de seguridad social y así sucesivamente. Esto hace que sea un buen caso de prueba para imprimir información. Para utilizarla, debe importar la biblioteca en <code>Detail.js</code>, de la siguiente manera:</p>

<p className="p">The Chance library generates realistic-looking random data, which means it can generate random first names, last names, sentences of text, social security numbers and so on – this makes it a good test case for printing out some information. To use it you need to import the library into <code>Detail.js</code>, like this:</p>

<code>src/pages/Detail.js</code>

<pre>return <p>Hello, &#123;chance.first()&#125;!</p>;</pre>

<p className="it">A continuación, podes generar nombres aleatorios dentro del método <code>render()</code> de la siguiente manera:</p>

<p className="p">You can then generate random first names inside the <code>render()</code> method like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 
<p className="it">Sólo para asegurarte de que estás siguiendolo bien, así es cómo tu archivo <code>Detail.js</code> debe estar una vez que estos cambios se hacen:</p>

<p className="p">Just to make sure you’re following along, here’s how your <code>Detail.js</code> file should look once these changes are made:</p>

<code>src/pages/Detail.js</code>

<pre>
1 import React from 'react';<br></br>
2 import Chance from 'chance';<br></br>
3<br></br>
4 class Detail extends React.Component &#123;<br></br>
5 render() &#123;<br></br>
6 return <p>Hello, &#123;chance.first()&#125;!</p>;<br></br>
7 &#125;<br></br>
8 &#125;<br></br>
9<br></br>
10 export default Detail;</pre>

<p className="it">Si guardas ese archivo y miras hacia atrás en tu navegador, verás “Hello, Emma!” O similar, y podes pulsar refresh en tu navegador para ver un nombre diferente.</p>

<p className="p">If you save that file and look back in your web browser you’ll see “Hello, Emma!” or similar appear, and you can hit refresh in your browser to see a different name.</p>
<p className="it">Así que podes ver que estamos literalmente llamando al primer método en la biblioteca del azar justo allí durante la renderización, y espero que esté claro que de hecho poner código en llaves como este es muy poderoso.</p>

<p className="p">So you can see we’re literally calling the first() method in the Chance library right there while rendering, and I hope it’s clear that putting code into braces like this is very powerful indeed.</p>
<p className="it">Pero hay una trampa, y es grande. De hecho, es un retén tan grande que el pescador contará cuentos sobre él en los próximos años ...</p>

<p className="p">But there’s a catch, and it’s a big one. In fact, it’s a catch so big that fisherman will tell tall tales about it for years to come…</p>
<div>
<center><nav className="center">
<Link href='/006'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/008'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>



</div>

</div>
  </Layout>
)
