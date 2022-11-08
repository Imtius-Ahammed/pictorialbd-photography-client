
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './HomeServiceCard';

const HomeServices = () => {
  const homeServices =useLoaderData()
  return (
    <div>
      <h2> THis is Home services</h2>
      {
        homeServices.slice(0,3).map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
      }
      

      
    </div>
  );
};

export default HomeServices;