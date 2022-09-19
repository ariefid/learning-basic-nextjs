import type { ReactElement } from "react";
import Link from "next/link";
import type { NextPageWithLayout } from "@/pages/_app";
import ErrorLayout from "@/components/ErrorLayout";

type Custom404Props = {
    title?: string;
};

const Custom404: NextPageWithLayout<Custom404Props> = () => {
    return (
        <div className="text-center">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Error.
            </h1>
            <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
                <Link
                    href="/"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    passHref
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

Custom404.getLayout = function getLayout(children: ReactElement) {
    return (
        <>
            <ErrorLayout props={children?.props}>{children}</ErrorLayout>
        </>
    );
};

export default Custom404;
