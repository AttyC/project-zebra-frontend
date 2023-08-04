import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
// type Props = {}
// props: Props

const Layout = () => {
  return (
    <div>Layout
      <SearchBar />
      <Outlet />
    </div>
  )
}

export default Layout