import React, { useState } from 'react';

const content = [
  {
    summary: 'React is a lib for building cool UI',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget tempor nisl.'
  },
  {
    summary: 'Each and every component has its own state',
    details: ' In congue, felis et sagittis sodales, ipsum neque ullamcorper augue, id varius massa nisi at massa.'
  },
  {
    summary: 'Keys should be unique and index as keys should be avoided',
    details: ' Pellentesque semper, arcu ut sagittis ultricies, eros nulla sagittis magna, ut porta sapien enim at dui.'
  },

];




function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  )
};

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  console.log(content.at(activeTab));
  return (
    <div>
      <div className='tabs'>
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} key={content.at(activeTab).summary} />
      ) : (
        <DifferentContent />
      )}
    </div>
  )
};

function Tab({ num, activeTab, onClick }) {

  return (
    <button className={activeTab == num ? 'tab active' : 'tab'} onClick={() => onClick(num)} >
      Tab {num + 1}
    </button>
  )
};

function TabContent({ item }) {

  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  return <div className='tab-content'>
    <h4>{item.summary}</h4>

    {showDetails && <p>{item.details} </p>}

    <div className='tab-actions'>
      <button onClick={() => setShowDetails((show) => !show)} >
        {showDetails ? 'Hide' : 'Show'} details
      </button>
      <div className='hearts-counter'>
        <span>{likes}❤️</span>
        <button onClick={handleInc} >+</button>
        <button>+++</button>

      </div>
    </div>

    <div className='tab-undo'>
      <button>Undo</button>
      <button>Undo in 2s</button>

    </div>


  </div>
}

function DifferentContent() {

  return <div className='tab-content'>
    <h4>I am a different tab, so reset the state</h4>
  </div>
}

export default App