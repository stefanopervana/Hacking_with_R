import Layout from '../components/layout'

export default() => (
  <Layout title='1'>
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
    <h1>Hacking with React</h1>

<p className="it">Comenzá con React, React Router, Jest, Webpack, ES6 y más con esta guía práctica.</p>

<p className="p">Get started with React, React Router, Jest, Webpack, ES6 and more with this hands-on guide.</p>

<span>Paul Hudson</span>
<span>© 2016 Paul Hudson</span>

<p className="it">Este libro está dedicado a mi esposa, que ha sido infinitamente paciente conmigo mientras escribo y reescribo este libro. No importa lo duro que trabaje, ella trabaja tan duro y siempre ha estado ahí para mí.</p>

<p className="p">This book is dedicated to my wife, who has been endlessly patient with me while I write and re-write this book. No matter how hard I work, she works just as hard and has always been there for me.</p>

<h1>Welcome!</h1>

<p className="it">Bienvenido a Hacking with React, una introducción práctica para hacer una aplicación web con React, ES6, Jest y mucho más.</p>

<p className="p">Welcome to Hacking with React, a hands-on introduction to making a web app using React, ES6, Jest and more.</p>


<p className="it">¿Qué voy a aprender? Cubriremos muchas React, naturalmente. Pero también usaremos ES6, Babel, Webpack, React Router, Jest, SuperAgent, Chance, ESLint y mucho más.</p>

<p className="p">What will I learn? We’ll cover lots of React, naturally. But we’ll also be using ES6, Babel, Webpack, React Router, Jest, SuperAgent, Chance, ESLint and more.</p>

<p className="it">¿Cubre Flux o Redux? No, me temo que no. React tiene una curva de aprendizaje muy empinada, incluso antes de agregar JSX, React Router, Jest y otros; Tanto como me gusta Redux, añadirlo a la mezcla habrías hecho las cosas demasiado complicadas para los principiantes. Tal vez si este libro recibe suficiente interés podré añadir material Redux como parte de un segundo proyecto.</p>

<p className="p">Do you cover Flux or Redux? No, I’m afraid not. React has a steep learning curve all of its own even before you add in JSX, React Router, Jest and others; as much as I like Redux, adding it into the mix would have made things much too complicated for beginners. Perhaps if this book gets enough interest I shall be able to add Redux material as part of a second project.</p>

<p className="it">¿Necesito saber ES6 / ECMAScript 2015? No. Este libro supone que al menos estás un poco familiarizado con JavaScript, pero intento explicar las características de ES6 a lo largo del camino. Esto no es un tutorial de ES6, pero al mismo tiempo soy consciente de que muchas personas no lo han usado antes, así que hago mi mejor esfuerzo.</p>

<p className="p">Do I need to know ES6/ECMAScript 2015? No. This book assumes you’re at least somewhat familiar with JavaScript, but I try to explain ES6 features along the way. This is not an ES6 tutorial, but at the same time I’m aware that many people haven’t used it before so I do my best.</p>


<p className="it">Espera ... ¿los navegadores web incluso soportan ES6 todavía? No, pero vamos a utilizar Babel para transponer ES6 a JavaScript antiguo regular que funciona en cualquier navegador.</p>

<p className="p">Wait… do web browsers even support ES6 yet? No, but we’ll be using Babel to transpile ES6 to regular old JavaScript that works in any browser.</p>

<p className="it">¿Realmente haré algo, o es sólo teoría? Este libro lo lleva a través de un proyecto completo que carga datos utilizando la API de GitHub. Elegí la API de GitHub porque tiene acceso público a datos interesantes. Con el fin de ayudar a hacer la curva de aprendizaje poco profunda, el primer trimestre del libro utiliza ejemplos muy simples que evolucionan en el proyecto completo más adelante.</p>

<p className="p">Will I actually make anything, or is it all just theory? This book takes you through one complete project that loads data using the GitHub API. I chose the GitHub API because it has public access to interesting data. In order to help make the learning curve shallow, the first quarter of the book uses very simple examples that evolve into the full project later on.</p>

<p className="it">¿Por qué este libro es tan corto? He visto React libros dos veces esta longitud! Es cierto: este es un libro corto, pero es corto porque me enfoco en enseñarte React. No hablo de la historia de React u otros componentes, y no salgo en ninguna tangente comparando varias opciones. Este libro le enseña a React en el menor tiempo posible, y creo que te impresionará la rapidez con que aprende.</p>

<p className="p">How come this book is so short? I’ve seen React books twice this length! It’s true: this is a short book, but it’s short because I focus on teaching you React. I don’t discuss the history of React or other components, and I don’t go off on any tangents comparing various options. This book teaches you React in the shortest possible time, and I think you’ll be impressed by how quickly you learn.</p>

<p className="it">¿El libro cubre las pruebas? Sí, aunque lo dejo cerca del final. Heresia, lo sé.</p>

<p className="p">Does the book cover testing? Yes, although I leave it to near the end. Heresy, I know.</p>

<p className="it">He detectado un error / error tipográfico - ¿qué debo hacer? Envíeme un correo electrónico a paul@hackingwithreact.com y avíseme. Por favor, envíeme el nombre del capítulo que contiene el error de lo contrario puede ser difícil de rastrear!</p>

<p className="p">I spotted an error / typo – what should I do? Email me at paul@hackingwithreact.com and let me know. Please send me the chapter name that contains the error otherwise it can be hard to track down!</p>

<p className="it">¿Puedo obtener el código fuente para el proyecto terminado? Sí, todo está en GitHub.</p>

<p className="p">Can I get the source code for the finished project? Yup, it’s all on GitHub.</p>

<p className="it">Who are you? Why should I care what you say? My name is Paul Hudson, and my apps are used by the likes of MacLife magazine, Edge magazine, Fender, Virgin, Jamie Oliver, Odeon, Tesco, and more. I’m an author in my spare time, having written PHP in a Nutshell, Ubuntu Unleashed and Fedora Unleashed. Previously I was the editor of Linux Format magazine, but my writing has also appeared in MacFormat magazine, Net magazine and TechRadar.</p>

<p className="p">Who are you? Why should I care what you say? My name is Paul Hudson, and my apps are used by the likes of MacLife magazine, Edge magazine, Fender, Virgin, Jamie Oliver, Odeon, Tesco, and more. I’m an author in my spare time, having written PHP in a Nutshell, Ubuntu Unleashed and Fedora Unleashed. Previously I was the editor of Linux Format magazine, but my writing has also appeared in MacFormat magazine, Net magazine and TechRadar.</p>

<p className="it">You might like to know that I have two other “Hacking with…” books available online: Hacking with Swift teaching iOS coding and Hacking with PHP teaching server-side web development. Yes, they are both available online for free.</p>

<p className="p">You might like to know that I have two other “Hacking with…” books available online: Hacking with Swift teaching iOS coding and Hacking with PHP teaching server-side web development. Yes, they are both available online for free.</p>

<p className="it">You will often find me on Stack Overflow answering questions about iOS, PHP, and React.</p>

<p className="p">You will often find me on Stack Overflow answering questions about iOS, PHP, and React.</p>

<p className="it">I love your stuff – are you available for hire? Get in touch at paul@hackingwithreact.com and let’s talk – I love coding, and I love writing, so being able to put them both together is pure magic for me.</p>

<p className="p">I love your stuff – are you available for hire? Get in touch at paul@hackingwithreact.com and let’s talk – I love coding, and I love writing, so being able to put them both together is pure magic for me.</p>

<p className="it">I have a question about something in the book. How can I contact you? Use paul@hackingwithreact.com if you want to email me. Alternatively, you should follow me on Twitter: @twostraws.</p>

<p className="p">I have a question about something in the book. How can I contact you? Use paul@hackingwithreact.com if you want to email me. Alternatively, you should follow me on Twitter: @twostraws.</p>
</div>
</div>
  </Layout>
)
