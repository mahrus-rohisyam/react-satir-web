import { useEffect, useState } from "react";

function useBanHome() {
  const [content, setContent] = useState<any>();
  const [contents, setContents] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        `${process.env.REACT_APP_API_URL}/gallery-banner-homepages?populate=*`,
        {
          method: "GET",
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
            "Content-Type": "application/json",
          },
        }
      ),
      fetch(`${process.env.REACT_APP_API_URL}/homepage?populate=*`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then(([galleryHome, HomePage]) => {
        setContent(HomePage.data);
        setContents(galleryHome.data);
        setTimeout(() => setLoading(false), 4000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => setLoading(false), 4000);
      });
  }, []);

  return {
    content,
    contents,
    loading,
  };
}

export default useBanHome;
