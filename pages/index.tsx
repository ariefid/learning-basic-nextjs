import type { ReactElement } from "react";
import useSwr from "swr";
import Link from "next/link";
import type { NextPageWithLayout } from "@/pages/_app";
import BlogLayout from "@/components/BlogLayout";

type HomeProps = {
    title?: string;
};

type Post = any;

const Home: NextPageWithLayout<HomeProps> = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSwr<Post[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts`,
        fetcher
    );

    if (error) return <>Failed to load posts.</>;
    if (!data) return <>Loading...</>;
    if (Object.keys(data).length === 0) return <>Failed to load posts.</>;

    return (
        <>
            {data?.map((post) => (
                <div key={post.id}>
                    <div className="block mt-2">
                        <Link
                            href="/post/[id]"
                            as={`/post/${post.id}`}
                            className="text-xl font-semibold text-gray-900"
                            passHref
                        >
                            {`${post.title}`}
                        </Link>
                        <p className="mt-3 text-base text-gray-500 truncate text-ellipsis">
                            {`${post.body}`}
                        </p>
                    </div>
                    <div className="mt-3">
                        <Link
                            href="/post/[id]"
                            as={`/post/${post.id}`}
                            className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                            passHref
                        >
                            Read full story
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

Home.getLayout = function getLayout(children: ReactElement) {
    return (
        <>
            <BlogLayout props={children?.props}>{children}</BlogLayout>
        </>
    );
};

Home.getInitialProps = async () => {
    const title = "Home";
    return { title };
};

export default Home;
