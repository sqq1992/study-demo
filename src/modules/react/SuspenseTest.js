import React, {Suspense, useState, useEffect} from 'react';


function useSWR() {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // fetcher(url)
        //     .then(result => {
        //         setData(result);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });

        setTimeout(() => {
            setData({
                name: "sun",
                age: 1992,
                description: 'tiancai'
            });
            setLoading(false);
        }, 3000);

    }, []);

    if (loading) {
        throw Promise.resolve(null);
    } else {
        return { data };
    }

}


function ShowPerson() {
    const {data} = useSWR();

    return(
        <div>
            <h3>name:{data.name}</h3>
            <h3>age:{data.age}</h3>
            <h3>description:{data.description}</h3>
        </div>
    )
}



function SuspenseTest() {

    return (
        <div>
            <h1>SuspenseTest测试</h1>
            <Suspense fallback={(<div>loading</div>)}>
                <ShowPerson />
            </Suspense>
        </div>
    );
}


export default SuspenseTest;
