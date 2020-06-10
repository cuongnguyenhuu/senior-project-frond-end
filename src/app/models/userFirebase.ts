export class UserFirebase{
    public username:String;
    public avatar:String;


	constructor($username: String, $avatar: String) {
		this.username = $username;
		this.avatar = $avatar;
	}


    /**
     * Getter $username
     * @return {String}
     */
	public get $username(): String {
		return this.username;
	}

    /**
     * Getter $avatar
     * @return {String}
     */
	public get $avatar(): String {
		return this.avatar;
	}

    /**
     * Setter $username
     * @param {String} value
     */
	public set $username(value: String) {
		this.username = value;
	}

    /**
     * Setter $avatar
     * @param {String} value
     */
	public set $avatar(value: String) {
		this.avatar = value;
	}

}