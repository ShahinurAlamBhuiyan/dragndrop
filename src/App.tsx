import { useState } from 'react'
import type { Task, Column as ColumnType } from './types'
import Column from './components/Column';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { Copyright } from './components/Copyright';


const COLUMNS: ColumnType[] = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: 'IN_PROGRESS',
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: 'DONE',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];

    setTasks(() => tasks.map((task) => task.id === taskId ?
      {
        ...task,
        status: newStatus
      } :
      task))
  }

  return (
    <div className="p-4 flex flex-col justify-center gap-16 items-center w-screen min-h-screen bg-black">
      <h1 className='text-white text-3xl font-semibold'>Drag n Drop</h1>
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
      <Copyright />
    </div>
  )
}

export default App
