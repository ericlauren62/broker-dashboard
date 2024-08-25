import TableThree from '../components/Tables/TableThree';

export default function InvestmentOptions() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">Transactions</h2>
        <button className="bg-primary py-3 px-8 text-white rounded-sm">
          Withdrawal
        </button>
      </div>
      <div className="rounded-sm  mb-4 border border-stroke bg-white px-5 p-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="pt-2 pb-4 px-4">
          <h2 className="font-medium text-black text-lg dark:text-white mb-1">
            Withdrawals
          </h2>
          <p>Withdrawals made by you. A total of 0 withdrawal(s)</p>
        </div>
      </div>
      <TableThree />
    </section>
  );
}
