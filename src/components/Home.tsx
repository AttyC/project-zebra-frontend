import SearchAndFilter from './SearchAndFilter';
import FilterResults from './FilterResults';

const Home = () => {
    return (
        <div className="main">
            <SearchAndFilter />

            <FilterResults />
        </div>
    );
};

export default Home;
