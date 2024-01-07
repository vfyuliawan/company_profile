/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/<company_profile>' : '',

}

module.exports = nextConfig
