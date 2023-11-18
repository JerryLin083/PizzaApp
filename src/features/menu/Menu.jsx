import { useLoaderData } from "react-router-dom";
import supabase from "../../api/supabase";
import { useState } from "react";

import ListPattern from "../ui/ListPattern";
import MenuCard from "./MenuCard";
import PageCard from "./PageCard";

const Menu = () => {
  const menu = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Array.from({ length: Math.ceil(menu.length / 6) }, (v, i) => i);

  return (
    <main className="mt-28">
      <ListPattern
        display="menu"
        data={menu.slice(currentPage * 6, (currentPage + 1) * 6)}
        render={(pizza) => <MenuCard key={pizza.id} pizza={pizza} />}
      />

      <ListPattern
        display="pages"
        data={pages}
        render={(page) => (
          <PageCard
            key={`page-${page}`}
            page={page}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      />
    </main>
  );
};

export default Menu;

export const loader = async () => {
  const { data } = await supabase.from("menu").select("*");

  return data;
};
