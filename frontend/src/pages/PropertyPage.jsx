import PropertyCard from '../components/PropertyCard';

function PropertyPage() {
  return (
    <div className='container mx-auto py-20 my-10 px-10'>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item) => {
          return (
            <div key={item}>
              <PropertyCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PropertyPage;
