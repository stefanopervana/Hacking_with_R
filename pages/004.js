import Layout from '../components/layout'
import Link from 'next/link'

export default() => (
  <Layout title='004'>
    <div>
    <style jsx>{`
.col-md-6 { border-radius: 4px; overflow: hidden; box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9); display: block; min-height: 70%; font-family: Verdana; max-width: 1100px; background-color: #E8EDEE; margin: auto;   margin-top: auto; margin-right: auto; margin-bottom: auto; margin-left: auto; white-space: pre-wrap;
  border: none; box-sizing: border-box; color: #2D0D0D; line-height: 1.1; padding: 4.7em; } .home {margin: 1.5em 0; }h1 { color: #867452; font-size: 60px; } h2 { color: #867452; font-size: 40px; } h3 {
color: #867452;  font-size: 30px; } .it, .listit { color: brown; font-size: 24px; font-style: italic; letter-spacing: 0.04em; } .p, .listitem { color: #75AFAD; font-size: 24px;  font-style: italic; letter-spacing: 0.04em; } pre { display: block; font-family: monospace; white-space: pre; margin: 1em 0; font-size: 16px }code{ margin: auto; font-family:"Lucida Console"; "Andale Mono"; "Courier New";  Courier; monospace; font-style:normal; color:#395C73;} code strong { color:#000; background:#F5FD11; padding:1px; font-weight:normal; }.interno{ font-family: verdana; font-style: italic; color: #395C73; font-size: 24px; }.sub{ text-decoration: underline; }
                `}</style>

    <div className="col-md-6"> 
<h1>Introduction to JSX</h1>

<p className="it">Dentro del directorio crean un nuevo subdirectorio llamado páginas, y allí crean el archivo <code>Detail.js</code>. Al trabajar con React, algunos desarrolladores gustan de usar la extensión de archivo .jsx y otros usan antiguo y llano .js - honestamente no importa, así que usá lo que te haga feliz. Dicho esto, si esta es la primera vez que usas React te sugiero que te quedes con .js para que puedas seguir este tutorial con más facilidad.</p>

<p className="p">Inside the src directory create a new subdirectory called pages, and in there please create the file <code>Detail.js</code>. When working with React some developers like to use the file extension .jsx and others like to use plain old .js – honestly it really doesn’t matter, so use whichever makes you happy. That being said, if this is your first time using React I would suggest you stick with .js so you can follow this tutorial more easily.</p>


<p className="it">En <code>Detail.js</code> vamos a hacer con React algo realmente simple para que puedas ver por qué necesitamos saltar a través de todos los aros de Webpack y NPM anteriores. Modificá <code>Detail.js</code> para que tenga este contenido:</p>

<p className="p">In <code>Detail.js</code> we’re going to make React render something really simple so you can see why we needed to jump through all those Webpack and NPM hoops earlier. Modify <code>Detail.js</code> so it has this content:</p>


<code>src/pages/Detail.js</code>

<pre>
1 import React from 'react';<br></br>
2<br></br>
3 class Detail extends <code>React.Component</code> &#123;<br></br>
4 <code>render()</code> &#123;<br></br>
5 return &#60;p&#62;This is React rendering HTML!&#60;/p&#62;;<br></br>
6 &#125;<br></br>
7 &#125;<br></br>
8<br></br>
9 export default Detail;<br></br>
</pre>



<p className="it" data-reactid="145">Esas son siete líneas de código ES6, de las cuales una está vacía y dos están cerrando llaves por sí mismas, así que esperemos que nada sea demasiado difícil para vos. Pero el que está interesado en el uso de HTML, porque está justo en el medio y no rodeado de comillas. Y sin embargo, funciona, que es una de las cosas maravillosas de React : esto se llama JSX, y cuando el código se construye por Webpack, JSX automáticamente se convierte en JavaScript.</p>

<p className="p">That’s seven lines of ES6 code, of which one is empty and two are just closing braces by themselves, so hopefully nothing too challenging for you. But what’s interesting is the use of HTML, because it’s right in the middle there and not surrounded by quotes. And yet it works, which is one of the marvellous things about React: this is called JSX, and when your code gets built by Webpack that JSX automatically gets converted into JavaScript.</p>



<p className="it">Si se preguntan, una "llave" es el nombre del delfín, siendo una llave de apertura y una llave de cierre. Vas a usar mucho estos!</p>

<p className="p">If you were wondering, a “brace” is the name for the &#123; and &#125; symbol, with &#123; being an opening brace and &#125; being a closing brace. You’ll be using these a lot!</p>

<p className="it">De todos modos, como se puede ver, JSX se parece mucho HTML, aunque hay algunas excepciones que aprender a medida que avanzas. Echemos un vistazo a cada una de las líneas importantes de código:</p>

<p className="p">Anyway, as you can see JSX looks pretty much like HTML, although there are a few exceptions you’ll learn as you progress. Let’s take a look at each of the important lines of code:</p>


<p className="it"><code>import React from ‘react’</code> carga la biblioteca de React, que es bastante central a toda nuestra aplicación y por lo tanto es necesaria.</p>

<p className="p"><code>import React from ‘react’</code> loads the React library, which is pretty central to our whole application and thus is required.</p>



<p className="it"><code>class Detail extends React.Component &#123;</code> define un nuevo componente React. Los componentes de React pueden ser grandes (como páginas) o pequeños (como un componente personalizado para procesar las migas de pan) y son muy flexibles.</p>

	<p className="p"><code>class Detail extends React.Component &#123;</code> defines a new React component. React components can be big (like pages) or small (like a custom component to render breadcrumbs) and they are very flexible.</p>


<p className="it"><code>render() &#123;</code> inicia el método <code>render()</code> de nuestro componente. Esto se llama React cuando el componente necesita ser dibujado en la pantalla, y necesitas devolver algo que se puede dibujar en el navegador.</p>

	<p className="p"><code>render() &#123;</code> starts the <code>render()</code> method of our component. This is called by React when the component needs to be drawn to the screen, and needs to return something that can be drawn in the browser.</p>

<p className="it">Lo que queda en esta clase es solo la llave de cierre &#125; que termina el método <code>render()</code> y la segunda llave de cierre que termina la clase que está creando.</p>

<p className="p">What’s left in this class is just the closing brace &#125; that ends the <code>render()</code> method and the second closing brace that ends the class we’re creating.</p>

<p className="it"><code>export default Detail;</code> La palabra clave "export" significa que este componente está siendo expuesto al resto de nuestra aplicación, y "default" significa que es la única cosa que esta clase va a enviar para ser expuesta.</p>

<p className="p"><code>export default Detail;</code> The “export” keyword means this component is being exposed to the rest of our app to use, and “default” means it’s the only thing this class will expose.</p>

<p className="it">Este ejemplo tiene todo el JSX en una línea, pero pronto nos moveremos a escribir JSX multi-línea. JSX multi-línea introduce una peculiaridad importante que debes tener en cuenta ahora, que es que JSX recorta espacios entre líneas. Por lo tanto, si estás siguiendo los ejemplos de código de este libro y encontras algunos espacios en blanco entre dos líneas, intentá ponerlos en una línea y verás que funciona.</p>

<p className="p">This example has all the JSX on one line, but we’ll soon move to writing multi-line JSX. Multi-line JSX introduces one important quirk you should be aware of now, which is that JSX automatically trims whitespace between lines. So, if you’re following the code examples in this book and find some missing whitespace between two lines, try putting them on one line and you’ll find it works.</p>



<p className="it">Ahora, después de todo ese código, siento que no hace nada todavía. Afortunadamente, eso es fácil de arreglar...</p>

<p className="p">Now, after all that code I’m sorry to say it won’t do anything just yet. Fortunately, that’s easily fixed…</p>
<div>
<center><nav className="center">
<Link href='/003'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/005'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>


</div>
</div>
  </Layout>
)