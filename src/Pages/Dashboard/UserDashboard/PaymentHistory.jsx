import SectionTitle from "./../../../Components/Titles/SectionTitle";

import usePaymentHistory from "../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
  const [payments] = usePaymentHistory();
  console.log(payments[0]?.date.split("T")[1].slice(0,5));
  return (
    <div>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"History"}
      ></SectionTitle>
      <div className="overflow-x-auto rounded-xl border">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="font-bold text-xl bg-secondary text-white">
              <th></th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Total Amount</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment?.email}</td>
                <td className="font-semibold">{payment?.transactionId}</td>
                <td className="font-semibold">${payment?.amount}</td>
                <td>
                  {payment?.date.split("T")[0]}
                    {" "}
                  {payment?.date.split("T")[1].slice(0,5)}
                </td>

                <td>
                  <button className="btn btn-sm btn-error bg-rose-600 capitalize text-xl">
                    {payment?.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
