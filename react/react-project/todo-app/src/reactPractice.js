import './App.css';


function Greetings() {
    return (
        <div>
            <h1>hello everyone</h1>
        </div>
    )
}

function renderGreetings() {
    //processing
    return <Greetings />
}

//chats => paaniPuri, sevPuri, cholaTikki

function SevPuri() {
    return <h1>SevPuri</h1>
}
function CholaTikki() {
    return <h1>CholaTikki</h1>
}

function PaaniPuri() {
    return <h1>PaaniPuri</h1>
}

let chats = {
    sevPuri: {
        name: 'sevPuri',
        component: <SevPuri />
    },
    cholaTikki: {
        name: 'cholaTikki',
        component: <CholaTikki />
    },
    paaniPuri: {
        name: 'paaniPuri',
        component: <PaaniPuri />
    },
}

function App() {

    const element = <h2>I am and element</h2>;

    const greetings = <Greetings />;
    console.log(greetings)
    return (
        <div className="App">
            <h1>App</h1>
            {element}
            {/* {Greetings()} */}
            {/* <Greetings /> */}
            {/* {renderGreetings()} */}
            {/* {
        chats['sevPuri'].component
      }
      {
        chats['cholaTikki'].component
      }
      {
        chats['paaniPuri'].component
      } */}
            {greetings}
        </div>
    );
}

export default App;
