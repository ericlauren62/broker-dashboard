import TableThree from '../components/Tables/TableThree';

export default function EndedInvestment() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">Investments</h2>
      </div>
      <div className="rounded-sm  mb-4 border border-stroke bg-white px-5 p-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="pt-2 pb-4 px-4">
          <h2 className="font-medium text-black text-lg dark:text-white mb-1">
            Elasped Investments
          </h2>
          <p>Your already elasped investment(s). A total of 0 investment(s)</p>
        </div>
      </div>
      <TableThree />
    </section>
  );
}
