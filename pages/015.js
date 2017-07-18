import Layout from '../components/layout'

export default() => (
  <Layout title='Ch3'>
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



<h1>Cleaning up and Preparing for a Real Project</h1>
<p className="it">En este punto probablemente te estás preguntando a dónde va este tutorial, así que déjame resumir dónde estás hasta ahora:</p>


<p className="p">At this point you’re probably wondering where this tutorial is going, so let me summarise where you are so far:</p>
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
</ul>
<p className="it">Todo esto comenzará a reunirse ahora: vamos a utilizar una llamada Ajax para obtener datos de GitHub. Bueno, técnicamente es Ajaj en lugar de Ajax, porque GitHub proporciona JSON en lugar de XML, pero aún así: es nuestra próxima gran tarea. Si nunca has utilizado Ajax antes, es sólo una forma de obtener datos de forma remota utilizando el navegador web.</p>


<p className="p">All this will begin to come together now: we’re going to use an Ajax call to fetch data from GitHub. Well, technically it’s Ajaj rather than Ajax, because GitHub provides JSON rather than XML, but still: it’s our next big task. If you’ve never used Ajax before, it’s just a way to fetch data remotely using the web browser.</p>
<p className="it">En el terminal, salga de Webpack Dev Server pulsando Ctrl + C y ejecutá este comando:</p>


<p className="p">In the terminal, quit Webpack Dev Server by pressing Ctrl+C and run this command:</p>



<code>npm install --save superagent</code>
 

<p className="it">SuperAgent es un cliente Ajax ridículamente ligero con una sintaxis clara y simple que hace que sea fácil de aprender y usar. Vamos a reemplazar todo esto "Hola, Scott de Escocia!" Cosa con los resultados de una llamada de Ajax a GitHub que tirará en una lista de compromisos al proyecto de React. Esto requerirá hacer bastantes cambios, pero es casi todo lo que has visto antes.</p>


<p className="p">SuperAgent is a ridiculously lightweight Ajax client with clear, simple syntax that makes it easy to learn and use. We’re going to replace this whole “Hello, Scott from Scotland!” thing with the results of an Ajax call to GitHub that will pull in a list of commits to the React project. This will require making quite a few changes, but it’s almost all stuff you’ve seen before.</p>
<p className="it">Nota: cuando SuperAgent haya finalizado la instalación, asegurate de ejecutar webpack-dev-server de nuevo. Primero, encuentre estas líneas en su constructor:</p>


<p className="p">Note: when SuperAgent has finished installing, make sure you run webpack-dev-server again. First, find these lines in your constructor:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">... luego borrarlos todos. Ya no necesitamos personas. Mientras está borrando cosas, siga adelante y elimine la posibilidad de importación de la línea 'casual' y todo el método <code>buttonClicked()</code>; Estos no son necesarios en este momento. No te preocupe: todas las cosas que aprendió resultarán útiles en un próximo capítulo, es sólo que por ahora no lo necesitamos.</p>


<p className="p">…then delete them all. We don’t need people any more. While you’re deleting stuff, go ahead and remove the import Chance from 'chance' line and the whole <code>buttonClicked()</code> method too; these aren’t needed right now. Don’t worry: all that stuff you learned will prove useful in an upcoming chapter, its just that for now we don’t need it.</p>
<p className="it">En su lugar, vamos a crear un estado inicial muy simple: una matriz vacía de commits. Esto será llenado por SuperAgent cuando termine su llamada Ajax. Por lo tanto, donde esas líneas en su constructor fueron hace un momento, poner esto en su lugar:</p>


<p className="p">Instead, we’re going to create some very simple initial state: an empty array of commits. This will be filled by SuperAgent when its Ajax call completes. So, where those lines in your constructor were just a moment ago, put this instead:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">En cuanto al método render(), vamos a cambiar los nombres de las variables, pero de lo contrario sólo imprimir datos estáticos - vamos a llenar los detalles muy pronto, no te preocupes. Cambiarlo para que sea:</p>


<p className="p">As for the <code>render()</code> method, we’re going to change the variable names but otherwise just print out static data – we’ll fill in the specifics soon enough, don’t worry. Change it to be this:</p>
<pre></pre>

<p className="it">Sólo para asegurarse de que está siguiendo a lo largo, aquí es cómo tu componente debe mirar ahora mismo:</p>


<p className="p">Just to make sure you’re following along, here’s how your component should look right now:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Una vez que Guardá ese archivo, su página web quedará en blanco. Esto se debe a que la matriz commits comienza vacía y nunca se llena. Vamos a arreglar eso ahora ...</p>


<p className="p">Once you save that file, your web page will go blank. This is because the commits array starts empty and never gets filled. Let’s fix that now…</p>

</div>

</div>
  </Layout>
)
