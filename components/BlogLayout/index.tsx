import Meta from "@/components/Meta";
import {
    Container,
    Content,
    PageContainer,
} from "@/components/BlogLayout/styles";

type BlogLayoutProps = {
    children?: React.ReactNode;
    [key: string]: any;
};

export default function BlogLayout({ children, props }: BlogLayoutProps) {
    return (
        <Container className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <Meta title={props?.title} />
            <Content className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Press
                    </h2>
                    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                        <p className="text-xl text-gray-500">
                            Get weekly articles in your inbox on how to grow
                            your business.
                        </p>
                    </div>
                </div>
                <PageContainer className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {children}
                </PageContainer>
            </Content>
        </Container>
    );
}
