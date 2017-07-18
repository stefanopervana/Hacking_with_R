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
<h1>Time for a Task: Reading from Three Feeds</h1>
<p className="it">Tomamos el método <code>buttonClicked()</code> antes, pero ahora vamos a reintroducir ese aprendizaje haciendo que nuestra aplicación muestre información GitHub diferente dependiendo de la selección del usuario. En este momento mostramos commits, pero vamos a dejar que los usuarios elijan entre commits, forks y pull requests, simplemente haciendo clic en diferentes botones.</p>


<p className="p">We took the <code>buttonClicked()</code> method out earlier, but now we’re going to re-introduce that learning by having our app show different GitHub information depending on user selection. Right now we show commits, but we’re going to let users choose between commits, forks and pull requests, just by clicking different buttons.</p>
<p className="it">Los feeds que necesitas usar son:</p>


<p className="p">The feeds you need to use are:</p>
<ul>


<li className="p">https://api.github.com/repos/facebook/react/commits</li>


<li className="p">https://api.github.com/repos/facebook/react/forks</li>


<li className="p">https://api.github.com/repos/facebook/react/pulls</li>
</ul>
<p className="it">Debe examinar los datos que devuelven para que pueda crear el JSX adecuado.</p>


<p className="p">You should examine the data they return so you can craft appropriate JSX.</p>
<p className="it">Nota importante: ya hemos cubierto todas las técnicas necesarias para que usted pueda hacer esto usted mismo. Voy a caminar a través de él con usted, pero este es un gran lugar para probarse a sí mismo para asegurarse de que ha entendido lo que pasó hasta ahora.</p>


<p className="p">Important note: we have already covered all the techniques required for you to be able to do this yourself. I’m going to walk through it with you, but this is a great place to test yourself to make sure you’ve understood what happened so far.</p>
<p className="it">¿Aún aquí? Estas son algunas sugerencias:</p>


<p className="p">Still here? Here are some hints:</p>

<p className="it">Su método <code>render()</code> puede llamar a otros métodos para hacer renderizado en lugar de tratar de hacerlo todo en sí mismo.</p>


<p className="p">Your <code>render()</code> method can call other methods to do rendering rather than try to do it all itself.</p>
<p className="it">Por lo tanto, podrías tener un método renderCommits(), un método renderForks() y un método render- Pulls(), luego haga que su método <code>render()</code> principal llame a uno de ellos.</p>


<p className="p">So, you could have a renderCommits() method, a renderForks() method and a render- Pulls() method, then have your main <code>render()</code> method call one of them.</p>
<p className="it">Dependiendo de los campos que encuentres interesantes, podes encontrar que podes usar un método para todos ellos, o dos de ellos; Depende de usted.</p>


<p className="p">Depending on which fields you find interesting, you might find you can use one method for them all, or two of them; it’s down to you.</p>
<p className="it">Para mantener las cosas simples, sólo tienes que seguir adelante y llamar a todos los extremos API en componentWill-Mount() y almacenar los resultados en tres matrices separadas en estado. Recuerde que setState() fusiona los datos nuevos con los datos existentes.</p>


<p className="p">To keep things simple, just go ahead and call all through API endpoints in componentWill- Mount() and store the results in three separate arrays in state. Remember, setState() merges the new data with existing data.</p>
<p className="it">El modo de visualización activo actual (confirmación, horquillas o extracción) debe almacenarse en estado y este estado se puede cambiar haciendo clic en uno de los tres botones.</p>


<p className="p">The current active view mode (commits, forks, or pulls) should be stored in state, and that state can be changed by clicking one of three buttons.</p>

<p className="it">Con todo eso, debesrías ser capaz de crear una solución muy simple. Si desea refactorizarlo más tarde (es decir, volver a escribirlo para que sea un código más simple) puede hacerlo, pero por ahora solo vaya con la solución más fácil para que pueda estar seguro de que entiende completamente lo que ha aprendido hasta ahora.</p>


<p className="p">With all that, you should be able to create a very simple solution. If you want to refactor it later (i.e., to rewrite it to be simpler code) you can do, but for now just go with the easiest solution so you can be sure you fully understand what you’ve learned so far.</p>

</div>
    </div>
  </Layout>
)