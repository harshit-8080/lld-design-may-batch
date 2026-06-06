export class DatabaseConnection {
  static instance: DatabaseConnection = null;

  private constructor() {
    console.log("constructor");
  }

  static getInstance(): DatabaseConnection {
    if (this.instance == null) {
      /// position of thread 1
      this.instance = new DatabaseConnection();
    }
    return this.instance;
  }
}
