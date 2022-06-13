import { RouteType } from '../types/routes'
import Empty from '../pages/Empty'
import Hello from '../pages/Hello'
import Wordle from '../components/Wordle'
export const ROUTES: Array<RouteType> = [
  {
    key: 0,
    path: '/404',
    component: Empty,
    label: '404',
    icon: '',
  },
  {
    key: 1,
    path: '/hello',
    component: Hello,
    label: 'hello',
    icon: '',
  },
  {
    key: 2,
    path: '/wordle',
    component: Wordle,
    label: 'wordle',
    icon: '',
  },
]
