import { PaystackButton } from "react-paystack";

const PayStackBtn = ({ price }) => {
  const cash = price * 100;
  const toNaira = cash * 730;
  const publicKey = "pk_test_28ace95a0c5d19ba9a4d635c7854a2c8ef0e873d";

  const handleSuccess = (success) => {
    console.log(success);
    alert('Payment successful');
  }
  const handleClosedSession = () => {
    console.log('session closed');
    alert('You are about to close this payment session!!');
  }
  return (
    <PaystackButton
      name="Uska clothing"
      text="Pay Here"
      email="doziechuks1010@gmail.com"
      reference={new Date().getTime().toString()}
      description={`Your total is $${price}`}
      amount={toNaira}
      onSuccess={handleSuccess}
      onClose={handleClosedSession}
      publicKey={publicKey}
    />
  );
}
 
export default PayStackBtn;