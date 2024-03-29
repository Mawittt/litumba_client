
import Loader from "../../assets/Loader";
import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";
import useHomeComponent from "./useHomeComponent";



export default function HomeComponent() {
    const { posts, isLoading, isError, isSuccess, loadContent, isFetchingNextPage, isMore } = useHomeComponent()
    return (
        <div className="w-full gap-[30px] flex flex-col px-4 py-6 px-2 overflow-scroll h-full" id="postsContainer" onScroll={loadContent} >
            <AddPost />
            {
                isSuccess && posts.map((post, index) => <Post key={index} {...post} />)
            }
            {
                isLoading && <div className="flex flex-col items-center">
                    <Loader />
                    <p>the posts are loading</p>
                </div>
            }
            {
                isFetchingNextPage && <div className="flex flex-col items-center">
                    <Loader />
                    <p>More content is loading</p>
                </div>
            }
            {
                !isMore && isSuccess && !isFetchingNextPage && <div className="flex flex-col items-center">
                    <p className="bg-pink-200 w-full p-4 flex justify-center items-center rounded-lg text-red-500 font-bold">No more content</p>
                </div>
            }
            {
                isError && <div className="flex flex-col items-center">Sorry there was an error</div>
            }
        </div>
    )
}