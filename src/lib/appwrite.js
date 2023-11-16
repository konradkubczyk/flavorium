import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6556209062be5c6ce4b0');

export const account = new Account(client);
export { ID } from 'appwrite';
