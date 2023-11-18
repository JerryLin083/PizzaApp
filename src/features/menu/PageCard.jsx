import Button from "../ui/Button";

const PageCard = ({ page, currentPage, setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);

    if (window.scrollY) window.scroll(0, 0);
  };

  return (
    <li key={`page-${page}`}>
      <Button onClick={() => handleClick(page)}>
        <span
          className={`${
            page === currentPage ? "text-orange-500" : ""
          } hover:text-orange-500 text-2xl`}
        >
          {page + 1}
        </span>
      </Button>
    </li>
  );
};

export default PageCard;
