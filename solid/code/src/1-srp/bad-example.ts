class OrderService {
    createOrder(data: any){
        console.log("create order.....");
    }

    updateOrder(id: number, data: any){
        console.log("update order.....");
    }

    deleteOrder(id: number){
        console.log("delete order.....");
    }

    sendNotification(orderId: number){
        console.log("send notification.....");
    }

    doAnalytics(orderId: number){
        console.log("do analytics.....");
    }

    calculateGST(){
        console.log("calculate GST.....");
    }

    saveToDatabase(orderData: any){
        console.log("save to database.....");
    }
}


class UserService {
    createUser(data: any){
        console.log("create user.....");
    }
    
    updateUser(id: number, data: any){
        console.log("update user.....");
    }
}

class NotificationService {
    sendWelcomeEmail(userId: number){
        console.log("send welcome email.....");
    }
}

class DatabaseService {
    saveToDatabase(userData: any){
        console.log("save to database.....");
    }
}


