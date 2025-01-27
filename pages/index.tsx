import { PostList } from "@/components/PostList";

function Home() {
  return (
    <>
      <main>
        <div className="min-h-screen bg-[#EA5959] flex items-center justify-center">
          <PostList />
        </div>
      </main>
    </>
  );
}
export default Home;
