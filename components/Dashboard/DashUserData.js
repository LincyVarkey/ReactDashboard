import DataCard from "./DataCard";

const DashUserData = () => {

    const dataInfo = [
        {
            key: "posts",
            count: 2390,
            elavation: 4.7
        },
        {
            key: "pages",
            count: 182,
            elavation: 12.4
        },
        {
            key: "comments",
            count: 8147,
            elavation: -3.8
        },
        {
            key: "users",
            count: 2413,
            elavation: 12.4
        },
        {
            key: "subscribers",
            count: 17281,
            elavation: -2.4
        }
    ];

    return (
        <div className="user-data display-flex">
            {
                dataInfo.map((dataItem, index) => {
                    return <DataCard data={dataItem} key={index}/>
                })
            }
        </div>
    )
}

export default DashUserData;