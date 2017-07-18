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

<h1>Time for a Test: Clickable Usernames</h1>
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

<p className="p">Making Usernames Clickable: My Solution</p>
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