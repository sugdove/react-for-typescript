import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import { RouteType } from '../../../types/routes'

const items: Array<RouteType> = ROUTES
const Siderbar: React.FC = () => {
  const navigate = useNavigate()
  const onSelect = (e: any) => {
    navigate(e.item.props.path)
    console.log('onSelect ', e.item.props.path)
  }

  return (
    <aside>
      <Menu
        onSelect={onSelect}
        style={{ width: 256, height: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </aside>
  )
}

export default Siderbar
