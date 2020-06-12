import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <div key={id}>
            <img src={urls.small} alt={description} />
        </div>
    })
    return (<div>{images}</div>);
}

export default ImageList;