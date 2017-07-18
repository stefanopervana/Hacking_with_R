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

<h1>Creating a Link Between Pages in React Router</h1>
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



</div>
        </div>
  </Layout>
)