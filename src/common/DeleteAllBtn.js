import { useDispatch } from 'react-redux';
import { deleteAllBooks as deleteAllBooksAction } from '../features/library/librarySlice';

const DeleteAllBtn = () => {
    const dispatch = useDispatch();
  return (
    <div className='d-flex justify-content-center mb-5'>
        <button
            className='btn btn-danger mt-4 mb-5'
            onClick={() => dispatch(deleteAllBooksAction())}
        >Effacer tous les livres</button>
    </div>
  )
}

export default DeleteAllBtn