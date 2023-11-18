const ReverseWrapper = ({ isReverse = true, children }) => {
  const direction = isReverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div className={`mt-8 flexCenter flex-col ${direction} gap-4`}>
      {children}
    </div>
  );
};

export default ReverseWrapper;
