export type CryptoIcon = {
  asset_id: string;
  url: string;
};

export type CryptoExchange = {
  time: string;
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
};
