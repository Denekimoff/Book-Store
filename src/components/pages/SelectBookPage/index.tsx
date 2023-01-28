import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { activeBookId } from '../../../redux/actionCreators/bookActionCreator'
import { CardBook } from '../../CardBook'
import { ArrowBack } from '../../Icons/ArrowBack'
import { SubscribeMail } from '../../SubscribeMail'
import { Tabs } from '../../Tabs'

export const SelectBookPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = React.useState(true)
    const { isbn13 } = useParams()
    React.useEffect(() => {
        //@ts-ignore
        isbn13 && dispatch(activeBookId(isbn13, setIsLoading, navigate))
    }, [isbn13])

    return (
        <div className='wrapper'>
            <Link to={'/Book-Store'}><ArrowBack/></Link>
            {isLoading ? <div>LOADING!</div> : <CardBook/>}
            <Tabs/>
            <SubscribeMail/>
        </div>
    )
}
