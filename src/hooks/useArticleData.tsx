import { useEffect, useState } from "react";

function useArticleData() {
  const [content, setContent] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/articel-cards?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data.data);
        setTimeout(() => setLoading(false), 4000);
      });
  }, []);
  console.log(content);

  return {
    content,
    loading,
  };
}

export default useArticleData;
