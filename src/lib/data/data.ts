import { UserModel } from '$lib/models/classes';

export const userData: UserModel[] = [
	{
		name: 'วรกฤช',
		job: 'นรค.',
		id: '510818',
	},
	{
		name: 'ฟิวส์',
		job: 'ดูแล',
		id: 'admin',
	},
		{
		name: 'ลี่',
		job: 'ออกแบบ',
		id: 'design',
	},
	
].map((value) => new UserModel().deserialize(value));
