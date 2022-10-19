const Section = ({title, children, id}) => {
  return (
    <section id={id} className="dark:bg-bgPrimary-dark min-h-screen
    px-4 pt-20 opacity-90">
      <div className="container mx-auto">
        <h2 className="text-5xl  mb-10 xl:text-3xl pb-10 font-bold">{title}</h2>
        {children}
      </div>
    </section>
  );
};
export default Section;
