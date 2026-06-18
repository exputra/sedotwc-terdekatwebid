import { publicContact, publicWhatsAppUrl } from '@/config/public';

export const siteConfig = {
	name: "SedotWC Terdekat",
	url: "https://www.sedotwc-terdekat.web.id/",
	ogImage: "https://www.sedotwc-terdekat.web.id/og.jpg",
	description:
		"SedotWC Terdekat - Layanan sedot WC profesional, cepat, dan terpercaya 24 jam setiap hari",
	phone: publicContact.primaryPhone,
	phoneHref: publicContact.primaryPhoneHref,
	website: "https://www.sedotwc-terdekat.web.id/",
	address: "Melayani Jabodetabek",
	links: {
		whatsapp: publicWhatsAppUrl,
	},
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
	light: "#ffffff",
	dark: "#0f172a",
};
