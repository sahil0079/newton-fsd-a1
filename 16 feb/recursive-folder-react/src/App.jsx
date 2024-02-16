import React, { useState } from 'react'

const initialFolders = [
  {
    name: 'src',
    type: 'folder',
    depth: 0,
    children: [
      {
        name: 'components',
        type: 'folder',
        depth: 1,
        children: [
          {
            name: 'Button.js',
            type: 'file',
            depth: 2
          },
          {
            name: 'Input.js',
            type: 'file',
            depth: 2
          }
        ]
      },
      {
        name: 'pages',
        type: 'folder',
        depth: 1,
        children: [
          {
            name: 'Home.js',
            type: 'file',
            depth: 2
          },
          {
            name: 'About.js',
            type: 'file',
            depth: 2
          }
        ]
      },

    ]
  },
  {
    name: 'public',
    type: 'folder',
    depth: 0,
    children: [
      {
        name: 'vite.svg',
        type: 'file',
        depth: 1
      }
    ]

  }
]

function FileItem({ item }) {

  const [isOpen, setIsOpen] = useState(false);
  function toggleItem() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: `${item.depth * 20}px`, cursor: 'pointer'
      }} onClick={toggleItem}>
        <span> {item.type == 'folder' && (isOpen ? '-' : '+')} </span> &nbsp;
        <span>{item.name}</span>
      </div>
      {isOpen && (
        <div>
          {item?.children?.map(child => (
            <FileItem key={child.name} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Folder Recursion</h1>

      {initialFolders?.map(item => (
        <FileItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export default App