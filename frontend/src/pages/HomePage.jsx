//components
import Carousel from '../components/carousel/Carousel';
import PropertyCard from '../components/PropertyCard';
import Spinner from '../components/Spinner';

//redux
import { useGetLatestPropertyQuery } from '../features/Rtk/propertyApiSlice';

function HomePage() {
  const { data, isLoading } = useGetLatestPropertyQuery();

  return (
    <div>
      {/* Carresel  Section */}

      <Carousel />

      <div className='container mx-auto px-10 py-5'>
        {/* Welcome Section */}
        <div>
          <h1 className='text-center font-bold  text-4xl'>
            Welcome to <span className='text-green-400'>HouseFinder</span>
          </h1>
          <p className='text-center  tracking-wide p-5 text-lg font-medium'>
            Your premier online destination for finding the perfect rental home.
            Whether you're looking for a cozy apartment, a spacious family
            house, or a trendy loft, we've got a wide range of properties to
            suit every taste and budget. Our user-friendly search tools and
            comprehensive property listings make house hunting a breeze.
          </p>
        </div>
        {/* Latest Listing Section */}
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>Latest Properties</h1>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 py-4'>
              {data.data.map((item) => {
                return (
                  <div key={item._id}>
                    <PropertyCard property={item} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
