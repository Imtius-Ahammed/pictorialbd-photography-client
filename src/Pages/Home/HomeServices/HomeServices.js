
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './HomeServiceCard';

const HomeServices = () => {
  const homeServices =useLoaderData()
  return (
    <div>
      <h2 className='text-3xl text-center font-bold'> THis is Home services</h2>
      {
        homeServices.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
      }
      

      
    </div>
  );
};

export default HomeServices;