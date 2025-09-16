import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    outputFileTracingRoot: path.join(__dirname),
};

export default withNextIntl(nextConfig);
