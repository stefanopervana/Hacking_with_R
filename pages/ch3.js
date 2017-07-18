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

<h2>What are React Props?</h2>
<p className="it">Cuando utiliza cualquier componente de React puede pasar algunos datos de entrada que deseas que funcione. Estas propiedades se denominan "props" y son valores de sólo lectura que definen el punto de inicio básico de un componente.</p>

<p className="p">When you use any React component you can pass it some input data that you want it to work with. These properties are called “props” and are read-only values that define the basic starting point for a component.</p>



<p className="it">En JSX, los props se parecen a los atributos HTML. Para demostrar esto, vamos a modificar nuestra aplicación para que el componente Detalle pueda tener su mensaje cambiado de otra parte.</p>

<p className="p">In JSX, props look just like HTML attributes. To demonstrate this we’re going to modify our application so that the Detail component can have its message changed from elsewhere.</p>

<p className="it">Cambie el <code>index.js</code> para que sea:</p>

<p className="p">Change <code>index.js</code> to be this:</p>

<code>src/index.js</code>

<pre>
1 import React from 'react';<br></br>
2<br></br>
3 class Detail extends <code>React.Component</code> &#123;<br></br>
4 <code>render()</code> &#123;<br></br>
5 return &#60;p&#62;&#123;this.props.message&#125;&#60;/p&#62;;<br></br>
6 &#125;<br></br>
7 &#125;<br></br>
8<br></br>
9 export default Detail;
</pre>

<p className="it">Tené en cuenta el nuevo mensaje = "Esto viene de props!" Atributo al componente Detalle. En <code>Detail.js</code> necesitamos hacer que se lea desde el mensaje prop en lugar de una cadena codificada, pero eso es bastante fácil de hacer:</p>

<p className="p">Note the new message="This is coming from props!" attribute to the Detail component. In <code>Detail.js</code> we need to make it read from the message prop rather than a hard-coded string, but that’s easy enough to do:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Tené en cuenta cómo he escrito this.props.message dentro de llaves? Eso es porque es código JavaScript en lugar de texto sin formato. Cuando se construye la aplicación, esa parte se ejecuta como código para que se utilice el mensaje de entrada en lugar de una cadena codificada. Si regresa a su navegador, verá que deberías haber actualizado con el nuevo mensaje. Y si entra en <code>index.js</code> y cambia el mensaje allí, se actualizará de nuevo - ¡genial!</p>

<p className="p">Notice how I’ve written this.props.message inside braces? That’s because it’s JavaScript code rather than plain text. When your app gets built that part gets executed as code so that the input message is used rather than a hard-coded string. If you go back to your web browser you’ll see it should have updated with the new message. And if you go into <code>index.js</code> and change the message there, it will update again – great!</p>

<p className="it">Antes de continuar, es importante aclarar que los props no son estrictamente de sólo lectura, y de hecho puede cambiarlos en cualquier momento si lo desea. Sin embargo, al hacerlo se desaconseja muy fuertemente: debe considerarlos sólo de lectura para el componente al que pertenecen y cambiarlos sólo desde el componente que los creó. Es decir, si creastes un componente y le dio algunos props, puede cambiar los props más tarde si lo desea, pero los props que recibe (es decir, this.props) no debe cambiarse.</p>

<p className="p">Before we continue, it’s important I clarify that props aren’t strictly read-only, and indeed you can change them at any point if you wish. However, doing so is very strongly discouraged: you should consider them read only for the component they belong to, and change them only from the component that created them. That is, if you created a component and gave it some props you can change those props later if you want to, but props you receive (i.e., this.props) should not be changed.</p>

<h2>Generating Random Values for Our Page</h2>
<p className="it">Nuestro componente de Detalle está ejecutando ahora código para renderizar el texto que se le pasa como prop, pero también podrías renderizar otro código ES6 válido. Para demostrar esto, vamos a aprovechar la biblioteca Chance, que genera datos aleatorios realistas.</p>

<p className="p">Our Detail component is now executing code to render the text that gets passed to it as props, but it could easily render other valid ES6 code too. To demonstrate this, let’s pull in the Chance library, which generates realistic-looking random data.</p>


<p className="it">En la ventana de su terminal, ejecutá este comando:</p>

<p className="p">In your terminal window, run this command:</p>


<code>npm install --save chance</code>
 
<p className="it">Seguramente todavía está ejecutando Webpack Dev Server, pero eso está bien - presione Ctrl + C para salir de eso, luego ejecutá el comando npm anterior. Una vez que haya terminado, puede reiniciar Webpack Dev Server de nuevo ejecutando webpack-dev-server.</p>

<p className="p">You were probably still running Webpack Dev Server in there, but that’s OK - press Ctrl+C to quit that, then run the npm command above. Once that’s finished you can restart Webpack Dev Server again by running webpack-dev-server.</p>

<p className="it">La biblioteca Chance genera datos aleatorios de aspecto realista, lo que significa que puede generar nombres aleatorios, apellidos, frases de texto, números de seguridad social y así sucesivamente. Esto hace que sea un buen caso de prueba para imprimir información. Para utilizarlo, debe importar la biblioteca en <code>Detail.js</code>, de la siguiente manera:</p>

<p className="p">The Chance library generates realistic-looking random data, which means it can generate random first names, last names, sentences of text, social security numbers and so on – this makes it a good test case for printing out some information. To use it you need to import the library into <code>Detail.js</code>, like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">A continuación, puede generar nombres aleatorios dentro del método <code>render()</code> de la siguiente manera:</p>

<p className="p">You can then generate random first names inside the <code>render()</code> method like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 
<p className="it">Sólo para asegurarse de que está siguiendo a lo largo, aquí es cómo su archivo <code>Detail.js</code> debe buscar una vez que estos cambios se hacen:</p>

<p className="p">Just to make sure you’re following along, here’s how your <code>Detail.js</code> file should look once these changes are made:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Si guarda ese archivo y mira hacia atrás en su navegador, verá "Hola, Emma!" O similar, y puede pulsar refresh en su navegador para ver un nombre diferente.</p>

<p className="p">If you save that file and look back in your web browser you’ll see “Hello, Emma!” or similar appear, and you can hit refresh in your browser to see a different name.</p>
<p className="it">Así que podes ver que estamos literalmente llamando al primer método en la biblioteca de azar justo allí durante la renderización, y espero que esté claro que poner código en llaves como este es muy poderoso de hecho.</p>

<p className="p">So you can see we’re literally calling the first() method in the Chance library right there while rendering, and I hope it’s clear that putting code into braces like this is very powerful indeed.</p>
<p className="it">Pero hay una trampa, y es grande. De hecho, es un retén tan grande que el pescador contará cuentos sobre él en los próximos años ...</p>

<p className="p">But there’s a catch, and it’s a big one. In fact, it’s a catch so big that fisherman will tell tall tales about it for years to come…</p>

<h2>How to Write if/else Conditional Statements in JSX</h2>
<p className="it">Ahora nuestro <code>render()</code> código se ve así:</p>

<p className="p">Right now our <code>render()</code> code looks like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 
<p className="it">Todo dentro de esos tirantes es código ES6 y se ejecutará entonces tendrá sus resultados puestos de nuevo en el render. En este caso, significa que verás nombres aleatorios cada vez que actualices tu página.</p>

<p className="p">Everything inside those braces is ES6 code and will be executed then have its results put back into the render. In this case, it means you’ll see random names every time you refresh your page.</p>


<p className="it">Sin embargo, ese código es en realidad un tipo muy específico de código llamado una expresión, lo que significa que se puede traducir directamente a un valor. Esto es en comparación con otro tipo de código llamado una sentencia, que es donde se puede por ejemplo crear variables o realizar algún otro tipo de acción.</p>

<p className="p">However, that code is actually a very specific kind of code called an expression, which very roughly means that it can be translated directly into a value. This is in comparison to another kind of code called a statement, which is where you can for example create variables or perform some other kind of action.</p>
<p className="it">Me doy cuenta de que esta distinción puede parecer insignificante, pero confía en mí: es importante. La razón por la que es importante es porque sólo puede utilizar expresiones dentro de JSX llaves, no las declaraciones completas. Por ejemplo, &#123;this.props.message&#125; y &#123;chance.first()&#125; son válidos, pero algo así no es:</p>

<p className="p">I realize this distinction might seem insignificant, but trust me: it’s important. The reason it’s important is because you can only use expressions inside JSX braces, not full statements. For example, &#123;this.props.message&#125; and &#123;chance.first()&#125; are both valid, but something like this is not:</p>


<pre></pre>

<p className="it">(Si te estabas preguntando, === es la forma recomendada de comparar valores en JavaScript, si usas == ahora mismo deberías cambiar, porque hay una gran diferencia entre "truth" y "truthy").</p>

<p className="p">(If you were wondering, === is the recommended way of comparing values in JavaScript; if you use == right now you should probably switch, because there’s a big difference between “truth” and “truthy”.)</p>
<p className="it">Ahora bien, usted podrías muy bien pensar "Me alegro de que tipo de código no está permitido, porque es tan difícil de leer!" Y tendría razón: No te puede escribir if / else dentro de las sentencias JSX. Sin embargo, JavaScript es (muy vagamente) un lenguaje de tipo C, lo que significa que ha heredado sintaxis condicional que te permite hacer / else como una expresión.</p>

<p className="p">Now, you might very well think “I’m glad that kind of code isn’t allowed, because it’s so hard to read!” And you’d be right: you can’t write if/else statements inside JSX. However, JavaScript is (very loosely) a C-like language, which means it has inherited conditional syntax that lets you do if/else as an expression.</p>
<p className="it">Traducido, eso significa que hay una manera de reescribir esa declaración anterior como una expresión, lo que a su vez significa que puede usarla dentro de JSX. Sin embargo, debes acero de sí mismo para algunos muy sombría sintaxis. Aquí está:</p>

<p className="p">Translated, that means there’s a way to rewrite that above statement as an expression, which in turn means you can use it inside JSX. However, you should steel yourself for some pretty grim syntax. Here it is:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Si lo escribo en varias líneas, probablemente ayudará:</p>

<p className="p">If I write it out on multiple lines it will probably help:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Puede poner eso en tu componente si lo desea, pero es sólo un ejemplo de demostración - lo vamos a eliminar en breve.</p>

<p className="p">You can put that into your component if you want to, but it’s just an example for demonstration – we’ll be removing it shortly.</p>
<p className="it">Las abrazaderas de apertura y cierre son viejas, pero el pedacito en el medio es nuevo y se llama una expresión ternaria porque se compone de tres partes: la condición (casual.first() == 'John'), qué usar si el Condition es verdadera (console.log ('Got John')) y qué utilizar si la condición es falsa (console.log ('Got someone else')).</p>

<p className="p">The opening and closing braces are old, but the bit in the middle is new and is called a ternary expression because it’s made up of three parts: the condition (chance.first() == 'John'), what to use if the condition is true (console.log('Got John')) and what to use if the condition is false (console.log('Got someone else')).</p>
<p className="it">La parte importante es el signo de interrogación y el colon: la sección "verdadera" viene después del signo de interrogación y la parte falsa viene después del colon. No es en absoluto obvio, y realmente hace para el código feo, pero es absolutamente permisible dentro de JSX y por lo tanto, guste o no, verá expresiones ternarias por todo el lugar en React código.</p>

<p className="p">The important part is the question mark and the colon: the “true” section comes after the question mark, and the false part comes after the colon. It’s not at all obvious, and it really does make for ugly code, but it is absolutely allowable inside JSX and so, like it or not, you’ll see ternary expressions all over the place in React code.</p>
<p className="it">Peor aún, verá a menudo las expresiones ternarias dobles o incluso triples donde los signos de interrogación y los puntos se acumulan cada vez más alto para formar un árbol verdadero / falso. Estos también están permitidos por JSX, pero estoy bastante seguro de que no son permitidos por la Convención de Ginebra o algo así.</p>

<p className="p">Worse, you’ll often see double or even triple ternary expressions where the question marks and colons stack up higher and higher to form a true/false tree. These are also allowed by JSX, but I’m pretty sure they are disallowed by the Geneva Convention or something.</p>
<p className="it">Una de las pocas cosas buenas sobre las expresiones ternarias en JSX es que su resultado se pone directamente en su salida. Por ejemplo:</p>

<p className="p">One of the few nice things about ternary expressions in JSX is that their result gets put straight into your output. For example:</p>

<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">En ese ejemplo, los bloques verdadero / falso de la expresión ternaria sólo contienen una cadena, pero está bien porque la cadena se pasa de nuevo al JSX y se mostrará dentro del elemento &lt;p&gt;.</p>

<p className="p">In that example, the true/false blocks of the ternary expression just contains a string, but that’s OK because the string gets passed back into the JSX and will be displayed inside the &#60;p&#62; element.</p>
<p className="it">Por lo tanto: estar preparado para utilizar estas expresiones ternarias a veces, a menudo escritas enteramente en una línea, pero por favor recuerde que son fácilmente abusados!</p>

<p className="p">So: be prepared to use these ternary expressions sometimes, often written entirely on one line, but please remember they are easily abused!</p>


<h2>Using JSX to Render Several Elements at Once</h2>
<p className="it">Nuestro código actual no es muy emocionante, pero espero que pueda sentir que está aprendiendo cosas. Para hacer las cosas más interesantes, vamos a imprimir un nombre y un país para nuestra persona ficticia.</p>

<p className="p">Our current code isn’t very exciting, but I hope you can feel you’re learning things. To make things more interesting, let’s print both a name and a country for our fictional person.</p>
<p className="it">Esto es fácil de hacer con la biblioteca Chance que ya hemos añadido, pero primero debes quitar la expresión ternaria si la agregaste, volviendo a un método <code>render()</code> muy básico como este:</p>

<p className="p">This is easy to do with the Chance library we already added, but first please remove the ternary expression if you added it, going back to a very basic <code>render()</code> method like this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 

<p className="it">OK, agradable y fácil otra vez. Añadir un nombre de país al azar con Chance se hace así:</p>

<p className="p">OK, nice and easy again. Adding a random country name using Chance is done like this:</p>


<pre></pre>
 

<p className="it">Eso devolverá "Australia" u otros nombres de países, listos para usar, por lo que podrías pensar que podríamos modificar nuestro método <code>render()</code> para que parezca algo así:</p>

<p className="p">That will return “Australia” or other country names, ready to use, so you might think we could modify our <code>render()</code> method to look something like this:</p>


<pre></pre>

<p className="it">Pero si lo intentas encontrarás que React se niega a cargar tu página. Dentro de la consola de mensajes de su navegador, verá una pared de mensajes de error en rojo que te indica que su JSX no es válido. Entonces, ¿qué salió mal?</p>

<p className="p">But if you try that you’ll find that React refuses to load your page. Inside your browser’s message console you’ll see a wall of red error messages telling you that your JSX is invalid. So what went wrong?</p>
<p className="it">Bueno, al igual que con las expresiones ternarias, esta es otra instancia en la que debes "mirar detrás de la cortina" de JSX para ver qué está pasando: tu método <code>render()</code> devuelve uno y solo un valor y cada uno de esos elementos &lt;p&gt; Se convierte en código cuando se crea su aplicación. Por lo tanto, cuando la aplicación se construye, tener dos &lt;p&gt; elementos significa que está tratando de devolver dos valores, lo que no es posible.</p>

<p className="p">Well, as with ternary expressions this is another instance where you need to “look behind the curtain” of JSX to see what’s going on: your <code>render()</code> method gets to return one and only one value, and each of those &#60;p&#62; elements gets converted into code when your app is built. So, when the app gets built, having two &#60;p&#62; elements means you’re trying to return two values, which isn’t possible.</p>

<p className="it">Hay una solución, y es fácil: envolver esos dos &lt;p&gt; elementos dentro de otro elemento, por ejemplo &#60;div&#62; elemento. Si lo hace, JSX puede ver claramente el inicio y el final de un único valor de retorno, y todo funciona de nuevo.</p>



<p className="p">There is a solution, and it’s an easy one: wrap those two &#60;p&#62; elements inside another element, e.g. &#60;div&#62; element. If you do that, JSX can clearly see the start and end of a single return value, and everything works again.</p>

<p className="it">Así que, de nuevo, aquí está el código malo:</p>
<p className="p">So, again, here’s the bad code:</p>



<pre></pre>


<p className="it">Y aquí está el código fijo que envuelve ambos &lt;p&gt; elementos dentro de un solo &lt;div&gt;:</p>
<p className="p">And here’s the fixed code that wraps both those &#60;p&#62; elements inside a single &#60;div&#62;:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">No importa cuántos elementos de niño (o elementos de nieto, nietos, etc.) que &lt;div&gt; tenga, siempre y cuando solo haya un elemento que se devuelva.</p>

<p className="p">It doesn’t matter how many child elements (or grandchild elements, great-grandchild elements, etc) that &#60;div&#62; has, as long as there is only one element being returned.</p>


<p className="it">No es posible devolver más de un elemento JSX del método <code>render()</code> y generará muchos mensajes de error.</p>
<p className="p">Returning more than one JSX element from your <code>render()</code> method is not possible and will output a great many error messages.</p>

<h2>Handling Events with JSX: onClick</h2>
<p className="it">El evento onClick ha existido desde hace mucho tiempo, y permite a los desarrolladores llamar a un fragmento de código en particular cuando el usuario hace clic en o teclea un elemento en particular. También podes usar esto en React, pero la sintaxis es un poco diferente. Para ampliar nuestro código actual, es posible que desee agregar un botón que muestre un nombre aleatorio diferente y un país cada vez que se haga clic.</p>

<p className="p">The onClick event has been around for a long time, and it lets developers call a particular piece of code when the user clicks or taps a particular item. You can use this in React too, but the syntax is a little different. To extend our current code, we might want to add a button that shows a different random name and country every time it’s clicked.</p>
<p className="it">Gracias principalmente a algunas peculiaridades históricas de JavaScript, hay tres maneras principales de llamar a los métodos en React/ES6, de los cuales los dos primeros son los primeros en ser los más comunes. Aquí está el ejemplo más básico:</p>

<p className="p">Thanks mainly to some historical quirks of JavaScript, there are three primary ways of calling methods in React/ES6, of which the first two are by first the most common. Here’s the most basic example:</p>

<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">Hay tres cosas nuevas:</p>
<p className="p">There are three new things there:</p>

<ul>
<li className="it">El elemento &lt;button&gt; JSX es idéntico al elemento &lt;button&gt; HTML: dibuja un botón que se puede hacer clic en la pantalla, en este caso diciendo "Meet Someone New".</li>

<li className="p">The &#60;button&#62; JSX element is identical to the &#60;button&#62; HTML element: it draws a clickable button on the screen, in this case saying “Meet Someone New”.</li>
<li className="it">OnClick = &#123;this.buttonClicked&#125; es la forma de adjuntar eventos a elementos JSX. No debes poner comillas alrededor de él como lo habrías hecho con HTML - este es el código que se llama, después de todo.</li>

<li className="p">onClick=&#123;this.buttonClicked&#125; is how you attach events to JSX elements. You shouldn’t put quotes around it like you would have done with HTML – this is code being called, after all.</li>
<li className="it">Hay un nuevo método <code>buttonClicked()</code> que escribe algún texto en la ventana de la consola del navegador. Utiliza esto para significar "este es mi método en comparación con el de alguien más".</li>

<li className="p">There’s a new <code>buttonClicked()</code> method that writes some text to your browser’s console window. It uses this to mean “this is my method as opposed to someone else’s.”</li>
</ul>

<p className="it">Guardá ese código e intentá hacer clic en el botón - deberías poder ver el mensaje que está imprimiendo. Por lo tanto, esa es la primera manera de llamar a los métodos cuando ocurren eventos, y espero que esté de acuerdo en que es fácil.</p>

<p className="p">Save that code and try clicking the button – you should be able to see the message being printed out. So, that’s the first way to call methods when events occur, and I hope you’ll agree it’s easy.</p>
<p className="it">La segunda forma es donde aparecen las peculiaridades de JavaScript. No sólo queremos escribir un texto en la consola de depuración, queremos volver a representar nuestro componente para que se genere un nuevo nombre y lugar. Los componentes de React tienen un método especial (si se utiliza rara vez) horneado para hacer precisamente eso, y se llama <code>forceUpdate()</code>. Por lo tanto, podrías pensar en escribir código como este:</p>
<p className="p">The second way is where the JavaScript quirks come in. We don’t just want to write some text to the debug console, we want to re-render our component so that a new name and place are generated. React components have a special (if rarely used) method baked in to do just that, and it’s called <code>forceUpdate()</code>. So, you might think of writing code like this:</p>


<pre></pre>
 

<p className="it">Lamentablemente eso no funciona. Y no funciona porque JavaScript se confunde lo que quiere decir con "esto". Bueno, no está confundido, pero todo el mundo ciertamente lo es. Así que mientras el método <code>render()</code> sabe que esto se refiere a la instancia actual del componente Detail, el código dentro del método <code>forceUpdate()</code> no lo sabrá y obtendrá errores.</p>


<p className="p">Sadly that doesn’t work. And it doesn’t work because JavaScript gets confused what you mean by “this”. Well, it isn’t confused, but everyone else certainly is. So while the <code>render()</code> method knows that this refers to the current instance of the Detail component, the code inside the <code>forceUpdate()</code> method won’t know, and you’ll get errors.</p>
<p className="it">Sí, esto es confuso. Sí, es desagradable. Y sí, estás atascado con él. Afortunadamente hay una solución relativamente simple: un método especial llamado <code>bind()</code> que te permite forzar JavaScript a usar una definición de esto que especificas. Es decir, decis literalmente, "cuando vea 'esto', me refiero a X, no su propia idea loca de lo que podrías ser".</p>

<p className="p">Yes, this is confusing. Yes, it’s unpleasant. And yes, you’re stuck with it. Fortunately there’s a relatively simple solution: a special method called <code>bind()</code> that lets you force JavaScript to use a definition of this you specify. That is, you literally say, “when you see ‘this’, I mean X, not your own crazy idea of what it might be.”</p>
<p className="it">Para usar <code>bind()</code> basta con ponerlo después del nombre del método que deseas llamar, luego asegurate de pasar el valor actual de este para hacer que el utilizado en su método. No te preocupe si esto es confuso: esto es un problema de JavaScript, no es un problema.</p>

<p className="p">To use <code>bind()</code> just put it after the method name you want to call, then make sure and pass in the current value of this to make that the one used inside your method. Don’t worry if this is confusing: this is a JavaScript problem, not a you problem.</p>
<p className="it">Para resolver este problema de una vez por todas, necesitamos llamar a <code>buttonClicked()</code> usando bind (this), entonces podemos llamar a <code>forceUpdate()</code> desde dentro de <code>buttonClicked()</code>.</p>

<p className="p">To solve this problem once and for all, we need to call <code>buttonClicked()</code> using bind(this), then we can safely call <code>forceUpdate()</code> from inside <code>buttonClicked()</code>.</p>

<p className="it">Primero lo primero, aquí está el código del nuevo botón:</p>
<p className="p">First things first, here’s the new button code:</p>

<code>src/pages/Detail.js</code>

<pre></pre>
 


<p className="it">Ahora aquí está el nuevo método <code>buttonClicked()</code>:</p>
<p className="p">Now here’s the new <code>buttonClicked()</code> method:</p>

<code>src/pages/Detail.js</code>

<pre></pre>


<p className="it">Guardá esos cambios, luego intentá hacer clic en su botón - fácil, ¿eh?</p>
<p className="p">Save those changes, then try clicking your button – easy, huh?</p>

<p className="it">Una última cosa antes de continuar - Y ACÁ NECESITAS UNA GRAN ADVERTENCIA EN LETRAS DE CAPITAL - debes tener cuidado de no escribir esto por accidente:</p>
<p className="p">One last thing before we continue – AND THIS NEEDS A BIG WARNING IN CAPITAL LETTERS
– you must be careful not to write this by accident:</p>


<pre></pre>
<p className="it">Tené en cuenta cómo se está perdiendo la parte <code>.bind</code>? Es un error que harás tarde o temprano, así que quiero explicar brevemente por qué es un error.</p>
<p className="p">Notice how that’s missing the <code>.bind</code> part? It’s a mistake you will make sooner or later, so I want to explain briefly why it’s a mistake.</p>


<p className="it">La diferencia es la siguiente: si escribís <code>onClick=&#123;this.buttonClicked(this)&#125;</code> ese código se llama inmediatamente cuando se ejecuta tu página, no cuando se hace clic en el botón. Y debido a que ese método llama a <code>forceUpdate()</code>, significa que <code>render()</code> se llama de nuevo, así que <code>onClick=&#123;this.buttonClicked(this)&#125;</code> se llama de nuevo, por lo que <code>forceUpdate()</code> se llama de nuevo ... ad infinitum - o al menos hasta que tu Navegador web se da por vencido, lo que es probablemente alrededor de un millar de veces a través de ese bucle.</p>


<p className="p">The difference is this: if you write <code>onClick=&#123;this.buttonClicked(this)&#125;</code> that code gets called immediately when your page is run, not when the button is clicked. And because that method calls <code>forceUpdate()</code>, it means that <code>render()</code> gets called again, so <code>onClick=&#123;this.buttonClicked(this)&#125;</code> gets called again, so <code>forceUpdate()</code> gets called again… ad infinitum – or at least until your web browser gives up, which is probably about a thousand or so times through that loop.</p>
<p className="it">Por lo tanto: si se desencadena un evento y necesitas usar esto dentro del método para manejar ese evento, debes usar <code>bind()</code> para asegurarte de que esto es lo que crees que es, y también para asegurarte de que el código no llama de inmediato.</p>


<p className="p">So: if an event is triggered and you need to use this inside the method to handle that event, you need to use <code>bind()</code> to make sure this is what you think it is, and also to ensure the code is not called straight away.</p>

<h2>State vs Props in React</h2>
<p className="it">Ya hemos visto cómo pasar los props a un componente React para darle algunos valores iniciales, pero ¿qué pasa entonces? ¿Qué pasa si el componente necesitas actualizar esos props porque el usuario hizo clic en un botón o introdujo algún texto o, o o…?</p>


<p className="p">We’ve already seen how to pass props to a React component in order to give it some starting values, but what happens then – what if the component needs to update those props because the user clicked a button, or entered some text, or, or, or…?</p>
<p className="it">React tiene una solución y se llama estado. El estado se ve y funciona como props, con una excepción: mientras que los props son de sólo lectura por su propio componente, cualquier componente puede cambiar su propio estado o incluso el estado de un componente diferente si lo deseas.</p>


<p className="p">React has a solution and it’s called state. State looks and works just like props, with one exception: while props are read-only by their owning component, any component can change its own state or even a different component’s state if it wants to.</p>
<p className="it">Es importante que entiendas que el almacenamiento del estado es totalmente opcional, y de hecho es preferible evitarlo cuando sea posible. Ves, si se resta el estado de un componente, se obtiene lo que se llama un "componente sin estado" o "componente tonto", que es un componente que siempre hará lo mismo cuando se le da el mismo conjunto de props. Los componentes apátridas son más fáciles de entender y fáciles de probar, lo que siempre es una buena cosa.</p>


<p className="p">It’s important that you understand storing state is entirely optional, and indeed it’s preferable to avoid it where possible. You see, if you subtract state from a component, you get what is called a “stateless component” or “dumb component”, which is a component that will always do the same thing when given the same set of props. Stateless components are easier to understand and easier to test, which is always a good thing.</p>
<p className="it">Sin embargo, tendrás que utilizar el estado en algún momento, así que vamos a darle una oportunidad. Ahora publicamos un nuevo nombre y lugar cada vez que el componente es renderizado, pero podríamos modificar nuestra clase para que calculemos el nombre y el lugar cuando se creó entonces nunca más - lo estamos haciendo aleatorio cuando la página se carga, luego parte del estado del componente a partir de entonces.</p>


<p className="p">Still, you will need to use state at some point, so let’s give it a try. Right now we output a new name and place every time the component is rendered, but we could modify our class so that we calculate the name and place when it’s created then never again – we’re making it random when the page loads, then part of the component state thereafter.</p>
<p className="it">Para hacer esto debes aprender tres cosas nuevas: <code>constructor()</code>, <code>super()</code> y la propiedad <code>this.state</code>.</p>


<p className="p">To do this you need to learn three new things: <code>constructor()</code>, <code>super()</code> and the <code>this.state</code> property.</p>
<p className="it">El método <code>constructor()</code> se llama automáticamente cuando se crea un objeto y nos da la oportunidad de realizar cualquier trabajo de inicialización necesario para hacer que el objeto sea útil. Esto sólo se llama una vez para cada objeto, y nunca lo llaman directamente.</p>


<p className="p">The <code>constructor()</code> method is automatically called when an object is created, and gives us chance to do any initialization work required to make the object useful. This only gets called once for each object, and you never call it directly.</p>
<p className="it">El método <code>super()</code> es un método especial que significa "llame a este mismo método en cualquier clase de la que heredé". Si recuerda, nuestro componente de Detalle se basa en <code>React.Component</code>: es lo que significa esta línea:</p>


<p className="p">The <code>super()</code> method is a special method that means “call this same method on whichever class I inherited from.” If you remember, our Detail component builds on <code>React.Component</code> – that’s what this line means:</p>


<pre></pre>

<p className="it">Esto significa que nuestro componente Detail obtiene toda la funcionalidad proporcionada por su clase padre, <code>React.Component</code>. También significa que es una buena práctica dejar <code>React.Component</code> hacer su propia inicialización si es necesario, que es lo que <code>super()</code> hace: le dice a la clase padre que siga adelante y ejecutá el mismo método en sí mismo antes de que podamos continuar.</p>


<p className="p">This means our Detail component gets all the functionality provided by its parent class, <code>React.Component</code>. It also means that it’s good practise to let <code>React.Component</code> do its own initialization if it needs to, which is what <code>super()</code> does: it tells the parent class to go ahead and run the same method on itself before we can continue.</p>
<p className="it">Finalmente, la propiedad <code>this.state</code>. Esto no está definido de forma predeterminada (es decir, no existe), pero puedo crearlo para que sea un diccionario de elementos que contengan datos válidos de ES6.</p>

<p className="p">Finally, the <code>this.state</code> property. This is undefined by default (i.e., it doesn’t exist), but you can create it to be a dictionary of items that contain any valid ES6 data.</p>

<p className="it">Poniendo esas tres cosas juntas vamos a 1) escribir un constructor para el componente Detail que 2) llama a <code>super()</code> para que <code>React.Component</code> pueda hacer cualquier inicialización que necesite, entonces 3) establece <code>this.state</code> como un valor que contiene un nombre y un país de nuestra persona al azar.</p>

<p className="p">Putting those three things together we’re going to 1) write a constructor for the Detail component that 2) calls <code>super()</code> so that <code>React.Component</code> can do any initializing it needs to, then 3) sets <code>this.state</code> to be a value containing a name and a country of our random person.</p>
<p className="it">Aquí está el código para hacer eso - poner esto justo por encima del método <code>buttonClicked()</code> que existe ahora:</p>


<p className="p">Here’s the code to do just that – put this just above the <code>buttonClicked()</code> method that exists right now:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Hice sneak una pequeña cosa extra en allí, que es que <code>constructor()</code> toma props del componente como su único parámetro de entrada. Esto debe ser transmitido con el <code>super()</code> para que la clase padre pueda actuar sobre esos props según sea necesario.</p>


<p className="p">I did sneak one extra little thing in there, which is that <code>constructor()</code> takes the component’s props as its only input parameter. This must get passed on with the <code>super()</code> so that the parent class can act on those props as needed.</p>

<p className="it">Así que, ahora que el nombre y el país de nuestra persona están siendo configurados, podemos ajustar nuestro método <code>render()</code> para usarlos:</p>


<p className="p">So, now that the name and country of our person are being set up front, we can adjust our <code>render()</code> method to use them:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">La página resultante puede parecer la misma, pero si haces clic en el botón verás que no pasa nada- el nombre y el país que se muestra nunca cambian, aunque todo funciona correctamente. La razón de esto es porque los valores de nombre y país se configuran cuando se crea el componente, no cuando se procesa, por lo que no importa cuántas veces se invoca a <code>forceUpdate()</code>: la salida no cambiará.</p>


<p className="p">The resulting page might look the same, but if you click the button you’ll see that nothing happens– the name and country being shown never change, even though it’s all working correctly. The reason for this is because the name and country values are set up when the component is created, not when it’s rendered, so it doesn’t matter how many times <code>forceUpdate()</code> gets called: the output won’t change.</p>

</div>

</div>
  </Layout>
)
