export class Time{
    private startTime:number;
    private endTime:number;
    private type:string;


	constructor($startTime: number, $endTime: number, $type: string) {
		this.startTime = $startTime;
		this.endTime = $endTime;
		this.type = $type;
	}


    /**
     * Getter $startTime
     * @return {number}
     */
	public get $startTime(): number {
		return this.startTime;
	}

    /**
     * Getter $endTime
     * @return {number}
     */
	public get $endTime(): number {
		return this.endTime;
	}

    /**
     * Getter $type
     * @return {string}
     */
	public get $type(): string {
		return this.type;
	}

    /**
     * Setter $startTime
     * @param {number} value
     */
	public set $startTime(value: number) {
		this.startTime = value;
	}

    /**
     * Setter $endTime
     * @param {number} value
     */
	public set $endTime(value: number) {
		this.endTime = value;
	}

    /**
     * Setter $type
     * @param {string} value
     */
	public set $type(value: string) {
		this.type = value;
	}

}