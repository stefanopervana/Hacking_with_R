import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='008'>
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

<h1>How to Write if/else Conditional Statements in JSX</h1>
<p className="it">Ahora nuestro código <code>render()</code> se ve así:</p>

<p className="p">Right now our <code>render()</code> code looks like this:</p>

<code>src/pages/Detail.js</code>

<pre>return <p>Hello, &#123;chance.first()&#125;!</p>;</pre>
 
<p className="it">Todo dentro de esas llaves es código ES6 y se ejecutará. Entonces tendrás los resultados puestos de nuevo en el render. En este caso, significa que verás nombres aleatorios cada vez que actualices tu página.</p>

<p className="p">Everything inside those braces is ES6 code and will be executed then have its results put back into the render. In this case, it means you’ll see random names every time you refresh your page.</p>


<p className="it">Sin embargo, <span classNme="sub">ese código es en realidad un tipo muy específico de código llamado una expresión, lo que significa que se puede traducir directamente a un valor. Esto es en comparación con otro tipo de código llamado una sentencia, que es donde se puede por ejemplo crear variables o realizar algún otro tipo de acción</span>.</p>

<p className="p">However, that code is actually a very specific kind of code called an expression, which very roughly means that it can be translated directly into a value. This is in comparison to another kind of code called a statement, which is where you can for example create variables or perform some other kind of action.</p>
<p className="it">Me doy cuenta de que esta distinción puede parecer insignificante, pero confiá en mí: es importante. La razón por la que es importante es porque sólo podes utilizar expresiones dentro de llaves JSX, no las declaraciones completas. Por ejemplo, &#123;this.props.message&#125; y &#123;chance.first()&#125; son válidos, pero algo así no lo es:</p>

<p className="p">I realize this distinction might seem insignificant, but trust me: it’s important. The reason it’s important is because you can only use expressions inside JSX braces, not full statements. For example, &#123;this.props.message&#125; and &#123;chance.first()&#125; are both valid, but something like this is not:</p>


<pre>
&#123;if (chance.first() === 'John') &#123; console.log('Got John');<br></br>
&#125; else &#123; console.log('Got someone else'); &#125; &#125;
</pre>

<p className="it">(Si te estabas preguntando, === es la forma recomendada de comparar valores en JavaScript, si usas == ahora mismo deberías cambiar, porque hay una gran diferencia entre "truth" y "truthy").</p>

<p className="p">(If you were wondering, === is the recommended way of comparing values in JavaScript; if you use == right now you should probably switch, because there’s a big difference between “truth” and “truthy”.)</p>
<p className="it">Ahora bien, podrías muy bien pensar "Me alegro de que tipo de código no está permitido, porque es tan difícil de leer!" Y tendrías razón: No se puede escribir if/else dentro de las sentencias JSX. Sin embargo, JavaScript es (muy vagamente) un lenguaje de tipo C, lo que significa que ha heredado sintaxis condicional que te permite tratar a if/else como una expresión.</p>

<p className="p">Now, you might very well think “I’m glad that kind of code isn’t allowed, because it’s so hard to read!” And you’d be right: you can’t write if/else statements inside JSX. However, JavaScript is (very loosely) a C-like language, which means it has inherited conditional syntax that lets you do if/else as an expression.</p>
<p className="it">Traducido, eso significa que hay una manera de reescribir esa declaración anterior como una expresión, lo que a su vez significa que podes usarla dentro de JSX. Sin embargo, debes acero de sí mismo para algunos muy sombría sintaxis. Aquí está:</p>

<p className="p">Translated, that means there’s a way to rewrite that above statement as an expression, which in turn means you can use it inside JSX. However, you should steel yourself for some pretty grim syntax. Here it is:</p>

<code>src/pages/Detail.js</code>

<pre>
    &#123;chance.first() === 'John' ? console.log('Got John')<br></br>
: console.log('Got someone else') &#125;
</pre>

<p className="it">Si lo escribo en varias líneas, probablemente ayudará:</p>

<p className="p">If I write it out on multiple lines it will probably help:</p>

<code>src/pages/Detail.js</code>

<pre>    &#123;<br></br>
        chance.first() === 'John'<br></br>
        ? console.log('Got John')<br></br>
        : console.log('Got someone else')<br></br>
         &#125;</pre>

<p className="it">Podes poner eso en tu componente si lo deseas, pero es sólo un ejemplo de demostración - lo vamos a eliminar en breve.</p>

<p className="p">You can put that into your component if you want to, but it’s just an example for demonstration – we’ll be removing it shortly.</p>
<p className="it">Las llaves de apertura y cierre son viejas, pero el pedacito en el medio es nuevo y se llama una expresión ternaria porque se compone de tres partes: la condición (casual.first() == 'John'), para usar si la condición es verdadera (console.log ('Got John')) o la que utilizar si la condición es falsa (console.log ('Got someone else')).</p>

<p className="p">The opening and closing braces are old, but the bit in the middle is new and is called a ternary expression because it’s made up of three parts: the condition (chance.first() == 'John'), what to use if the condition is true (console.log('Got John')) and what to use if the condition is false (console.log('Got someone else')).</p>
<p className="it">La parte importante es el signo de interrogación y los dos puntos: la sección "verdadera" viene después del signo de interrogación y la parte falsa viene después de los dos puntos. No es en absoluto obvio, y realmente hace a afear el código, pero es absolutamente permisible dentro de JSX y por lo tanto, guste o no, verás expresiones ternarias por todo el lugar en el código React.</p>

<p className="p">The important part is the question mark and the colon: the “true” section comes after the question mark, and the false part comes after the colon. It’s not at all obvious, and it really does make for ugly code, but it is absolutely allowable inside JSX and so, like it or not, you’ll see ternary expressions all over the place in React code.</p>
<p className="it">Peor aún, verás a menudo las expresiones ternarias dobles o incluso triples donde los signos de interrogación y los puntos se acumulan cada vez más alto para formar un árbol true/false. Estos también están permitidos por JSX, pero estoy bastante seguro de que no son permitidos por la Convención de Ginebra o algo así.</p>

<p className="p">Worse, you’ll often see double or even triple ternary expressions where the question marks and colons stack up higher and higher to form a true/false tree. These are also allowed by JSX, but I’m pretty sure they are disallowed by the Geneva Convention or something.</p>
<p className="it">Una de las pocas cosas buenas sobre las expresiones ternarias en JSX es que su resultado se pone directamente en tu output. Por ejemplo:</p>

<p className="p">One of the few nice things about ternary expressions in JSX is that their result gets put straight into your output. For example:</p>

<code>src/pages/Detail.js</code>

<pre>
    render() &#123;
return <p>
&#123;
chance.first() == 'John'
? 'Hello, John!'
: 'Hello, world!'
&#125;
</p>;
&#125;

</pre>


<p className="it">En ese ejemplo, los bloques true/false de la expresión ternaria sólo contienen un string, pero está bien porque el string se pasa de nuevo al JSX y se mostrará dentro del elemento &lt;p&gt;.</p>

<p className="p">In that example, the true/false blocks of the ternary expression just contains a string, but that’s OK because the string gets passed back into the JSX and will be displayed inside the &#60;p&#62; element.</p>
<p className="it">Por lo tanto: debes estar preparado para utilizar estas expresiones ternarias a veces, a menudo escritas enteramente en una línea, pero por favor recordá que son fácilmente abusables!</p>

<p className="p">So: be prepared to use these ternary expressions sometimes, often written entirely on one line, but please remember they are easily abused!</p>

<div>
<center><nav className="center">
<Link href='/007'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/009'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>

</div>

</div>
  </Layout>
)
