import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context'
import { setSearchValue } from '../../../redux/actionCreators/bookActionCreator'
import { getMe } from '../../../redux/actionCreators/userActionCreators'
import { IStore } from '../../../redux/types'
import { CardBookMini } from '../../CardBookMini'
import { FormLogin } from '../../FormLogin'
import ArrowBack from '../../Icons/ArrowBack'
import SubscribeMail from '../../SubscribeMail'
import '../MainPage/MainPage.scss'

export default function FavoritesPage () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const { theme } = React.useContext(ThemeContext)
    const { user } = useSelector((state: IStore) => state.users)

    //Render data FAVORITES
    const { books } = useSelector((state: IStore) => state.books)
    const { favorites } = useSelector((state: IStore) => state.books)
    const dataFavorites = books.filter(({ isbn13 }) => favorites.includes(isbn13))

    React.useEffect(() => {
        dispatch(getMe())
        dispatch(setSearchValue(''))
    }, [])

    if(user == null) {
        return (<FormLogin/>)
    } else {
        return (
            <main className={`main main--${theme}`}>
                <div className='wrapper'>
                    <div className='main__body'>
                        <div className='main__button-back' onClick={goBack}>
                            <ArrowBack />
                        </div>
                        <h2 className='main__title'>Favorites</h2>
                        {!(favorites.length) ?
                            <div className='main__null'><p>{'You dont have any favorite book :('}</p><p>Take advantage of the <Link to={'/Book-Store'}>new coolection</Link> of book.</p></div>
                            : <div className='main__list'>
                                {dataFavorites.map(({ title, subtitle, isbn13, price, image }) => <CardBookMini key={isbn13} title={title} subtitle={subtitle} isbn13={isbn13} price={price} image={image}/>)}
                            </div>
                        }
                        <SubscribeMail/>
                    </div>
                </div>
            </main>
        )
    }
}