import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserServiceCard from "./UserServiceCard";

const UserServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://pictorialbd-photography-server.vercel.app")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {services.slice(6, 30).map((service) => (
        <UserServiceCard key={service._id} service={service}></UserServiceCard>
      ))}
    </div>
  );
};

export default UserServices;
