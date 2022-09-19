module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        reactStrictMode: true,
        swcMinify: true,
        poweredByHeader: false,
        compiler: {
            styledComponents: true,
        },
    };

    return nextConfig;
};
