import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
const Main: FC = () => {
  return (
    <main>
      <Routes>
        {ROUTES.map(({ key, path, component: Component }) => {
          return <Route key={key} element={<Component />} path={path}></Route>
        })}
        <Route path="*" element={<Navigate to={'404'} replace />}></Route>
      </Routes>
    </main>
  )
}

export default Main
