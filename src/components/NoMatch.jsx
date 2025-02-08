import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import Layout from "./Layout";

export default function NoMatch() {
  const { t } = useLanguage();

  return (
    <div>
      <Layout />
      <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange pt-[10%] flex justify-center">
        {t("main.found")}
      </div>
      <Link to="/" className="">
        {t("main.return")}
      </Link>
    </div>
  );
}
