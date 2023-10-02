import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { fetchBooks as fetchBooksAsyncAction } from '../fetchBooks/fetchBooksSlice';
import Spinner from '../../common/Spinner';
import Alerts from '../../common/Alerts';
import Card from '../../common/Card';

const FetchBooksView = () => {

  const dispatch = useDispatch();
  const booksSliceData = useSelector( state => state.search );
  

  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchBooksAsyncAction(title));
  }

  return (
    <>
      <Jumbotron
        subtitle="Indiquez le sujet du livre à rechercher sur Google"
      >
        <form
          className='form-inline justify-content-center'
          onSubmit={handleSubmit}
        >
          <div className='form-group'>
            <input 
                value={title}
                type="text"
                className="form-control"
                placeholder="Quoi Rechercher ?"
                required
                onChange={ e => setTitle(e.target.value)}
            />
          </div>
            
          <div className='form-group'>
             <button className='btn btn-warning ml-3'>Rechercher</button>
          </div>
            
        </form>
      </Jumbotron>

      <main className='container mb-5'>
        <div id='accordion'>
          {
            booksSliceData.isLoading ? <Spinner />
            : booksSliceData.error !== '' ? <Alerts>{booksSliceData.error}</Alerts>
            : <Card booksArray={booksSliceData.fetchedBooks} />
          }
        </div>
      </main>
    </>
  )
}

export default FetchBooksView