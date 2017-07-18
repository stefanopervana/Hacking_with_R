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

<h1>Adding a Root Route Using React Router and IndexRoute</h1>
<p className="it">Este tema es confuso para las personas con un acento similar a la mía, porque yo pronunciar "raíz" y "ruta" de manera idéntica, mientras que muchas otras personas pronunciar "ruta" y "derrota" de manera idéntica.</p>

<p className="p">This topic is confusing for people with a similar accent to mine, because I pronounce “root” and “route” identically, whereas many other people pronounce “route” and “rout” identically.</p>
<p className="it">Independientemente de ello, una ruta raíz (y no una raíz raíz) es una ruta de React Router que se encuentra en el núcleo mismo de nuestra aplicación y se procesará sin importar qué ruta se alcance. Bueno, técnicamente es un poco más complicado que eso, pero solo considérelo un paso más en la Escala de Wittgenstein.</p>

<p className="p">Regardless, a root route (and not a root root) is a React Router path that sits at the very core of our app, and will be rendered no matter what path is reached. Well, technically it’s a little more complicated than that, but just consider it one more step on Wittgenstein’s Ladder.</p>
<p className="it">Vamos a crear una ruta raíz como una forma de dar a nuestras páginas un diseño de envoltura común. React Router hará que nuestra ruta raíz en primer lugar, que a su vez es responsable de la prestación de sus hijos.</p>

<p className="p">We’re going to create a root route as a way of giving our pages a common wrapper layout. React Router will render our root route first, which in turn is responsible for rendering its children.</p>
<p className="it">Comencemos ahora: cree un nuevo archivo en el <code>src/pages</code>directorio, y llámelo App.js. Usaremos esto para mostrar alguna marca básica para nuestra aplicación web, luego mostraremos todo el contenido de nuestra página infantil a continuación. Por favor, dé el nuevo contenido de este archivo:</p>

<p className="p">Let’s get started now: create a new file in the <code>src/pages</code> directory, and call it App.js. We’ll use this to show some basic branding for our web app, then show all the content from our child page below. Please give the new file this content:</p>

<code>src/pages/App.js</code>

<pre></pre>

<p className="it">La única parte realmente interesante de ese código es &#123;this.props.children&#125;. Todo lo que significa es "hacer que mis componentes hijo aquí", por lo que todo este nuevo componente de la aplicación es añadir un título por encima de cualquier componente de la página se representa debajo de ella - es decir, nuestros componentes de lista y detalle.</p>

<p className="p">The only really interesting part of that code is &#123;this.props.children&#125;. All it means is “render my child components here,” so all this new App component does is add a heading above whatever page component is rendered beneath it – i.e., our List and Detail components.</p>
<p className="it">La página en sí era bastante simple, pero ahora necesitamos actualizar nuestro archivo index.js, y esto es un poco más complicado porque necesitas aprender dos nuevos conceptos:</p>

<p className="p">The page itself was simple enough, but now we need to update our <code>index.js</code> file, and this is a little trickier because you need to learn two new concepts:</p>


<p className="it">Cualquier ruta puede tener rutas secundarias dentro de ella, y éstas se basan en la ruta principal.</p>

<p className="p">Any route can have child routes inside it, and these build upon the parent route.</p>
<p className="it">Si desea que se use una ruta secundaria como predeterminada cuando ningún otro niño coincide, utiliza una ruta especial denominada &lt;IndexRoute&gt;.</p>

<p className="p">If you want a child route to be used as the default when no other child matches, you use a special route called &#60;IndexRoute&#62;.</p>

<p className="it">Ninguno de estos conceptos tendrá sentido sin un ejemplo práctico, así que quiero modificar <code>index.js</code> de inmediato para que pueda ver ambas cosas en acción. Aquí está el nuevo código:</p>

<p className="p">Neither of those concepts will make any sense without a practical example, so I want to modify
index.js immediately so you can see both of those new things in action. Here’s the new code:</p>

<code>src/index.js</code>

<pre></pre>


<p className="it">Verás que he añadido una importación para el nuevo componente de aplicación que creamos hace unos momentos, pero la principal diferencia es la siguiente:</p>

<p className="p">You’ll see I’ve added an import for the new App component we created a few moments ago, but the main difference is this:</p>

<pre></pre>

<p className="it">Esa es la estructura React Router para esos dos nuevos conceptos que acabo de presentar. En primer lugar, observe el nuevo componente &lt;IndexRoute&gt;: significa que "si mi ruta principal fue igualada, pero ninguno de mis hermanos coincidió, renderme". En segundo lugar, observe cómo &lt;Route path = "/" component = &#123;App&#125; Cosas dentro de ella: el IndexRoute y otra Ruta.</p>

<p className="p">That’s the React Router structure for those two new concepts I just introduced. First, notice the new &#60;IndexRoute&#62; component: it means “if my parent route was matched but none of my siblings matched, render me.” Second, notice how &#60;Route path="/" component=&#123; App &#125;&#62; actually contains two things inside it: the IndexRoute and another Route.</p>


<p className="it">	Antes de continuar quiero explicar estos dos conceptos en un poco más de profundidad, ya que ambos son fáciles de equivocarse. Si vos piensa que usted los entiende, sienta libre de saltar adelante.</p>

<p className="p">	Before continuing I want to explain both of these concepts in a bit more depth because they are both easy to get wrong. If you think you understand them, feel free to skip ahead.</p>
<p className="it">	El &lt;IndexRoute&gt; es importante, y para explicar lo que hace vamos a fingir que no está allí. Si el usuario navega a http: // localhost: 8080 /, coincidirá con la ruta de la aplicación (path = "/"), pero no coincidirá con la ruta de detalle (path = "detail /: repo"), Que vería es "Unofficial GitHub Browser v0.1" en texto grande.</p>

<p className="p">	The &#60;IndexRoute&#62; is important, and to explain what it does let’s pretend it isn’t there. If the user navigates to http://localhost:8080/, it would match the App route (path=”/”), but it wouldn’t match the Detail route (path=”detail/:repo”), so all they would see is “Unofficial GitHub Browser v0.1” in large text.</p>
<p className="it">	Si queríamos usar un &lt;Route&gt; regular en lugar de &lt;IndexRoute&gt;, ¿qué ruta tendría? Puede suponer algo como &lt;Route path = "" component = &#123;List&#125; /&gt;, pero eso simplemente no funciona. Esto es lo que &lt;IndexRoute&gt; nos da: un niño por defecto para el componente App que se utilizará cuando ninguna otra ruta coincida.</p>

<p className="p">	If we wanted to use a regular &#60;Route&#62; in place of the &#60;IndexRoute&#62;, what path would it have? You might guess something like &#60;Route path="" component=&#123; List &#125; /&#62;, but that just doesn’t work. This is what &#60;IndexRoute&#62; gives us: a default child for the App component that will be used when no other route matches.</p>
<p className="it">	El segundo concepto es tener una ruta dentro de otra, que se llama ruta anidada. Cuando anidan rutas, es decir, ponen una ruta dentro de otra, se acumulan como se vio anteriormente usando this.props.children.</p>

<p className="p">	The second concept is having one route inside another, which is called a nested route. When you nest routes – i.e., put one route inside another - they build up as saw earlier using this.props.children.</p>
<p className="it">	En este momento tenemos una estructura muy sencilla: nuestro componente App en la base, luego List o Detail dependiendo de lo que coincida. Pero es posible tener rutas dentro de rutas dentro de rutas dentro ... bueno, usted consigue el punto. Si D está dentro de C, que está dentro de B, que está dentro de A, entonces los cuatro componentes se renderizan, agregando sus propias partes a su interfaz de usuario según sea necesario.</p>

<p className="p">	Right now we have a very simple structure: our App component at the base, then either List or Detail depending on what was matched. But it’s possible to have routes inside routes inside routes inside… well, you get the point. If D is inside C, which is inside B, which is inside A, then all four components get rendered, adding their own parts to your user interface as needed.</p>
<p className="it">	Es debido a este anidamiento que las rutas secundarias no necesitan comenzar con un / en su camino. Si nos fijamos en nuestra lista de rutas desde hace 20 minutos, usamos &lt;Route path = "/ detail /: repo" component = &#123;Detail&#125; /&gt; pero ahora no necesitamos iniciar la ruta con a / porque ya coincidimos Esa parte de la URL en la ruta principal.</p>

<p className="p">	It’s because of this nesting that child routes don’t need to start with a / in their path. If you look back to our routes list from 20 minutes ago we used &#60;Route path="/detail/:repo" component=&#123; Detail &#125; /&#62; but now we don’t need to start the path with a / because we already matched that part of the URL in the parent route.</p>
<p className="it">	Ahora, en aras de la integridad debo agregar que podes comenzar caminos de la ruta del niño con a / si usted desea, pero tiene un significado muy especial: permite especificar una URL exacta para una trayectoria del niño (el ignorar lo que su fósforo de los padres ) Mientras se mantiene la representación de componentes anidados. Es inteligente y me encanta que esté disponible, pero en esta etapa de tu carrera de React lo dejaría fuera si fuera tú.</p>

<p className="p">	Now, for the sake of completeness I should add that you can start child route paths with a / if you want to, but it has a very special meaning: it lets you specify an exact URL for a child path (ignoring whatever its parents match) while keeping the nested component rendering. It’s clever and I love that it’s available, but at this stage in your React career I’d leave it out if I were you.</p>




</div>
        </div>
  </Layout>
)