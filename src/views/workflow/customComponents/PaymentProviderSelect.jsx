
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
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={PAYMENT_PROVIDERS[0]}
        name="paymentProvider"
        id="paymentProvider"
        options={PAYMENT_PROVIDERS}
        onChange={(e) => onProviderClick(e)}
      />
    </div>
  );
};
