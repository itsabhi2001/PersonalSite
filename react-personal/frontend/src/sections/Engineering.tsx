// src/sections/Engineering.tsx
const engCards = [
  { title: "Additive Manufacturing", desc: "Prototyping, tuning, materials, CAD modeling", img: "/page-img/3dPrinting.png" },
  { title: "Automotive Engineering", desc: "Repair, maintain, and upgrade automobiles. I also have a facination in the physics and engineering of race cars.", img: "/page-img/AutomotiveEng.jpg" },
  { title: "Computer Hardware", desc: "PC building, component selection, thermals, reliability.", img: "/page-img/PCBuilding.png" },
];

export default function Engineering() {
  return (
    <section className="w-full">
      <div className="container py-16">
        <h2 className="text-3xl font-semibold">Engineering</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          Hands-on interests across additive manufacturing, cars, and hardware.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {engCards.map(c => (
              <div key={c.title} className="rounded-2xl border border-black/10 p-5 bg-white/70 dark:bg-white/5">
              <img
                src={c.img}
                alt={c.title}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
              <div className="p-5">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center py-8">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-orange-500 bg-orange-500
                      px-6 py-3 text-white font-medium shadow-sm hover:bg-orange-600
                      dark:border-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700
                      transition"
          >
            Want to work with me?
          </a>
        </div>
      </div>
    </section>
  );
}
