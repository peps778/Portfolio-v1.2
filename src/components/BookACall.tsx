
 export default  function Calendar() {
    return(
     <section className="min-h-screen w-full text-customWhite bg-white flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-7xl bg-primary  backdrop-blur-lg border-green border-3 rounded-2xl shadow-xl p-4">
        <h1 className="text-white text-2xl md:text-3xl lg:mt-5 lg:mb-7 font-semibold mb-6 text-center">
          Book a 30-Minute Discussion
        </h1>

        <div className="w-full h-full md:h-[80vh] rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://cal.com/paul-jhon-magbanua/30min-discussion?embed_domain=magbanua-pauljhon.website"
            title="Book a 30-min discussion"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    )
}