const ClientSection = () => {
  return (
    <section id="client" className=" bg-primary">
      <div className="md:p-[100px] px-[24px] py-[60px] mx-auto max-w-[1536px] tracking-[-1%] flex md:flex-row flex-col justify-between md:items-center">
        <div>
          <p className="uppercase text-[16px] pb-[10px]">Our clients</p>
          <h2 className="md:text-[54px] text-[32px] font-bold leading-[100%]">
            We’re going to
            <br />
            became partners
            <span className="inline-block md:hidden">&nbsp;for</span>
            <br />
            <span className="hidden md:inline-block">for</span> the long run.
          </h2>
        </div>
        <div className="md:w-[640px] w-full md:text-[20px] mt-[24px]  md:leading-[24px] leading-[18px] md:mt-0 text-[15px]">
          <p>
            While creating inspiring places for people, product team which&nbsp;
            <span className="font-bold">creates amazing UI/UX </span>{" "}
            experiences,
            <span className="font-bold">&nbsp;by crafting top-notch</span> user
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
