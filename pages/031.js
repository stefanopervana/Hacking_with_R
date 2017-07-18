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


<h1>Adding React Router Breadcrumbs with Link and IndexLink</h1>
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





</div>

        </div>
  </Layout>
)