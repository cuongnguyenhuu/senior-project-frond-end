export class Time{
    private startTime:number;
    private endTime:number;
    private status:string;
    private dayOfWeek:number;



	constructor($startTime: number, $endTime: number, $status: string, $dayOfWeek: number) {
		this.startTime = $startTime;
		this.endTime = $endTime;
		this.status = $status;
		this.dayOfWeek = $dayOfWeek;
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
     * Getter $status
     * @return {string}
     */
	public get $status(): string {
		return this.status;
	}

    /**
     * Getter $dayOfWeek
     * @return {number}
     */
	public get $dayOfWeek(): number {
		return this.dayOfWeek;
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
     * Setter $status
     * @param {string} value
     */
	public set $status(value: string) {
		this.status = value;
	}

    /**
     * Setter $dayOfWeek
     * @param {number} value
     */
	public set $dayOfWeek(value: number) {
		this.dayOfWeek = value;
	}
	
	
}