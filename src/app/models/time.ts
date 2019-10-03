export class Time {
    private id: number;
    private startTime: number;
    private endTime: number;
    private status: string;
    private dayOfWeek: number;


	constructor($id: number, $startTime: number, $endTime: number, $status: string, $dayOfWeek: number) {
		this.id = $id;
		this.startTime = $startTime;
		this.endTime = $endTime;
		this.status = $status;
		this.dayOfWeek = $dayOfWeek;
	}

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
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
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
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