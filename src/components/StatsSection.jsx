import { useState, useEffect, useRef } from "react";

function Counter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, visible]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
             
export default function StatsSection() {
  return (
    <section className="relative w-full py-16 text-white">
      {/* Pozadinska slika */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/status.jpg')" }}
      />
      {/* Sadržaj */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        
        
        <div className="md:w-1/3">
          <h2 className="text-sm uppercase tracking-wider text-gray-200">
            KVALITETA U BROJKAMA
          </h2>
          <p className="mt-4 text-3xl md:text-4xl font-bold leading-snug">
            Već pola <br /> stoljeća iskustva
          </p>
        </div>

        {/* Separator linija */}
        <div className="hidden md:flex justify-center">
          <div className="w-px h-full bg-white opacity-70"></div>
        </div>

        {/* Desna strana */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-12 text-center">
          <div>
            <p className="text-3xl font-bold">
              <Counter target={1000} />
            </p>
            <p className="text-sm">različitih profila</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Counter target={45} />
            </p>
            <p className="text-sm">građevinskih sistema</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Counter target={8000} suffix=" t" />
            </p>
            <p className="text-sm">proizvodnog kapaciteta godišnje</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Counter target={100} suffix="+" />
            </p>
            <p className="text-sm">kooperanata</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Counter target={50} />
            </p>
            <p className="text-sm">zaposlenika</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Counter target={7} />
            </p>
            <p className="text-sm">preša</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="relative z-10 mt-12 text-center">
        <button className="px-6 py-3 bg-black text-white  font-semibold rounded border-1 border-white hover:bg-red-700   hover:border-red-700  transition">
          SAZNAJTE VIŠE O NAMA
        </button>
      </div>
    </section>
  );
}
