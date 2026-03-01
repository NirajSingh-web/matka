export interface MarketItem {
  _id: string;
  market_id: string;
  result: string;
  status: "OPEN" | "CLOSED";
  createdAt: string;
}
export interface MarketResult {
  _id: string;
  market_id: {
    _id: string;
    market_name: string;
  };
  result: number;
  status: boolean;
  createdAt: string;
}

export interface MarketResultPayload {
  market_id: string;
  result: number;
  status: boolean;
}