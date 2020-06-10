import { Time } from './time';

export class Schedule{

    public dayOfTheWeek:number;
    public time:Time[];



	constructor($dayOfTheWeek: number, $time: Time[]) {
		this.dayOfTheWeek = $dayOfTheWeek;
		this.time = $time;
	}
    

    /**
     * Getter $dayOfTheWeek
     * @return {number}
     */
	public get $dayOfTheWeek(): number {
		return this.dayOfTheWeek;
	}

    /**
     * Getter $time
     * @return {Time[]}
     */
	public get $time(): Time[] {
		return this.time;
	}

    /**
     * Setter $dayOfTheWeek
     * @param {number} value
     */
	public set $dayOfTheWeek(value: number) {
		this.dayOfTheWeek = value;
	}

    /**
     * Setter $time
     * @param {Time[]} value
     */
	public set $time(value: Time[]) {
		this.time = value;
	}
    


}