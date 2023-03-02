import Loader from "../../assets/Loader";
import AssetTopController from "../../components/AssetTopController/AssetTopController";
import Job from "../../components/Job/Job";
import useJobs from "../../pageUtils/useJobs";
import { cn } from "../../utils/fn";





export default function Jobs() {
    const { jobs, searchJobs, isError, isLoading, isFetching, openNext, openPrev, canPrev, canNext } = useJobs()
    return (
        <div className="py-6 px-4 ">
            <AssetTopController searchFunction={searchJobs} />
            {!!jobs.length && isFetching ? <div className="flex flex-col items-center my-4"><Loader /></div> : ""}
            <div className="">
                {isLoading ? <div className=" flex flex-col items-center mt-6">
                    <Loader />
                    <p className="mt-2">Loading jobs</p>
                </div> : jobs.map(job => <Job {...job} key={job._id} />)}
            </div>
            {!!jobs.length && <div className="flex justify-center shadow-comp_lg bg-white">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}