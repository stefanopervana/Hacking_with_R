import Layout from '../components/layout'

export default () => (
  <Layout title='Ch7'>
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


<h2>Time for some Basic User Interface Polish</h2>
<p className="it">Nuestra interfaz es una mierda ahora, y ambos lo sabemos. Todo es un poco HTML 3.2, ¿verdad? Está bien fuera del alcance de este tutorial para comenzar a enseñarle CSS, pero antes de que vayamos más lejos quiero tomar algunos pequeños pasos para comenzar a hacer que esta aplicación entera parezca el más pequeño pedacito más agradable.</p>

<p className="p">Our interface sucks right now, and we both know it. It’s all a bit HTML 3.2, right? It is well out of the scope of this tutorial to start teaching you CSS, but before we go any further I want to take a few small steps to start making this whole application look the tiniest bit nicer.</p>
<p className="it">El primer paso es crear un nuevo archivo en su carpeta <code>dist</code> llamada style.css. Vamos a agregar un puñado de reglas CSS:</p>

<p className="p">The first step is to create a new file in your <code>dist</code> folder called style.css. We’re going to add a handful of CSS rules:</p>

<code>dist/style.css</code>

<pre></pre>

<p className="it">Para hacer que el trabajo que tendrá que modificar su página index.html para que tire de esa hoja de estilo. Aquí está la versión actualizada:</p>

<p className="p">To make that work you’ll need to modify your index.html page so that it pulls in that stylesheet. Here’s the updated version:</p>

<code>dist/index.html</code>

<pre></pre>

<p className="it">Si desea añadir un poco más de CSS, por favor, siga adelante, pero puede que sea mejor leer el siguiente capítulo primero de lo contrario podrías romper algo!</p>

<p className="p">If you want to add some more CSS please go ahead, but you might find it better to read the next chapter first otherwise you might break something!</p>

<h2>Adding React Router Breadcrumbs with Link and IndexLink</h2>
<p className="it">Esas pocas reglas de CSS inmediatamente harán que nuestras páginas se vean un poco más inteligentes, pero también quiero añadir algunas migas de pan muy básicas para que los usuarios puedan volver a la página principal con más facilidad.</p>

<p className="p">Those few CSS rules will immediately make our pages look a bit smarter, but I also want to add some very basic breadcrumbs so users can navigate back to the home page more easily.</p>
<p className="it">Hay varias maneras diferentes de hacer esto, no menos usando el componente maravilloso de React-Breadcrumbs. Pero en aras de la simplicidad - y también para mostrarle un poco más de React Router magic- vamos a tomar el enfoque más básico imaginable: vamos a tener cada página imprimir sus migas de pan.</p>

<p className="p">There are several different ways of doing this, not least using the marvellous React-Breadcrumbs component. But for the sake of simplicity – and also to show you a little bit more React Router magic– we’re going to take the most basic approach imaginable: we’re going to have each page print out its breadcrumbs.</p>
<p className="it">Para que estos vínculos de breadcrumb funcionen correctamente, necesitará asegurarse de que esta línea de importación esté presente en List.js, <code>Detail.js</code> y User.js:</p>

<p className="p">In order to have these breadcrumb links work correctly, you’re going to need to ensure this import line is present in List.js, <code>Detail.js</code>, and User.js:</p>

<code>src/pages/List.js, src/pages/Detail.js, src/pages/User.js</code>

<pre></pre>

<p className="it">Ya has visto el componente &lt;Link&gt;, pero ahora estamos agregando &lt;IndexLink&gt; a la mezcla. Verás por qué en un momento!</p>

<p className="p">You’ve seen the &#60;Link&#62; component before, but now we’re adding &#60;IndexLink&#62; into the mix. You’ll see why in just a moment!</p>
<p className="it">Vamos a comenzar agregando migas de pan al componente Detalle. Modificá la última parte de su render () método a esto:</p>

<p className="p">We’re going to start by adding breadcrumbs to the Detail component. Modify the last part of its <code>render()</code> method to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Sólo la línea "Estás aquí" es nueva, pero de inmediato verás que estoy usando ese nuevo componente &lt;IndexLink&gt;. Si guarda su página y navega a un repositorio, deberías ver algo como "Usted está aquí: Inicio&gt; React" en la barra de navegación, y el texto "Inicio" es un enlace a la página principal. ¿Por qué es un &lt;IndexLink&gt; en lugar de un &lt;Link&gt; regular, entonces?</p>

<p className="p">Only the “You are here” line is new, but immediately you’ll see I’m using that new &#60;IndexLink&#62; component. If you save your page and navigate to a repository you should see something like “You are here: Home &#62; react” in the breadcrumb bar, and the “Home” text is a link back to the home page. How come it’s an &#60;IndexLink&#62; rather than a regular &#60;Link&#62;, then?</p>


<p className="it">Bueno, para averiguarlo, intenta cambiar &lt;IndexLink a = "/" activeClassName = "active"&gt; Inicio &lt;/ IndexLink&gt;</p>

<p className="p">Well, to find out, just try changing &#60;IndexLink to="/" activeClassName="active">Home&#60;/IndexLink></p>
<p className="it">A &lt;Link to = "/" activeClassName = "active"&gt; Inicio &lt;/ Link&gt; y ve por ti mismo lo que sucede. ¿Lo intenté? Yup: el enlace se vuelve negro en lugar de azul.</p>

<p className="p">to &#60;Link to="/" activeClassName="active"&#62;Home&#60;/Link&#62; and see for  yourself  what  happens. Tried it? Yup: the link goes black rather than blue.</p>
<p className="it">React Router sabe qué ruta está activa y automáticamente ajustará cualquier componente &lt;Link&gt; que encuentre para que los enlaces activos automáticamente tengan una clase CSS de su elección adjunta a ellos.</p>

<p className="p">This is the “little bit more React Router magic” I mentioned earlier: React Router knows which route is active, and will automatically adjust any &#60;Link&#62; components it finds so that active links automatically have a CSS class of your choosing attached to them.</p>
<p className="it">Para ver cómo funciona esto necesitas mirar esta pieza de CSS que usamos en style.css hace unos minutos:</p>

<p className="p">To see how this works you need to look at this piece of CSS we used in style.css a few minutes ago:</p>

<code>dist/style.css</code>

<pre></pre>

<p className="it">Y ahora mira de nuevo nuestro código de migas de pan:</p>

<p className="p">And now look at our breadcrumbs code again:</p>

<code>src/pages/Detail.js</code>

<p className="it">Usted está aquí: &lt;IndexLink to = "/" activeClassName = "active"&gt; Inicio &lt;/ IndexLink&gt;</p>

<p className="p">You are here: &#60;IndexLink to="/" activeClassName="active">Home&#60;/IndexLink&#62;</p>
<pre> &#123;this.props.params.repo&#125;</pre>

<p className="it">Por lo tanto, ese CSS especifica un estilo para los <a>elementos que tienen el nombre de clase activo. A continuación, el componente &lt;IndexLink&gt; tiene un atributo activeClassName establecido en activo. Esto significa que cuando React detecta que este enlace está siendo visto, automáticamente aplicará la clase activa al enlace.</a></p>

<p className="p">So, that CSS specifies a style for <a> elements that have the class name active. Then the &#60;IndexLink&#62; component has an activeClassName attribute set to active. This means that when React detects this link is currently being viewed, it will automatically apply the active class to the link.</p>
<p className="it">Pero hay un problema: todas nuestras URL empiezan con / porque está ahí en la base de nuestras rutas. Al configurar nuestras rutas creamos un &lt;IndexLink&gt; especial para manejar esta situación, pero un componente regular &lt;Link&gt; no toma eso en cuenta. Si quieres decir "considerar / activo sólo cuando estamos en la página de lista", debes usar &lt;IndexLink&gt; para hacer coincidir el enlace con el &lt;IndexLink&gt; que definimos.</p>

<p className="p">But there’s a problem: all our URLs start with / because it’s right there at the base of our routes. When configuring our routes we created a special &#60;IndexLink&#62; to handle this situation, but a regular &#60;Link&#62; component doesn’t take that into account. If you want to say “consider / active only when we’re on the List page”, you need to use &#60;IndexLink&#62; to match the link to the &#60;IndexLink&#62; we defined.</p>
<p className="it">La regla simple es la siguiente: si está apuntando a la ruta de índice de su sitio, debe usar un vínculo de índice.</p>

<p className="p">The simple rule is this: if you’re pointing to the index route of your site, you need to use an index link.</p>
<p className="it">Ahora que ya sabes la diferencia entre &lt;Link&gt; y &lt;IndexLink&gt; solo necesitamos añadir migas de pan a los componentes List y User.</p>

<p className="p">Now that you know the difference between &#60;Link&#62; and &#60;IndexLink&#62; we just need to add bread- crumbs to the List and User components.</p>
<p className="it">El componente Lista ya tiene un mensaje diciendo "Por favor, elejí un repositorio de la lista de abajo", por lo que todo lo que necesitas hacer es añadir las migas anteriores:</p>

<p className="p">The List component already has a message saying “Please choose a repository from the list below”, so all you need to do is add the breadcrumbs before that:</p>

<code>src/pages/List.js</code>

<p className="it">Usted está aquí: &lt;IndexLink to = "/" activeClassName = "active"&gt; Inicio &lt;/ IndexLink&gt;</p>

<p className="p">You are here: &#60;IndexLink to="/" activeClassName="active">Home&#60;/IndexLink&#62;</p>
 

<p className="it">El componente User es un poco más difícil porque su elemento raíz JSX es &lt;ul&gt;. Tenemos que envolver que en un &lt;div&gt; para que podamos incluir el pan rallado en su salida. Para evitar dudas, el nuevo método render () deberías tener el siguiente aspecto:</p>

<p className="p">The User component is a little more difficult because its root JSX element is &#60;ul&#62;. We need to wrap that in a &#60;div&#62; so that we can include the breadcrumbs in its output. For the avoidance of doubt, the new <code>render()</code> method should look like this:</p>

<code>src/pages/User.js</code>

<pre></pre>

<p className="it">Eso es todo - pan rallado todo hecho!</p>

<p className="p">That’s it – breadcrumbs all done!</p>

<p className="it">El primer 80% se hace: ¿Ahora qué?</p>

<p className="p">The First 80% is Done: Now What?</p>
<p className="it">Este es un hito en el desarrollo de nuestra pequeña aplicación: el código todo funciona, realiza una tarea real, aunque bastante trivial, y tiene un mínimo de estilo. Podríamos parar muy fácilmente en este punto y declararlo hecho así que podes ir apagado y comenzar a hacer una aplicación de React todos sus los propios.</p>

<p className="p">This is a milestone in the development of our little app: the code all works, it performs a real task albeit a fairly trivial one, and it has a modicum of styling. We could very easily stop at this point and declare it done so you can go off and start making a React app all of your own.</p>
<p className="it">Pero hay más. Ya ves, hemos terminado el primer 80% de nuestra aplicación, pero ¿qué pasa con el segundo 80%? Sí, esa es una vieja broma, pero sí es verdad sorprendentemente frecuente.</p>

<p className="p">But there’s more. You see, we’ve finished the first 80% of our app, but what about the second 80%? Yes, that’s an old joke, but it does hold true surprisingly frequently.</p>
<p className="it">Nuestra aplicación le falta algo más bien fundamental, y sería negligencia de mí no enseñarle al menos algo sobre este tema. De hecho, espero que algunos lectores ya me han enviado correo de odio por no traerlo al principio y todo el camino!</p>

<p className="p">Our app is missing something rather fundamental, and it would be remiss of me not to teach you at least something about this topic. In fact, I expect some readers have already sent me hate mail for not bringing it up at the very beginning and all the way through!</p>
<p className="it">¿Qué falta? Pruebas. Una forma de asegurar programaticamente nuestro código hace lo que creemos que hace. Ahora, claramente ambos podemos ver nuestro código hace lo que creemos que hace. Pero, ¿qué pasa si hacemos un cambio en el futuro y algo se rompe? Esto es fácil de hacer, incluso con nuestra pequeña aplicación web, pero se vuelve aún más fácil a medida que su base de código crece en tamaño.</p>

<p className="p">What’s missing? Testing. A way to programmatically ensure our code does what we think it does. Now, clearly we both can see our code does what we think it does. But what if we make a change in the future and something breaks? This is easy to do even with our small web app, but gets even easier as your codebase grows in size.</p>
<p className="it">Dije que algunos lectores me hubieran preferido mencionar las pruebas desde el principio y hasta el final, y es cierto: uno de los enfoques de desarrollo más populares se llama desarrollo impulsado por pruebas (TDD), aunque se ha transformado en Desarrollo impulsado por el comportamiento (BDD). Son extremadamente similares (de hecho, casi idénticos si se hace bien!), Y ambos recomiendan encarecidamente que escriba su prueba antes de escribir cualquier código.</p>

<p className="p">I said that some readers would have preferred me to mention testing at the very beginning and all the way through, and it’s true: one of the most popular development approaches is called test-driven development (TDD), although that has sort of morphed into behavior-driven development (BDD). They are extremely similar (indeed almost identical if done right!), and both strongly recommend you write your test before writing any code.</p>
<p className="it">Por lo tanto, todo este tiempo estábamos produciendo un montón de código con cero pruebas, que es un enfoque bastante pobre cuando estás trabajando en un proyecto real. Voy a rectificar esto ahora mostrándote cómo agregar pruebas para nuestro código, pero en el futuro vas a crear tus pruebas antes de tu código, ¿verdad? Derecha.</p>

<p className="p">So, all this time we were churning out lots of code with zero testing, which is a pretty poor approach when you’re working on a real project. I’m going to rectify this now by showing you how to add tests for our code, but in the future you’re totally going to create your tests before your code, right? Right.</p>
<p className="it">Cuando se trata de elegir un marco de prueba, tenemos muchas opciones: he tenido un gran éxito con Mocha y Chai en el pasado, Jasmine es extremadamente popular, y el propio framework Jest de Facebook toma Jasmine y agrega varias mejoras importantes.</p>

<p className="p">When it comes to choosing a testing framework we’re spoiled for choice – I’ve had great success with Mocha and Chai in the past, Jasmine is extremely popular, and Facebook’s own Jest framework takes Jasmine and adds several major improvements.</p>
<p className="it">Esa es la buena noticia. Ahora, para las malas noticias: ninguna de ellas es particularmente fácil de empezar, y estoy dispuesto a ayudarle a dar sus primeros pasos en las pruebas de una manera no aterradora. Entonces, escribí este capítulo siguiente, luego lo borré, lo volví a escribir, lo volví a borrar y luego lo escribí una última vez, cada vez intentando encontrar maneras más simples y sencillas de realizar las pruebas básicas. El resultado final es, creo, lo más simple posible.</p>

<p className="p">So, that’s the good news. Now for the bad news: none of them are particularly easy to get started with, and I’m keen to help you take your first steps into testing in a non-terrifying way. So, I wrote this next chapter, then deleted it, then wrote it again, then deleted it again, then wrote it one last time – each time trying to find simpler and simpler ways to accomplish basic testing. The end result is, I think, as simple as I can possibly make it.</p>
<p className="it">Corriendo a la caza: vamos a usar el marco de pruebas de Jest, pero vamos a desactivar la burla. Mocking es una de las características más importantes de Jest, pero también es bastante garantizado para confundir en este momento. Aún así, Jest también trae consigo la configuración de pruebas más fácil imaginable, así que espero que no encuentres este próximo capítulo demasiado doloroso.</p>

<p className="p">Cutting to the chase: we’ll be using the Jest testing framework, but we’ll be disabling mocking. Mocking is one of the most important features of Jest, but it’s also pretty much guaranteed to confuse you at this point. Still, Jest also brings with it the easiest testing setup imaginable, so hopefully you won’t find this next chapter too painful.</p>


<p className="it">(Antes de enviarme llamas: sí, sé que Mocha es más rápido, pero Jest es más fácil y eso cuesta mucho en un tutorial de principiantes .Y sí, estoy plenamente consciente de que Jest sin burlarse es menos que ideal, pero confía en mí : Pasé mucho tiempo sopesando todas las opciones.)</p>

<p className="p">(Before you send me flames: yes, I know Mocha is faster, but Jest is easier and that counts for a lot in a beginners’ tutorial. And yes, I am fully aware that Jest without mocking is less than ideal, but trust me: I spent a long time weighing up all the options.)</p>
<p className="it">¿Todo listo? ¡Hagámoslo!</p>

<p className="p">All set? Let’s do this!</p>


<h2>How to Configure Jest to Test React and ES6</h2>
<p className="it">Para empezar, necesitamos añadir algunas dependencias de desarrollo adicionales ejecutando este comando en una ventana de terminal:</p>

<p className="p">To get started, we need to add some extra development dependencies by running this command in a terminal window:</p>



<code>npm install --save-dev jest-cli babel-jest react-addons-test-utils</code>
 

<p className="it">Como antes, tendrás que presionar Ctrl + C para salir de Webpack Dev Server antes de ejecutarlo, pero esta vez no quiero que reinicies Webpack Dev Server cuando <code>npm</code>termine el comando. ¡Ya hemos terminado! ¡Todo está probando ahora!</p>

<p className="p">As before, you’ll need to press Ctrl+C to quit Webpack Dev Server before you run that, but this time I don’t want you to restart Webpack Dev Server when the <code>npm</code> command finishes. We’re done with it – it’s all testing now!</p>
<p className="it">Vamos a comenzar nuestras pruebas en un nuevo subdirectorio de nuestro proyecto. Ya tenemos <code>dist</code> para nuestros archivos finalizados, node_modules para todas las cosas de NPM que usamos, y src para nuestro código fuente ES6. Pero quiero que crees una cuarta carpeta ahora:</p>

<p className="p">We’re going to start our tests in a new subdirectory of our project. We already have <code>dist</code> for our finished files, node_modules for all the NPM things we use, and src for our ES6 source code. But I want you to create a fourth folder now:</p>



<code>mkdir tests</code> 	
 

<p className="it">Eso es dos subrayados, la palabrí "pruebas", luego dos subrayados más. Por favor, póngale un nombre exacto de que de lo contrario sus pruebas no funcionarán. Con eso hecho, vamos a modificar nuestro archivo <code>package.json</code> para que sepa llamar Jest cuando le pedimos que ejecutá pruebas. Abra ahora su archivo <code>package.json</code> y verá una línea como esta:</p>

<p className="p">That’s two underscores, the word “tests”, then two more underscores. Please name it exactly that otherwise your tests will not work. With that done, we’re going to modify our <code>package.json</code> file so that it knows to call Jest when we ask it to run tests. Open your <code>package.json</code> file now and you’ll see a line like this:</p>

<code>package.json</code>

<pre></pre>
 

<p className="it">Por favor, cambie a esto:</p>

<p className="p">Please change it to this:</p>

<code>package.json</code>

<pre></pre>
 

<p className="it">Mientras estás allí, debemos insertar algunos ajustes de configuración para permitir que Jest trabaje con React y ES6. Busque "devDependencies" y ponga esto directamente delante de él:</p>

<p className="p">While you’re there, we need to insert some configuration settings to enable Jest to work with React and ES6. Look for "devDependencies" and put this directly before it:</p>



<code>package.json</code>

<pre></pre>

<p className="it">La versión final deberías tener este aspecto:</p>

<p className="p">The final version should look like this:</p>

<code>package.json</code>

<pre></pre>

<p className="it">Con ese cambio guardado, ahora podemos ejecutar nuestra prueba a través de Jest ejecutando este comando:</p>

<p className="p">With that change saved, we can now run our test through Jest by running this command:</p>



<code>npm run test</code>
 

<p className="it">Por supuesto, en realidad no hace nada más que imprimir su número de versión, porque no hemos escrito ninguna prueba. Hagámoslo ahora ...</p>

<p className="p">Of course it doesn’t actually do anything yet other than print its version number, because we haven’t written any tests. Let’s do that now…</p>

<p className="it">Running Jest sin ninguna prueba es una buena idea si sólo para asegurarse de que tiene configurado correctamente.</p>

<p className="p">Running Jest without any tests is a good idea if only to make sure you have it set up correctly.</p>


<p className="it">Creando nuestra primera prueba de reacción con Jest</p>

<p className="p">Creating our First React Test with Jest</p>
<p className="it">La razón por la que tuvimos que nombrar nuestras pruebas de directorio de prueba es porque eso es exactamente lo que Jest busca cuando ejecuta su proceso de prueba: todos los archivos JavaScript de allí se consideran pruebas y se ejecutarán.</p>

<p className="p">The reason we had to name our test directory tests is because that’s exactly what Jest looks for when it runs its test process: all JavaScript files in there are considered tests and will be executed.</p>
<p className="it">Por lo tanto, podemos poner una prueba muy simple en esa carpeta, y <code>npm run test</code>lo encontrará automáticamente, ejecutarlo y decirnos los resultados. Comencemos con una prueba extremadamente simple: ¿nuestro componente de lista genera tres repositorios para que los usuarios hagan clic?</p>

<p className="p">So, we can put a very simple test into that folder, and <code>npm run test</code> will automatically find it, run it, and tell us the results. Let’s start with an extremely simple test: does our List component render three repositories for users to click on?</p>
<p className="it">Ahora, probablemente pienses que es una tontería probar porque podemos ver que siempre representa exactamente tres repositorios. Pero eso esta bien; Usted está aprendiendo, y esto es un poco de un ejemplo forzado para ayudarle a empezar. Cree un nuevo archivo en el directorio de pruebas llamado List-test.js y déle este contenido:</p>

<p className="p">Now, you probably think that’s a silly thing to test because we can see it always renders exactly three repositories. But that’s OK; you’re just learning, and this is a bit of a forced example to help you get started. Create a new file in the tests directory called List-test.js and give it this content:</p>

<code>tests /List-test.js</code>

<pre></pre>

<p className="it">Eso es casi todo el código nuevo, así que quiero explicar todo a usted. Pero primero, Guardá ese archivo y luego ejecutá la prueba usando <code>npm run test</code>. deberías ver la salida como esta:</p>

<p className="p">That’s almost all new code so I want to explain it all to you. But first, save that file then run the test by using <code>npm run test</code>. You should see output like this:</p>
<ul>
<li className="it">Uso de Jest CLI v0.8.2, jasmine1</li>


<li className="p">Using Jest CLI v0.8.2, jasmine1</li>
<li className="it">Pruebas PASS /List-test.js (1.036s) Lista</li>


<li className="p">PASS	tests /List-test.js (1.036s) List</li>
<li className="it">Realiza tres enlaces de repo</li>


<li className="p">it renders three repo links</li>
</ul>
<p className="it">¡La prueba fue exitosa! Eso no es una gran sorpresa, como ya he dicho, pero al menos muestra que tienes Jest configurado correctamente.</p>

<p className="p">The test was successful! That’s no great surprise, as I already said, but at least it shows you have Jest set up correctly.</p>
<p className="it">Vamos a hablar a través de todo el código en ese archivo, porque usted ha visto sólo unas pocas líneas de la misma antes:</p>

<p className="p">Let’s talk through all the code in that file, because you’ve seen only a few lines of it before:</p>

<p className="it">Jest.autoMockOff () Desactiva una de las funciones más poderosas de Jest, conocida como burla. Sin esta línea, Jest reemplazará silenciosamente cualquier biblioteca que intentámos usar con una versión falsa adecuada para pruebas. Esto es extremadamente útil cuando ya has pasado el estado de principiante, pero ahora mismo sólo va a confundirte para que lo apaguemos.</p>

<p className="p">jest.autoMockOff() Disables one of Jest’s most powerful features, known as mocking. Without this line, Jest will silently replace any library we try to use with a fake version suitable for testing. This is extremely helpful when you’re past beginner status, but right now it’s just going to confuse you so we turn it off.</p>
<p className="it">Importar TestUtils desde 'react-addons-test-utils'; La biblioteca de utilidades de prueba de React nos da la capacidad de convertir los componentes de React en un documento falso que luego se puede comprobar para asegurarnos de que vea cómo creemos que deberías hacerlo.</p>

<p className="p">import TestUtils from ‘react-addons-test-utils’; React’s test utility library gives us the ability to render React components into a fake document that can then be checked to make sure it looks how we think it ought to.</p>
<p className="it">Const List = require ( <code>‘../src/pages/List’</code>) .default carga nuestro componente List. Esto es una molestia relacionada con la forma en que Babel y Jest trabajan juntos y hace lo mismo que nuestra Lista de importación previa de <code>'./pages/List'</code>código.</p>

<p className="p">const List = require(<code>‘../src/pages/List’</code>).default loads our List component. This is an annoy- ance related to the way Babel and Jest work together and does the same as our previous import List from <code>'./pages/List'</code> code.</p>
<p className="it">⇒</p>

<p className="p">⇒</p>
<p className="it">Describe ('List', () &#123;inicia una suite de pruebas, que es un grupo de pruebas relacionadas.En este tutorial tendremos una suite de pruebas por componente React.</p>

<p className="p">describe(‘List’, () &#123; starts a test suite, which is a group of related tests. In this tutorial we’ll have one test suite per React component.</p>
<p className="it">⇒</p>

<p className="p">⇒</p>
<p className="it">Cada especificación de prueba tiene una descripción ("devuelve tres enlaces de repo) y algún código adjunto a él (todo después de la &#123;).</p>

<p className="p">it(‘renders three repo links’, () &#123; starts a test spec. Each test spec has a description (“renders three repo links”) and some code attached to it (everything after the &#123;).</p>
<p className="it">Const rendered = TestUtils.renderIntoDocument convierte algunos JSX en un documento virtual que podemos examinar. Pasamos en &lt;List /&gt; para que haga que nuestro componente List.</p>

<p className="p">const rendered = TestUtils.renderIntoDocument converts some JSX into a virtual document that we can examine. We pass in &#60;List /&#62; so that it renders our List component.</p>
<p className="it">Const repos = TestUtils.scryRenderedDOMComponentsWithTag (renderizado, 'li') busca en nuestro documento virtual todos los elementos &lt;li&gt; y los devuelve en una matriz.</p>

<p className="p">const repos = TestUtils.scryRenderedDOMComponentsWithTag(rendered, ‘li’) searches through our virtual document for all &#60;li&#62; elements, and returns them in an array.</p>
<p className="it">Espera (repos.length) .toEqual (3) comprueba que el número de &lt;li&gt; elementos que se encontraron coincide con el número 3 - es decir, que tres &lt;li&gt; elementos existen en la página.</p>

<p className="p">expect(repos.length).toEqual(3) checks that the number of &#60;li&#62; elements that were found matches the number 3 – i.e., that three &#60;li&#62; elements exist on the page.</p>

<p className="it">That’s a raw description of what the code does, but three things deserve further clarification.</p>

<p className="p">That’s a raw description of what the code does, but three things deserve further clarification.</p>
<p className="it">First, Jest encourages you to use natural language to express what you’re trying to test and why. This is part of the behavior-driven development approach, and it’s important because it forces you to focus on what you’re trying to test rather than how it works. So, we can read each test out loud: “it renders three repo links”.</p>

<p className="p">First, Jest encourages you to use natural language to express what you’re trying to test and why. This is part of the behavior-driven development approach, and it’s important because it forces you to focus on what you’re trying to test rather than how it works. So, we can read each test out loud: “it renders three repo links”.</p>
<p className="it">Second, the method scryRenderedDOMComponentsWithTag() has a curious name. “Scry” (which rhymes with “cry”, if you were wondering) is an archaic word meaning “to gaze into a crystal ball”, i.e. fortune telling. Clearly hipsters are intent on making it cool once more, so you can scry into your rendered document to look for things.</p>

<p className="p">Second, the method scryRenderedDOMComponentsWithTag() has a curious name. “Scry” (which rhymes with “cry”, if you were wondering) is an archaic word meaning “to gaze into a crystal ball”, i.e. fortune telling. Clearly hipsters are intent on making it cool once more, so you can scry into your rendered document to look for things.</p>
<p className="it">En tercer lugar, le decimos a Jest lo que esperamos que ocurra usando su función expect (). Una vez más, esto está diseñado para ser leído en voz alta como el inglés simple: "espera que la longitud del repos sea igual a 3." Si esta expectativa es igualada (es decir, si nuestro componente emite tres repos) entonces la prueba se considera un éxito. Cualquier variación con respecto al resultado esperado se considera una falla en la prueba.</p>

<p className="p">Third, we tell Jest what we expect to happen using its expect() function. Again, this is designed to be read aloud like plain English: “expect repos length to equal 3.” If this expectation is matched (i.e., if our component outputs three repos) then the test is considered a success. Any variation from the expected result is considered a test failure.</p>
 
<p className="it">Estamos usando Jest con la opción -verbose, que proporciona información más detallada sobre cada prueba que se ejecuta.</p>

<p className="p">We’re using Jest with the –verbose option, which provides more detailed feedback on each test it runs.</p>

<p className="it">Usando Jest para probar nuestros componentes React</p>

<p className="p">Using Jest to Test Our React Components</p>
<p className="it">El último capítulo hizo una prueba trivial: procese el componente &lt;List&gt; en un documento virtual y compruebe que tiene tres elementos &lt;li&gt;. Lo mantuve trivial porque el objetivo era aprender cómo se ve una prueba de Jest, así que ahora que está hecho quiero pasar a algunas pruebas reales:</p>

<p className="p">Last chapter we made a trivial test: render the &#60;List&#62; component into a virtual document, and check to make sure it has three &#60;li&#62; elements. I kept it trivial because the goal was to learn how a Jest test looks, so now that’s done I want to move onto some real tests:</p>
<ul>
<li className="it">	Cuando se representa el componente Detalle, ¿tiene 0 commits?</li>

<li className="p">	When the Detail component is rendered, does it have 0 commits?</li>
<li className="it">	¿Está configurado para mostrar datos de confirmación por defecto?</li>

<li className="p">	Is it set to show commits data by default?</li>
<li className="it">	Cuando se hace clic en su botón Forks, ¿cambió a mostrar datos de horquillas?</li>

<li className="p">	When its Forks button is clicked, did it switch to showing forks data?</li>
<li className="it">	Cuando su acabado de buscar horquillas de GitHub, ¿tiene ahora 30 tenedores para mostrar?</li>

<li className="p">	When its finishes fetching forks from GitHub, does it now have 30 forks to show?</li>
</ul>
<p className="it">	Vamos a poner los cuatro de ellos en una suite de pruebas, en un archivo: dentro de sus pruebas </p>

<p className="p">	We’re going to put all four of those into one test suite, in one file: inside your tests </p>folder please create Detail-test.js. Give it this initial content:

<code>tests /Detail-test.js</code>

<pre></pre>

<p className="it">Antes de escribir nuestras cuatro pruebas, vamos a hacer un pequeño cambio en el componente Detalle. La API de GitHub es genial porque proporciona muchos datos interesantes sin tener que registrarse para una clave de API, pero este acceso gratuito es limitado, lo que significa que sólo puede hacer 60 peticiones por hora antes de que su acceso se detenga temporalmente.</p>

<p className="p">Before we write our four tests, we’re going to make a tiny change to the Detail component. The GitHub API is great because it provides lots of interesting data without having to register for an API key, but this free access is rate limited, which means you get to make only 60 requests per hour before your access is temporarily paused.</p>
<p className="it">Cuando se trabaja en una aplicación real, se utiliza "burlarse" para hacer una solicitud simulada GitHub API para que a) sus pruebas se ejecuten más rápido, yb) usted nunca tiene que preocuparse por los límites de la tasa de nuevo. Pero burlarse introducir un nuevo conjunto de complejidades que sería un poco abrumador en este momento en su carrera React, por lo que vamos a insertar un hack: vamos a modificar el componente de detalle para que si se pasa un nombre de repo vacío Se salta haciendo cualquier llamada Ajax.</p>

<p className="p">When working on a real application, you would use “mocking” to make a simulated GitHub API request so that a) your tests run faster, and b) you never have to worry about rate limits again. But mocking introduce a new set of complexities that would be a bit overwhelming at this point in your React career, so we’re going to insert a hack: we’re going to modify the Detail component so that if an empty repo name is passed it skips doing any Ajax calls.</p>
<p className="it">Este hack es útil porque reduce el número de llamadas Ajax que realizarán nuestras pruebas, lo que a su vez reduce la probabilidad de que los límites del API de GitHub sean alcanzados. Sin este hack, cada vez que se carga el componente Detail hace tres llamadas API, por lo que en cuatro pruebas que hacen un total de 12 llamadas API cada vez que ejecutamos nuestro conjunto de pruebas - obtendríamos nuestro límite API completo en sólo cinco ejecuciones !</p>

<p className="p">This hack is helpful because it reduces the number of Ajax calls our tests will make, which in turn reduces the likelihood of us hitting GitHub’s API limits. Without this hack, each time the Detail component loads it makes three API calls, so across four tests that makes for a total of 12 API calls every time we run our test suite – we’d get through our entire API limit in just five runs!</p>
<p className="it">Vamos a insertar el hack ahora. Modificá el método fetchFeed () en <code>Detail.js</code> a esto:</p>

<p className="p">Let’s insert the hack now. Modify the fetchFeed() method in <code>Detail.js</code> to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Tiempo para la primera prueba: ¿hay cero confirma cuando el componente se carga primero? Esto es solo una cuestión de procesar el componente y luego comprobar que su propiedad state.commits tiene una longitud de 0. Pero esto también me da la oportunidad de mostrarte cómo pasar una ruta falsa al componente Detail. Añadir esta prueba en lugar de las // pruebas ir aquí comentario:</p>

<p className="p">Time for the first test: are there zero commits when the component first loads? This is just a matter of rendering the component then checking that its state.commits property has a length of 0. But this also gives me a chance to show you how to pass a fake path to the Detail component. Add this test in place of the // tests go here comment:</p>


<pre></pre>

<p className="it">Has visto cómo JSX nos permite usar llaves, &#123;&#125;, para marcar las expresiones JavaScript dentro del marcado, pero ahora estoy usando llaves dobles, &#123;&#123;&#125;&#125;. Esto no es una sintaxis especial, es sólo una combinación de &#123;significado "iniciar una expresión de JavaScript" entonces &#123;significado "iniciar un objeto de JavaScript."</p>

<p className="p">You’ve seen how JSX lets us use braces, &#123;  &#125;, to mark JavaScript expressions inside markup, but now I’m using double braces, &#123;&#123;  &#125;&#125;. This isn’t some special syntax, it’s just a combination of &#123; meaning “start a JavaScript expression” then &#123; meaning “start a JavaScript object.”</p>
<p className="it">Aprendiste cerca del principio de este libro que la configuración de los atributos en un componente React se traduce en props. Bueno, en este caso estamos configurando un prop llamado params y dándole una propiedad de repo que contiene una cadena vacía. Cuando nuestro componente Detail lo reciba, podrá leer this.props.params.repo, que es exactamente lo que habrías recibido de React Router.</p>

<p className="p">You learned near the beginning of this book that setting attributes on a React component gets translated to props. Well, in this case we’re setting a prop called params and giving that a repo property containing an empty string. When our Detail component receives that, it will be able to read this.props.params.repo, which is exactly what it would have received from React Router.</p>
<p className="it">La segunda prueba para este componente es comprobar que el componente está configurado para procesar commit de forma predeterminada. Esto es muy similar a la prueba que acabamos de escribir, así que te recomiendo que intentás ahora para asegurarte de que entiendes cómo funciona Jest.</p>

<p className="p">The second test for this component is to check that the component is set to render commits by default. This is very similar to the test we just wrote, so I recommend you give it a try now to make sure you understand how Jest works.</p>
<p className="it">Vamos, voy a esperar.</p>

<p className="p">Go on, I’ll wait.</p>
<p className="it">Por supuesto, no quiero que eches un vistazo a mi solución por accidente, porque entonces no aprenderías nada.</p>

<p className="p">Of course, I don’t want you to peek at my solution by accident, because then you wouldn’t learn anything.</p>
<p className="it">¿Aún aquí? OK, aquí está una broma: ¿qué es rojo y huele a pintura azul? Pintura roja.</p>

<p className="p">Still here? OK, here’s a joke: what’s red and smells like blue paint? Red paint.</p>
<p className="it">Voy a asumir que usted ha escrito la prueba usted mismo y aprendido mucho, o usted es uno de esos tipos que se niega a hacer un libro decirles qué hacer y quieres que escriba la solución para usted. Por lo tanto, aquí va - añada esto a Detail-test.js debajo de la prueba existente:</p>

<p className="p">I’m going to assume you’ve either written the test yourself and learned a lot, or you’re one of those types who refuses to make a book tell them what to do and you want me to write the solution for you. So, here goes - add this to Detail-test.js beneath the existing test:</p>

<pre></pre>

<p className="it">Fácil, ¿verdad? Derecha. Pero eso fue sólo para asegurarse de que estaba prestando atención: la siguiente prueba es más difícil, ya que necesitas hacer clic en el botón Forks y asegurarse de que el estado del componente se actualizó correctamente.</p>

<p className="p">Easy, right? Right. But that was just to make sure you were paying attention: the next test is harder, because it needs to click the Forks button and make sure the component’s state was updated correctly.</p>

<h2>Using Jest to Simulate User Interaction on a React Component</h2>
<p className="it">Ahora, si vuelves a pensar mucho más temprano en este libro, podes recordar esto: "RECORDATORIO DE ADVERTENCIA IMPORTANTE: El código mucho más adelante en este libro se basa en que pasas un parámetro de cadena a selectMode () en lugar de usar el atributo de modo de datos Enfoque ". Bueno, finalmente has llegado al punto en el que tu elección importa.</p>

<p className="p">Now, if you cast your mind back to much earlier in this book you might remember this: “REMINDER OF IMPORTANT WARNING: Code much later in this book relies on you passing a string parameter to selectMode() rather than using the data-mode attribute approach.” Well, you’ve finally reached the point where your choice matters.</p>
<p className="it">Si recuerdas, estudiamos dos maneras de escribir el método selectMode (): pasar un parámetro de cadena o usar un atributo de modo de datos. Ambos enfoques tienen su uso en la codificación normal, pero cuando se trata de la prueba hay una captura: Jest no es compatible con la propiedad de conjunto de datos, lo que significa que cuando simula un clic en un botón el método selectMode () fallará si intenta leer El atributo de modo de datos.</p>

<p className="p">If you remember, we looked at two ways of writing the selectMode() method: passing a string parameter or using a data-mode attribute. Both approaches have their uses in normal coding, but when it comes to testing there’s a catch: Jest doesn’t support the dataset property, which means when it simulates a click on a button the selectMode() method will fail if it tries to read the data- mode attribute.</p>
<p className="it">Afortunadamente, escuchaste mi advertencia y usaste la aproximación que pasa un parámetro de cadena, ¿verdad? Derecha. Eso significa que podemos escribir nuestra tercera prueba muy fácilmente: solo encontramos todos los botones en el documento, leemos el botón en el índice 1, simulamos un clic en él y luego aseguramos que el estado del modo del componente Detalle esté configurado como 'bifurcaciones'.</p>

<p className="p">Fortunately you heeded my warning and used the approach that passes a string parameter, right? Right. That means we can write our third test really easily: we just find all the buttons in the document, read the button at index 1, simulate a click on it, then make sure the Detail component’s mode state is set to ‘forks’.</p>
<p className="it">Añadir esta prueba debajo de los dos existentes:</p>

<p className="p">Add this test beneath the existing two:</p>

<code>tests /Detail-test.js</code>

<pre></pre>


 

<p className="it">Hay tres cosas que podrían ser interesantes. En primer lugar, necesitamos usar el índice 1 para el botón "forks" porque los arrays de JavaScript cuentan desde 0. En nuestro componente de detalle, el botón 0 es "Commits", el botón 1 es "Forks" y el botón 2 es "Pulls".</p>

<p className="p">There are three things there that might be interesting. First, we need to use index 1 for the “forks” button because JavaScript arrays count from 0. In our detail component, button 0 is “Commits”, button 1 is “Forks” and button 2 is “Pulls”.</p>
<p className="it">En segundo lugar, el método TestUtils.Simulate.click () es nuevo, y espero que sea bastante auto-explicativo: simula un clic en algo en nuestro documento, en este caso un botón.</p>

<p className="p">Second, the TestUtils.Simulate.click() method is new, and I hope it’s pretty self-explanatory: it simulates a click on something in our document, in this case a button.</p>


<p className="it">En tercer lugar, este código es un poco frágil y por lo tanto no es realmente adecuado para su uso en la producción. La razón de esto es la forma en que se accede al botón: asumimos que el botón de las horquillas está en el índice 1, pero si un diseñador viene y lo mueve, entonces la prueba se romperá aunque el botón esté allí y todavía funcione.</p>

<p className="p">Third, this code is a bit fragile and thus not really suitable for use in production. The reason for this is the way the button is accessed: we assume the forks button is at index 1, but if a designer come along and moves it then the test will break even though the button is there and still functioning.</p>
<p className="it">La manera de arreglar esto es dar a cada botón una propiedad única de referencia, que es la forma de React de identificar las cosas que se han prestado. Modificá el final del método render () en <code>Detail.js</code> a esto:</p>

<p className="p">The way to fix this is to give each button a unique ref property, which is React’s way of identifying things that have been rendered. Please amend the end of the <code>render()</code> method in <code>Detail.js</code> to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Ahora que cada botón tiene una propiedad única de referencia, podemos encontrarla directamente, sin tener que llamar a scryRenderedDOMComponentsWithTag (). Actualizar la tercera prueba a esto:</p>

<p className="p">Now that each button has a unique ref property we can find it directly, without even having to call scryRenderedDOMComponentsWithTag(). Update the third test to this:</p>

<code>tests /Detail-test.js</code>

<pre></pre>

 


<p className="it">Como puede ver, podemos simplemente entrar directamente en la propiedad refs para encontrar horquillas, y esa nueva prueba funcionará independientemente de si el botón se mueve o no en el futuro.</p>

<p className="p">As you can see, we can just dip right into the refs property to find forks, and that new test will work regardless of whether the button gets moved to in the future.</p>

</div>

        </div>
  </Layout>
)