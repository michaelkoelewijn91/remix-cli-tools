import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import client from '~/apollo-client';
import { query} from './query.server'

export const links: LinksFunction = () => {
	return [
	];
}

export const meta: MetaFunction = () => {
    return {
      title: "RouteName",
      description: "",
    };
  };

export const loader:LoaderFunction = async () => {
    const { data } = await client.query({
        query: query,
        variables: {
            code: 'NL'
        }
    });
    return json(data)
}

export default function Index() {
    const data = useLoaderData()
    return (
        <div>
            <h1>Page RouteName</h1>
        </div>
    );
}
