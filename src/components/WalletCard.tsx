import Card from './Card';

export default function WalletCard() {
  return (
    <Card>
      <h3 className="font-semibold text-primary dark:text-white mb-6">
        Wallet Balance
      </h3>
      <div className="grid gap-y-6">
        <div>
          <h4 className="font-semibold mb-1">Bitcoin</h4>
          <div>
            <span>$0.00 </span> <span>= </span>
            <span>
              {' '}
              0 <strong> BTC</strong>
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Ethereum</h4>
          <div>
            <span>$0.00 </span> <span>= </span>
            <span>
              {' '}
              0 <strong> ETH</strong>
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">USD Tether</h4>
          <div>
            <span>$0.00 </span> <span>= </span>
            <span>
              {' '}
              0 <strong>USDT</strong>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
