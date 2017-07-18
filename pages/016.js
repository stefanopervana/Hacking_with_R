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
<h1>Fetching Ajax Data from GitHub using SuperAgent</h1>
<p className="it">Parte de la razón por la que me gusta trabajar con SuperAgent es que es muy simple de usar - los creadores hicieron un gran trabajo en hacer sus métodos fáciles de leer y entender. Para empezar, importe SuperAgent en tu componente de la siguiente manera:</p>


<p className="p">Part of the reason I enjoy working with SuperAgent is that it’s so very simple to use – the creators did a great job in making its methods easy to read and understand. To get started, import SuperAgent into your component like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">Nota: puede llamar a SuperAgent lo que quiera en su código, y sus propios ejemplos usualmente lo llaman como solicitud en lugar de ajax. Encuentro ajax fácil recordar, que es porqué lo uso.</p>


<p className="p">Note: you can call SuperAgent whatever you want in your code, and their own examples usually alias it as request rather than ajax. I find ajax easy to remember, which is why I use it.</p>
<p className="it">Ahora, queremos que nuestra llamada Ajax se ejecutá cuando nuestra página se cargue, y React tiene un método especial que se llama en el momento adecuado: componentWillMount(). Como probablemente puede adivinar a partir del nombre, este método se llama a un componente justo antes de que se representa por primera vez. Esto hace que sea un gran lugar para que comience nuestra petición de Ajax.</p>


<p className="p">Now, we want our Ajax call to run when our page loads, and React has a special method that gets called at just the right time: componentWillMount(). As you can probably guess from the name, this method gets called on a component just before it’s rendered for the very first time. This makes it a great place for us to kick off our Ajax request.</p>
<p className="it">Agregue este método a tu componente:</p>


<p className="p">Add this method to your component:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Vamos a desglosar lo que realmente hace ...</p>


<p className="p">Let’s break down what it actually does…</p>

<p className="it">ComponentWillMount() es el nombre del método, y necesitas ser nombrado exactamente para que React lo llame.</p>


<p className="p">componentWillMount() is the name of the method, and needs to be named exactly this in order for React to call it.</p>


ajax.get(‘https://api.github.com/repos/facebook/react/commits’) tells SuperAgent to fetch the list of commits to the React project from GitHub. I chose GitHub because they have a simple API that doesn’t require authentication.
⇒
.end((error, response)	&#123; tells SuperAgent what to do when the request finishes: it should run the anonymous function that follows.
if (!error && response) &#123; starts a conditional statement: the following should run only if there was no error and there was a response from the server.
this.setState(&#123; commits: response.body &#125;) updates our component’s state using the body
value of the SuperAgent response.
&#125; else &#123; the other half of our conditional statement: if there was an error or if the server provided no response.
console.log(…) print an error message to the browser console window.
Lots of closing braces.

<p className="it">Hay dos cosas más que usted necesitas saber para entender ese código. Primero: todas las llamadas de SuperAgent son asíncronas, lo que significa que su código no sólo se congela mientras SuperAgent espera a que GitHub responda. En su lugar, otro código se ejecuta, y SuperAgent sólo llamará a su función anónima cuando haya terminado de recibir la respuesta de GitHub.</p>


<p className="p">There are two more things you need to know in order to understand that code. First: all SuperAgent calls are asynchronous, which means your code doesn’t just freeze while SuperAgent waits for GitHub to respond. Instead, other code executes, and SuperAgent will only call your anonymous function when it has finished getting GitHub’s response.</p>
<p className="it">La segunda cosa a saber es que response.body es un poco de magia SuperAgent: ha detectado que GitHub ha respondido con el tipo de contenido "application / json" y convierte automáticamente la respuesta de GitHub en objetos JavaScript. Es por eso que podemos enviar response.body directamente a nuestro estado: ya es una serie de objetos listos para usar.</p>


<p className="p">The second thing to know is that response.body is a bit of SuperAgent magic: it has detected that GitHub has responded with the content type “application/json” and automatically converts GitHub’s response into JavaScript objects. That’s why we can send response.body straight into our state: it’s already an array of objects ready to use.</p>
<p className="it">Cuando Guardá su página ahora, verá "Algunos datos de confirmación aquí" impresos muchas veces en su navegador. Cada uno de ellos es el resultado de un commit en el repositorio de Facebook GitHub, pero no estamos haciendo nada con cada commit todavía - nuestro JSX es estático.</p>


<p className="p">When you save your page now, you’ll see “Some commit data here” printed out lots of times in your browser. Each of those is the result of one commit to the Facebook GitHub repository, but we’re not doing anything with each commit just yet – our JSX is static.</p>
<p className="it">Nuestra aplicación muestra ahora "Algunos datos de confirmación aquí" 30 veces, pero sólo porque no hemos dicho a React qué datos queremos que muestre.</p>


<p className="p">Our app now displays “Some commit data here” 30 times, but only because we haven’t told React what data we want it to show.</p>





</div>
    </div>
  </Layout>
)