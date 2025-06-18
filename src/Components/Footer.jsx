import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#12325a] text-white py-12 px-6 md:px-16">
      {/* Top Info */}
      <div className="grid md:grid-cols-3 gap-8 bg-[#1b3f69] py-6 px-4 rounded-lg mb-12 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold text-blue-400 tracking-widest mb-1">OUR OFFICE</h3>
          <p className="text-sm mt-2">
            20, First Floor, Block - S 25, Sanjay Place, Agra - 282002
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-400 tracking-widest mb-1">EMAIL US</h3>
          <p className="text-sm mt-2">khalik@shafcons.com</p>
          <p className="text-sm">sachin@shafcons.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-400 tracking-widest mb-1">CALL US</h3>
          <p className="text-sm mt-2">+91 9412559786</p>
          <p className="text-sm">+91 9528396328</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8 text-sm">
        {/* About */}
        <div>
          <p>
            We are an Authorized Sales dealer of Jakson Cummins Silent Gensets
            (Diesel/Gasoline). We are a leading Manufacturer of LT, HT, Automatic Power Factor
            Correction (APFC) Panels, Electrical Transformers, and Chemical Earthing Electrodes in
            Agra. We are a leading Trader, Service Provider & Consultants of Transformers, Servo
            Voltage Stabilizers, and all kinds of Electrical needs.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="border border-white p-2 rounded hover:bg-white hover:text-[#12325a]">
              <Twitter size={20} />
            </a>
            <a href="#" className="border border-white p-2 rounded hover:bg-white hover:text-[#12325a]">
              <Facebook size={20} />
            </a>
            <a href="#" className="border border-white p-2 rounded hover:bg-white hover:text-[#12325a]">
              <Linkedin size={20} />
            </a>
            <a href="#" className="border border-white p-2 rounded hover:bg-white hover:text-[#12325a]">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xl font-semibold text-blue-400 tracking-widest mb-4">OUR PRODUCTS</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-lg">›</span> Electrical Panels
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">›</span> Electrical Transformers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">›</span> Silent Generator
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">›</span> Servo Voltage Stabilizer
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">›</span> Electrical Earthing System
            </li>
          </ul>
        </div>

        {/* Mission & Newsletter */}
        <div>
          <h4 className="text-xl font-semibold text-blue-400 tracking-widest mb-4">OUR MISSION</h4>
          <p className="mb-3">
            To provide a level of services that will exceed the expectations of our client,
            maintain the highest level of quality, and allow our team to grow and prosper.
          </p>
          <p className="mb-4">
            Regular interaction with clients for getting feedback from clients thus ensuring a high
            satisfaction level.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-12 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Shafcons. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;