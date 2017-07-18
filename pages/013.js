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

<h1>State and the Single Source of Truth</h1>
<p className="it">Antes de ir más lejos, hay un poco de teoría que usted necesitas saber. No te preocupes, voy a mantenerlo corto!</p>


<p className="p">Before we go any further, there’s an important bit of theory you need to be aware of. Don’t worry, I’ll keep it short!</p>
<p className="it">Cuando empiezas, probablemente piensas que la idea de tener un estado dentro de los componentes es pura - después de todo, mantiene la funcionalidad y los datos relevantes juntos en un solo objeto, ¿verdad?</p>


<p className="p">When you’re starting out you probably think the idea of having state inside components is neat – after all, it keeps functionality and relevant data together in one object, right?</p>
<p className="it">Es cierto que aislar las cosas de esta manera puede ser una forma útil de romper grandes aplicaciones en pedazos más pequeños, pero al mismo tiempo puede ser tremendamente complicado. ¿Dónde están almacenados todos esos datos? ¿Está duplicado? Si está duplicado, ¿cómo se asegura de que todos los valores se actualizan correctamente cuando se cambia? Cuando llegas a la clase de escala de Facebook funciona - tienen más de 10.000 componentes React! - esto se convierte en un vórtice del cerebro.</p>


<p className="p">It’s true that isolating things this way can be a useful way to break large apps into smaller pieces, but at the same time it can get awfully complicated. Where is all that data stored? Is it duplicated? If it is duplicated, how do you make sure all values are updated correctly when one changes? When you get to the kind of scale Facebook works to – they have over 10,000 React components! – this becomes a brain vortex.</p>
<p className="it">La solución en el React idiomático -es decir, el código que fue escrito de la manera en que un desarrollador React experimentado lo escribiría- es tener lo que se llama una sola fuente de verdad, que es un estado maestro para la mayoría, si no toda su aplicación, Estado abajo como props a sus componentes del niño.</p>


<p className="p">The solution in idiomatic React – i.e., code that was written the way an experienced React developer would write it – is to have what’s called a single source of truth, which is one master state for most if not all of your application, then send that state down as props to your child components.</p>
<p className="it">Utilizando esta técnica, cuando cualquier parte de ese estado maestro cambia, actualizará automáticamente los props de sus componentes secundarios y los cambios fluirán en una dirección de arriba hacia abajo siempre sincronizados, nunca duplicados.</p>


<p className="p">Using this technique, when any part of that master state changes it will automatically update the props of your child components, and the changes will flow down in one direction from top to bottom always synchronized, never duplicated.</p>
<p className="it">En el perfecto mundo React, pocos o ninguno de los componentes tienen estado. Y así React tiene una sintaxis especial para crear componentes que no son nada más que un método <code>render()</code> - no pueden tener estado o cualquier método, simplemente aceptan algunos props y los renderizan. He aquí un ejemplo básico:</p>


<p className="p">In the perfect React world, few if any components have state. And so React has a special syntax to create components that are nothing more than a <code>render()</code> method – they can’t have state or any methods, they just accept some props and render them. Here’s a basic example:</p>



<pre></pre>

<p className="it">Una vez que está en su código, puede utilizarlo como cualquier otro componente:</p>


<p className="p">Once that’s in your code, you can use it like any other component:</p>


<pre></pre>
 

<p className="it">No te mates tratando de evitar el estado. En su lugar, ser un programador pragmático: ir a los componentes sin estado, siempre que sea posible, pero el estado está ahí para ser utilizado cuando usted realmente lo necesita.</p>


<p className="p">Don’t kill yourself trying to avoid state. Instead, be a pragmatic programmer: go for stateless components where possible, but state is there to be used when you really need it.</p>





</div>

</div>
  </Layout>
)
