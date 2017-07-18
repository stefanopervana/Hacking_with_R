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

<h2>Creating a Link Between Pages in React Router</h2>
<p className="it">Necesitamos una forma de vincular a los usuarios de nuestra página de lista a nuestra página de detalles, pero no vamos a hacer lo que probablemente estés pensando. Vea, un desarrollador web experimentado como usted habrá escrito &#60;a href="/foobar"&#62; Haga clic aquí! &#60;/a&#62; más veces de las que puede recordar, y probablemente piensa que deberíasmos hacer algo similar aquí.</p>

<p className="p">We need a way to link users from our List page to our Detail page, but we’re not going to do what you’re probably thinking. See, an experienced web developer like you will have written &#60;a href="/foobar"&#62; Click here! &#60;/a&#62; more times than you can remember, and you probably think we should something similar here.</p>
<p className="it">Bueno, no lo somos, porque React Router tiene una solución mejor: el componente &lt;Link&gt;. Esta es una envoltura alrededor de nuestro viejo amigo el ancla HTML, pero tiene el beneficio añadido de que automáticamente sabe dónde están sus componentes y puede ajustar el estilo de un enlace para que parezca activo cuando es la página que el usuario está navegando.</p>

<p className="p">Well, we’re not, because React Router has a better solution: the &#60;Link&#62; component. This is a wrapper around our old friend the HTML anchor, but has the added benefit that it automatically knows where your components are and can adjust the style of a link to make it look active when it’s the page the user is currently browsing.</p>
<p className="it">Esa parte "automáticamente sabe donde están sus componentes" es importante. Recuerde, todas nuestras páginas comienzan con / # / ahora mismo. Si intentaste escribir &lt;a href="/react"&gt; View React Commits &lt;/a&gt;, señalaría / Reactía en lugar de / # / React, por lo que no funcionaría. El componente &lt;Link&gt; de React Router corrige automáticamente.</p>

<p className="p">That “automatically knows where your components are” part is important. Remember, all our pages start with /#/ right now. If you tried to write &#60;a href="/react"&#62;View React Commits&#60;/a&#62; it  would point to /react rather than /#/react, and so wouldn’t work. React Router’s &#60;Link&#62; component fixes that automatically.</p>
<p className="it">Por lo tanto, vamos a cambiar List.js para que contenga un enlace React Router a la página de detalles. Esto significa importar Link de React Router, y luego usarlo, lo cual es trivial.</p>

<p className="p">So, we’re going to change List.js so that it contains a React Router link to the Detail page. This means importing Link from React Router, then using it, which is trivial to do.</p>
<p className="it">Aquí está el List.js nuevo y mejorado:</p>

<p className="p">Here’s the new and improved List.js:</p>

<code>src/pages/List.js</code>

<pre></pre>

<p className="it">A pesar de que estamos enlazando a / React, que se vuelve a escribir silenciosamente por React Router para ser / # / React, lo que significa que nuestras URL actuales siguen funcionando correctamente. También significa que si cambia la configuración de su servidor de modo que todo el / # / no sea necesario, estos enlaces se actualizarán automáticamente.</p>

<p className="p">Even though we’re linking to /react, that gets silently rewritten by React Router to be /#/react, which means our current URLs all carry on working correctly. It also means that if you change your server configuration so the whole /#/ isn’t needed any more, those links will automatically update.</p>

<p className="it">La nueva página Lista utiliza un componente React Router Link para navegar a nuestra página de detalles.</p>

<p className="p">The new List page uses a React Router Link component to navigate to our Detail page.</p>

<h2>Making Custom URLs with React Router Params</h2>
<p className="it">Hasta ahora hemos estado trabajando con el repositorio de React en GitHub, pero ahora es el momento en que empezamos a usar diferentes repositorios también. Específicamente, queremos que los usuarios puedan elegir entre React, React Native y Jest en el componente List, luego cargar el componente Detail correcto para cada uno de ellos.</p>

<p className="p">So far we’ve been working with the React repository on GitHub, but now it’s time we started using different repository as well. Specifically, we want users to be able to choose between React, React Native and Jest in the List component, then load the correct Detail component for each of those.</p>
<p className="it">Actualmente tenemos estas dos rutas definidas en index.js:</p>

<p className="p">We currently have these two routes defined in index.js:</p>

<code>src/index.js</code>
codigo

<p className="it">podrías muy bien pensar que sólo tenemos que extender que así:</p>

<p className="p">You might very well think we just need to extend that like so:</p>

<pre></pre>

<p className="it">Ésa es ciertamente una posibilidad, pero no es flexible ni escalable. ¿No sería mucho mejor si pudiéramos escribir cualquier enlace como / detail / ??? Y que nuestro componente de detalle averigüe qué significa eso? Seguro que lo haría. Y afortunadamente React Router lo hace fácil - de hecho es sólo una cuestión de reescribir sus rutas a esto:</p>

<p className="p">That’s certainly a possibility, but it’s neither flexible or scalable. Wouldn’t it be much better if we could write any link like /detail/??? and have our Detail component figure out what that means? Sure it would. And fortunately React Router makes it easy – in fact it’s just a matter of rewriting your routes to this:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">Si eso es. Simplemente escribiendo: repo en la URL, React Router extraerá automáticamente cualquier texto que aparezca en esa parte de la URL, y luego la pasará al componente Detail para actuar. Claro, todavía tenemos que hacer algo con el nombre del repositorio, pero significa que el componente de detalle funcionará ahora para / detail / react, / detail / react-native y así sucesivamente.</p>

<p className="p">Yes, that’s it. Just by writing :repo in the URL, React Router will automatically pull out whatever text comes in that part of the URL, then pass it to the Detail component to act on. Sure, we still need to actually do something with the repository name, but it means the Detail component will now work for /detail/react, /detail/react-native and so on.</p>
<p className="it">Dado lo fácil que fue el paso, probablemente imagina que hay mucho trabajo por hacer en el componente Detalle. Bueno, usted estaría equivocado: sólo tenemos que cambiar sólo una parte de una línea para que funcione. ¿No es inteligente React Router?</p>

<p className="p">Given how easy that step was, you’re probably imagining there’s lots of work to do in the Detail component. Well, you’d be wrong: we have just to change just one part of one line in order to make it work. Isn’t React Router clever?</p>
<p className="it">En <code>Detail.js</code> busque esta línea dentro del método fetchFeed():</p>

<p className="p">In <code>Detail.js</code> look for this line inside the fetchFeed() method:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Si vos recuerda, que utiliza interpolación de cadena ES6 para que la URL se escribe como ... / react / commits,</p>

<p className="p">If you remember, that uses ES6 string interpolation so that the URL gets written as …/react/commits,</p>
<p className="it">... / React / tirar, etc. Gracias a la magia de React Router, podemos usar la misma técnica exacta con el nombre del repositorio también. Utilizamos: repo dentro de nuestra ruta, y React Router lo hará automáticamente disponible para el componente Detail como this.props.params.repo.</p>

<p className="p">…/react/pulls, etc. Thanks to the magic of React Router, we can use the exact same technique with the name of the repository too. We used :repo inside our route, and React Router will automatically make that available to the Detail component as this.props.params.repo.</p>
<p className="it">Por lo tanto, reemplazar la llamada existente ajax.get() con esto:</p>

<p className="p">So, replace that existing ajax.get() call with this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Que ahora hace una interpolación triple: una vez para la parte: repo de nuestra URL, y de nuevo para el modo de vista que está actualmente seleccionado, es decir, comete, tenazas y tira. He añadido un tercero para baseURL para evitar que la línea sea demasiado larga para leer fácilmente.</p>

<p className="p">That now does a triple interpolation: once for the :repo part of our URL, and again for the view mode that’s currently selected, i.e. commits, forks and pulls. I added a third one for baseURL to avoid the line getting too long to read easily.</p>
<p className="it">El paso final es modificar List.js para que apunte a más de un repositorio. Actualice su método <code>render()</code> a esto:</p>

<p className="p">The final step is to modify List.js so that it points to more than one repository. Update its <code>render()</code> method to this:</p>

<code>src/pages/List.js</code>

<pre></pre>

<p className="it">Ahora Guardá todo su trabajo, y vaya a http: // localhost: 8080 / en su navegador. deberías ver tres enlaces para elegir, cada uno mostrando diferentes repositorios de GitHub. También deberías poder usar el botón de retroceso de tu navegador para volver a la lista y elegir un repositorio diferente.</p>

<p className="p">Now save all your work, and go to http://localhost:8080/ in your browser. You should see three links to choose from, each showing different GitHub repositories. You should also be able to use your browser’s back button to return to the list and choose a different repository.</p>


<p className="it">La nueva página de lista muestra varios repositorios para que el usuario elejí y los tres apuntan a la misma página de detalles.</p>

<p className="p">The new List page shows multiple repositories for the user to choose from, and all three point to the same Detail page.</p>

<h2>Adding a Root Route Using React Router and IndexRoute</h2>
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




<h2>Cleaning up Our Routes and Preparing for the Next Step</h2>
<p className="it">	Vamos a hacer un pequeño cambio en la forma en que nuestra lista de rutas se almacena, entonces es el momento para que usted tome en otra tarea.</p>

<p className="p">	We’re going to make a small change to the way our routes list is stored, then it’s time for you to take on another task.</p>
<p className="it">	Lo primero es lo primero: estamos almacenando nuestra lista de rutas dentro de index.js, lo cual está bien cuando recién comienza, pero tarde o temprano hay que ponerlo en algún otro lugar para hacer que su aplicación sea más fácil de mantener. Bueno, ese momento es ahora, así que crea un nuevo archivo llamado routes.js en tu directorio src donde está index.js.</p>

<p className="p">	First things first: we’re storing our list of routes inside index.js, which is fine when you’re just getting started but sooner or later needs to be put somewhere else to make your app easier to maintain. Well, that time is now, so create a new file called routes.js in your src directory where <code>index.js</code> is.</p>
We’re going to move most of the routing code out from <code>index.js</code> and in to routes.js so that we have a clear separation of concerns. This also means splitting up the import lines: routes.js needs to know all our app’s imports, whereas <code>index.js</code> doesn’t.
Here’s the new code for routes.js

<code>src/routes.js</code>

<pre> 

</pre>	 

<p className="it">Eso importa sólo lo que necesita, luego crea una constante que contiene la configuración de la ruta para nuestra aplicación, y exporta esa constante para que otros puedan usarla.</p>

<p className="p">That imports only what it needs, then creates a constant containing the route configuration for our app, and exports that constant so that others can use it.</p>
<p className="it">Lo que queda en <code>index.js</code> es la configuración básica del enrutador y la llamada principal a ReactDOM.render(). Con el tiempo, a medida que crezca tu aplicación, probablemente añadirás más a este archivo, pero confía en mí: definitivamente te irá mejor si mantienes tu configuración de ruta fuera de tu archivo principal de index.js.</p>

<p className="p">What remains in <code>index.js</code> is the basic router configuration and the main call to ReactDOM.render(). Over time, as your application grows, you’ll probably add more to this file, but trust me on this: you’ll definitely fare better if you keep your route configuration out of your main <code>index.js</code> file.</p>
<p className="it">Aquí está el nuevo código para index.js:</p>

<p className="p">Here’s the new code for index.js:</p>

<code>src/index.js</code>

<pre> 

</pre>

<p className="it">Con esa pequeña limpieza completa es hora de su primer gran desafío.</p>

<p className="p">With that little clean up complete it’s time for your first major challenge.</p>

<h2>Time for a Test: Clickable Usernames</h2>
<p className="it">Es hora de otra prueba de sus habilidades para asegurarse de que está prestando atención. Como antes, te llevaré a través de una solución sencilla una vez que te hayas dado cuenta, y también como antes te recomiendo que uses esta oportunidad para probarlo tú mismo para que puedas identificar qué áreas entiendes bien y cuáles no muy bien.</p>

<p className="p">It’s time for another test of your skills to make sure you’re paying attention. As before, I’ll walk you through a simple solution once you’ve had a go yourself, and also as before I do strongly recommend you genuinely use this chance to try it yourself so you can identify which areas you understand well and which not so well.</p>
<p className="it">Sólo para recapitular, aquí están todas las cosas que has aprendido hasta ahora:</p>

<p className="p">Just to recap, here are all the things you’ve learned so far:</p>
<ul>
<li className="it">Cómo instalar Webpack, Babel y React para el desarrollo con ES6.</li>


<li className="p">How to install Webpack, Babel and React for development with ES6.</li>
<li className="it">Cómo crear un componente básico de React e importarlo en una aplicación.</li>


<li className="p">How to create a basic React component and import it into an application.</li>
<li className="it">Cómo escribir JSX simple para procesar contenido.</li>


<li className="p">How to write simple JSX to render content.</li>
<li className="it">Cómo usar los props para dar valores de un componente.</li>


<li className="p">How to use props to give a component values.</li>
<li className="it">Cómo hacer varios elementos a la vez.</li>


<li className="p">How to render several elements at once.</li>
<li className="it">Cómo manejar eventos como onClick.</li>


<li className="p">How to handle events such as onClick.</li>
<li className="it">Cómo utilizar el estado, y cómo se diferencia de los props.</li>


<li className="p">How to use state, and how it differs from props.</li>
<li className="it">Cómo hacer un bucle y procesar datos en una matriz.</li>


<li className="p">How to loop over and render data in an array.</li>
<li className="it">Cómo obtener datos de GitHub usando SuperAgent y Ajax.</li>


<li className="p">How to fetch data from GitHub using SuperAgent and Ajax.</li>
<li className="it">Cómo utilizar interpolación de cadenas y nombres de propiedad calculados.</li>


<li className="p">How to use string interpolation and computed property names.</li>
<li className="it">Cómo pasar los parámetros usando onClick.</li>


<li className="p">How to pass parameters using onClick.</li>
<li className="it">Cómo crear rutas utilizando React Router.</li>


<li className="p">How to create routes using React Router.</li>
<li className="it">Cómo crear enlaces entre páginas usando &lt;Link&gt;.</li>


<li className="p">How to create links between pages using &lt;Link&gt;.</li>
<li className="it">Cómo renderizar contenido predeterminado usando &lt;IndexRoute&gt;.</li>


<li className="p">How to render default content using &#60;IndexRoute&#62;.</li>
<li className="it">Cómo almacenar sus rutas de React Router separadamente de su código.</li>


<li className="p">How to store your React Router routes separately from your code.</li>
</ul>
<p className="it">debes estar muy orgulloso de su progreso hasta ahora - usted ha aprendido mucho! Por lo tanto, es hora de poner todas sus nuevas habilidades a la prueba con una tarea. Su trabajo es:</p>

<p className="p">You should be very proud of your progress so far – you’ve learned a lot! So, it’s time to put all your new skills to the test with a task. Your job is to:</p>

<p className="it">Crear una nueva página llamada User, almacenada en User.js y disponible en la URL / user / xxxx, donde</p>

<p className="p">Create a new page called User, stored in User.js and available at the URL /user/xxxx, where</p>
<p className="it">Xxxx es el nombre de un usuario para ver.</p>

<p className="p">xxxx is the name of a user to view.</p>
<p className="it">Haga que busque el feed https://api.github.com/users/xxxx/events, de nuevo donde xxxx es el nombre de un usuario.</p>

<p className="p">Make it fetch the feed https://api.github.com/users/xxxx/events, again where xxxx is the name of a user.</p>
<p className="it">Actualice el componente Detalle existente para que todos los nombres de usuario puedan hacer clic, mostrando la página de usuario correcta para ese usuario.</p>

<p className="p">Update the existing Detail component so that all usernames are clickable, showing the correct User page for that user.</p>


<p className="it">Confíe en mí en esto: usted sabe todo necesario hacer que sucede. Es sólo cuestión de usar lo que sabes de diferentes maneras, inspeccionar el JSON de GitHub para seleccionar lo que quieres mostrar, luego de 10 a 20 minutos de codificación en función de lo seguro que te sientes.</p>

<p className="p">Trust me on this: you know everything required to make that happen. It’s just a matter of using what you know in different ways, inspecting the JSON from GitHub to select what you want to show, then 10 to 20 minutes of coding depending on how confident you feel.</p>
<p className="it">¿Todo listo? ¡Ve a por ello!</p>

<p className="p">All set? Go for it!</p>
<p className="it">¿Aún aquí? Estas son algunas sugerencias:</p>

<p className="p">Still here? Here are some hints:</p>

<p className="it">Mira un ejemplo de usuario GitHub en tu navegador web para que puedas ver exactamente lo que estás trabajando con - https://api.github.com/users/jimfb/events es un ejemplo tan bueno como cualquiera.</p>

<p className="p">Look at an example GitHub user in your web browser so you can see exactly what you’re working with – https://api.github.com/users/jimfb/events is as good an example as any.</p>
<p className="it">Deberá consultar la ruta detail /: repo en routes.js para obtener inspiración sobre cómo manejar cualquier nombre de usuario.</p>

<p className="p">You’ll need to look at the detail/:repo route in routes.js for inspiration how to handle any username.</p>
<p className="it">asegurate de utilizar componentes &lt;Link&gt; para dirigir a los usuarios a su nueva página.</p>

<p className="p">Make sure you use &#60;Link&#62; components to direct users to your new page.</p>


<p className="it">Hacer que los nombres de usuario se puedan hacer clic: Mi solución</p>

<h1>Making Usernames Clickable: My Solution</h1>
<p className="it">Espero que haya aprovechado la oportunidad para ir a este proyecto por sí mismo, porque hacerlo realmente ayudará a cementar su nuevo aprendizaje claramente en su cabeza. Independientemente, le prometí caminar a través de una solución con usted, así que aquí va! (Nota: en el poco probable incluso que su solución es muy diferente a la mía, puede resultarle más fácil ajustar el suyo un poco para que pueda continuar siguiendo este tutorial).</p>

<p className="p">I hope you took the opportunity to have a go at this project by yourself, because doing so will really help cement your new learning clearly in your head. Regardless, I promised I’d walk through a solution with you, so here goes! (Note: in the unlikely even that your solution is very different to mine, you may find it easiest to adjust yours a little so you can continue following this tutorial.)</p>
<p className="it">En primer lugar, cree un nuevo archivo en el directorio de páginas llamado User.js. Ahora déle este contenido inicial:</p>

<p className="p">First, create a new file in the pages directory called User.js. Now give it this initial content:</p>

<code>src/pages/User.js</code>

<pre></pre>

<p className="it">Esa es sólo una versión reducida del componente Detalle ahora mismo. Para mantener las cosas simples, he movido la llamada Ajax de nuevo a componentWillMount() porque sólo estamos buscando un tipo de evento aquí, y el <code>render()</code> método no hace nada aún - vamos a llegar a eso pronto .</p>

<p className="p">That is just a cut-down version of the Detail component right now. To keep things simple, I’ve moved the Ajax call back to componentWillMount() because we’re only fetching one type of event here, and the <code>render()</code> method doesn’t do anything yet – we’ll get onto that soon enough.</p>
<p className="it">Antes, sin embargo, quiero actualizar rutas.js para que envíe a los usuarios hacia este nuevo componente listo para cargar. deberías notar que he usado this.props.params.user dos veces en el código anterior, lo que significa que deberías ser capaz de averiguar cuál deberías ser la nueva ruta en routes.js:</p>

<p className="p">Before, though, I want to update routes.js so that it sends users towards this new component ready to load. You should notice that I’ve used this.props.params.user twice in the code above, which means you should be able to figure out what the new route should be in routes.js:</p>

<code>src/routes.js</code>

<pre></pre>
 

<p className="it">Nota: necesitará agregar usuario de importación de './pages/User'; A su lista de importaciones para que funcione.</p>

<p className="p">Note: you will need to add import User from './pages/User'; to your list of imports in order for that to work.</p>
<p className="it">The last thing we do before starting the work of making the User page render correctly is to update the Detail component with links on all the usernames. So, open up <code>Detail.js</code> for editing, and you can start by adding this to the list of imports:</p>

<p className="p">The last thing we do before starting the work of making the User page render correctly is to update the Detail component with links on all the usernames. So, open up <code>Detail.js</code> for editing, and you can start by adding this to the list of imports:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">You can now add a &lt;Link&gt; component in all three places usernames appear: renderCommits(), renderForks(), and renderPulls(). This is a pretty trivial change, but just for reference here’s how I updated mine:</p>

<p className="p">You can now add a &lt;Link&gt; component in all three places usernames appear: renderCommits(), renderForks(), and renderPulls(). This is a pretty trivial change, but just for reference here’s how I updated mine:</p>

<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">We now have a route to our new page, several links to it from the Detail component, plus a very basic implementation in User.js. Hopefully you had a look through an example user feed to see what data is available, and have some ideas of what you want to do.</p>

<p className="p">We now have a route to our new page, several links to it from the Detail component, plus a very basic implementation in User.js. Hopefully you had a look through an example user feed to see what data is available, and have some ideas of what you want to do.</p>
<p className="it">Si desea eliminar todo, es posible que desee considerar tener más de un método <code>render()</code> para el componente User, al igual que con el componente Detail, para que pueda exponer mucha información interesante. Aquí, sin embargo, lo mantendré simple, y podes agregar más información en su propio tiempo. Sólo vamos a utilizar el tipo de evento (por ejemplo, "PushEvent"), el nombre del repositorio y la fecha de creación.</p>

<p className="p">If you want to go all out, you might want to consider having more than one <code>render()</code> method for the User component, just like with the Detail component, so that you can expose lots of interesting information. Here, though, I’ll keep it simple, and you can add more info in your own time. We’re just going to use the event type (e.g. “PushEvent”), the repository name, and the creation date.</p>
<p className="it">El código básico que tomé de Detalle hace casi todo el trabajo. De hecho, todo lo que queda es escribir el método <code>render()</code> y hemos terminado. En lugar de usar un montón de párrafos de texto, decidí mostrar esta página como una lista - ¡eres bienvenido a ser más creativo! Aquí está mi método <code>render()</code> en la página User:</p>

<p className="p">The basic code I took from Detail does nearly all the work. In fact, all that’s left is to write the <code>render()</code> method and we’re done. Rather than use lots of paragraphs of text, I decided to show this page as a list – you’re welcome to be more creative! Here’s my <code>render()</code> method in the User page:</p>

<code>src/pages/User.js</code>

<pre></pre>

<p className="it">Al igual que con los horquillas de impresión anteriores, es posible que deba poner en &#123;creationDate&#125; parte en la misma línea que &#123;eventType&#125; para evitar que falten espacios en blanco.</p>

<p className="p">As with printing forks from earlier, you might find you need to put at &#123;creationDate&#125; part on the same line as the &#123;eventType&#125; to avoid missing whitespace.</p>
<p className="it">¡Eso es! Ahora debe ser capaz de iniciar en http: // localhost: 8080 / # /, elejí un repositorio, haga clic en un botón para seleccionar si desea ver commits, forks o pulls, luego haga clic en un nombre de usuario para ver su historial reciente - ¡buen trabajo!</p>

<p className="p">That’s it! You should now be able to start at http://localhost:8080/#/, choose a repository, click a button to select whether you want to see commits, forks, or pulls, then click a username to view their recent history – good job!</p>

</div>
        </div>
  </Layout>
)