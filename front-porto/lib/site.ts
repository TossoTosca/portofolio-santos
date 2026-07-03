export function getSiteUrl() {
    const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

    if (configuredUrl) return normalizeUrl(configuredUrl);
    if (vercelUrl) return normalizeUrl(`https://${vercelUrl}`);

    return 'https://portofolio-santos.vercel.app';
}

function normalizeUrl(url: string) {
    const normalized = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    return normalized.replace(/\/$/, '');
}
