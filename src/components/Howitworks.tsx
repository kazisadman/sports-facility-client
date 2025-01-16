const Howitworks = () => {
  const steps = [
    {
      id: 1,
      title: "Choose a Facility",
      description:
        "Explore our list of sports facilities and select the one that suits you.",
      icon: "https://i.ibb.co.com/tD4QBty/undraw-web-search-9qqc.png",
    },
    {
      id: 2,
      title: "Book Your Slot",
      description: "Pick a convenient time and book your slot easily online.",
      icon: "https://i.ibb.co.com/C5gPJ0m/undraw-booking-1ztt.png",
    },
    {
      id: 3,
      title: "Enjoy Your Game",
      description: "Arrive at the facility and enjoy your favorite sport.",
      icon: "https://i.ibb.co.com/QdkPvqH/undraw-greek-freak-p532.png",
    },
  ];
  return (
    <div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            How It <span className="text-text"> Works </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.id} className="relative flex-1 text-center">
                <h1 className="text-3xl border border-primaryColor rounded-full">{step.id}</h1>
                <img
                  src={step.icon}
                  className="mx-auto flex items-center justify-center w-96 h-72"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howitworks;
