export interface MarketItem {
  _id: string;
  market_id: string;
  result: string;
  status: "OPEN" | "CLOSED";
  createdAt: string;
}