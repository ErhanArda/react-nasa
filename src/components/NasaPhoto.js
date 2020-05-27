import React, { useState, useEffect } from 'react'

const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=ekgNzPLZcARJBEEnZcDNPyvmx2cOjujwbtuyqH44`

            )
            const data = await res.json();
            setPhotoData(data)
        }
    }, [])

    if(!photoData) return <div/>

    return (
        <div>
            <img 
            src={photoData.url}
            alt={photoData.title}
            />
        </div>
    )
}

export default NasaPhoto
