import { MyJobProps } from "../../types/types"
import MyJob from "../MyJob/MyJob"
import useMyJobs from "./useMyJobs"



export default function MyJobs(props: { jobs: MyJobProps[] }) {
    const { jobs } = useMyJobs(props)
    return (
        <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg bg-white">
            <h3 className="font-bold">My Jobs</h3>
            {jobs.map((job, index) => <MyJob {...job} key={index} />)}
        </div>
    )
} 