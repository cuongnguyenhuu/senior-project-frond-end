export class Schedule{

    private dayOfTheWeek:number;
    private timePerAppointment:number;
    private time_period:string[];


	constructor($dayOfTheWeek: number, $timePerAppointment: number, $time_period: string[]) {
		this.dayOfTheWeek = $dayOfTheWeek;
		this.timePerAppointment = $timePerAppointment;
		this.time_period = $time_period;
	}
    

    /**
     * Getter $dayOfTheWeek
     * @return {number}
     */
	public get $dayOfTheWeek(): number {
		return this.dayOfTheWeek;
	}

    /**
     * Getter $timePerAppointment
     * @return {number}
     */
	public get $timePerAppointment(): number {
		return this.timePerAppointment;
	}

    /**
     * Getter $time_period
     * @return {string[]}
     */
	public get $time_period(): string[] {
		return this.time_period;
	}

    /**
     * Setter $dayOfTheWeek
     * @param {number} value
     */
	public set $dayOfTheWeek(value: number) {
		this.dayOfTheWeek = value;
	}

    /**
     * Setter $timePerAppointment
     * @param {number} value
     */
	public set $timePerAppointment(value: number) {
		this.timePerAppointment = value;
	}

    /**
     * Setter $time_period
     * @param {string[]} value
     */
	public set $time_period(value: string[]) {
		this.time_period = value;
	}


}