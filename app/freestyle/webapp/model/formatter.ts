import { ValueState } from "sap/ui/core/library";

function stockState(stock: number): string {
  if (stock <= 10) return ValueState.Error;
  if (stock <= 50) return ValueState.Warning;
  return ValueState.Success;
}

export default {
  stockState,
};
