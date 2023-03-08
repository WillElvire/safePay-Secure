const cryptoAddressregexTable : Required<{blockchain:string , regex : any}[]> = [
  {
    blockchain: 'BTC',
    regex : /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/g
  },
  {
    blockchain: 'ETH',
    regex : /^0x[a-fA-F0-9]{40}$/g
  },
  {
    blockchain : 'DASH',
    regex : /X[1-9A-HJ-NP-Za-km-z]{33}$/g
  },
  {
    blockchain :'XMR',
    regex :/4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/g
  }
]

export function getCryptoRegex(blockchain : string) {
  return cryptoAddressregexTable.find((el)=>{return el.blockchain == blockchain});
}
