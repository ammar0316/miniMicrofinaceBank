import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* ✅ Services Hero Section */}
      <section className="relative bg-blue-700 text-white text-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl">
            Providing interest-free financial help for families, students, and patients.
          </p>
        </div>
      </section>

      {/* ✅ Main Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <img
              src="https://www.shutterstock.com/image-vector/poor-people-slum-picture-poverty-260nw-2264744645.jpg"
              alt="family loan"
              className="mx-auto h-[100px] object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-700 mt-4 text-center">
              Family Support Loans
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              Providing financial help to poor and needy families for food, home repairs, and small businesses.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <img
              src="https://img.icons8.com/color/96/graduation-cap.png"
              alt="student loan"
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold text-blue-700 mt-4 text-center">
              Education Support Loans
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              Helping students pay school/college fees, buy books, and continue their education without financial stress.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <img
              src="https://img.icons8.com/color/96/hospital-room.png"
              alt="medical support"
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold text-blue-700 mt-4 text-center">
              Medical Treatment Support
            </h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              Providing interest-free loans for medical treatments, surgeries, and urgent health care.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Donor Services */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">For Our Donors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/color/96/charity.png"
                alt="donate"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-blue-700 mt-4">
                Transparent Donation System
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Every donation is tracked, and donors can see how their contributions are being used.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/color/96/handshake.png"
                alt="partnership"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-blue-700 mt-4">
                Partnership & Volunteering
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Donors can also join as volunteers or partners to reach more needy people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Need Help or Want to Help?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Apply for an interest-free loan or donate to change someone’s life today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition">
            Apply for Loan
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
