import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Jumbotron from '../../components/Jumbotron'
import { 
    addBook as addBookAction, 
    getLocalStorageData as getLocalStorageDataAction 
} from '../library/librarySlice'
import List from '../../common/List';
import DeleteAllBtn from '../../common/DeleteAllBtn';

const LibraryView = () => {

    const libraryData = useSelector(state => state.library.books);
    const dispatch = useDispatch();

    const initialState = {
        title: '',
        author: ''
    }

    const [newData, setNewData] = useState(initialState);

    useEffect(() => {
        if (localStorage.getItem('bookData')) {
            dispatch(getLocalStorageDataAction())
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBookAction(newData));
        setNewData(initialState)
    }

  return (
    <>
        <Jumbotron subtitle="Ajouter un livre à votre bibiliothèque">
            <form 
               onSubmit={handleSubmit}
            >
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 m-2'>
                            <input 
                                value={newData.title}
                                type="text"
                                className="form-control"
                                placeholder="Titre"
                                required
                                onChange={ e => setNewData({...newData, title: e.target.value}) }
                            />
                        </div>    

                        <div className='col-lg-4 m-2'>
                            <input 
                                value={newData.author}
                                type="text"
                                className="form-control"
                                placeholder="Auteur"
                                required
                                onChange={ e => setNewData({...newData, author: e.target.value}) }
                            />
                        </div>
                    </div>
                    <div className='justify-content-center mt-2'>
                        <button className="btn btn-warning">Ajouter un livre</button>
                    </div>
                </div>
            </form>
        </Jumbotron>

        <main className='container'>
            <List data={libraryData} />

            { libraryData.length > 0 && <DeleteAllBtn /> }
        </main>
    </>
  )
}

export default LibraryView