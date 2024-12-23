import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
}

export type Category = {
    name: string;
}   

export type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMD_SERVICE_DOMAIN is required");
}

if (!process.env.MICRPCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY as string,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listDate = await client
    .getList<Member>({
        endpoint: "members",
        queries,
    });
    return listDate;
}