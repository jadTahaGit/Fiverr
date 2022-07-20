import { ChargeBee, _subscription } from 'chargebee-typescript';

var chargebee = new ChargeBee();

chargebee.configure({ site: '{site}', api_key: '{site_api_key}' });
chargebee.subscription
  .create_with_items('__test__8asz8Ru9WhHOJO', {
    subscription_items: [
      {
        item_price_id: 'day-pass-USD',
        unit_price: 100,
      },
      {
        item_price_id: 'basic-USD',
        billing_cycles: 2,
        quantity: 1,
      },
    ],
  })
  .request(function (error, result) {
    if (error) {
      //handle error
      console.log(error);
    } else {
      console.log(`${result}`);
      var subscription: typeof chargebee.subscription = result.subscription;
      var customer: typeof chargebee.customer = result.customer;
      var card: typeof chargebee.card = result.card;
      var invoice: typeof chargebee.invoice = result.invoice;
      var unbilled_charges: Array<typeof chargebee.unbilled_charge> =
        result.unbilled_charges;
    }
  });
