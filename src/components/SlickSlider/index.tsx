import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { CardBookMini } from '../CardBookMini'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../CardBookMini/CardBookMini.scss'
import './SlickSlider.scss'

export const SlickSlider = () => {
    const { books } = useSelector((state: IStore) => state.books)
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
        ],
    }
    return (
        <section className='myslider'>
            <div className='myslider__top'>
                <h3 className='myslider__title'>Similar book</h3>
            </div>
            <div className='myslider__body'>
                <Slider {...settings}>
                    {books.map(({ title, subtitle, isbn13, price, image }) => <CardBookMini key={isbn13} variant='slider' title={title} subtitle={subtitle} isbn13={isbn13} price={price} image={image}/>)}
                </Slider>
            </div>
        </section>
    )
}
