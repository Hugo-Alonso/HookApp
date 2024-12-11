import { StrictMode } from 'react'
import './index.css';
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'

import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
import { FocusScreen } from './04-useRef/FocusScreen.jsx';
import { Layout } from './05-useLayoutEffect/Layout.jsx';
import { Memorize } from './06-memos/Memorize.jsx';
import { MemoHook } from './06-memos/MemoHook.jsx';
import { CallbackHook } from './06-memos/CallbackHook.jsx';
import { Padre } from './07-tarea-memo/Padre.jsx';
import { TodoApp } from './08-useReducer/ToDoApp.jsx';
// import './08-useReducer/intro-reducer.js';

createRoot(document.getElementById('root')).render(
//   <StrictMode>
    <TodoApp />
//   </StrictMode>,
)
