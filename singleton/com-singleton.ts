class DatabaseConnectionSingleton {
    private static _instance: DatabaseConnectionSingleton | null = null;
    private connection: string;

    private constructor() {
        this.connection = "Conectado ao Banco de Dados";
    }

    public static getInstance(): DatabaseConnectionSingleton {
        if (this._instance === null) {
            this._instance = new DatabaseConnectionSingleton();
        }
        return this._instance;
    }

    public getConnection(): string {
        return this.connection;
    }
}


const dba1 = DatabaseConnectionSingleton.getInstance();
const dba2 = DatabaseConnectionSingleton.getInstance();

console.log(dba1.getConnection());  
console.log(dba2.getConnection());  
console.log(dba1 === dba2); 