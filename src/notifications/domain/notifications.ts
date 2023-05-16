export type Notification = {
	id: string
	type: string
	data: Transaction | Account
}

type Transaction = {
	"id": string
	"amount": number
	"from": string
	"to": string
	"unit": string
}

type Account = {
	"id": string
	"currency": string
	"name": string
}

export interface Notifications {
	getBySearchedText: (searchedText: string) => Promise<Notification[]>
}

