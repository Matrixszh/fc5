import Link from 'next/link';
import { 
  FaFire, 
  FaShieldAlt, 
  FaWater, 
  FaExclamationTriangle, 
  FaBell, 
  FaBuilding,
  FaCog,
  FaFireExtinguisher,
  FaWind,
  FaSignOutAlt,
  FaTachometerAlt,
  FaMicrophone,
  FaUtensils,
  FaDesktop
} from 'react-icons/fa';

const CrossfireServices = () => {
  const services = [
    {
      id: 1,
      icon: FaShieldAlt,
      iconColor: 'text-red-500',
      title: 'Fire Prevention Design & Hazard Assessment',
      description: 'Comprehensive fire risk analysis and prevention strategies tailored to your facility. Expert assessment identifying potential hazards and designing effective mitigation solutions.'
    },
    {
      id: 2,
      icon: FaWater,
      iconColor: 'text-blue-500',
      title: 'Fire Hydrant & Hose Reel Reticulation',
      description: 'Complete hydrant systems with strategically placed hose reels for immediate fire response. Designed per NBC standards for optimal water pressure and coverage.'
    },
    {
      id: 3,
      icon: FaFire,
      iconColor: 'text-yellow-400',
      title: 'Fire Sprinkler & Water Curtain Installations',
      description: 'Automatic sprinkler systems providing rapid fire suppression. Water curtain installations for compartmentalization and preventing fire spread across zones.'
    },
    {
      id: 4,
      icon: FaBell,
      iconColor: 'text-orange-500',
      title: 'Fire/Smoke Detection & Alarm Systems',
      description: 'Advanced addressable and conventional detection systems with smoke, heat, and flame detectors. Early warning systems ensuring rapid emergency response.'
    },
    {
      id: 5,
      icon: FaBuilding,
      iconColor: 'text-gray-600',
      title: 'Fire Exit Structural Staircase',
      description: 'Code-compliant emergency exit staircases designed for safe evacuation. Structural solutions ensuring clear escape routes during fire emergencies.'
    },
    {
      id: 6,
      icon: FaCog,
      iconColor: 'text-red-600',
      title: 'Fire Safety Control Panel Systems',
      description: 'Centralized control panels for monitoring and managing all fire safety systems. Real-time status monitoring with manual override capabilities.'
    },
    {
      id: 7,
      icon: FaWind,
      iconColor: 'text-blue-400',
      title: 'Fire Suppression Systems',
      description: 'Specialized suppression systems including foam, CO2, and clean agent systems. Customized solutions for different fire classes and facility types.'
    },
    {
      id: 8,
      icon: FaFireExtinguisher,
      iconColor: 'text-red-500',
      title: 'Fire Extinguishers',
      description: 'Complete range of portable extinguishers - ABC, DCP, Foam, and CO2 types. Strategic placement and regular maintenance for immediate fire response.'
    },
    {
      id: 9,
      icon: FaExclamationTriangle,
      iconColor: 'text-yellow-500',
      title: 'Gas Flooding Systems',
      description: 'Clean agent gas suppression systems for sensitive equipment areas. Rapid deployment systems that suppress fire without water damage.'
    },
    {
      id: 10,
      icon: FaSignOutAlt,
      iconColor: 'text-green-500',
      title: 'Fire Exit Signage & Escape Plans',
      description: 'Illuminated exit signs and comprehensive evacuation plans. Clear directional signage ensuring safe and efficient emergency evacuation routes.'
    },
    {
      id: 11,
      icon: FaTachometerAlt,
      iconColor: 'text-blue-600',
      title: 'Fire Pumps',
      description: 'High-performance fire pumps ensuring adequate water pressure for all fire fighting systems. Diesel and electric pump solutions with backup systems.'
    },
    {
      id: 12,
      icon: FaMicrophone,
      iconColor: 'text-purple-500',
      title: 'Public Address System',
      description: 'Emergency communication systems for clear evacuation instructions. Integrated PA systems ensuring coordinated emergency response and crowd management.'
    },
    {
      id: 13,
      icon: FaUtensils,
      iconColor: 'text-orange-600',
      title: 'Kitchen Fire Protection Systems',
      description: 'Specialized kitchen hood suppression systems for commercial kitchens. Wet chemical systems designed for cooking oil and grease fire protection.'
    },
    {
      id: 14,
      icon: FaDesktop,
      iconColor: 'text-gray-700',
      title: 'Standalone Fire Safety Systems',
      description: 'Independent fire safety solutions for specific applications. Customized standalone systems for unique requirements and specialized environments.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="uniform-heading-lg mb-2">
          Services provided by <span className="text-red-500">CROSS</span><span className="text-black">FIRE</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="rounded-xl bg-white border-2 border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <IconComponent className={`${service.iconColor} text-4xl`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="uniform-heading-sm uniform-text-primary mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="uniform-text-base uniform-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Learn More Button */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/Contact">
          <button className="text-sm mt-4 px-4 py-2 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CrossfireServices;
