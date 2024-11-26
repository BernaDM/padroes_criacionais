class DatabaseConnection {
    private connection: string;

    constructor() {
        this.connection = "Conectado ao Banco de Dados";
    }

    public getConnection(): string {
        return this.connection;
    }
}


const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1.getConnection());  
console.log(db2.getConnection());  
console.log(db1 === db2);  