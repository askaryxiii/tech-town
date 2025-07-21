import { Logo } from "../../components/ui";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loader flex flex-col gap-5">
        <div className="animated-logo">
          <Logo />
        </div>
        <BarLoader className="animated-logo" height={4} width={200} />
      </div>
    </div>
  );
};

export default Loading;
