import ContentLoader from 'react-content-loader'

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={1170}
        height={500}
        viewBox='0 0 1200 500'
        backgroundColor='#f3f3f3'
        foregroundColor='#c2c2c2'
    >
        <rect x='0' y='0' rx='0' ry='0' width='1200' height='80' />
        <rect x='55' y='110' rx='0' ry='0' width='299' height='349' />
        <rect x='635' y='110' rx='0' ry='0' width='70' height='30' />
        <rect x='1000' y='110' rx='0' ry='0' width='165' height='30' />
        <rect x='635' y='150' rx='0' ry='0' width='531' height='40' />
        <rect x='635' y='200' rx='0' ry='0' width='531' height='40' />
        <rect x='635' y='250' rx='0' ry='0' width='531' height='40' />
        <rect x='635' y='300' rx='0' ry='0' width='531' height='40' />
        <rect x='835' y='360' rx='0' ry='0' width='130' height='35' />
        <rect x='665' y='405' rx='0' ry='0' width='225' height='60' />
        <rect x='910' y='405' rx='0' ry='0' width='225' height='60' />
    </ContentLoader>
)
export default MyLoader
