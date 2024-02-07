import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonFile = ({ ...rest }) => (
  <ContentLoader height="400" width="800" viewBox="0 0 265 230" {...rest}>
    <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
    <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
    <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
  </ContentLoader>
)

export default SkeletonFile
