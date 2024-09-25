import {
  CircleDollarSignIcon,
  CreditCardIcon,
  ReceiptTextIcon,
} from "lucide-react";

export function PaymentType() {
  return (
    <div className="grid grid-cols-3 gap-3 font-medium text-center">
      <label>
        <input
          type="radio"
          name="payment-type"
          value="credit-card"
          className="sr-only peer"
          defaultChecked
        />
        <div className="peer-checked:bg-background peer-checked:border-primary peer-checked:text-primary transition-all bg-card border rounded-md flex items-center flex-col justify-center gap-2 p-3">
          <CreditCardIcon className="transition-colors" />
          <span className="text-foreground">Cartão</span>
        </div>
      </label>

      <label>
        <input
          type="radio"
          name="payment-type"
          value="pix"
          className="sr-only peer"
        />
        <div className="peer-checked:bg-background peer-checked:border-primary peer-checked:text-primary transition-all bg-card border rounded-md flex items-center flex-col justify-center gap-2 p-3">
          <CircleDollarSignIcon className="transition-colors" />
          <span className="text-foreground">PIX</span>
        </div>
      </label>

      <label>
        <input
          type="radio"
          name="payment-type"
          value="billet"
          className="sr-only peer"
        />
        <div className="peer-checked:bg-background peer-checked:border-primary peer-checked:text-primary transition-all bg-card border rounded-md flex items-center flex-col justify-center gap-2 p-3">
          <ReceiptTextIcon className="transition-colors" />
          <span className="text-foreground">Boleto</span>
        </div>
      </label>
    </div>
  );
}
