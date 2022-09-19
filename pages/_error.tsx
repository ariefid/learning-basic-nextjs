import type { ReactElement } from "react";
import Link from "next/link";
import type { NextPageWithLayout } from "@/pages/_app";
import ErrorLayout from "@/components/ErrorLayout";

type ErrorProps = {
    title?: string;
    statusCode?: any;
};

const Error: NextPageWithLayout<ErrorProps> = ({ statusCode }) => {
    return (
        <div className="text-center">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Error.
            </h1>
            <p className="mt-2 text-base text-gray-500">
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : "An error occurred on client"}
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

Error.getLayout = function getLayout(children: ReactElement) {
    return (
        <>
            <ErrorLayout props={children?.props}>{children}</ErrorLayout>
        </>
    );
};

Error.getInitialProps = async ({ res, err }: any) => {
    const statusCode = res ? res?.statusCode : err ? err?.statusCode : 404;
    const title = `Error ${statusCode}`;
    return { statusCode, title };
};

export default Error;
