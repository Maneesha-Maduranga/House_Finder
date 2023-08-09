//components
import Carousel from '../components/carousel/Carousel';
import PropertyCard from '../components/PropertyCard';

function HomePage() {
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
          {/* <h1 className='text-2xl md:text-3xl  font-bold'>
            Find Your Dream Rental Property
          </h1>
          <p className='py-5 tracking-normal text-left text-lg font-medium'>
            Are you tired of endlessly scrolling through listings that don't
            match your preferences? Look no further! Our advanced search bar
            lets you filter properties by location, price range, number of
            bedrooms, and more. We believe that finding your ideal rental home
            should be simple and stress-free.
          </p> */}
        </div>
        {/* Latest Listing Section */}
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>Latest Properties</h1>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 py-4'>
            {Array.from([1, 2, 3, 4, 5, 6]).map((item) => {
              return (
                <div key={item}>
                  <PropertyCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
