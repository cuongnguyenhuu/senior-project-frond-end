export class PatientUpdateResponse{
    private name :string;
    private email:string;
    private birthday:number;
    private gender:string;
    private phoneNumber:string;
    private country:string;
    private city:string;
    private district:string;
    private ward:string;
    private addressLine:string;
    private historyDisease:string;



	constructor($name: string, $email: string, $birthday: number, $gender: string, $phoneNumber: string, $country: string, $city: string, $district: string, $ward: string, $addressLine: string, $historyDisease: string) {
		this.name = $name;
		this.email = $email;
		this.birthday = $birthday;
		this.gender = $gender;
		this.phoneNumber = $phoneNumber;
		this.country = $country;
		this.city = $city;
		this.district = $district;
		this.ward = $ward;
		this.addressLine = $addressLine;
		this.historyDisease = $historyDisease;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $birthday
     * @return {number}
     */
	public get $birthday(): number {
		return this.birthday;
	}

    /**
     * Getter $gender
     * @return {string}
     */
	public get $gender(): string {
		return this.gender;
	}

    /**
     * Getter $phoneNumber
     * @return {string}
     */
	public get $phoneNumber(): string {
		return this.phoneNumber;
	}

    /**
     * Getter $country
     * @return {string}
     */
	public get $country(): string {
		return this.country;
	}

    /**
     * Getter $city
     * @return {string}
     */
	public get $city(): string {
		return this.city;
	}

    /**
     * Getter $district
     * @return {string}
     */
	public get $district(): string {
		return this.district;
	}

    /**
     * Getter $ward
     * @return {string}
     */
	public get $ward(): string {
		return this.ward;
	}

    /**
     * Getter $addressLine
     * @return {string}
     */
	public get $addressLine(): string {
		return this.addressLine;
	}

    /**
     * Getter $historyDisease
     * @return {string}
     */
	public get $historyDisease(): string {
		return this.historyDisease;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $birthday
     * @param {number} value
     */
	public set $birthday(value: number) {
		this.birthday = value;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set $gender(value: string) {
		this.gender = value;
	}

    /**
     * Setter $phoneNumber
     * @param {string} value
     */
	public set $phoneNumber(value: string) {
		this.phoneNumber = value;
	}

    /**
     * Setter $country
     * @param {string} value
     */
	public set $country(value: string) {
		this.country = value;
	}

    /**
     * Setter $city
     * @param {string} value
     */
	public set $city(value: string) {
		this.city = value;
	}

    /**
     * Setter $district
     * @param {string} value
     */
	public set $district(value: string) {
		this.district = value;
	}

    /**
     * Setter $ward
     * @param {string} value
     */
	public set $ward(value: string) {
		this.ward = value;
	}

    /**
     * Setter $addressLine
     * @param {string} value
     */
	public set $addressLine(value: string) {
		this.addressLine = value;
	}

    /**
     * Setter $historyDisease
     * @param {string} value
     */
	public set $historyDisease(value: string) {
		this.historyDisease = value;
	}
	

}