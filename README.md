# Todo App (React + TypeScript)

A simple todo list to add, complete, and remove tasks. State is persisted to localStorage.

## Tech Stack

- React
- Vite
- TypeScript
- CSS modules
- localStorage for persistence

## Features

- Add new tasks
- Toggle task completion
- Remove tasks
- Persist tasks between reloads

## Project Structure

- `src/App.tsx`: App shell, state, and localStorage sync
- `src/components/NewTaskForm.tsx`: Input form (typed events)
- `src/components/TaskList.tsx`: Renders the list, manages handlers
- `src/components/Task.tsx`: Single task row, checkbox + delete button
- `src/components/RemoveTaskButton.tsx`: Delete button component
- `src/App.css`: Styles

## Scripts

- `npm start`: Run dev server at http://localhost:3000
- `npm test`: Run tests (if added)
- `npm run build`: Production build

## How it works

- App initializes tasks from `localStorage` or defaults.
- Adding a task uses a typed submit handler: `(text: string, e: React.FormEvent<HTMLFormElement>)`.
- Toggling and deleting use typed handlers passed down from TaskList.
- Every change to the task array updates `localStorage`.
