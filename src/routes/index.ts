import { RouteType } from '../types/routes'
import Empty from '../pages/Empty'
import Hello from '../pages/Hello'
export const ROUTES: Array<RouteType> = [
  {
    id: 0,
    path: '/404',
    Component: Empty,
    name: '404',
    icon: '',
  },
  {
    id: 1,
    path: '/hello',
    Component: Hello,
    name: 'hello',
    icon: '',
  },
]
