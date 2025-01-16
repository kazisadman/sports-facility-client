const Photogallary = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
        <div>
          <h1 className="text-5xl font-medium">
            Explore Our <br />
            <span className="text-text"> World of Sports </span>
          </h1>
          <p className="text-xl text-gray-500 my-7">
            Step into our vibrant sports community through captivating visuals.
            From state-of-the-art facilities to thrilling moments in action, our
            gallery showcases the passion, energy, and dedication that define
            us.
          </p>
        </div>
        <div className="pb-2 border-2 border-text">
          <div className="grid grid-cols-4 gap-2 p-4 w-[621px] h-full mx-auto">
            <div className="col-span-1 row-span-2">
              <img
                src="https://i.ibb.co.com/fkTq5JJ/facility-1.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="https://i.ibb.co.com/9bcT6Tx/facility-3.jpg"
                alt="Image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-3">
              <img
                src="https://i.ibb.co.com/dB4Zmwx/facility-2.jpg"
                alt="Image 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-2">
              <img
                src="https://i.ibb.co.com/RbWMLSR/basketball.jpg"
                alt="Image 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-2">
              <img
                src="https://i.ibb.co.com/fNVZrB7/gym.jpg"
                alt="Image 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="https://i.ibb.co.com/V9Rkf97/basketball.jpg"
                alt="Image 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="https://i.ibb.co.com/fC9hg8p/boxing.jpg"
                alt="Image 7"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogallary;
