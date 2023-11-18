const ListPattern = ({ data, render, display = "default" }) => {
  const styles = {
    default: "mt-4",
    pages: "mt-20 flexCenter gap-4",
    footer: "flexCenter gap-1",
    menu: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    cart: "mt-12 w-full flexCenter flex-col gap-4 md:gap-8",
    flex: "mt-12 flexCenter flex-col gap-4 lg:flex-row lg:flex-wrap",
    grid: "w-full pt-24 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-transparent backdrop-blur-sm",
  };

  return <ul className={styles[display]}>{data.map(render)}</ul>;
};

export default ListPattern;
