import data from "../data/testimonials.json";

const Testimonial = () => {
  const ratingStar = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .587l3.668 7.431 8.215 1.2-5.943 5.794 1.403 8.184-7.343-3.857L4.657 23.2l1.403-8.184-5.943-5.794 8.215-1.2z" />
      </svg>
    ));
  };

  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-5xl font-medium">
          Hear from Our Happy <span className="text-text"> Athletes </span> &
          <br />
          <span className="text-text"> Members </span>
        </h1>
        <p className="text-xl text-gray-500 my-7">
          Our members share how we've helped them achieve their fitness and
          sports goals.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 h-full"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.avatar}
                alt="User Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.designation}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{item.testimonial} </p>
            <div className="flex items-center mt-4">
              {ratingStar(item.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
