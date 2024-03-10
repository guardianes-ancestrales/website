import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Icon } from "./icon";
import { useTranslation } from "react-i18next";

export const Thermometer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Link to="/donar">
      <div className="thermometer">
        <Icon percentage={90} />
        <Button className="thermometer__cta">{t("thermometer.donate")}</Button>
      </div>
    </Link>
  );
};
