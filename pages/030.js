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


<h1>Time for some Basic User Interface Polish</h1>
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


</div>

        </div>
  </Layout>
)