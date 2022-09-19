import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type MetaProps = {
    [key: string]: any;
};

export default function Meta({
    type = "article",
    title = "",
    canonical = "",
    prev = "",
    next = "",
    description = "",
    image = "",
}: MetaProps) {
    const [ogUrl, setOgUrl] = useState("");
    const { pathname } = useRouter();

    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    const titleTemplate = title ? `${title} - ${appName}` : appName;

    useEffect(() => {
        const baseUrl = window.location.protocol + "//" + window.location.host;

        setOgUrl(`${baseUrl + pathname}`);
    }, [pathname]);

    return (
        <Head>
            <title>{titleTemplate}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={titleTemplate} />
            <meta property="og:site_name" content={titleTemplate} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={ogUrl} />
            <link rel="canonical" href={canonical} />
            <link rel="prev" href={prev} />
            <link rel="next" href={next} />
        </Head>
    );
}
