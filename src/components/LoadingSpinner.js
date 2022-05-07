import { SpinnerCircular } from "spinners-react";

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <SpinnerCircular
        size={69}
        thickness={138}
        speed={134}
        color="rgba(255, 102, 0, 1)"
        secondaryColor="rgba(0, 0, 0, 0)"
      />
    </div>
  );
};

export default LoadingSpinner;
