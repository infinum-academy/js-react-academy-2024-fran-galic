import { fetcher } from "@/fetchers/fetcher";
import { ILoginData, IRegisterData } from "@/typings/Auth.type";


export async function registerAccount(url: string, { arg }: { arg: IRegisterData }) {
	return fetcher(url, {
		method: 'POST',
		body: JSON.stringify(arg),
	});
}

export async function loginUser(url: string, { arg }: { arg: ILoginData }) {
	return fetcher(url, {
		method: 'POST',
		body: JSON.stringify(arg),
	});
}