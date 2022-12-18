import AssetTopController from "../../components/AssetTopController/AssetTopController";
import Job from "../../components/Job/Job";
import useJobs from "../../pageUtils/useJobs";





export default function Jobs(){
    const {jobs , searchJobs} = useJobs()
    return (
        <div className="py-4 px-2 ">
            <AssetTopController searchFunction={searchJobs} />
            <div className="">
                {jobs.map(job=> <Job {...job} key={job._id}/>)}
            </div>
        </div>
    )
}