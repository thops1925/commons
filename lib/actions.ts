import { GraphQLClient } from "graphql-request";
import { getUserQuery } from "@/graphql"


const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXTAUTH_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl);



const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables)

    } catch (error) {
        throw error
    }
}


export const getUser = (email: string) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getUserQuery, { email });
};