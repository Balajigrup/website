import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#0A2342' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Left Side - Logo and States */}
          <div className="flex flex-col justify-between">
            {/* Logo */}
            <div>
              <img src="/footer_logo.png" alt="Balaji Group" className="h-24" />
            </div>

            {/* States List */}
            <div className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', lineHeight: '1.8' }}>
              <p>MP | CG | GUJARAT | UP | RAJASTHAN | HARYANA | DELHI NCR</p>
              <p>| UTTARAKHAND | WEST BENGAL | JHARKHAND | ODISHA | PONDICHERRY</p>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="text-right">
            <h3 className="text-white text-3xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Balaji Security Services
            </h3>

            <div className="space-y-4 text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px' }}>
              {/* Address */}
              <div className="flex items-start justify-end gap-3">
                <p className="text-right">
                  412 Navneet Plaza, 5/2 Old Palasia, Indore MP<br />452010, India
                </p>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
              </div>

              {/* Phone */}
              <div className="flex items-start justify-end gap-3">
                <div className="text-right">
                  <p>Phone: 0731 4237767, 4274005, 4067087, 2563564</p>
                  <p>Sales: +91 8120001410</p>
                  <p>HelpDesk:+91 8889044419</p>
                </div>
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
              </div>

              {/* Email */}
              <div className="flex items-start justify-end gap-3">
                <div className="text-right">
                  <p>adm@balajigrup.com</p>
                  <p>info@balajigrup.com</p>
                </div>
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white opacity-20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px' }}>
          <p>All rights reserved © Copyright reserved with Balaji Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
