import React, { ReactText } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { clearCartItems } from '../../store/cart/actions';
import axios from 'axios';

interface StripeCheckoutButtonProps {
  dispatch: any;
  price: string;
}

const StripeCheckoutButton = ({
  price,
  dispatch,
}: StripeCheckoutButtonProps) => {
  const priceForStripe = +price * 100;
  const publishableKey =
    'pk_test_51H8ibGK2ygrizNgOKpGJQHp2XhEdIQtnAYOOAiHVA2tsRWm4se3e8ciYPQX4wHtTCnP6GSICB1dDJnGGh18N22cS00BEz973tJ';
  const history = useHistory();

  const toastId = React.useRef<ReactText | null>(null);

  const onToken = (token: any) => {
    toastId.current = toast('Your payment is being processed...');
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => {
        dispatch(clearCartItems());
        history.push('/shop');
        if (toastId.current) {
          toast.dismiss(toastId.current);
        }
        toast('Your payment has been successfully processed! ❤️️', {
          autoClose: 4000,
        });
      })
      .catch((err) => {
        if (toastId.current) {
          toast.dismiss(toastId.current);
        }
        toast('Payment error: ' + JSON.stringify(err));
      });
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="React Ecommerce"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect()(StripeCheckoutButton);
