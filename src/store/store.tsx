import React, { createContext, useReducer, Dispatch } from 'react'
import { TaskType } from '../pages/TasksPage/types'

type userTeam = {
  url: string;
  id: string
  name: string
  open_task: number
  role: string
  namePic: string
}

export type TeamsType = {
  id: string
  name: string
  users: userTeam[]
}
export type User = {
  name: string
  role: string
  teams: TeamsType[]
  about: string
}

export interface UserFull extends User {
  id: string
  url: string
  location: string
  namePic: string
}

interface StoreInterface {
  teams: TeamsType[]
  user: UserFull
  users: UserFull[]
  projects: {
    id: string
    name: string
    icon: string
    description: string
    tasks: TaskType[]
  }[]
}
export const INITIAL_STORE: StoreInterface = {
  teams: [],
  projects: [{
    id: '',
    name: '',
    icon: '',
    description: '',
    tasks: [],
  }],
  users: [
    {
      id: '',
      name: '',
      teams: [],
      location: '',
      role: '',
      about: '',
      url: '',
      namePic: ''
    }
  ],
  user: {
    id: '',
    name: '',
    teams: [],
    location: '',
    role: '',
    about: '',
    url: '',
    namePic: ''
  }
}

export enum ACTION {
  GET_PROJECT = 'GET_PROJECT',
  GET_ALL_DATA = 'GET_ALL_DATA',
  UPDATE_USER = 'UPDATE_USER',
  GET_USER = 'GET_USER',
  UPDATE_AVATAR = 'UPDATE_AVATAR',
  TOGGLE_DONE_TASK = 'TOGGLE_DONE_TASK',
  CREATE_PROJECT = 'CREATE_PROJECT',
  UPDATE_TASKS = 'UPDATE_TASKS',
  CREATE_TASK = 'CREATE_TASK',
  UPDATE_TASKS_DND = 'UPDATE_TASKS_DND'
}
interface DispatchInterface {
  action: ACTION
  data: any
}

// создание контекста и задание значений по умолчанию
export const TaskManagerContext = createContext<{
  store: StoreInterface
  dispatch: Dispatch<DispatchInterface>
}>({ store: INITIAL_STORE, dispatch: () => null })

interface TaskManagerProviderProps {
  children: React.ReactNode
}
const reducer = (currentState: StoreInterface, payload: DispatchInterface): StoreInterface => {
  switch (payload.action) {
    case ACTION.GET_PROJECT :
      return {user: currentState.user, projects: payload.data, teams: currentState.teams, users: currentState.users}
    case ACTION.GET_ALL_DATA :
      return {user: payload.data.user, projects: payload.data.projects, teams: payload.data.teams, users: payload.data.users}
    case ACTION.UPDATE_USER :
      return {user: payload.data, projects: currentState.projects, teams: currentState.teams, users: currentState.users}
    case ACTION.GET_USER :
      return {user: payload.data, projects: currentState.projects, teams: currentState.teams, users: currentState.users}
    case ACTION.UPDATE_TASKS_DND :
      return {user: currentState.user, projects: payload.data, teams: currentState.teams, users: currentState.users}
    case ACTION.UPDATE_TASKS :
      return {user: currentState.user, projects: payload.data, teams: currentState.teams, users: currentState.users}
    case ACTION.UPDATE_AVATAR :
      return {user: {...currentState.user, namePic: payload.data.name, url: payload.data.url},
        projects: currentState.projects, teams: currentState.teams, users: currentState.users}
    case ACTION.CREATE_TASK :
      const newTask:any = currentState.projects.map(project => {
        if(project.id === payload.data.id)
          return {...project, tasks: [...project.tasks, payload.data.task]}
        return {...project}
      })
      return {projects: newTask, user: currentState.user, teams: currentState.teams, users: currentState.users}
    case ACTION.CREATE_PROJECT :
      return {projects: [...currentState.projects, payload.data],
        user: currentState.user, teams: currentState.teams, users: currentState.users}
    // case ACTION.TOGGLE_DONE_TASK:
    //   // const newTasks = currentState.projects.tasks.map(item => {
    //   //   if (item.id === payload.data) {
    //   //     return {...item, isDone: !item.isDone}
    //   //   }
    //   //   return item
    //   // })
    //   return {
    //     projects: {
    //       ...currentState.projects,
    //       tasks: newTasks
    //     }
    //   }
    default:
      return currentState
  }
}

export const TaskManagerProvider = ({ children }: TaskManagerProviderProps) => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STORE)
  return (
    <TaskManagerContext.Provider value={{ store: store, dispatch: dispatch }}>
      {children}
    </TaskManagerContext.Provider>
  )
}
