import Layout from '../components/layout';
import Link from 'next/link'

export default() => (
  <Layout title='003'>
    <div>
        <style jsx>{`
.col-md-6 { border-radius: 4px; overflow: hidden; box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9); display: block; min-height: 70%; font-family: Verdana; max-width: 1100px; background-color: #E8EDEE; margin: auto;   margin-top: auto; margin-right: auto; margin-bottom: auto; margin-left: auto; white-space: pre-wrap;
  border: none; box-sizing: border-box; color: #2D0D0D; line-height: 1.1; padding: 4.7em; } .home {margin: 1.5em 0; }h1 { color: #867452; font-size: 60px; } h2 { color: #867452; font-size: 40px; } h3 {
color: #867452;  font-size: 30px; } .it, .listit { color: brown; font-size: 24px; font-style: italic; letter-spacing: 0.04em; } .p, .listitem { color: #75AFAD; font-size: 24px;  font-style: italic; letter-spacing: 0.04em; } pre { display: block; font-family: monospace; white-space: pre; margin: 1em 0; font-size: 16px }code{ margin: auto; font-family:"Lucida Console"; "Andale Mono"; "Courier New";  Courier; monospace; font-style:normal; color:#395C73;} code strong { color:#000; background:#F5FD11; padding:1px; font-weight:normal; }.interno{ font-family: verdana; font-style: italic; color: #395C73; font-size: 24px; }.sub{ text-decoration: underline; } 
                `}</style>

    <div className="col-md-6"> 
<h2>The Importance of using Webpack with React</h2>

<p className="it">Cuando ejecutas webpack en tu ventana de terminal, creas tu aplicación React y la colocas en la carpeta <code>dist</code> que hicistes anteriormente para que puedas probarla. De hecho, está allí ahora mismo: si miras en <code>dist</code> verás un archivo llamado <code>bundle.js</code> que es sorprendentemente grande - el mío es de 940KB!</p>

<p className="p">When you run webpack in your terminal window it builds your React application and places it into the <code>dist</code> folder you made earlier so you can try it. In fact, it’s there right now: if you look in <code>dist</code> you’ll see a file called <code>bundle.js</code> that’s surprisingly large – mine is 940KB!</p>


<p className="it">Si lo abris en un editor de texto, verás todo tipo de código que no escribistes. No te preocupes: tu única línea de JavaScript está allí en algún lugar envuelto (intenta buscarlo!), Pero todo el resto de las cosas son importantes también porque permiten usar React.</p>

<p className="p">If you open it in a text editor you’ll see all sorts of code that you didn’t write. Don’t worry: your single line of JavaScript is in there somewhere all wrapped up (try searching for it!) but all the rest of the stuff is important too because it lets use use React.</p>



<p className="it">Nuestro archivo <code>bundle.js</code> contiene todo tipo de código que no escribimos, que es el punto de Webpack: ensambla (y comprime!) Todas tus bibliotecas para vos.</p>

<p className="p">Our <code>bundle.js</code> file contains all sorts of code that we didn’t write, which is the point of Webpack: it assembles (and compresses!) all your libraries for you.</p>


<p className="it">Ejecutar webpack directamente desde la línea de comandos demuestra que funciona, pero no es cómo lo usaremos. Esto se debe a que junto con Webpack también instalamos Webpack Dev Server, que es la forma más inteligente y sencilla de crear aplicaciones React, y es lo que usaremos a partir de ahora. Por lo tanto, ejecutá este comando ahora:</p>

<p className="p">Running webpack straight from the command line proves that it works, but it’s not how we’ll be using it. This is because alongside Webpack we also installed Webpack Dev Server, which is the smartest, simplest way to build React applications – and it’s what we’ll be using from now on. So, please run this command now:</p>

<hr></hr>
<code>webpack-dev-server</code>
<hr></hr>				 

<p className="it">Tu computadora pensará durante unos segundos y luego un montón de texto pasará, pero espero que la última línea diga "webpack: bundle es ahora VALIDO".</p>

<p className="p">Your computer will think for a few seconds then lots of text will whizz by, but hopefully the last line says “webpack: bundle is now VALID.”</p>

<p className="it">Webpack Dev Server construirá todo el código de tu aplicación en un único archivo y luego lo servirá desde el contenido de tu directorio <code>dist</code>.</p>

<p className="p">Webpack Dev Server will build all your app’s code into one single file, then serve it up from the contents of your <code>dist</code> directory.</p>

<p className="it">Ahora para el bit inteligente: abrí tu navegador web y apúntalo en la dirección http://localhost:8080. Este es tu equipo local que ejecuta Webpack Dev Server - no sólo has construido tu aplicación para vos, sino que también estás sirviendo esa aplicación para que puedas probarla en vivo.</p>

<p className="p">Now for the clever bit: open your web browser and point it at the address http://localhost:8080. This is your local computer running Webpack Dev Server – not only has it built your app for you, but it’s also serving that app up so you can try it live.</p>


<p className="it">En este momento nuestro código no hace nada, pero deberías poder acceder a la consola de desarrollo de tu navegador web y ver el mensaje "¡React está funcionando!".</p>

<p className="p">Right now our code doesn’t do anything, but you should be able to to your web browser’s developer console and see the message “React is up and running!” printed there.</p>



<p className="it">Usuarios de Chrome: andá al menú View y elejí Developer &gt; JavaScript Console.</p>

<p className="p">Chrome users: go to the View menu and choose Developer &gt; JavaScript Console.</p>


<p className="it">Usuarios de Safari: andá al menú Develop y elejí Show Error Console. Si no puede ver el menú de desarrollo, andá a Safari &gt; Preferencias, seleccioná la pestaña Avanzado y asegurate de que la casilla "Mostrar el menú Desarrollar en la barra de menús" esté marcada.</p>

<p className="p">Safari users: go to the Develop menu and choose Show Error Console. If you can’t see the develop menu, go to Safari &gt; Preferences, select the Advanced tab, then make sure the “Show Develop menu in menu bar” checkbox is checked.</p>


<p className="it">Usuarios de Firefox: andá al menú Herramientas y elejí Web Developer &gt; Web Console.</p>

<p className="p">Firefox users: go to the Tools menu and choose Web Developer &gt; Web Console.</p>

<p className="it">Esto demuestra que nuestra configuración básica ya está hecha, y es hora de iniciar alguna codificación en React.</p>

<p className="p">This shows that our basic configuration is all done, and it’s time to start some React coding.</p>


<p className="it">Nota: si sos un usuario de Chrome, encontrarás que React Chrome Developer Tools es muy útil al depurar tus aplicaciones de React.</p>

<p className="p">Note: if you’re a Chrome user, you will find the React Chrome Developer Tools very useful when debugging your React apps.</p>



<p className="it" data-reactid="136">Detené lo que estáS haciendo y asegurate de encontrar la consola de desarrollo de tu navegador web, ¡esto será importante más adelante!</p>

<p className="p">Stop what you’re doing and make sure you can find your web browser’s developer console – this is important later on!</p>

<div>
<center><nav className="center">
<Link href='/002'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/004'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>





</div>
</div>
  </Layout>
)