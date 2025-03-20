import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateActiveImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    updateActiveImage(id)
  }

  const activeThumbnailClass = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className={`thumbnail-button ${activeThumbnailClass}`}
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
