import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
const Main: FC = () => {
  return (
    <Routes>
      {ROUTES.map(({ id, path, Component }) => {
        return <Route key={id} element={<Component />} path={path}></Route>
      })}
      <Route path="*" element={<Navigate to={'404'} replace />}></Route>
    </Routes>
  )
}

export default Main
