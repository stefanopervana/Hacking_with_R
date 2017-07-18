import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
    <aside>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/ch1'><a>Chapter 1</a></Link> |
        <Link href='/ch2'><a>Chapter 2</a></Link> |
        <Link href='/ch1'><a>Chapter 3</a></Link> |
        <Link href='/ch2'><a>Chapter 4</a></Link> |
        <Link href='/ch1'><a>Chapter 5</a></Link> |
        <Link href='/ch2'><a>Chapter 6</a></Link> |
        <Link href='/ch2'><a>Chapter 7</a></Link> |
        <Link href='/ch1'><a>Chapter 8</a></Link> |
        <Link href='/ch2'><a>Chapter 9</a></Link> |
        <Link href='/ch1'><a>Chapter 10</a></Link> |
        <Link href='/ch2'><a>Chapter 11</a></Link> |

<h2>Contents</h2>

<Link href='/001'><a>1-Welcome!</a></Link><br></br>
<Link href='/002'><a>2-Begin at the Beginning: Chapter One</a></Link><br></br>
<Link href='/003'><a>3-The Importance of using Webpack with React</a></Link><br></br>
<Link href='/004'><a>4-Introduction to JSX</a></Link><br></br>
<Link href='/005'><a>5-Importing React Components using ES6</a></Link><br></br>
<Link href='/006'><a>6-What are React Props?</a></Link><br></br>
<Link href='/007'><a>7-Generating Random Values for Our Page</a></Link><br></br>
<Link href='/008'><a>8-How to Write if/else Conditional Statements in JSX</a></Link><br></br>
<Link href='/009'><a>9-Using JSX to Render Several Elements at Once</a></Link><br></br>
<Link href='/010'><a>10-Handling Events with JSX: onClick</a></Link><br></br>
<Link href='/011'><a>11-State vs Props in React</a></Link><br></br>
<Link href='/012'><a>12-Changing a React Component’s State with setState()</a></Link><br></br>
<Link href='/013'><a>13-State and the Single Source of Truth</a></Link><br></br>
<Link href='/014'><a>14-Rendering an Array of Data with map() and JSX</a></Link><br></br>
<Link href='/015'><a>15-Cleaning up and Preparing for a Real Project</a></Link><br></br>
<Link href='/016'><a>16-Fetching Ajax Data from GitHub using SuperAgent</a></Link><br></br>
<Link href='/017'><a>17-Converting GitHub’s JSON into Meaningful JSX</a></Link><br></br>
<Link href='/018'><a>18-Time for a Task: Reading from Three Feeds</a></Link><br></br>
<Link href='/019'><a>19-How to Upgrade Our App to Read Three Feeds</a></Link><br></br>
<Link href='/020'><a>20-Refactoring our Ajax Code: Don’t Repeat Yourself</a></Link><br></br>
<Link href='/021'><a>21-Refactoring our State Code: Passing Parameters in onClick</a></Link><br></br>
<Link href='/022'><a>22-Introducing React Router</a></Link><br></br>
<Link href='/023'><a>23-How to Add a New Route to React Router</a></Link><br></br>
<Link href='/024'><a>24-Creating a Link Between Pages in React Router</a></Link><br></br>
<Link href='/025'><a>25-Making Custom URLs with React Router Params</a></Link><br></br>
<Link href='/026'><a>26-Adding a Root Route Using React Router and IndexRoute</a></Link><br></br>
<Link href='/027'><a>27-Cleaning up Our Routes and Preparing for the Next Step</a></Link><br></br>
<Link href='/028'><a>28-Time for a Test: Clickable Usernames</a></Link><br></br>
<Link href='/029'><a>29-Making Usernames Clickable: My Solution</a></Link><br></br>
<Link href='/030'><a>30-Time for some Basic User Interface Polish</a></Link><br></br>
<Link href='/031'><a>31-Adding React Router Breadcrumbs with Link and IndexLink</a></Link><br></br>
<Link href='/032'><a>32-The First 80% is Done: Now What?</a></Link><br></br>
<Link href='/033'><a>33-How to Configure Jest to Test React and ES6</a></Link><br></br>
<Link href='/034'><a>34-Creating our First React Test with Jest</a></Link><br></br>
<Link href='/035'><a>35-Using Jest to Test Our React Components</a></Link><br></br>
<Link href='/036'><a>36-Using Jest to Simulate User Interaction on a React Component</a></Link><br></br>
<Link href='/037'><a>37-Time for Ajax: Using Jest with Asynchronous Tests</a></Link><br></br>
<Link href='/038'><a>38-Mocking Ajax with Jest: Making an Asynchronous Test Become Synchronous</a></Link><br></br>
<Link href='/039'><a>39-Cleaning up Our Tests: Last Tweaks</a></Link><br></br>
<Link href='/040'><a>40-Linting React using ESLint and Babel</a></Link><br></br>
<Link href='/041'><a>41-Linting React using Airbnb’s ESLint Rules</a></Link><br></br>
<Link href='/042'><a>42-How to Add React Component Prop Validation in Minutes</a></Link><br></br>
<Link href='/043'><a>43-Bringing it all Together: Project Complete!</a></Link>

      </nav>
      </aside>
    </header>

    { children }


  </div>
)
