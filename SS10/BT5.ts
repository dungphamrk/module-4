class Department{
    public readonly id:number;
    private name:string;
    private employees:string[];
    constructor(id: number, name: string,employees:string[]) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe(): void {
        console.log(`Department ID: ${this.id}`);
        console.log(`Department Name: ${this.name}`);
    }
}