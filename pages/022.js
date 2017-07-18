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

<h1>Introducing React Router</h1>

<p className="it">Todo el trabajo que hemos hecho hasta ahora ha estado en <code>index.js</code> o en <code>Detail.js</code>, pero ahora vamos a añadir un tercer archivo llamado List.js que convertirá una página de inicio para nuestra aplicación. A partir de ahí, los usuarios podrán seleccionar un repositorio de GitHub, y al hacerlo mostrarán <code>Detail.js</code> como antes.</p>

<p className="p">All the work we’ve done so far has either been in <code>index.js</code> or <code>Detail.js</code>, but now we’re going to add a third file called List.js that will render a home page for our app. From there, users will be able to select a GitHub repository, and doing so will show <code>Detail.js</code> as before.</p>
<p className="it">Por lo tanto, pasaremos de tener sólo una página que enumera todos los compromisos de React, forks y tira de GitHub, a tener una página inicial donde los usuarios pueden seleccionar React, React Native, Jest u otros proyectos de Facebook de nuestra elección. Esto implica un cambio bastante grande, por lo que vamos a hacer esto en dos partes: primero implementar React Router de una manera que preserve el comportamiento exacto que tenemos ahora, luego agregar la nueva página de inicio.</p>

<p className="p">So, we’ll go from having just one page listing all the React commits, forks and pulls on GitHub, to having a homepage first where users can select React, React Native, Jest, or other Facebook projects of our choosing. This involves a fairly big change, so we’re going to do this in two parts: first implement React Router in a way that preserves the exact behavior we have right now, then second add the new home page.</p>
<p className="it">Si te preguntas, React Router es un componente que carga diferentes páginas dependiendo de la URL que tu usuario haya pedido. Así que si el usuario va a http: // localhost: 8080 / hola que serviría una página, y http: // localhost: 8080 / world serviría una página diferente.</p>

<p className="p">If you were wondering, React Router is a component that loads different pages depending on the URL your user asked for. So if the user goes to http://localhost:8080/hello it would serve one page, and http://localhost:8080/world would serve a different page.</p>
<p className="it">Bueno, eso no es estrictamente cierto. Para evitar tener que agregar una configuración de servidor, las páginas React Router servirá comenzarán todas con / # /, por ejemplo http: // localhost: 8080 / # / hola. Esto significa que index.html se utilizará automáticamente para procesar todas las páginas, lo que a su vez significa que React Router será capaz de cargar la página correcta.</p>

<p className="p">Well, that’s not strictly true. To avoid having to add a server configuration, the pages React Router serves up will all start with /#/, e.g. http://localhost:8080/#/hello. This means that index.html will automatically be used to render all pages, which in turn means that React Router will be able to load the right page.</p>
<p className="it">Su archivo <code>index.js</code> actual debe tener este aspecto:</p>

<p className="p">Your current <code>index.js</code> file should look like this:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">Me gustaría que agregue dos importaciones más después de las dos primeras que tiene:</p>

<p className="p">I’d like you to add two more imports after the first two you have:</p>



<code>src/index.js</code>

<pre></pre>

<p className="it">La primera importación trae tres componentes, de los cuales usaremos dos inmediatamente y el otro en breve. Router es React Router en sí, que tiene una lista de URLs y Los componentes de React y pone los dos juntos. La ruta es una asignación de URL individual, por ejemplo, el detalle de la URL y nuestro componente Detalle. IndexRoute se utiliza como ruta predeterminada; Nos pondremos en eso pronto.</p>

<p className="p">The first import brings three components, of which we’ll be using two immediately and the other shortly. Router is React Router itself, which takes a list of URLs and React components and puts the two together. Route is one individual URL mapping, e.g. the URL detail and our Detail component. IndexRoute is used as a default route; we’ll get onto that soon.</p>
<p className="it">La segunda importación trae una gran complejidad, y lo más probable es que usted no quiere saber sobre ella. En resumen, React Router necesitas una forma inteligente de manejar la historia. Esto se hace parcialmente a través de ese signo # (conocido como un historial de hash porque # se llama "hash" a personas que no reproducen música), y parcialmente a través de claves de consulta especiales en sus URLs. Estas claves de consulta no son necesarias en nuestro ejemplo y solo hacen que las cosas parezcan un poco feas, así que las sacaremos. Pero para sacarlos, necesitamos esta línea de importación como verás en un momento.</p>

<p className="p">The second import brings in a great deal of complexity, and chances are you don’t want to know about it. In short, React Router needs a smart way to handle history. This is partly done through that # sign (known as a hash history because # is called “hash” to people who don’t play music), and partly through special query keys in your URLs. These query keys aren’t needed in our example and just make things look a bit ugly, so we’ll be taking them out. But to take them out, we need this import line as you’ll see in a moment.</p>
<p className="it">Con esas nuevas importaciones, es hora de recurrir a la versión principal de nuestra aplicación. En este momento sólo hacemos un componente Detail, pero necesitamos cambiarlo para que usemos React Router en su lugar. Así es como se ve en su forma más básica:</p>

<p className="p">With those new imports, it’s time to turn to the main rendering of our app. Right now we just render a Detail component, but we need to change that so we use React Router instead. Here’s how it looks in its most basic form:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">Así que, en lugar de renderizar nuestro componente Detail directamente, ahora renderizamos Router, que a su vez crea el componente secundario apropiado para la URL que se empareja. En este momento especificamos sólo una URL, /, y decimos a React Router que cargue nuestro componente Detail.</p>

<p className="p">So, rather than rendering our Detail component directly, we now render Router, which in turn creates the appropriate child component for the URL that gets matched. Right now we specify only one URL, /, and tell React Router to load our Detail component.</p>
<p className="it">Si guarda estos cambios, probá a actualizar su navegador. Estando bien, http: // localhost: 8080 / debe actualizarse para convertirse en algo así como http: // localhost: 8080 / # /? _k = 7uv5b6. Esa es la historia de hash en acción: que? _k = part es una clave única que se usa para rastrear el estado entre ubicaciones, pero realmente no lo necesitamos, así que lo eliminaremos.</p>

<p className="p">If you save those changes, try refreshing your browser. All being well, http://localhost:8080/ should update to become something like http://localhost:8080/#/?_k=7uv5b6. That’s the hash history in action: that ?_k= part is a unique key used to track state between locations, but we really don’t need it so we’ll remove it.</p>


<p className="it">Una instalación básica de React Router muestra URL con números aleatorios en la cadena de consulta.</p>

<p className="p">A basic install of React Router shows URLs with random numbers in the query string.</p>

<p className="it">Al mismo tiempo, también vamos a añadir lo que podrías parecer un poco de un hack, pero me temo que es un requisito hasta que React Router lo resuelve de forma permanente. Ves, cuando usted navega de / # / someurl a / # / someotherurl, usted no está moviéndose realmente en cualquier lugar - React Router acaba de descargar los componentes anteriores y carga el nuevo en su lugar. Esto provoca un problema con el desplazamiento, porque si el usuario se había desplazado hasta la mitad de la página antes de cambiar las URL, se mantendría a medio camino desplazándose por la página del nuevo componente.</p>

<p className="p">At the same time, we’re also going to add what might seem like a bit of a hack, but I’m afraid it’s a required hack until React Router solves it permanently. You see, when you navigate from /#/someurl to /#/someotherurl, you’re not actually moving anywhere – React Router just unloads the previous components and loads the new one in its place. This causes a problem with scrolling, because if the user had scrolled half way down the page before changing URLs, they would remain half way scrolled down the page for the new component.</p>
<p className="it">Por lo tanto, el hack es el siguiente: cada vez que el React Router se actualiza, le decimos al navegador que vuelva a la parte superior del documento, tal como lo haría si estuviéramos cambiando las páginas de la manera pasada de moda.</p>

<p className="p">So, the hack is this: whenever the React Router updates, we tell the browser to scroll back to the top of the document, just as it would if we were changing pages the old-fashioned way.</p>
<p className="it">Podemos hacer estos dos cambios al mismo tiempo. Reemplace su actual línea &lt;Router&gt; por esta:</p>

<p className="p">We can make both these changes at the same time. Replace your current &#60;Router&#62; line with this one:</p>

<code>src/index.js</code>

<pre></pre>

<p className="it">La parte de la historia es la que elimina el desorden de _k = de nuestras URL. La parte onUpdate es lo que asegura que la posición de desplazamiento del usuario se restablece cuando se mueven entre los componentes.</p>

<p className="p">The history part is what removes the ?_k= mess from our URLs. The onUpdate part is what makes sure the user’s scroll position resets when they move between components.</p>
<p className="it">Con esos cambios guardados, deberías poder navegar a http: // localhost: 8080 / y encontrarte en http: // localhost: 8080 / # /, que es lo que queremos. Una vez más, la eliminación del signo # requiere la configuración del servidor que no vamos a hacer aquí. Si desea obtener más información al respecto, consulte la página de documentación React Router que está buscando.</p>

<p className="p">With those changes saved, you should be able to navigate to http://localhost:8080/ and find yourself on http://localhost:8080/#/, which is what we want. Again, removing the # sign requires server configuration that we aren’t going to do here. If you’d like to read more about this, here’s the React Router documentation page you’re looking for.</p>

</div>
    </div>
  </Layout>
)