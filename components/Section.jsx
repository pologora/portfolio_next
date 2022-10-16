const Section = ({title, children, id}) => {
  return (
    <section id={id} className="bg-bgDark-100 min-h-screen px-4">
      <h2 className="text-primary text-2xl pt-10 pl-10 mb-10">{title}</h2>
      {children}
    </section>
  );
};
export default Section;
