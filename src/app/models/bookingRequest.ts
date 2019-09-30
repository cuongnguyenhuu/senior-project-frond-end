import { Time } from './time';

export class BookingRequest {
    private userDiseaseId: number;
    private timeBooking:Time;


	constructor($userDiseaseId: number, $timeBooking: Time) {
		this.userDiseaseId = $userDiseaseId;
		this.timeBooking = $timeBooking;
	}

    /**
     * Getter $userDiseaseId
     * @return {number}
     */
	public get $userDiseaseId(): number {
		return this.userDiseaseId;
	}

    /**
     * Getter $timeBooking
     * @return {Time}
     */
	public get $timeBooking(): Time {
		return this.timeBooking;
	}

    /**
     * Setter $userDiseaseId
     * @param {number} value
     */
	public set $userDiseaseId(value: number) {
		this.userDiseaseId = value;
	}

    /**
     * Setter $timeBooking
     * @param {Time} value
     */
	public set $timeBooking(value: Time) {
		this.timeBooking = value;
	}


}