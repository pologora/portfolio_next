const Section = ({title, children, id}) => {
  return (
    <section id={id} className="dark:bg-bgPrimary-dark min-h-screen px-4">
      <div className=" container mx-auto">
        <h2 className=" text-2xl pt-10 pl-10 mb-10 xl:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
};
export default Section;
