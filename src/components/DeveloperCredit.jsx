import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function DeveloperCredit() {
  return (
    <div className="text-center mt-8 text-sm text-gray-700">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-semibold">
          Made with 💓 by <span className="text-lime-600 font-bold">Prashant Raut</span>  for <span className="text-lime-600 font-bold">SunWave Solar</span>
        </p>

        {/* Contact Email */}
        <a
          href="mailto:prashantraut1308@gmail.com"
          className="flex items-center gap-2 hover:underline hover:text-lime-700 transition"
        >
          <FiMail className="text-lg" />
          prashantraut1308@gmail.com
        </a>

        {/* WhatsApp Contact */}
        <a
          href="https://wa.me/919067751221?text=Hello%20Prashant!%20I%20came%20across%20your%20work%20on%20SunWave%20Solar%20and%20I%20have%20a%20query%20regarding%20web%20development."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-600 hover:text-green-800 transition"
        >
          <FaWhatsapp className="text-lg" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
