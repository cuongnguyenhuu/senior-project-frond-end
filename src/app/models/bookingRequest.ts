export class BookingRequest {
    private indextime: number;
    private userDiseaseId: number;
    private place: string;
    private timePeriod: string;



	constructor($indextime: number, $userDiseaseId: number, $place: string, $timePeriod: string) {
		this.indextime = $indextime;
		this.userDiseaseId = $userDiseaseId;
		this.place = $place;
		this.timePeriod = $timePeriod;
	}
    

    /**
     * Getter $indextime
     * @return {number}
     */
	public get $indextime(): number {
		return this.indextime;
	}

    /**
     * Getter $userDiseaseId
     * @return {number}
     */
	public get $userDiseaseId(): number {
		return this.userDiseaseId;
	}

    /**
     * Getter $place
     * @return {string}
     */
	public get $place(): string {
		return this.place;
	}

    /**
     * Getter $timePeriod
     * @return {string}
     */
	public get $timePeriod(): string {
		return this.timePeriod;
	}

    /**
     * Setter $indextime
     * @param {number} value
     */
	public set $indextime(value: number) {
		this.indextime = value;
	}

    /**
     * Setter $userDiseaseId
     * @param {number} value
     */
	public set $userDiseaseId(value: number) {
		this.userDiseaseId = value;
	}

    /**
     * Setter $place
     * @param {string} value
     */
	public set $place(value: string) {
		this.place = value;
	}

    /**
     * Setter $timePeriod
     * @param {string} value
     */
	public set $timePeriod(value: string) {
		this.timePeriod = value;
	}



}