import MyJob from "../MyJob/MyJob"
import useMyJobs from "./useMyJobs"



export default function MyJobs(){
    const {jobs} = useMyJobs()
return (
    <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg">
        <h3 className="font-bold">My Jobs</h3>
        {jobs.map((job,index) =><MyJob {...job}  key={index}/>    )}
    </div>
)
} 