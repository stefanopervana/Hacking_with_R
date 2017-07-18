import Layout from '../components/layout'

export default () => (
  <Layout title='Ch7'>
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

<h1>Using Jest to Simulate User Interaction on a React Component</h1>
<p className="it">Ahora, si vuelves a pensar mucho más temprano en este libro, podes recordar esto: "RECORDATORIO DE ADVERTENCIA IMPORTANTE: El código mucho más adelante en este libro se basa en que pasas un parámetro de cadena a selectMode () en lugar de usar el atributo de modo de datos Enfoque ". Bueno, finalmente has llegado al punto en el que tu elección importa.</p>

<p className="p">Now, if you cast your mind back to much earlier in this book you might remember this: “REMINDER OF IMPORTANT WARNING: Code much later in this book relies on you passing a string parameter to selectMode() rather than using the data-mode attribute approach.” Well, you’ve finally reached the point where your choice matters.</p>
<p className="it">Si recuerdas, estudiamos dos maneras de escribir el método selectMode (): pasar un parámetro de cadena o usar un atributo de modo de datos. Ambos enfoques tienen su uso en la codificación normal, pero cuando se trata de la prueba hay una captura: Jest no es compatible con la propiedad de conjunto de datos, lo que significa que cuando simula un clic en un botón el método selectMode () fallará si intenta leer El atributo de modo de datos.</p>

<p className="p">If you remember, we looked at two ways of writing the selectMode() method: passing a string parameter or using a data-mode attribute. Both approaches have their uses in normal coding, but when it comes to testing there’s a catch: Jest doesn’t support the dataset property, which means when it simulates a click on a button the selectMode() method will fail if it tries to read the data- mode attribute.</p>
<p className="it">Afortunadamente, escuchaste mi advertencia y usaste la aproximación que pasa un parámetro de cadena, ¿verdad? Derecha. Eso significa que podemos escribir nuestra tercera prueba muy fácilmente: solo encontramos todos los botones en el documento, leemos el botón en el índice 1, simulamos un clic en él y luego aseguramos que el estado del modo del componente Detalle esté configurado como 'bifurcaciones'.</p>

<p className="p">Fortunately you heeded my warning and used the approach that passes a string parameter, right? Right. That means we can write our third test really easily: we just find all the buttons in the document, read the button at index 1, simulate a click on it, then make sure the Detail component’s mode state is set to ‘forks’.</p>
<p className="it">Añadir esta prueba debajo de los dos existentes:</p>

<p className="p">Add this test beneath the existing two:</p>

<code>tests /Detail-test.js</code>

<pre></pre>


 

<p className="it">Hay tres cosas que podrían ser interesantes. En primer lugar, necesitamos usar el índice 1 para el botón "forks" porque los arrays de JavaScript cuentan desde 0. En nuestro componente de detalle, el botón 0 es "Commits", el botón 1 es "Forks" y el botón 2 es "Pulls".</p>

<p className="p">There are three things there that might be interesting. First, we need to use index 1 for the “forks” button because JavaScript arrays count from 0. In our detail component, button 0 is “Commits”, button 1 is “Forks” and button 2 is “Pulls”.</p>
<p className="it">En segundo lugar, el método TestUtils.Simulate.click () es nuevo, y espero que sea bastante auto-explicativo: simula un clic en algo en nuestro documento, en este caso un botón.</p>

<p className="p">Second, the TestUtils.Simulate.click() method is new, and I hope it’s pretty self-explanatory: it simulates a click on something in our document, in this case a button.</p>


<p className="it">En tercer lugar, este código es un poco frágil y por lo tanto no es realmente adecuado para su uso en la producción. La razón de esto es la forma en que se accede al botón: asumimos que el botón de las horquillas está en el índice 1, pero si un diseñador viene y lo mueve, entonces la prueba se romperá aunque el botón esté allí y todavía funcione.</p>

<p className="p">Third, this code is a bit fragile and thus not really suitable for use in production. The reason for this is the way the button is accessed: we assume the forks button is at index 1, but if a designer come along and moves it then the test will break even though the button is there and still functioning.</p>
<p className="it">La manera de arreglar esto es dar a cada botón una propiedad única de referencia, que es la forma de React de identificar las cosas que se han prestado. Modificá el final del método render () en <code>Detail.js</code> a esto:</p>

<p className="p">The way to fix this is to give each button a unique ref property, which is React’s way of identifying things that have been rendered. Please amend the end of the <code>render()</code> method in <code>Detail.js</code> to this:</p>

<code>src/pages/Detail.js</code>

<pre></pre>

<p className="it">Ahora que cada botón tiene una propiedad única de referencia, podemos encontrarla directamente, sin tener que llamar a scryRenderedDOMComponentsWithTag (). Actualizar la tercera prueba a esto:</p>

<p className="p">Now that each button has a unique ref property we can find it directly, without even having to call scryRenderedDOMComponentsWithTag(). Update the third test to this:</p>

<code>tests /Detail-test.js</code>

<pre></pre>

 


<p className="it">Como puede ver, podemos simplemente entrar directamente en la propiedad refs para encontrar horquillas, y esa nueva prueba funcionará independientemente de si el botón se mueve o no en el futuro.</p>

<p className="p">As you can see, we can just dip right into the refs property to find forks, and that new test will work regardless of whether the button gets moved to in the future.</p>






</div>

        </div>
  </Layout>
)