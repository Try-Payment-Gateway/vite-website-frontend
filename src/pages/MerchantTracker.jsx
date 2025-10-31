import { useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import SearchForm from "../components/SearchForm";
import TransactionTable from "../components/TransactionTable";

export default function MerchantTracker() {
  const [filters, setFilters] = useState({});
  const { data, isLoading, isError, error } = useTransactions(filters);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">
                Merchant Status Tracker
            </h1>

            <SearchForm onSearch={setFilters} />

            {isLoading && (
                <p className="text-center text-blue-600 font-medium py-6 animate-pulse">
                    Memuat data transaksi...
                </p>
            )}

            {isError && (
                <p className="text-center text-red-600 font-medium py-6">
                    {error?.error || "Terjadi kesalahan memuat data"}
                </p>
            )}

            {!isLoading && !isError && data && (
                <TransactionTable data={Array.isArray(data) ? data : [data]} />
            )}
        </div>
    </div>
  );
}
