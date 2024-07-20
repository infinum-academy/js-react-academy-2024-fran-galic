import { fetcher } from "@/fetchers/fetcher";
import { IRegisterData } from "@/typings/Auth.type";


export async function registerAccount(url: string, { arg }: { arg: IRegisterData }) {
	return fetcher(url, {
		method: 'POST',
		body: JSON.stringify(arg),
	});
}