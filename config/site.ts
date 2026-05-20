import { publicContact, publicWhatsAppUrl } from '@/config/public';

export const siteConfig = {
	name: "Sedot WC Dua Sodara",
	url: "https://www.sedotwcduasodara.web.id/",
	ogImage: "https://www.sedotwcduasodara.web.id/og.jpg",
	description:
		"Sedot WC Dua Sodara - Layanan sedot WC profesional, cepat, dan terpercaya 24 jam setiap hari di Pontianak",
	phone: publicContact.primaryPhone,
	phoneSecondary: publicContact.secondaryPhone,
	website: "https://www.sedotwcduasodara.web.id/",
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
