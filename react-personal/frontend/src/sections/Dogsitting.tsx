// src/sections/Dogsitting.tsx
const reviews = [
  { name: "Robert C.", text: "Abhi is amazing! He took great care of our dogs and was very communicative. He also left the house better than he found it which was much appreciated! 10/10 would recommend and will book again." },
  { name: "Jacqueline E.", text: "We were very satisfied with his pet sitting and house sitting services while we were getting married out of state. We couldn’t imagine anyone doing a better job. Our cats loved him, and he provided regular updates and photos, which made us feel much more relaxed about leaving them. He took excellent care of our home and was pleasant to work with." },
  { name: "Meredith S.", text: "Abhi helped us out last minute when our friend had an emergency and could no longer watch our dogs. He was prompt with communication and gave us updates with photos every day. We came home to a tidy house and happy dogs! We will definitely ask him to watch our dogs again!" },
];

export default function Dogsitting() {
  return (
    <section className="w-full">
      <div className="container py-16">
        <h2 className="text-3xl font-semibold">DogSitting</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          I’m a dogsitter on Rover. I love pets as if they are my own, and understand them very intuitively. I am punctual and communicative with my clients, and will send as many pet pics as you need :)
        </p>

        <div className="mt-4 flex items-center gap-3">  

                  <a href="https://www.rover.com/sit/abhimv28903" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 hover:bg-black/5 transition sm:px-4 sm:py-2.5">

          <span className="text-sm sm:text-base">View my</span>
          <img
            src="/page-img/RoverLogo.png"
            alt="Rover"
            className="h-5 w-auto sm:h-6 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-sm sm:text-base">profile</span>
        </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map(r => (
            <div key={r.name} className="rounded-2xl border border-black/10 p-5 bg-white/70 dark:bg-white/5">
              <div className="flex items-center gap-2 text-yellow-500" aria-label="5 stars">
                {"★★★★★"}
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 italic">“{r.text}”</p>
              <div className="mt-2 text-sm font-medium">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
