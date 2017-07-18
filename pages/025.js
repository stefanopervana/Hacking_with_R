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

<h1>Making Custom URLs with React Router Params</h1>
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





</div>
        </div>
  </Layout>
)