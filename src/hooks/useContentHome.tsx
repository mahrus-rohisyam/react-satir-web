import React, { useEffect, useState } from 'react'

function useContentHome() {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SCRIPTS_URL}/gallery-tentang`)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.data);
                setTimeout(() => setLoading(false), 4000);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(content)

    return {
        content,
        loading
    }
}

export default useContentHome