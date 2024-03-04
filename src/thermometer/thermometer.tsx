import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Icon } from "./icon";

export const Thermometer = (): JSX.Element => {
  const content = {
    donate: "Dona",
  };
  return (
    <Link to="/donar">
      <div className="thermometer">
        <Icon percentage={82} />
        <Button className="thermometer__cta">{content.donate}</Button>
      </div>
    </Link>
  );
};
