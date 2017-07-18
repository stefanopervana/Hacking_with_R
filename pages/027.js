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



<h1>Cleaning up Our Routes and Preparing for the Next Step</h1>
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




</div>
        </div>
  </Layout>
)