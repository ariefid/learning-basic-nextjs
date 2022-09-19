import type { ReactElement } from "react";
import useSwr from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPageWithLayout } from "@/pages/_app";
import BlogLayout from "@/components/BlogLayout";

type PostIdProps = {
    title?: string;
};

type Post = any;

const PostId: NextPageWithLayout<PostIdProps> = () => {
    const router = useRouter();
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error } = useSwr<Post>(
        router?.query?.id
            ? `${process.env.NEXT_PUBLIC_API_BASE}/post/${router?.query?.id}`
            : null,
        fetcher
    );

    if (error) return <>Failed to load post id : {router?.query?.id}.</>;
    if (!data) return <>Loading...</>;
    if (Object.keys(data).length === 0)
        return <>Failed to load post id : {router?.query?.id}.</>;

    return (
        <>
            <div key={data.id}>
                <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                        {`${data.title}`}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {`${data.body}`}
                    </p>
                </div>
                <div className="mt-3">
                    <Link
                        href="/"
                        className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                        passHref
                    >
                        Back
                    </Link>
                </div>
            </div>
        </>
    );
};

PostId.getLayout = function getLayout(children: ReactElement) {
    return (
        <>
            <BlogLayout props={children?.props}>{children}</BlogLayout>
        </>
    );
};

PostId.getInitialProps = async ({ query }) => {
    const title = `Post ID : ${query?.id}`;
    return { title };
};

export default PostId;
