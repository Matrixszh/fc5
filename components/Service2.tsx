import { FaFire } from 'react-icons/fa';

const CrossfireServices = () => {
  const services = [
    {
      id: 1,
      iconColor: 'text-yellow-400'
    },
    {
      id: 2,
      iconColor: 'text-red-500'
    },
    {
      id: 3,
      iconColor: 'text-yellow-400'
    },
    {
      id: 4,
      iconColor: 'text-red-500'
    },
    {
      id: 5,
      iconColor: 'text-yellow-400'
    },
    {
      id: 6,
      iconColor: 'text-red-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Services provided by CROSSFIRE
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <FaFire className={`${service.iconColor} text-4xl`} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Automatic Fire Sprinkler System
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Our mission is to provide multidisciplinary fire safety solutions through technical expertise, practical implementation, and adherence to
            </p>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="text-center">
        <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default CrossfireServices;