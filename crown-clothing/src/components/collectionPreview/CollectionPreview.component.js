import React from "react"

import CollectionItem from "../../components/collectionItem/CollectionItem.component"
import "./collectionPreview.style.scss"


const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((elm, idx) => idx < 4) //limiting to the first 4 elements
                        .map(({ id, ...otherItemProps }) => (
                            <CollectionItem key={id} {...otherItemProps} />
                        ))
                }

            </div>
        </div>
    )
}

export default CollectionPreview