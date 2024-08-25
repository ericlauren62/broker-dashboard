import { GiMineTruck } from 'react-icons/gi';
import Card from './Card';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function InvestmentOptionCard() {
  return (
    <Card classname="bg-primary text-white grid gap-y-3 text-center">
      <div className="flex items-center justify-center text-2xl font-bold text-primary bg-meta-2 h-11.5 w-11.5 mx-auto rounded-full">
        <GiMineTruck />
      </div>
      <h2 className="font-bold text-lg">Oil and Gas Option</h2>
      <strong className="text-sm">min: $1000</strong>
      <strong className="text-sm">max: unlimited</strong>
      <strong className="text-sm">RIO: 23%</strong>
      <strong className="text-sm mb-2">Capital Return: Yes</strong>
      <Link
        to="/dashboard/investment-option"
        className="flex items-center justify-center py-2 gap-x-2 bg-white text-primary"
      >
        View More <IoIosArrowRoundForward />
      </Link>
    </Card>
  );
}
