import React, { useState, useEffect } from "react";
import Image from 'react-shimmer'
import { Spinner } from 'reactstrap';
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <>
            <NavBar />
            <div className="nasa-photo">
                {photoData.media_type === "image" ? (

                    <Image
                        src={photoData.url}
                        alt={photoData.title}
                        className="photo"
                        fallback={
                            <Spinner style={{
                                display: "flex", alignSelf: "center", justifyContent: "center",
                                margin: "5rem 5rem 5rem 5rem ", width: '4rem', height: '4rem'
                            }} color="warning" />
                        }
                    />
                ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                    )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    );
}