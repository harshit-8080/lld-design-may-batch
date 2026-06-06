class Notificationn {
    
    sendNormalNotification(message: string): void {
        console.log(`Normal notification: ${message}`);
    }
    sendAlertNotification(message: string, priority: number): void {
        console.log(`Alert notification: ${message} with priority ${priority}`);
    }


    sendNotification(message: string, priority?: number): void {
        if (priority !== undefined) {
           this.sendNormalNotification(message)
        } else {
            this.sendAlertNotification(message,1)
        }
    }


}