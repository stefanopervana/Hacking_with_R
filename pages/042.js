import Layout from '../components/layout'

export default() => (
  <Layout title='Ch8'>
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



<h1>How to Add React Component Prop Validation in Minutes</h1>
<p className="it">Si vos ha estado siguiendo muy de cerca, los únicos errores del linter dejados deben leer algo como esto: "" params "falta en la validación de los props". Esto abre la puerta a un área entera de React que aún no hemos tocado, pero es importante porque hace que tu código sea más fácil de entender y ayuda a reducir los errores, y como acabas de ver, No lo hagas</p>

<p className="p">If you’ve been following very closely, the only linter errors left should read something like this: “‘params’ is missing in props validation”. This opens the door to a whole area of React we haven’t touched yet, but it’s important because it makes your code easier to understand and helps reduce bugs – and, as you’ve just seen, you get linting errors if you don’t do it!</p>
<p className="it">Cuando se ejecuta en modo de desarrollo (es decir, todo lo que hemos hecho hasta ahora), React verificará automáticamente todos los props que establezca en los componentes para asegurarse de que tienen el tipo de datos correcto. Por ejemplo, si decis que un componente tiene un Prop de mensaje que es una cadena y es necesario, React se quejará si se establece mediante un número o No te establece en absoluto. Por razones de rendimiento, este control sólo ocurre mientras se está desarrollando el código - tan pronto como cambie a la producción, esto desaparece.</p>

<p className="p">When running in development mode (i.e., everything we’ve done so far), React will automatically check all props you set on components to make sure they have the right data type. For example, if you say a component has a Message prop that is a string and required, React will complain if it gets set using a number or doesn’t get set at all. For performance reasons this check only happens while you’re developing your code – as soon as you switch to production, this goes away.</p>
<p className="it">ESLint nos está advirtiendo porque no le decimos a React qué tipos de datos nuestros props deberíasn ser. Esto se hace fácilmente usando un conjunto de opciones predefinidas, tales como React.PropTypes.string, React.PropTypes.number y React.PropTypes.func, además de un catch-all "todo lo que se puede procesar, incluyendo arreglos de cosas que pueden ser Rendered ": React.PropTypes.node.</p>

<p className="p">ESLint is warning us because we don’t tell React what data types our props should be. This is easily done using a set of predefined options such as React.PropTypes.string, React.PropTypes.number, and React.PropTypes.func, plus a catch-all “anything that can be rendered, including arrays of things that can be rendered”: React.PropTypes.node.</p>
<p className="it">ESLint nos está diciendo que el componente App usa this.props.children sin especificar qué tipo de datos es. Eso es fácil de solucionar: agrega esto directamente después del final de la clase App en App.js:</p>

<p className="p">ESLint is telling us that the App component uses this.props.children without specifying what data type that is. That’s easily fixed: add this directly after the end of the App class in App.js:</p>

<code>src/pages/App.js</code>

<pre></pre>

<p className="it">Nota: cuando digo "directamente después del final" quiero decir después de la llave de cierre para la clase, pero antes de la línea de aplicación predeterminada de exportación, como esto:</p>

<p className="p">Note: when I say “directly after the end” I mean after the closing brace for the class, but before the export default App line, like this:</p>



<code>src/pages/App.js</code>

<pre></pre>

<p className="it">Si desea ver qué sucede cuando React detecta el tipo de soporte incorrecto que se está utilizando, intentá utilizar React.PropTypes.string en el fragmento anterior. Como verá, la página todavía se carga bien, pero debe aparecer un mensaje de error en la consola de depuración de su navegador.</p>

<p className="p">If you want to see what happens when React detects the wrong prop type being used, try using React.PropTypes.string in the snippet above. As you’ll see, your page still loads fine, but an error message should appear in your browser’s debug console.</p>

<p className="it">Una vez que esté usando la validación de prop, React le avisará si intenta utilizar el tipo de datos incorrecto.</p>

<p className="p">Once you’re using prop validation, React will warn you if you try to use the wrong kind of data.</p>

<p className="it">Necesitamos agregar dos declaraciones propTypes más para hacer que nuestro código se limpie a través de linting. Ambos son iguales, y dicen que el componente puede esperar una propiedad params que es un objeto. Añadí esto directamente después del final de la clase Detalle:</p>

<p className="p">We need to add two more propTypes declarations in order to make our code get cleanly through linting. Both are the same, and say that the component can expect a params property that is an object. Add this directly after the end of the Detail class:</p>



<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Y agregue esto directamente después del final de la clase de usuario:</p>

<p className="p">And add this directly after the end of the User class:</p>

<code>src/pages/User.js</code>

<pre></pre>

<p className="it">¡Eso es! Si ejecuta el comando <code>npm run</code>lint ahora no deberías ver más errores.</p>

<p className="p">That’s it! If you run the command <code>npm run</code> lint now you should see no more errors.</p>







</div>
        </div>
  </Layout>
)