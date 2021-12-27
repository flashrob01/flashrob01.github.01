<script type = "text/javascript">


neologin.getBalance({
    params: {
      address: 'AeysVbKWiLSuSDhg7DTzUdDyYYKfgjojru',
    },
    network: 'MainNet',
  })
  .then(results => {
    Object.keys(results).forEach(address => {
      const balances = results[address];
      balances.forEach(balance => {
        const { assetID, symbol, amount } = balance
  
        console.log('Address: ' + address);
        console.log('Asset ID: ' + assetID);
        console.log('Asset symbol: ' + symbol);
        console.log('Amount: ' + amount);
      });
    });
  })
  .catch(({type, description, data}) => {
    switch(type) {
      case "NO_PROVIDER":
        console.log('No provider available.');
        break;
      case "CONNECTION_DENIED":
        console.log('The user rejected the request to connect with your dApp');
        break;
    }
  });
      
  neologin.getAccount()
        .then((account) => {
        const {
            address,
            label,
        } = account;

        console.log('Account address: ' + address);
        console.log('Account label: ' + label);
        })
        .catch(({type, description, data}) => {
        switch(type) {
            case "NO_PROVIDER":
            console.log('No provider available.');
            break;
            case "CONNECTION_DENIED":
            console.log('The user rejected the request to connect with your dApp');
            break;
        }
        });
