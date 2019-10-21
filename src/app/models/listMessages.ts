export class ListMessages{
    private id:String;
    private username:String;
    private avatar:String;
    private title:String;
    private lastMessage:String;
    private isRead:boolean;
    private isTyping:boolean;
    private isOnline:boolean;


	constructor($id: String, $username: String, $avatar: String, $title: String, $lastMessage: String, $isRead: boolean, $isTyping: boolean, $isOnline: boolean) {
		this.id = $id;
		this.username = $username;
		this.avatar = $avatar;
		this.title = $title;
		this.lastMessage = $lastMessage;
		this.isRead = $isRead;
		this.isTyping = $isTyping;
		this.isOnline = $isOnline;
	}
    

    /**
     * Getter $id
     * @return {String}
     */
	public get $id(): String {
		return this.id;
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
     * Getter $title
     * @return {String}
     */
	public get $title(): String {
		return this.title;
	}

    /**
     * Getter $lastMessage
     * @return {String}
     */
	public get $lastMessage(): String {
		return this.lastMessage;
	}

    /**
     * Getter $isRead
     * @return {boolean}
     */
	public get $isRead(): boolean {
		return this.isRead;
	}

    /**
     * Getter $isTyping
     * @return {boolean}
     */
	public get $isTyping(): boolean {
		return this.isTyping;
	}

    /**
     * Getter $isOnline
     * @return {boolean}
     */
	public get $isOnline(): boolean {
		return this.isOnline;
	}

    /**
     * Setter $id
     * @param {String} value
     */
	public set $id(value: String) {
		this.id = value;
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

    /**
     * Setter $title
     * @param {String} value
     */
	public set $title(value: String) {
		this.title = value;
	}

    /**
     * Setter $lastMessage
     * @param {String} value
     */
	public set $lastMessage(value: String) {
		this.lastMessage = value;
	}

    /**
     * Setter $isRead
     * @param {boolean} value
     */
	public set $isRead(value: boolean) {
		this.isRead = value;
	}

    /**
     * Setter $isTyping
     * @param {boolean} value
     */
	public set $isTyping(value: boolean) {
		this.isTyping = value;
	}

    /**
     * Setter $isOnline
     * @param {boolean} value
     */
	public set $isOnline(value: boolean) {
		this.isOnline = value;
	}
    
}