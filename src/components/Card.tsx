import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  content: string;
  iconimg: string;
  linkname?: string;
  arrowimg?: string;
  link?: string;
};

export default function Card({
  title,
  content,
  iconimg,
  linkname,
  arrowimg,
  link,
}: CardProps) {
  return (
    <div
      className="group flex flex-col justify-center items-center gap-4 p-6 rounded-2xl bg-white border border-[#dfdcdcfb]
      hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" >
      <div className="w-12 h-12 rounded-full bg-[#f1f4f0] flex items-center justify-center
        group-hover:bg-primary transition-colors" >
        <img src={iconimg} alt={title} className="w-6 h-6" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-[#11270a] leading-relaxed mb-4">{content}</p>
        {linkname && arrowimg && link && (
          <Link
            to={link} className="flex items-center justify-center gap-1 font-semibold text-[#125200]">
            {linkname}
            <img src={arrowimg} alt="" className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
}
