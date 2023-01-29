import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
    <ContentLoader 
        speed={2}
        width={600}
        height={800}
        viewBox='0 0 600 800'
        backgroundColor='#f3f3f3'
        foregroundColor='#d4d4d4'
    >
        <rect x='36' y='131' rx='0' ry='0' width='0' height='2' /> 
        <rect x='32' y='2' rx='0' ry='0' width='524' height='355' /> 
        <rect x='57' y='372' rx='0' ry='0' width='471' height='35' /> 
        <rect x='58' y='413' rx='0' ry='0' width='470' height='36' /> 
        <rect x='59' y='455' rx='0' ry='0' width='470' height='36' /> 
        <rect x='59' y='498' rx='0' ry='0' width='470' height='36' /> 
        <rect x='170' y='565' rx='0' ry='0' width='252' height='57' /> 
        <rect x='170' y='631' rx='0' ry='0' width='252' height='57' />
    </ContentLoader>
)

export default MyLoader