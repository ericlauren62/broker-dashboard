import InvestmentCard from '../components/InvestmentCard';
import InvestmentOptionCard from '../components/InvestmentOptionCard';
import TransactionCard from '../components/TransactionCard';
import WalletCard from '../components/WalletCard';

function Account() {
  return (
    <section>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-4">
          <WalletCard />
        </div>
        <div className="col-span-5 h-full">
          <InvestmentCard />
        </div>
        <div className="col-span-3">
          <InvestmentOptionCard />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="">
          <TransactionCard />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </section>
  );
}

export default Account;

const Card2 = () => {
  return (
    <div className="rounded-sm grid gap-y-2 border bg-white border-stroke py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className="font-semibold mb-1 text-primary">Confirmed Deposits</h2>
      <strong>$0.00</strong>
      <p>
        <span>0</span> Number of Deposits
      </p>
    </div>
  );
};
