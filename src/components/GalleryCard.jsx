import { Link } from "react-router-dom";
export default function GalleryCard({ src, title, alt, path }) {
  return (
    <Link to={path} className="block">
      <div className="bg-white border border-gray-400 overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt || title}
            className="w-full h-32 p-3 object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-sm font-bold text-gray-800 uppercase">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
