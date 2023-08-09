import SearchAndFilter from './SearchAndFilter';
import FilterResults from './FilterResults';

const Home = () => {
    return (
        <div className="main">
            <h1 className=" text-white font-semibold text-center py-4">
                Welcome to Zebra Movies
            </h1>
            <SearchAndFilter />
            <FilterResults />
        </div>
    );
};

export default Home;
