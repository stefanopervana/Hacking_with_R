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
<h1>How to Add a New Route to React Router</h1>
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