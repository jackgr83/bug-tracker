import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import Navbar from '../layout/Navbar'
import axios from 'axios'

const Board = () => {
  const [bugs, setBugs] = useState([])
  const [mounted, isMounted] = useState(false)
  const [columns, setColumns] = useState({})
  const [status, setStatus] = useState({})

  useEffect(() => {
    const fetchBugs = async () => {
      if (!mounted) {
        try {
          const result = await axios(`api/bugs`)
          setBugs(result.data)
          setColumns({
            [1]: {
              name: 'Reported',
              items: result.data
            },
            [2]: {
              name: 'In Progress',
              items: []
            },
            [3]: {
              name: 'Done',
              items: []
            }
          })
          isMounted(true)
        } catch (err) {
          console.log('error fetching data')
        }
      }
    }
    fetchBugs()
  })

  const onDragEnd = (result, columns, setColumns) => {
    if(!result.destination) return
    const { source, destination } = result
    if(source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      
      destItems.splice(destination.index, 0, removed)
      setStatus({
        status: destColumn.name,
        bug: source.index
      })
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      columns[source.droppableId].items = copiedItems
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }    
  }
  
  return (
    <div>
    <Navbar />
    

    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>{column.name}</h4>
            <div style={{ margin: 8 }}>
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                    padding: 4,
                    width: 250,
                    minHeight: 500
                  }}
                  >
                    {column.items.map((item, index) => {
                      return (
                        <Draggable key={item._id} draggableId={item._id} index={index}>
                          {(provided, snapshot) => {
                            return (
                              <div 
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: 'none',
                                padding: 16,
                                margin: '0 0 8px 0',
                                minHeight: '50px',
                                backgroundColor: snapshot.isDragging ? '#2634B4A' : '#456C86',
                                color: 'white',
                                textAlign: 'center',
                                ...provided.draggableProps.style
                              }}
                              >
                                {item.name}
                              </div>
                            )
                          }}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
            </div>
            </div>
          )
        })}
      </DragDropContext>
      
    </div>
    </div>
  )
}

export default Board

