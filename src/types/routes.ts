export interface RouteType {
  key: number,
  label: string,
  path: string,
  component: Function,
  children?: Array<RouteType>,
  icon: string,
}
