const Featuredfacility = () => {
  type TFacility = {
    image: string;
    title: string;
    description: string;
  };
  const facilities = [
    {
      image: "https://i.ibb.co.com/fC9hg8p/boxing.jpg",
      title: "Boxing and MMA Zone",
      description:
        "Step into our boxing ring or MMA training zone for high-intensity workouts and skill-building sessions.",
    },
    {
      image: "https://i.ibb.co.com/fNVZrB7/gym.jpg",
      title: "State-of-the-Art Gym",
      description:
        "A fully equipped gym with advanced machines, free weights, and functional training zones to cater to all fitness levels.",
    },
    {
      image: "https://i.ibb.co.com/DQx8VVv/swimming-pool.jpg",
      title: "Olympic-Sized Swimming Pool",
      description:
        " Dive into our temperature-controlled Olympic-sized pool, perfect for both competitive swimmers and casual learners.",
    },
    {
      image: "https://i.ibb.co.com/RbWMLSR/basketball.jpg",
      title: "Indoor Basketball Court",
      description:
        "A professional-grade indoor court designed for basketball enthusiasts, leagues, and training sessions.",
    },
  ];
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-5xl font-medium">
          Explore Our Diverse <span className="text-text"> Facilities </span> &
          <br />
          <span className="text-text"> Programs </span>
        </h1>
        <p className="text-xl text-gray-500 my-7">
          Whether you're looking to train, compete, or unwind, we have the
          perfect facility and program for you.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {facilities.map((item: TFacility, index) => (
          <div key={index} className="card bg-base-100 shadow-xl h-full">
            <figure className="px-10 pt-10">
              <img src={item.image} alt="boxing" className="w-full h-40" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredfacility;
