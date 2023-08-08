import SearchBar from './SearchBar'

export const Header: React.FC = () => {
  return (
    <header className="bg-light">
      <div className="logo">Project Zebra</div>
      <nav>
        <ul className="nav">
          <li className="list">nav link</li>
        </ul>
      </nav>
            <SearchBar />
    </header>
  )
}