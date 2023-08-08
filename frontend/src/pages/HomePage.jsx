import Carousel from '../components/carousel/Carousel';

function HomePage() {
  return (
    <div>
      {/* Carresel  Section */}

      <Carousel />

      <div className='container mx-auto px-10 py-10'>
        <h1>
          Welcome to HouseFinder, your premier online destination for finding
          the perfect rental home. Whether you're looking for a cozy apartment,
          a spacious family house, or a trendy loft, we've got a wide range of
          properties to suit every taste and budget. Our user-friendly search
          tools and comprehensive property listings make house hunting a breeze.
        </h1>
        <h1>Find Your Dream Rental Property</h1>
        <h1>
          Are you tired of endlessly scrolling through listings that don't match
          your preferences? Look no further! Our advanced search bar lets you
          filter properties by location, price range, number of bedrooms, and
          more. We believe that finding your ideal rental home should be simple
          and stress-free.
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
