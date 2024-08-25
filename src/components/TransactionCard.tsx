import Card from './Card';

function TransactionCard() {
  return (
    <Card>
      <h3 className="font-semibold text-primary dark:text-white mb-6">
        Transaction Analytics
      </h3>
      <div className="grid gap-y-6">
        <div>
          <h4 className="font-semibold mb-1">Deposit</h4>
          <div>
            <span>Total </span> <span>= </span>
            <span> $0.00</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Withdrawal</h4>
          <div>
            <span>Total </span> <span>= </span>
            <span> $0.00</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Referral Bonus</h4>
          <div>
            <span>Total </span> <span>= </span>
            <span> $0.00</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Bonus</h4>
          <div>
            <span>Total </span> <span>= </span>
            <span> $0.00</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TransactionCard;
