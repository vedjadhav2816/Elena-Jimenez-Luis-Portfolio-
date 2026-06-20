const projects = [
  {
    title:"Meta Ads Creative Strategy"
  },
  {
    title:"VSL Production"
  },
  {
    title:"UGC Ad Editing"
  },
  {
    title:"Direct Response Campaigns"
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6">

      <h2 className="text-center text-4xl font-bold mb-16">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((item) => (
          <div
            key={item.title}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}