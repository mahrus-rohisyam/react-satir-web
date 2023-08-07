import { useEffect, useState } from 'react';
import CardComponent from './cardComponent';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const CardPelatihan = () => {
    const [content, setContent] = useState<any>([])
    const [loading, setLoading] = useState(true);
    const url = 'http://localhost:4001/products?category=pelatihan';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
            setTimeout(() => setLoading(false), 4000);
        })
    }, [])
    console.log(content)

    return (
        <>
            <div className='flex flex-wrap justify-center gap-10 mt-20 ml-14'>
                {loading ? (
                    <div className="flex justify-evenly flex-wrap gap-10 mt-[50px]">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-[400px] sm:w-[500px] md:w-[600px] shadow-lg rounded-md">
                                <Skeleton variant="rectangular" width={600} height={180} />
                                <div className="w-full p-6">
                                    <Skeleton variant="text" width={500} height={32} />
                                    <Skeleton variant="text" width={550} height={72} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px]">
                        {content.map((res: any, index: number) => (
                            <CardComponent
                                key={index}
                                title={res.title}
                                price={res.price}
                                body={res.body}
                                image={res.image}
                                slug={res.slug}
                                link='pelatihan'
                            />
                        ))
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default CardPelatihan;