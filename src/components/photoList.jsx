/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function PhotoList({ photos }) {

  return (
    photos.length < 1 ? <div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">Gösterilecek fotoğraf bulunmuyor.</div> :
      <div>
        <div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm"><span>Fotoğraflar</span></div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

          {
            photos.map((photo, index) => (
              <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                <img src={photo} alt={`Photo ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
              </div>
            ))
          }
        </div>
      </div>
  );
}
