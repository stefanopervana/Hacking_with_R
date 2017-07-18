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
<h1>Refactoring our Ajax Code: Don’t Repeat Yourself</h1>
<p className="it">Nuestro código funciona, no hay duda al respecto. Y es fácil de leer, porque acabamos de tomar los conceptos básicos de antes y este tutorial y los ha duplicado tres veces. Pero lo más importante no es fácil de entender o mantener.</p>


<p className="p">Our code works, there’s no doubt about it. And it’s easy to read, because we’ve just taken the basic concepts from earlier and this tutorial and duplicated them three times. But crucially it’s not easy to understand or maintain.</p>
<p className="it">La razón por la que es difícil de entender es porque usted necesitas leer a través de una gran cantidad de código para ver lo que está haciendo. Sí, es posible que sepamos que el código está exactamente duplicado, pero otros no, y tendrían que teerlo todo para verlo.</p>


<p className="p">The reason it’s hard to understand is because you need to read through an awful lot of code to see what it’s doing. Yes, we might know the code is pretty much exactly duplicated, but others won’t, and they’d have to read through it all to see that.</p>
<p className="it">La razón por la que es difícil de mantener es porque el código literalmente ha sido copiado y pegado, con pequeños ajustes. ¿Qué pasa si usted encuentra un error más tarde - se acuerda de cambiarlo para commits, tira y tenedores, o es posible que se olvide de uno de ellos?</p>


<p className="p">The reason it’s hard to maintain is because the code has literally been copied and pasted, with minor adjustments. What if you find a bug later on – will you remember to change it for commits, pulls and forks, or is it possible you’ll forget one of them?</p>
<p className="it">Podemos solucionar estos problemas refactorizando nuestro código, que es un nombre de fantasía para un proceso de hacer el código mejor. La definición de "mejor" podrías ser más rápida de ejecutar, más fácil de entender, más corta, más reutilizable, o cualquier número de mejoras o combinaciones de mejoras, pero esperemos que el resultado es mejor que lo que comenzó.</p>


<p className="p">We can fix these problems by refactoring our code, which is a fancy name for a process of making code better. The definition of “better” might be faster to run, easier to understand, shorter, more re- usable, or any number of improvements or combinations of improvements, but hopefully the result is better than what you started with.</p>
<p className="it">Un objetivo fácil en nuestro código actual es el método componentWillMount(). Hace tres grandes llamadas Ajax, cada una de las cuales varía en sólo tres líneas:</p>


<p className="p">An easy target in our current code is the componentWillMount() method. It makes three large Ajax calls, each of which vary by just three lines:</p>

<p className="it">Ajax.get ('https://api.github.com/repos/facebook/react/commits')</p>


<p className="p">ajax.get('https://api.github.com/repos/facebook/react/commits')</p>
<p className="it">This.setState (&#123;commit: response.body&#125;)</p>


<p className="p">this.setState(&#123; commits: response.body &#125;)</p>
<p className="it">Console.log ('Se produjo un error al obtener commit de GitHub', error);</p>


<p className="p">console.log('There was an error fetching commits from GitHub', error);</p>

<p className="it">Más importante aún, esas tres líneas varían sólo con tres palabras, y la palabrí es la misma cada vez: comete, comete, comete; Horquillas, horquillas, horquillas; Tira, tira, tira Esto está maduro para la refactorización: podríamos crear un método que acepte una cadena como su único parámetro, por ejemplo "commit", y luego lo coloca en esos tres lugares. Podemos entonces llamar a ese método tres veces en componentWillMount().</p>


<p className="p">More importantly, those three lines all vary only by three words, and the word is the same each time: commits, commits, commits; forks, forks, forks; pulls, pulls, pulls. This is ripe for refactoring: we could create a method that accepts a string as its only parameter, e.g. “commits”, then puts it into those three places. We can then call that method three times in componentWillMount().</p>
<p className="it">Para realizar este trabajo necesitamos alguna nueva sintaxis ES6: interpolación de cadenas y nombres de propiedades calculadas. Te mostraré el código primero y luego explicarás los bits interesantes - por favor agrega este método al componente Detalle:</p>


<p className="p">To make this work we need some new ES6 syntax: string interpolation and computed property names. I’ll show you the code first then explain the interesting bits – please add this method to the Detail component:</p>



<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">Por lo tanto, es un método llamado fetchFeed() y toma un solo parámetro llamado tipo. Para colocar eso en la URL de ajax.get() he usado la interpolación de ES6: la URL ahora está envuelta en backticks (esas citas en ángulo divertidas que normalmente se sientan comparten una clave con) en lugar de comillas simples, y cuando haces eso Puede colocar variables (incluyendo otras expresiones) dentro de la cadena. Cuando el compilador ve $ &#123;type&#125; sustituye el contenido del parámetro type en ese punto. La misma técnica se utiliza en la instrucción console.log().</p>


<p className="p">So, it’s a method called fetchFeed() and it takes a single parameter called type. To place that into the ajax.get() URL I’ve used ES6 string interpolation: the URL is now wrapped in backticks (those funny angled quotes that usually sit share a key with ) rather than single quotes, and when you do that you can place variables (including other expressions) right inside the string. When the compiler sees $&#123;type&#125; it substitutes the contents of the type parameter at that point. The same technique is used in the console.log() statement.</p>
<p className="it">La segunda característica ES6 de allí se denomina nombres de propiedades calculadas, y lo ves en la llamada a this.setState(). Echa un vistazo a este código:</p>


<p className="p">The second ES6 feature in there is called computed property names, and you see it in the call to this.setState(). Take a look at this code:</p>


<pre></pre>

<p className="it">¿Es eso decir a) "poner response.body en mi objeto usando el tipo de nombre", o b) "poner response.body en mi objeto usando el nombre commit porque eso es lo que el parámetro de tipo se establece en"?</p>


<p className="p">Is that saying a) “put response.body in my object using the name type”, or b) “put response.body in my object using the name commits because that’s what the type parameter is set to”?</p>
<p className="it">La respuesta es a), y hubo algunos hacks feo que usted podrías hacer para evitar eso. Con ES6 ahora puede escribir [tipo], que es un nombre de propiedad calculado, y efectivamente le dice a la computadora que quiere decir b).</p>


<p className="p">The answer is a), and there were some ugly hacks you could do to work around that. With ES6 you can now write [type], which is a computed property name, and effectively tells the computer you mean b).</p>
<p className="it">Con el nuevo método fetchFeed(), sólo necesitamos llamarlo tres veces cuando el componente se monta. Modificá su método componentWillMount() para extraer todo ese código de Ajax y reemplazarlo por este:</p>


<p className="p">With the new fetchFeed() method in place, we just need to call it three times when the component mounts. Modify your componentWillMount() method to rip out all that Ajax code and replace it with this:</p>



<code>src/pages/Detail.js</code>

<pre></pre>




</div>
    </div>
  </Layout>
)