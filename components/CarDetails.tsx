import { CarProps } from '../types';

interface CarDetailsProps {
  isOpen: false;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};
export default CarDetails;
