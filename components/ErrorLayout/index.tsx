import Link from "next/link";
import Meta from "@/components/Meta";
import {
    Container,
    Content,
    PageContainer,
} from "@/components/ErrorLayout/styles";

type ErrorLayoutProps = {
    children?: React.ReactNode;
    [key: string]: any;
};

export default function ErrorLayout({ children, props }: ErrorLayoutProps) {
    return (
        <Container className="flex flex-col justify-center min-h-full pt-16 pb-12 bg-white">
            <Meta title={props?.title} />
            <Content className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-center flex-shrink-0">
                    <Link href="/" className="inline-flex" passHref>
                        <img
                            className="w-auto h-12"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                            alt="TailwindUI"
                        />
                    </Link>
                </div>
                <PageContainer className="py-16">{children}</PageContainer>
            </Content>
        </Container>
    );
}
