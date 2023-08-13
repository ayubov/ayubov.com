import { v2 as cloudinary, type ResourceApiResponse } from 'cloudinary';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

dayjs.extend(customParseFormat);

cloudinary.config({
	cloud_name: env.PRIVATE_CLOUDINARY_CLOUD_NAME,
	api_key: env.PRIVATE_CLOUDINARY_API_KEY,
	api_secret: env.PRIVATE_CLOUDINARY_API_SECRET
});

type CloudaryResourceContext = {
	date: string;
	description: string;
};

/** @satisfies {import('./$types').PageServerLoad} */
export const load = (async () => {
	const res: ResourceApiResponse = await cloudinary.search
		.expression('resource_type:image AND folder:feed')
		.with_field('context')
		.max_results(1000)
		.execute();
	console.log('res.resources: ', res.resources);
	const posts = res.resources
		.map(({ secure_url, context }) => ({
			image: secure_url,
			content: (context as CloudaryResourceContext).description,
			date: (context as CloudaryResourceContext).date ?? ''
		}))
		.sort((a, b) => (dayjs(a.date, 'DD.MM.YYYY').isBefore(dayjs(b.date, 'DD.MM.YYYY')) ? 1 : -1));

	return { posts };
}) satisfies PageServerLoad;
