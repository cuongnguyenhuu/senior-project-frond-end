import { UserFirebase } from './userFirebase';

export class Message{
    public sender:String;
    public image:String;
    public text_message:String;
    public create_at:number;


	constructor($sender: String, $image: String, $text_message: String) {
		this.sender = $sender;
		this.image = $image;
		this.text_message = $text_message;
		this.create_at = new Date().getTime();
	}



    /**
     * Getter $sender
     * @return {String}
     */
	public get $sender(): String {
		return this.sender;
	}

    /**
     * Getter $image
     * @return {String}
     */
	public get $image(): String {
		return this.image;
	}

    /**
     * Getter $text_message
     * @return {String}
     */
	public get $text_message(): String {
		return this.text_message;
	}

    /**
     * Getter $create_at
     * @return {number}
     */
	public get $create_at(): number {
		return this.create_at;
	}

    /**
     * Setter $sender
     * @param {String} value
     */
	public set $sender(value: String) {
		this.sender = value;
	}

    /**
     * Setter $image
     * @param {String} value
     */
	public set $image(value: String) {
		this.image = value;
	}

    /**
     * Setter $text_message
     * @param {String} value
     */
	public set $text_message(value: String) {
		this.text_message = value;
	}

    /**
     * Setter $create_at
     * @param {number} value
     */
	public set $create_at(value: number) {
		this.create_at = value;
	}
   

}