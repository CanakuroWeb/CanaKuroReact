import axios from "axios";
import {useState} from "react";

type testJSON = { id: number, title: string }

function AxiosTest() {
    const getData = async () => {
        let response = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts")
        return response.data
    }
    const [data, setData] = useState<testJSON[]>([])

    getData().then((response: testJSON[]) => {
        setData(response)
    }).catch((e) => {
        alert("err!")
    })

    return (
        <ul>
            {data.map((d) => {
                return (
                    <li key={d.id}>
                        {d.id}: {d.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default AxiosTest