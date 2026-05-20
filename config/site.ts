const primaryPhone = process.env.NEXT_PUBLIC_PHONE_PRIMARY || "6285691135601";

export const siteConfig = {
	name: "Sedot WC Dua Sodara",
	url: "https://www.sedotwcduasodara.web.id/",
	ogImage: "https://www.sedotwcduasodara.web.id/og.jpg",
	description:
		"Sedot WC Dua Sodara - Layanan sedot WC profesional, cepat, dan terpercaya 24 jam setiap hari di Pontianak",
	phone: process.env.NEXT_PUBLIC_PHONE_PRIMARY || "6285691135601",
	phoneSecondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "085691135601",
	website: "https://www.sedotwcduasodara.web.id/",
	address: "Melayani Jabodetabek",
	links: {
		whatsapp: `https://api.whatsapp.com/send?phone=${primaryPhone}`,
	},
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
	light: "#ffffff",
	dark: "#0f172a",
};
