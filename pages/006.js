import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='006'>
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

<h1>What are React Props?</h1>
<p className="it">Cuando utilizas cualquier componente de React podes pasar algunos datos de entrada que deseas que funcionen. Estas propiedades se denominan "props" y <span className="sub">son valores de sólo lectura que definen el punto de inicio básico de un componente</span>.</p>

<p className="p">When you use any React component you can pass it some input data that you want it to work with. These properties are called “props” and are read-only values that define the basic starting point for a component.</p>

<p className="it">En JSX, <span className="sub">los props se parecen a los atributos HTML</span>. Para demostrar esto, vamos a modificar nuestra aplicación para que el componente <code>Detail</code> pueda tener su mensaje cambiado desde otra parte.</p>

<p className="p">In JSX, props look just like HTML attributes. To demonstrate this we’re going to modify our application so that the <code>Detail</code> component can have its message changed from elsewhere.</p>

<p className="it">Cambiá el <code>index.js</code> para que sea:</p>

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

<p className="it">Tené en cuenta el nuevo atributo del mensaje ="This is coming from props!" al componente <code>Detail</code>. En <code>Detail.js</code> necesitamos hacer que se lea desde el mensaje prop en lugar de una string hard-coded, pero eso es bastante fácil de hacer:</p>

<p className="p">Note the new message="This is coming from props!" attribute to the <code>Detail</code> component. In <code>Detail.js</code> we need to make it read from the message prop rather than a hard-coded string, but that’s easy enough to do:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Tené en cuenta cómo he escrito <code>this.props.message</code> dentro de llaves? Eso es porque es código JavaScript en lugar de texto plano. Cuando se construye la aplicación, esa parte se ejecuta como código para que se utilice el mensaje de entrada en lugar de una cadena codificada. Si regresas a tu navegador, verás que se debería haber actualizado con el nuevo mensaje. Y si entras en <code>index.js</code> y cambias el mensaje allí, se actualizará de nuevo - ¡genial!</p>

<p className="p">Notice how I’ve written <code>this.props.message</code> inside braces? That’s because it’s JavaScript code rather than plain text. When your app gets built that part gets executed as code so that the input message is used rather than a hard-coded string. If you go back to your web browser you’ll see it should have updated with the new message. And if you go into <code>index.js</code> and change the message there, it will update again – great!</p>

<p className="it">Antes de continuar, es importante aclarar que los props no son estrictamente de sólo lectura, y de hecho podes cambiarlos en cualquier momento si lo deseas. Sin embargo, el hacerlo se desaconseja muy fuertemente: debes considerarlos sólo de lectura para el componente al que pertenecen y cambiarlos sólo desde el componente que los creó. Es decir, si creastes un componente y le distes algunos props, podes cambiar los props más tarde si lo deseas, pero <span className="sub">los props que se reciben (es decir, <code>this.props</code>) no deben cambiarse</span>.</p>

<p className="p">Before we continue, it’s important I clarify that props aren’t strictly read-only, and indeed you can change them at any point if you wish. However, doing so is very strongly discouraged: you should consider them read only for the component they belong to, and change them only from the component that created them. That is, if you created a component and gave it some props you can change those props later if you want to, but props you receive (i.e., this.props) should not be changed.</p>
<div>
<center><nav className="center">
<Link href='/005'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/007'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>

</div>

</div>
  </Layout>
)
