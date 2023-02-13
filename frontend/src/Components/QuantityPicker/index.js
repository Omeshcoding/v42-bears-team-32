import { MdAdd } from 'react-icons/md';
import { MdHorizontalRule } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import {
  increment,
  removeItem,
  decrement,
} from '../../features/Orders/orderSlice';


export default function QuantityPicker({ id, quantity }) {
  const dispatch = useDispatch();
  // console.log(quantity);
  return (
    <div className="flex items-center gap-4">
      <button

 
        onClick={() => {
          if (quantity === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrement({ id }));
        }}


        className="h-10 w-10 text-2xl text-primary-7 leading-4 rounded-lg bg-primary-0 hover:bg-slate-200"

      >
        -
      </button>
      <span className="text-dark-3 font-semibold">{quantity}</span>
      <button

        onClick={() => dispatch(increment({ id }))}
      

      
        className="h-10 w-10 text-2xl text-white leading-4 rounded-lg bg-primary-7 hover:bg-primary-5"

      >
        +
      </button>
    </div>
  );
}
