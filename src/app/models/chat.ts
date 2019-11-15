import { Message } from './message';

export class Chat{
    private member1:any;
    private member2:any;
    private members:String[];

	constructor(member1:String, member2: String) {
		this.member1 = {
            "username":member1,
            "is_typing":false,
            "is_read": true,
        }
        this.member2 = {
            "username":member2,
            "is_typing":false,
            "is_read": false,
        }
		this.members = [member1,member2];
	}




    /**
     * Getter $member1
     * @return {any}
     */
	public get $member1(): any {
		return this.member1;
	}

    /**
     * Getter $member2
     * @return {any}
     */
	public get $member2(): any {
		return this.member2;
	}

    /**
     * Getter $members
     * @return {String[]}
     */
	public get $members(): String[] {
		return this.members;
	}

    /**
     * Setter $member1
     * @param {any} value
     */
	public set $member1(value: any) {
		this.member1 = value;
	}

    /**
     * Setter $member2
     * @param {any} value
     */
	public set $member2(value: any) {
		this.member2 = value;
	}

    /**
     * Setter $members
     * @param {String[]} value
     */
	public set $members(value: String[]) {
		this.members = value;
	}


    
    

}