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
<h1>How to Upgrade Our App to Read Three Feeds</h1>
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










</div>
    </div>
  </Layout>
)