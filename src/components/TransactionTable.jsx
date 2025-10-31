import { formatCurrency } from "../utils/format";

export default function TransactionTable({ data }) {
  if (!data || data.length === 0)
    return (
      <div className="text-center text-gray-500 py-8 italic">
        Tidak ada transaksi ditemukan
      </div>
    );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-blue-50 text-gray-800">
          <tr>
            <th className="p-3 text-left font-semibold">Merchant ID</th>
            <th className="p-3 text-left font-semibold">Reference No</th>
            <th className="p-3 text-left font-semibold">Partner Ref</th>
            <th className="p-3 text-left font-semibold">Amount</th>
            <th className="p-3 text-left font-semibold">Status</th>
            <th className="p-3 text-left font-semibold">Transaction Date</th>
            <th className="p-3 text-left font-semibold">Paid Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tx) => (
            <tr
              key={tx.referenceNo}
              className="border-b hover:bg-blue-50/30 transition"
            >
              <td className="p-3">{tx.merchantId}</td>
              <td className="p-3">{tx.referenceNo}</td>
              <td className="p-3">{tx.partnerReferenceNo}</td>
              <td className="p-3">{formatCurrency(tx.amount, tx.currency)}</td>
              <td
                className={`p-3 font-medium ${
                  tx.status === "SUCCESS"
                    ? "text-green-600"
                    : tx.status === "FAILED"
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                {tx.status}
              </td>
              <td className="p-3">
                {new Date(tx.transactionDate).toLocaleString()}
              </td>
              <td className="p-3">
                {tx.paidDate
                  ? new Date(tx.paidDate).toLocaleString()
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
