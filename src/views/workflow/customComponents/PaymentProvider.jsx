import { X } from "react-feather";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDER_IMAGE_MAP = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

export const PaymentProvider = ({ data, id }) => {
  const { name, code } = data;

  const {setNodes} = useReactFlow()

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        background: "white",
        border: "1px solid #bbbdbf",
        padding: "6px",
        gap: "6px",
        width: "155px",
      }}
    >
      <div style={{ height: "30px", width: "30px" }}>
        <img
          height="100%"
          width="100%"
          src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
          alt="img"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span>{name}</span>
        <span
          onClick={() => {
            setNodes(prev => prev.filter(x => x.id !== id))
          }}
          style={{
            cursor: "pointer",
            background: "#aaa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px",
            borderRadius: "50%",
            color: "white",
          }}
        >
          <X size={"14"} />
        </span>
      </div>
    </div>
  );
};
