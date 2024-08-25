import { Link } from 'react-router-dom';
import Card from './Card';

export default function InvestmentCard() {
  return (
    <Card>
      <h3 className="font-semibold text-primary dark:text-white mb-6">
        Investment Overview
      </h3>
      <div className="flex justify-between">
        <div className="mb-10">
          <div className="mb-8">
            <h3 className="font-medium">Active Portfolio Value</h3>
            <strong>$0.00</strong>
          </div>
          <div>
            <p className="text-xs uppercase">Paid Out Profit</p>
            <strong>$0.00</strong>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h3 className="font-medium">Total Active Portfolio</h3>
            <strong>0</strong>
          </div>
          <div className="mb-4">
            <p className="text-xs uppercase">Accured Profit</p>
            <strong>$0.00</strong>
          </div>
        </div>
      </div>
      <Link
        to="/dashboard/active-investment"
        className="py-2 px-6 bg-primary text-white inline-block mb-3"
      >
        View More
      </Link>
    </Card>
  );
}
