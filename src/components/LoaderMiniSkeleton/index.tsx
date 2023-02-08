import ContentLoader from 'react-content-loader'

const LoaderMiniSkeleton = () => (
    <div className='skelet'>
        <ContentLoader
            speed={2}
            width={230}
            height={300}
            viewBox='0 0 250 400'
            backgroundColor='#f3f3f3'
            foregroundColor='#d4d4d4'>
            <rect x='36' y='131' rx='0' ry='0' width='0' height='2' />
            <rect x='101' y='349' rx='0' ry='0' width='127' height='35' />
            <rect x='0' y='6' rx='0' ry='0' width='230' height='221' />
            <rect x='2' y='349' rx='0' ry='0' width='83' height='35' />
            <rect x='256' y='238' rx='0' ry='0' width='60' height='54' />
            <rect x='0' y='249' rx='0' ry='0' width='233' height='33' />
            <rect x='-9' y='287' rx='0' ry='0' width='240' height='49' />
        </ContentLoader>
    </div>
)
export default LoaderMiniSkeleton
