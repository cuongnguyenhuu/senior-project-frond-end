export class doctorRegsiter{

    public username:string;
    public password:string;
    public email:string;
    public phoneNumber:string;
    public name: string;
    public birthday:number;
    public gender:string;
    public country:string;
    public city:string;
    public district:string;
    public ward:string;
    public address:string;
    public specialist:string;
    public experiences:number;
    public certificate:string;


	constructor($username: string, $password: string, $email: string, $phoneNumber: string, $name: string, $birthday: number, $gender: string, $country: string, $city: string, $district: string, $ward: string, $address: string, $specialist: string, $experiences: number, $certificate: string) {
		this.username = $username;
		this.password = $password;
		this.email = $email;
		this.phoneNumber = $phoneNumber;
		this.name = $name;
		this.birthday = $birthday;
		this.gender = $gender;
		this.country = $country;
		this.city = $city;
		this.district = $district;
		this.ward = $ward;
		this.address = $address;
		this.specialist = $specialist;
		this.experiences = $experiences;
		this.certificate = $certificate;
	}


    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $phoneNumber
     * @return {string}
     */
	public get $phoneNumber(): string {
		return this.phoneNumber;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
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
     * Getter $address
     * @return {string}
     */
	public get $address(): string {
		return this.address;
	}

    /**
     * Getter $specialist
     * @return {string}
     */
	public get $specialist(): string {
		return this.specialist;
	}

    /**
     * Getter $experiences
     * @return {number}
     */
	public get $experiences(): number {
		return this.experiences;
	}

    /**
     * Getter $certificate
     * @return {string}
     */
	public get $certificate(): string {
		return this.certificate;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $phoneNumber
     * @param {string} value
     */
	public set $phoneNumber(value: string) {
		this.phoneNumber = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
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
     * Setter $address
     * @param {string} value
     */
	public set $address(value: string) {
		this.address = value;
	}

    /**
     * Setter $specialist
     * @param {string} value
     */
	public set $specialist(value: string) {
		this.specialist = value;
	}

    /**
     * Setter $experiences
     * @param {number} value
     */
	public set $experiences(value: number) {
		this.experiences = value;
	}

    /**
     * Setter $certificate
     * @param {string} value
     */
	public set $certificate(value: string) {
		this.certificate = value;
	}

}