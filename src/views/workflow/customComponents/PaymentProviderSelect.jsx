
import Select from "react-select";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
  { value: "St", label: "Stripe" },
  { value: "Gp", label: "Google Pay" },
  { value: "Ap", label: "Apple Pay" },
  { value: "Pp", label: "Paypal" },
  { value: "Am", label: "Amazon Pay" },
];

export const PaymentProviderSelect = () => {
  const { setNodes } = useReactFlow();

  const onProviderClick = (data) => {
    const location = Math.random() * 500;

    setNodes((prev) => [
      ...prev,
      {
        id: `${prev.length + 1}`,
        type: "paymentProvider",
        data: { name: data.label, code: data.value },
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <div>
      <label htmlFor="paymentProvider">Add Payment Provider</label>
      <select
        onChange={(e) => {
          onProviderClick({label: PAYMENT_PROVIDERS.find(x => x.value === e.target.value).label, value: e.target.value})
        }}
      >
        {PAYMENT_PROVIDERS.map(x=> (
          <option key={x.value} label={x.label} value={x.value}>{x.label}</option>
        ))}
      </select>
    </div>
  );
};
